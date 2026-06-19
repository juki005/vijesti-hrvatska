import re

input_file = r"C:\Users\imlad\.gemini\antigravity\brain\49e534a0-65a3-4451-9487-6a8a7cee4848\.system_generated\steps\758\content.md"

with open(input_file, "r", encoding="utf-8") as f:
    text = f.read()

# Let's find where "sibenik-in" occurs and print 500 characters before and after it.
matches = [m.start() for m in re.finditer("sibenik-in", text)]
print(f"Found {len(matches)} occurrences of 'sibenik-in'.")

for idx, pos in enumerate(matches):
    start = max(0, pos - 400)
    end = min(len(text), pos + 600)
    print(f"\n--- Occurrence {idx+1} ---")
    print(text[start:end])
