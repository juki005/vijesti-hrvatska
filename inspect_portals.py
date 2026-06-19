import re
import sys

input_file = r"C:\Users\imlad\.gemini\antigravity\brain\49e534a0-65a3-4451-9487-6a8a7cee4848\.system_generated\steps\758\content.md"
output_file = r"C:\Users\imlad\Desktop\Github\new_klik\scratch_portals.txt"

with open(input_file, "r", encoding="utf-8") as f:
    text = f.read()

# Find all links of the form https://sviportali.com.hr/portali/[name]/
# Let's write a regex that matches exactly that.
urls = re.findall(r'https://sviportali.com.hr/portali/([^/"]+)/?', text)

unique_urls = sorted(list(set(urls)))

with open(output_file, "w", encoding="utf-8") as f_out:
    for u in unique_urls:
        f_out.write(u + "\n")

print(f"Done. Found {len(unique_urls)} unique subpaths.")
