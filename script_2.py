import json
from pathlib import Path

INPUT_JSON = "grouped_quran_roots.json"

def count_roots_and_derivatives(json_file):
    data = json.loads(Path(json_file).read_text(encoding="utf-8"))
    total_roots = len(data)
    total_derivatives = sum(len(root.get("derivatives", {})) for root in data.values())

    print(f"Total roots: {total_roots}")
    print(f"Total derivatives: {total_derivatives}")

if __name__ == "__main__":
    count_roots_and_derivatives(INPUT_JSON)
