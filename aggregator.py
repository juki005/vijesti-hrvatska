#!/usr/bin/env python3
"""
Klik.hr Clone - Croatian News Aggregator Backend Worker
Fetches latest RSS feeds from Croatian media portals, parses items,
and upserts them into a Supabase database table.

Database Schema Required:
-------------------------
CREATE TABLE news_feeds (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    link TEXT UNIQUE NOT NULL,
    source VARCHAR(100) NOT NULL,
    image_url TEXT,
    description TEXT,
    published_at TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS and create public select policies as needed:
ALTER TABLE news_feeds ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read Access" ON news_feeds FOR SELECT USING (true);
"""

import os
import re
import uuid
import logging
import json
from datetime import datetime, timezone
import time
import requests
import feedparser
from dotenv import load_dotenv
from supabase import create_client, Client

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.StreamHandler()
    ]
)

# Load environment variables
load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

RSS_FEEDS = {
    "Index.hr": "https://www.index.hr/rss",
    "24sata": "https://www.24sata.hr/feeds/najnovije.xml",
    "Večernji list": "https://www.vecernji.hr/feeds/",
    "Tportal": "https://www.tportal.hr/rss",
    "Dalmacija Danas": "https://www.dalmacijadanas.hr/feed/",
    "Slobodna Dalmacija": "https://slobodnadalmacija.hr/feed/",
    "SiB.hr": "https://sib.net.hr/feed/",
    "Fiuman.hr": "https://fiuman.hr/feed/",
    "Regional Express": "http://www.regionalexpress.hr/rss",
    "Zagreb.info": "https://www.zagreb.info/feed/",
    "Sportnet.hr": "https://sportnet.hr/rss/",
    "Bug.hr": "https://www.bug.hr/rss",
    "Poslovni dnevnik": "https://www.poslovni.hr/feed",
    "Autoportal.hr": "https://autoportal.hr/feed/",
    "Journal.hr": "https://www.journal.hr/feed/",
    "Punkufer.hr": "https://punkufer.dnevnik.hr/rss"
}

def clean_html(raw_html: str) -> str:
    """Strips HTML tags and normalizes whitespace."""
    if not raw_html:
        return ""
    clean_text = re.sub(r'<[^>]*>', ' ', raw_html)
    clean_text = ' '.join(clean_text.split())
    return clean_text

def extract_image_url(entry, raw_description: str) -> str:
    """Attempts to extract high-resolution image URL from feed item fields."""
    # 1. Check media_content
    if 'media_content' in entry and entry.media_content:
        for media in entry.media_content:
            if 'url' in media:
                return media['url']
                
    # 2. Check media_thumbnail
    if 'media_thumbnail' in entry and entry.media_thumbnail:
        for media in entry.media_thumbnail:
            if 'url' in media:
                return media['url']

    # 3. Check enclosures
    if 'enclosures' in entry and entry.enclosures:
        for enclosure in entry.enclosures:
            if enclosure.get('type', '').startswith('image/') and enclosure.get('href'):
                return enclosure['href']
            elif enclosure.get('url'):  # Fallback check
                return enclosure['url']

    # 4. Search in description / summary html
    if raw_description:
        match = re.search(r'<img[^>]+src=["\']([^"\']+)["\']', raw_description)
        if match:
            return match.group(1)

    return None

def parse_feed_entry(entry, source_name: str) -> dict:
    """Parses a single RSS entry into our database schema structure."""
    title = entry.get("title", "").strip()
    link = entry.get("link", "").strip()
    
    if not title or not link:
        return None

    # Handle publication date conversion
    published_at = None
    parsed_date = entry.get("published_parsed") or entry.get("updated_parsed")
    
    if parsed_date:
        # Convert feedparser time struct to timezone-aware UTC datetime
        published_at = datetime(*parsed_date[:6], tzinfo=timezone.utc).isoformat()
    else:
        published_at = datetime.now(timezone.utc).isoformat()

    raw_description = entry.get("summary", "") or entry.get("description", "")
    image_url = extract_image_url(entry, raw_description)
    description = clean_html(raw_description)

    # Truncate description to 180 chars max for database snippets
    if len(description) > 180:
        description = description[:177] + "..."

    # Generate deterministic UUID based on link URL to prevent client duplicates
    # and support ID matching if needed.
    article_id = str(uuid.uuid5(uuid.NAMESPACE_URL, link))

    return {
        "id": article_id,
        "title": title,
        "link": link,
        "source": source_name,
        "image_url": image_url,
        "description": description,
        "published_at": published_at
    }

