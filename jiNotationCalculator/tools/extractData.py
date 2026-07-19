"""Generate src/data.js and src/font.b64 from the workbook and the Sagittal Bravura.

The boundary, comma and key tables are lifted verbatim out of the spreadsheet;
nothing here re-derives them. Run dumpWorkbook.py first if the workbook changes.
"""
import base64
import json
import re
import subprocess
import sys

from paths import BRAVURA, CODEPOINTS, DATA_JS, FONT_B64, SRC, WORKBOOK_DUMP

info = json.load(WORKBOOK_DUMP.open(encoding="utf-8"))
sheets = {s["title"]: s for s in info["sheets"]}


def grid(sheet):
    return {c["a"]: c for c in sheet["cells"]}


ui, calc = grid(sheets["UI"]), grid(sheets["Calculator"])
bnd, com, key = grid(sheets["Boundaries"]), grid(sheets["Commas"]), grid(sheets["Key"])


def val(g, a):
    c = g.get(a)
    if c is None:
        return None
    return c["v"] if "v" in c else c.get("cached")


fifths_string = val(calc, "A1")
assert isinstance(fifths_string, str) and len(fifths_string) == 105, len(fifths_string)

# Noteheads: the second string literal of the Calculator's C6..C12 formulas.
noteheads = {}
for row in range(6, 13):
    m = re.match(r'^=IF\(ABS\(AG\$8-A\d+\)>2\.000001\*AD\$2,"","(.*)"\)$',
                 calc[f"C{row}"]["f"])
    letter = re.search(r'"([A-G])"\)$', calc[f"B{row}"]["f"]).group(1)
    noteheads[letter] = m.group(1)
assert sorted(noteheads) == list("ABCDEFG"), noteheads

LEVELS = [("medium", "B", "C", "W", "D2"), ("high", "F", "G", "AD", "H2"),
          ("ultra", "J", "K", "AK", "L2"), ("extreme", "N", "O", "AR", "P2")]

bounds = {}
for name, bound_col, key_col, _, _ in LEVELS:
    rows = []
    for r in range(5, 155):
        b, k = val(bnd, f"{bound_col}{r}"), val(bnd, f"{key_col}{r}")
        if b is None or b == "":
            assert k in (None, ""), (name, r)
            continue
        # a bound with no key is the terminal cap row; Excel reads it as 0
        rows.append([float(b), 0 if k in (None, "") else int(k)])
    assert rows == sorted(rows), name
    bounds[name] = rows

commas = {}
for r in range(2, 151):
    k = val(com, f"A{r}")
    if k is None:
        continue
    commas[int(float(k))] = {"name": val(com, f"B{r}"), "den": val(com, f"C{r}"),
                             "num": val(com, f"D{r}"),
                             "cents": float(val(com, f"E{r}"))}

key_table = {}
for r in range(2, 983):
    k = val(key, f"A{r}")
    if k is None:
        continue
    key_table[int(float(k))] = [
        "" if val(key, f"{c}{r}") is None else str(val(key, f"{c}{r}")) for c in "BCDE"]

levels = [{
    "level": name,
    "label": val(ui, f"{ui_col}2"),
    "symbolSet": val(ui, f"{ui_col}3"),
    "limit": int(val(ui, f"{ui_col}4")),
    "resolution": val(ui, f"{ui_col}5"),
    "diacritics": val(ui, f"{ui_col}6"),
    "steps": int(val(bnd, steps_cell)),
} for name, _, _, ui_col, steps_cell in LEVELS]

primes = [int(val(ui, f"{chr(ord('C') + i)}7")) for i in range(17)]
assert primes == [3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61]

data = {"fifthsString": fifths_string, "noteheads": noteheads, "bounds": bounds,
        "commas": commas, "key": key_table, "levels": levels, "primes": primes}

with DATA_JS.open("w", encoding="utf-8") as fh:
    fh.write("const SAG_DATA = ")
    json.dump(data, fh, ensure_ascii=False)
    fh.write(';\nif (typeof module !== "undefined") module.exports = SAG_DATA;\n')

# --- font subset: only the glyphs the tables and the UI copy actually use ---
codepoints = set()
for row in key_table.values():
    for s in row[2:]:
        codepoints.update(ord(ch) for ch in s)
for s in noteheads.values():
    codepoints.update(ord(ch) for ch in s)
codepoints.discard(32)
codepoints.update([0xE260, 0xE262, 0xE263, 0xE264])   # accidentals used in the UI copy
CODEPOINTS.write_text(",".join(f"U+{c:04X}" for c in sorted(codepoints)))

subset = SRC / "bravuraSubset.woff2"
subprocess.run([sys.executable, "-m", "fontTools.subset", str(BRAVURA),
                f"--unicodes-file={CODEPOINTS}", "--flavor=woff2",
                f"--output-file={subset}", "--no-layout-closure",
                "--drop-tables+=meta"], check=True)
FONT_B64.write_text(base64.b64encode(subset.read_bytes()).decode())

print(f"data.js {DATA_JS.stat().st_size // 1024} KB, "
      f"font subset {subset.stat().st_size // 1024} KB "
      f"({len(codepoints)} codepoints from {BRAVURA.name})")
