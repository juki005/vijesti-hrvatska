import requests
import json
import time

base_url = "https://sviportali.com.hr/wp-json/wp/v2/portali"
page = 1
per_page = 100
all_portals = []

print("Starting to fetch portals from API...")
while True:
    url = f"{base_url}?per_page={per_page}&page={page}"
    print(f"Fetching page {page}...")
    try:
        response = requests.get(url, headers={"User-Agent": "Mozilla/5.0"}, timeout=20)
        if response.status_code == 400 or response.status_code == 404:
            # Out of pages
            print("Finished fetching all pages.")
            break
        response.raise_for_status()
        data = response.json()
        if not data:
            print("No data returned, stopping.")
            break
        all_portals.extend(data)
        print(f"Fetched {len(data)} portals. Total so far: {len(all_portals)}")
        page += 1
        time.sleep(0.5) # Be polite
    except Exception as e:
        print(f"Error on page {page}: {e}")
        break

# Let's save the raw data first to a temporary file
with open("raw_portals.json", "w", encoding="utf-8") as f:
    json.dump(all_portals, f, ensure_ascii=False, indent=2)

print(f"Saved {len(all_portals)} raw portals to raw_portals.json")

# Now let's analyze and extract clean records
clean_portals = []
rss_count = 0
categories = set()
types = set()

for item in all_portals:
    title = item.get("title", {}).get("rendered", "").strip()
    slug = item.get("slug", "")
    meta = item.get("meta", {})
    portal_url = meta.get("portal_url", "").strip()
    rss_feed = meta.get("portal_rss_feed", "").strip()
    short_desc = meta.get("portal_kratki_opis", "").strip()
    
    # Extract categories/types from class_list
    class_list = item.get("class_list", [])
    item_categories = []
    item_types = []
    for cls in class_list:
        if cls.startswith("portal_kategorija-"):
            item_categories.append(cls.replace("portal_kategorija-", ""))
        elif cls.startswith("portal_tip-"):
            item_types.append(cls.replace("portal_tip-", ""))
            
    categories.update(item_categories)
    types.update(item_types)
    
    if rss_feed:
        rss_count += 1
        
    clean_portals.append({
        "name": title,
        "slug": slug,
        "url": portal_url,
        "rss": rss_feed,
        "description": short_desc,
        "categories": item_categories,
        "types": item_types
    })

# Save clean portals
with open("clean_portals.json", "w", encoding="utf-8") as f:
    json.dump(clean_portals, f, ensure_ascii=False, indent=2)

print("\n--- Summary ---")
print(f"Total processed: {len(clean_portals)}")
print(f"Portals with RSS feed: {rss_count}")
print(f"Unique categories found: {len(categories)}")
print(f"Unique types found: {len(types)}")
print(f"Categories list: {sorted(list(categories))}")
