import re
from html.parser import HTMLParser

file_path = r"C:\Users\imlad\.gemini\antigravity\brain\49e534a0-65a3-4451-9487-6a8a7cee4848\.system_generated\steps\758\content.md"

with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

# Let's search using simple regular expressions for elements that look like cards.
# Often there's a card link or structure. Let's find tags like:
# <h4 ...>...</h4> or <a class="..." href="...">...</a>
# Let's see some patterns:
# <a href="https://sviportali.com.hr/portali/dnevne-vijesti/..."
# Or let's just find all URLs containing "/portali/" and extract their text.
pattern = r'href="(https://sviportali.com.hr/portali/[^"]+)"'
urls = re.findall(pattern, text)
print(f"Found {len(urls)} URLs inside /portali/ namespace")

# Let's clean and print the unique ones:
unique_urls = sorted(list(set(urls)))
for u in unique_urls:
    print(u)
