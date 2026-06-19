import json
import re

def clean_desc(desc):
    if not desc:
        return ""
    # Strip HTML tags just in case
    desc = re.sub(r'<[^>]*>', '', desc)
    return desc.strip()

with open("clean_portals.json", "r", encoding="utf-8") as f:
    portals = json.load(f)

# Define known top popular national portals to prioritize them
popular_domains = {
    "index.hr", "24sata.hr", "vecernji.hr", "jutarnji.hr", "tportal.hr", 
    "telegram.hr", "slobodnadalmacija.hr", "n1info.hr", "dnevnik.hr", 
    "net.hr", "dnevno.hr", "novilist.hr", "hrt.hr", "aljazeera.net",
    "rtl.hr", "direktno.hr", "narod.hr", "tjedno.hr", "izdvojeno.hr"
}

# Regional keywords mapping
dalmacija_kws = ["split", "zadar", "šibenik", "dubrovnik", "dalmacij", "otok", "hvar", "brač", "korčula", "makarska", "sinj", "knin", "imotski", "metković", "ploče", "trogir", "solin", "kaštel", "pelješac", "murter", "pag"]
slavonija_kws = ["osijek", "slavonij", "vinkovci", "slavonski brod", "vukovar", "požega", "đakovo", "baranj", "srijem", "našice", "valpovo", "belišće", "nova gradiška", "pleternica", "kutjevo", "ilok", "županja"]
istra_kvarner_kws = ["istra", "rijeka", "pula", "kvarner", "rovinj", "poreč", "opatija", "umag", "labin", "pazin", "krk", "cres", "lošinj", "novigrad", "vodnjan", "buzet"]
zagreb_kws = ["zagreb", "samobor", "velika gorica", "zaprešić", "jastrebarsko", "sveta nedelja", "dugo selo", "vrbovec", "ivanić-grad", "sesvete", "prigorje"]
sjeverna_srednja_kws = ["varaždin", "čakovec", "međimurje", "karlovac", "sisak", "bjelovar", "koprivnica", "zagorje", "krapina", "petrinja", "glina", "kutina", "ogulin", "duga resa", "slunj", "križevci", "ludbreg", "ivanec", "novska", "daruvar", "grubišno polje", "pakrac", "lipik", "slunj", "gospić", "otočac", "senj", "lika", "plav", "korenica"]

categorized = {
    "nacionalni": [],
    "lokalni": {
        "zagreb": [],
        "dalmacija": [],
        "slavonija": [],
        "istra-i-kvarner": [],
        "ostalo": []
    },
    "tematski": {
        "sport": [],
        "tech": [],
        "lifestyle": [],
        "biznis": [],
        "auti": [],
        "ostalo": []
    }
}

for p in portals:
    name = p["name"]
    url = p["url"]
    desc = clean_desc(p["description"])
    cats = p["categories"]
    types = p["types"]
    
    # Extract domain for checking popular
    domain = ""
    if url:
        match = re.search(r'https?://(?:www\.)?([^/]+)', url)
        if match:
            domain = match.group(1).lower()
            
    p_clean = {
        "name": name,
        "url": url,
        "domain": domain,
        "description": desc
    }
    
    # 1. Check if it's popular national
    if domain in popular_domains or name.lower() in ["index", "index.hr", "24sata", "večernji list", "jutarnji list", "tportal", "telegram", "slobodna dalmacija", "n1 info", "dnevnik.hr", "net.hr", "hina"]:
        categorized["nacionalni"].append(p_clean)
        continue
        
    # 2. Check if it is a local/regional portal
    is_local = "lokalne-vijesti" in types or "lokalne-vijesti" in cats or "zupanije" in types or "gradovi" in types or "zupanije" in cats
    
    # Double check description/name keywords to confirm region
    text_to_search = (name + " " + desc + " " + " ".join(cats) + " " + " ".join(types)).lower()
    
    if is_local or any(kw in text_to_search for kw in dalmacija_kws + slavonija_kws + istra_kvarner_kws + zagreb_kws + sjeverna_srednja_kws):
        # Sort into regional bucket
        if any(kw in text_to_search for kw in zagreb_kws):
            categorized["lokalni"]["zagreb"].append(p_clean)
        elif any(kw in text_to_search for kw in dalmacija_kws):
            categorized["lokalni"]["dalmacija"].append(p_clean)
        elif any(kw in text_to_search for kw in slavonija_kws):
            categorized["lokalni"]["slavonija"].append(p_clean)
        elif any(kw in text_to_search for kw in istra_kvarner_kws):
            categorized["lokalni"]["istra-i-kvarner"].append(p_clean)
        else:
            categorized["lokalni"]["ostalo"].append(p_clean)
            
    # 3. Otherwise, check thematic portal
    else:
        # Sort into theme bucket
        if "sport" in cats or "sport" in types:
            categorized["tematski"]["sport"].append(p_clean)
        elif any(c in cats or c in types for c in ["informatika", "tech", "web-dizajn-i-razvoj", "mobiteli"]):
            categorized["tematski"]["tech"].append(p_clean)
        elif any(c in cats or c in types for c in ["auto-moto", "automobili"]):
            categorized["tematski"]["auti"].append(p_clean)
        elif any(c in cats or c in types for c in ["biznis-financije", "posao"]):
            categorized["tematski"]["biznis"].append(p_clean)
        elif any(c in cats or c in types for c in ["kultura", "lifestyle", "zabava", "moda", "glazba", "film", "gastronomija", "ljepota", "zdravlje"]):
            categorized["tematski"]["lifestyle"].append(p_clean)
        else:
            categorized["tematski"]["ostalo"].append(p_clean)

# Print stats
print("--- Categorization Stats ---")
print(f"Nacionalni / Popularni: {len(categorized['nacionalni'])}")
print("Lokalni:")
print(f"  Zagreb: {len(categorized['lokalni']['zagreb'])}")
print(f"  Dalmacija: {len(categorized['lokalni']['dalmacija'])}")
print(f"  Slavonija: {len(categorized['lokalni']['slavonija'])}")
print(f"  Istra i Kvarner: {len(categorized['lokalni']['istra-i-kvarner'])}")
print(f"  Ostale regije: {len(categorized['lokalni']['ostalo'])}")
print("Tematski:")
print(f"  Sport: {len(categorized['tematski']['sport'])}")
print(f"  Tehnologija: {len(categorized['tematski']['tech'])}")
print(f"  Lifestyle & Zabava: {len(categorized['tematski']['lifestyle'])}")
print(f"  Biznis & Posao: {len(categorized['tematski']['biznis'])}")
print(f"  Auti / Auto-moto: {len(categorized['tematski']['auti'])}")
print(f"  Ostalo / Korisno: {len(categorized['tematski']['ostalo'])}")

# Save categorized portals
with open("categorized_portals.json", "w", encoding="utf-8") as f:
    json.dump(categorized, f, ensure_ascii=False, indent=2)

print("\nSaved categorized portals to categorized_portals.json")
