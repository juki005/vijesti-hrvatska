import re

file_path = r"C:\Users\imlad\.gemini\antigravity\brain\49e534a0-65a3-4451-9487-6a8a7cee4848\.system_generated\steps\744\content.md"

with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

# Let's search for "portali" or "portal" links
all_links = re.findall(r'href="([^"]+)"', text)
unique_links = sorted(list(set(all_links)))

print("Links containing 'portali' or 'portal':")
for l in unique_links:
    if "wp-content" not in l and "wp-includes" not in l:
        if "portal" in l or "vijesti" in l or "sport" in l:
            print(l)
