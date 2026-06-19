import json

# Load the categorized portals data
with open("categorized_portals.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# Format as JavaScript declaration
js_data = f"const CATEGORIZED_PORTALS = {json.dumps(data, ensure_ascii=False, indent=4)};\n"

# Load app.js
with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

# Let's find where to insert. We'll insert it right before "// Category configurations"
target_str = "// Category configurations"
if target_str in content:
    parts = content.split(target_str)
    new_content = parts[0] + js_data + "\n" + target_str + parts[1]
    
    with open("app.js", "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Successfully injected CATEGORIZED_PORTALS into app.js!")
else:
    print("Error: Target comment not found in app.js")