def fetch_and_parse_feeds() -> list:
    """Fetches all RSS streams and parses their entries."""
    all_articles = []
    
    for source_name, url in RSS_FEEDS.items():
        logging.info(f"Dohvaćam feed za {source_name} sa: {url}")
        try:
            # Add user agent headers to look like a browser
            headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
            response = requests.get(url, headers=headers, timeout=15)
            response.raise_for_status()

            # Parse XML content
            feed = feedparser.parse(response.content)
            
            source_articles = []
            for entry in feed.entries:
                article = parse_feed_entry(entry, source_name)
                if article:
                    source_articles.append(article)
            
            logging.info(f"Uspješno učitano {len(source_articles)} vijesti iz {source_name}")
            all_articles.extend(source_articles)
        except Exception as e:
            logging.error(f"Greška prilikom učitavanja za {source_name}: {e}")

    return all_articles

def save_to_supabase(articles: list):
    """Upserts list of articles into Supabase table."""
    if not SUPABASE_URL or not SUPABASE_KEY:
        logging.warning("Supabase URL ili ključ nisu definirani. Preskačem slanje u bazu.")
        logging.info(f"Primjer prve učitane vijesti: {articles[0] if articles else 'Nema vijesti'}")
        return

    try:
        supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
        
        # Upsert logic to handle duplicate URLs based on unique constraint
        # supabase-py upsert automatically updates or inserts based on primary key (id) 
        # or unique indices when matching rows. Since id is deterministic (uuid5 of link),
        # matching IDs will be updated and new IDs inserted.
        logging.info(f"Sinkroniziram {len(articles)} vijesti s bazom podataka...")
        
        # Batch insert to avoid rate limits
        batch_size = 50
        for i in range(0, len(articles), batch_size):
            batch = articles[i:i + batch_size]
            response = supabase.table("news_feeds").upsert(batch).execute()
            # In supabase v2, response.data has the upserted data
            logging.info(f"Sinkronizirano {len(batch)} vijesti (Batch {i//batch_size + 1})")

        logging.info("Sinkronizacija s bazom uspješno završena.")
    except Exception as e:
        logging.error(f"Greška prilikom sinkronizacije s bazom: {e}")

def prune_old_articles():
    """Deletes articles older than 15 days from Supabase table."""
    if not SUPABASE_URL or not SUPABASE_KEY:
        return
        
    try:
        supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
        logging.info("Čistim bazu podataka: brišem vijesti starije od 15 dana...")
        
        from datetime import timedelta
        threshold = (datetime.now(timezone.utc) - timedelta(days=15)).isoformat()
        
        response = supabase.table("news_feeds").delete().lt("published_at", threshold).execute()
        
        deleted_count = len(response.data) if response and hasattr(response, "data") and response.data else 0
        logging.info(f"Čišćenje završeno. Obrisano {deleted_count} starih vijesti.")
    except Exception as e:
        logging.error(f"Greška prilikom brisanja starih vijesti: {e}")

def main():
    start_time = time.time()
    articles = fetch_and_parse_feeds()
    if articles:
        # Sort by publication date
        articles.sort(key=lambda x: x["published_at"], reverse=True)
        
        # Save to static JSON file (top 800 articles)
        try:
            logging.info("Spremam top 800 vijesti u articles.json...")
            with open("articles.json", "w", encoding="utf-8") as f:
                json.dump(articles[:800], f, ensure_ascii=False, indent=2)
            logging.info("Uspješno spremljeno u articles.json.")
        except Exception as json_err:
            logging.error(f"Greška prilikom spremanja u articles.json: {json_err}")
            
        save_to_supabase(articles)
        prune_old_articles()
    else:
        logging.warning("Nema vijesti za sinkronizaciju.")
        
    logging.info(f"Ukupno vrijeme izvršavanja: {time.time() - start_time:.2f} sekundi")

if __name__ == "__main__":
    main()
