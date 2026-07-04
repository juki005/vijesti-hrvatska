import os
import re
import json

def get_schema(key, seo):
    title = seo.get("title", "")
    description = seo.get("description", "")
    
    if key == "index":
        # Homepage gets WebSite + Organization schema
        schema = {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "WebSite",
                    "@id": "https://www.vijesti-hrvatska.com/#website",
                    "url": "https://www.vijesti-hrvatska.com/",
                    "name": "Vijesti Hrvatska",
                    "alternateName": "Hrvatski Medijski Agregator",
                    "description": description,
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://www.vijesti-hrvatska.com/?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                },
                {
                    "@type": "Organization",
                    "@id": "https://www.vijesti-hrvatska.com/#organization",
                    "name": "Vijesti Hrvatska",
                    "url": "https://www.vijesti-hrvatska.com/",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.vijesti-hrvatska.com/favicon.svg"
                    },
                    "email": "kontakt@vijesti-hrvatska.com",
                    "description": "Nekomercijalni medijski agregator vijesti u Republici Hrvatskoj."
                }
            ]
        }
    else:
        # Category page gets CollectionPage schema
        schema = {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": title,
            "description": description,
            "url": f"https://www.vijesti-hrvatska.com/{key}",
            "publisher": {
                "@type": "Organization",
                "@id": "https://www.vijesti-hrvatska.com/#organization"
            }
        }
    
    return json.dumps(schema, ensure_ascii=False, indent=2)

def main():
    cwd = os.path.dirname(os.path.abspath(__file__))
    index_path = os.path.join(cwd, "index.html")
    config_path = os.path.join(cwd, "seo_config.json")
    
    # Read index.html as the base layout template
    with open(index_path, 'r', encoding='utf-8') as f:
        template = f.read()
        
    # Read seo_config.json
    with open(config_path, 'r', encoding='utf-8') as f:
        seo_config = json.load(f)
        
    for key, seo in seo_config.items():
        title = seo["title"]
        description = seo["description"]
        heading = seo["heading"]
        
        # Calculate canonical URL
        if key == "index":
            canonical_url = "https://www.vijesti-hrvatska.com/"
            file_name = "index.html"
        else:
            canonical_url = f"https://www.vijesti-hrvatska.com/{key}"
            file_name = f"{key}.html"
            
        dest_path = os.path.join(cwd, file_name)
        
        # Modify the template content for this page
        content = template
        
        # Regex replacements for title, description, canonical, OG, Twitter and H1
        content = re.sub(r'<title>.*?</title>', f'<title>{title}</title>', content)
        content = re.sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{description}">', content)
        content = re.sub(r'<link id="canonical-link" rel="canonical" href="[^"]*">', f'<link id="canonical-link" rel="canonical" href="{canonical_url}">', content)
        
        content = re.sub(r'<meta id="og-url" property="og:url" content="[^"]*">', f'<meta id="og-url" property="og:url" content="{canonical_url}">', content)
        content = re.sub(r'<meta id="og-title" property="og:title" content="[^"]*">', f'<meta id="og-title" property="og:title" content="{title}">', content)
        content = re.sub(r'<meta id="og-description" property="og:description" content="[^"]*">', f'<meta id="og-description" property="og:description" content="{description}">', content)
        
        content = re.sub(r'<meta id="twitter-url" name="twitter:url" content="[^"]*">', f'<meta id="twitter-url" name="twitter:url" content="{canonical_url}">', content)
        content = re.sub(r'<meta id="twitter-title" name="twitter:title" content="[^"]*">', f'<meta id="twitter-title" name="twitter:title" content="{title}">', content)
        content = re.sub(r'<meta id="twitter-description" name="twitter:description" content="[^"]*">', f'<meta id="twitter-description" name="twitter:description" content="{description}">', content)
        
        content = re.sub(r'<h1 id="page-main-heading" class="sr-only">.*?</h1>', f'<h1 id="page-main-heading" class="sr-only">{heading}</h1>', content)
        
        # Update cache-buster version for app.js
        content = re.sub(r'app\.js(?:\?v=[\d\.]+)?', 'app.js?v=1.1.8', content)
        
        # Replace SEO text placeholder with the page-specific text using regex
        seo_text = seo.get("seo_text", "")
        content = re.sub(r'<p id="seo-description-text">[\s\S]*?</p>', f'<p id="seo-description-text">{seo_text}</p>', content)
        
        # Replace Structured Data Schema
        schema_json = get_schema(key, seo)
        content = re.sub(r'<script type="application/ld\+json">[\s\S]*?</script>', f'<script type="application/ld+json">\n{schema_json}\n</script>', content)
        
        # Write compile results to destination file
        with open(dest_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
        print(f"Generated {file_name} with custom SEO, schemas, and version v=1.1.8")

if __name__ == "__main__":
    main()
