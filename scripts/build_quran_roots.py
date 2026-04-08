import json
from collections import defaultdict

# ─────────────────────────────────────
# Load morphology file
# ─────────────────────────────────────
FILE = "quran-morphology.txt"

# Database structure
root_db = {}

def ensure_root(root):
    if root not in root_db:
        root_db[root] = {
            "root": root,
            "total": 0,
            "forms": defaultdict(int),
            "lemmas": set(),
            "verbForms": defaultdict(int),
            "occurrences": []
        }

# ─────────────────────────────────────
# Parse each line
# ─────────────────────────────────────
with open(FILE, "r", encoding="utf-8") as f:
    for line in f:
        line = line.strip()
        if not line:
            continue

        # Example line:
        # 110:3:4:2    ٱسْتَغْفِرْ	V	IMPV|VF:10|ROOT:غفر|LEM:اسْتَغْفَرَ|2MS

        parts = line.split("\t")

        location = parts[0]                # 110:3:4:2
        surface = parts[1]                 # ٱسْتَغْفِرْ
        pos = parts[2]                     # V
        tags = parts[3]                    # IMPV|VF:10|ROOT:غفر|LEM:اسْتَغْفَرَ|2MS

        # Parse surah/ayah
        surah, ayah, *_ = location.split(":")
        surah = int(surah)
        ayah = int(ayah)

        # Extract root, lemma, verb form
        tag_parts = tags.split("|")
        root = None
        lemma = None
        verb_form = None

        for t in tag_parts:
            if t.startswith("ROOT:"):
                root = t[5:]
            elif t.startswith("LEM:"):
                lemma = t[4:]
            elif t.startswith("VF:"):
                verb_form = t[3:]

        # If no root, skip
        if not root:
            continue

        ensure_root(root)

        # Update counts
        root_db[root]["total"] += 1
        root_db[root]["forms"][surface] += 1

        if lemma:
            root_db[root]["lemmas"].add(lemma)

        if verb_form:
            root_db[root]["verbForms"][verb_form] += 1

        # Record occurrence
        root_db[root]["occurrences"].append({
            "surface": surface,
            "lemma": lemma,
            "pos": pos,
            "verbForm": verb_form,
            "surah": surah,
            "ayah": ayah
        })

# Convert sets to lists for JSON
for r in root_db:
    root_db[r]["lemmas"] = list(root_db[r]["lemmas"])
    root_db[r]["forms"] = dict(root_db[r]["forms"])
    root_db[r]["verbForms"] = dict(root_db[r]["verbForms"])

# Save output
with open("built_quran_roots.json", "w", encoding="utf-8") as out:
    json.dump(root_db, out, ensure_ascii=False, indent=2)

print("Done. Output saved as built_quran_roots.json")
