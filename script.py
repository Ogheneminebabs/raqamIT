import json
import re
from collections import defaultdict
from pathlib import Path

# -------------------------------
# Files
# -------------------------------
INPUT_FILE = "quran-morphology.txt"
OUTPUT_JSON = "grouped_quran_roots.json"
OUTPUT_TS = "quran_roots.data.ts"

# -------------------------------
# Regexes
# -------------------------------
FIELD_RE = re.compile(r"(ROOT|LEM):([^|]+)")
VF_RE = re.compile(r"VF:(\d+)")

# -------------------------------
# Helpers
# -------------------------------
def parse_line(line):
    """Parse a single line of quran-morphology.txt"""
    try:
        ref, word, pos, fields = line.strip().split("\t")
    except ValueError:
        return None

    surah, ayah, *_ = map(int, ref.split(":"))

    matches = dict(FIELD_RE.findall(fields))
    root = matches.get("ROOT")
    lemma = matches.get("LEM")

    # Extract verb form
    vf_match = VF_RE.search(fields)
    verbform = vf_match.group(1) if vf_match else None

    # Other features (excluding ROOT/LEM/VF)
    other_features = [f for f in fields.split("|") if ":" not in f]

    return {
        "surah": surah,
        "ayah": ayah,
        "word": word,
        "pos": pos,
        "root": root,
        "lemma": lemma,
        "verbform": verbform,
        "features": other_features,
    }

def chunk_list(lst, n):
    """Split list into chunks of size n"""
    for i in range(0, len(lst), n):
        yield lst[i:i+n]

def dedupe_list_of_dicts(items):
    """Remove duplicates from a list of dicts"""
    seen = set()
    deduped = []
    for item in items:
        key = tuple(sorted(item.items()))
        if key not in seen:
            seen.add(key)
            deduped.append(item)
    return deduped

# -------------------------------
# Process Quran morphology
# -------------------------------
def build_root_data():
    root_dict = defaultdict(lambda: {
        "root": "",
        "meaning": "",
        "total_occurrences": 0,
        "derivatives": defaultdict(lambda: {
            "word": "",
            "occurrences": 0,
            "pos": "",
            "verbform": None,
            "features": [],
            "meaning": "",
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

            if root_dict[root]["root"] == "":
                root_dict[root]["root"] = root

            root_dict[root]["total_occurrences"] += 1

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

    # Convert inner defaultdict to normal dict
    for root, data in root_dict.items():
        data["derivatives"] = dict(data["derivatives"])

    return dict(root_dict)

# -------------------------------
# Generate TypeScript
# -------------------------------
def convert_to_ts(root_data):
    core_roots = sorted(root_data.keys())

    # ROOT_DICTIONARY: simple summary
    root_dictionary = {}
    # ROOT_DETAIL: full derivatives with POS/VF/features
    root_detail = {}

    for root, data in root_data.items():
        derivatives_words = list(data["derivatives"].keys())
        root_dictionary[root] = {
            "meaning": data.get("meaning", ""),
            "occurrences": data.get("total_occurrences", 0),
            "derivatives": derivatives_words
        }

        # Full derivative objects
        root_detail[root] = {
            "meaning": data.get("meaning", ""),
            "total_occurrences": data.get("total_occurrences", 0),
            "derivatives": list(data["derivatives"].values())
        }

    ts_output = []

    # -------------------
    # CORE_QURAN_ROOTS
    # -------------------
    ts_output.append("export const CORE_QURAN_ROOTS: string[] = [")
    for chunk in chunk_list(core_roots, 30):
        line = ", ".join(f'"{r}"' for r in chunk)
        ts_output.append(f"  {line},")
    ts_output.append("];\n")

    # -------------------
    # ROOT_DICTIONARY (Record<string, {...}>)
    # -------------------
    ts_output.append(
        "export const ROOT_DICTIONARY: Record<\n"
        "  string,\n"
        "  { meaning: string; occurrences?: number; derivatives?: string[] }\n"
        "> = {"
    )
    for root, data in root_dictionary.items():
        entry_js = json.dumps(data, ensure_ascii=False)
        entry_js = re.sub(r"\s+", " ", entry_js)
        ts_output.append(f'  "{root}": {entry_js},')
    ts_output.append("};\n")

    # -------------------
    # ROOT_DETAIL (full derivatives with POS/VF/features)
    # -------------------
    ts_output.append("export const ROOT_DETAIL = " + json.dumps(root_detail, ensure_ascii=False, indent=2) + ";")

    return "\n".join(ts_output)

# -------------------------------
# Main
# -------------------------------
def main():
    root_data = build_root_data()

    # Save JSON
    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(root_data, f, ensure_ascii=False, indent=2)

    # Save TS
    ts_content = convert_to_ts(root_data)
    with open(OUTPUT_TS, "w", encoding="utf-8") as f:
        f.write(ts_content)

    print(f"✅ Generated JSON: {OUTPUT_JSON}")
    print(f"✅ Generated TS: {OUTPUT_TS}")

if __name__ == "__main__":
    main()
