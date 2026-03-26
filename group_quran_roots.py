import json
import re
from collections import defaultdict

INPUT_FILE = "quran-morphology.txt"
OUTPUT_FILE = "grouped_quran_roots.json"

# Regex to extract ROOT, LEM, and other optional fields
FIELD_RE = re.compile(r"(ROOT|LEM):([^|]+)")

# Regex to extract verb form (VF) if present
VF_RE = re.compile(r"VF:(\d+)")

def parse_line(line):
    """
    Parses a single line of quran-morphology.txt.
    Example:
    110:3:4:2    ٱسْتَغْفِرْ    V    IMPV|VF:10|ROOT:غفر|LEM:اسْتَغْفَرَ|2MS
    """
    try:
        ref, word, pos, fields = line.strip().split("\t")
    except ValueError:
        return None

    surah, ayah, *_ = map(int, ref.split(":"))

    # Extract ROOT and LEM
    matches = dict(FIELD_RE.findall(fields))
    root = matches.get("ROOT")
    lem = matches.get("LEM")

    # Extract verb form (VF) if present
    VF_match = VF_RE.search(fields)
    verbform = VF_match.group(1) if VF_match else None

    # Store all remaining features for potential future use
    other_features = [f for f in fields.split("|") if ":" not in f]

    return {
        "surah": surah,
        "ayah": ayah,
        "word": word,
        "pos": pos,
        "root": root,
        "lemma": lem,
        "verbform": verbform,
        "features": other_features  # e.g., IMPV, 2MS, MOOD:IND
    }

def main():
    root_dict = defaultdict(lambda: {
        "root": "",
        "meaning": "",  # optional
        "total_occurrences": 0,
        "derivatives": defaultdict(lambda: {
            "word": "",
            "occurrences": 0,
            "pos": "",
            "verbform": None,
            "features": [],
            "meaning": "",  # optional
            "locations": []
        })
    })

    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        for line in f:
            entry = parse_line(line)
            if not entry or not entry["root"]:
                continue

            root = entry["root"]
            word = entry["word"]

            # Initialize root if first seen
            if root_dict[root]["root"] == "":
                root_dict[root]["root"] = root

            # Update total occurrences
            root_dict[root]["total_occurrences"] += 1

            # Update derivative record
            d = root_dict[root]["derivatives"][word]
            d["word"] = word
            d["occurrences"] += 1
            d["pos"] = entry["pos"]
            d["verbform"] = entry["verbform"]
            d["features"] = entry["features"]
            d["locations"].append({
                "surah": entry["surah"],
                "ayah": entry["ayah"]
            })

    # Convert defaultdict → normal dicts
    final_output = {
        root: {
            "root": data["root"],
            "meaning": data["meaning"],
            "total_occurrences": data["total_occurrences"],
            "derivatives": dict(data["derivatives"])
        }
        for root, data in root_dict.items()
    }

    # Save JSON
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(final_output, f, indent=2, ensure_ascii=False)

    print(f"✅ Successfully generated {OUTPUT_FILE}")
    print(f"Total roots processed: {len(final_output)}")

if __name__ == "__main__":
    main()
