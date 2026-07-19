"""Recalculate the actual workbook formulas for many input vectors.

Produces expected.json: for each vector, every UI output cell the web app
must reproduce. This exercises the spreadsheet's own formulas (via the
`formulas` library), so it is independent of the JS port.
"""
import json
import random
import sys

import formulas
import schedula  # noqa: F401  (formulas dependency)

from paths import EXPECTED, WORKBOOK
path = str(WORKBOOK)

xl = formulas.ExcelModel().loads(path).finish()

# Resolve the model's book name prefix from an arbitrary known cell.
sample = [k for k in xl.cells if k.endswith("'!C8") and "UI" in k.upper()]
prefix = sample[0].rsplit("!", 1)[0]  # e.g. "'[CALC.XLSX]UI'"
book = prefix.split("]")[0].lstrip("'[")


def ref(sheet, addr):
    return f"'[{book}]{sheet.upper()}'!{addr}"


EXP_CELLS = [f"{chr(ord('C') + i)}8" for i in range(17)]  # C8..S8
PRIMES = [3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61]

OUT_COLS = {
    "medium": ["W", "X", "Y", "Z", "AA", "AB"],
    "high": ["AD", "AE", "AF", "AG", "AH", "AI"],
    "ultra": ["AK", "AL", "AM", "AN", "AO", "AP"],
    "extreme": ["AR", "AS", "AT", "AU", "AV", "AW"],
}
OUT_CELLS = [f"{c}{r}" for cols in OUT_COLS.values() for c in cols
             for r in range(9, 16)]
OUT_CELLS += [f"AY{r}" for r in range(9, 16)] + ["N10"]

VECTORS = []


def vec(exps, num, den, nominal):
    e = {p: 0 for p in PRIMES}
    e.update(exps)
    VECTORS.append({"exps": e, "num": num, "den": den, "nominal": nominal})


vec({}, 1, 1, "D")                       # baseline (matches file's cached state)
vec({}, 1, 1, "C")
for r in [(81, 80), (80, 81), (33, 32), (64, 63), (2187, 2048),
          (531441, 524288), (5, 4), (7, 4), (11, 8), (13, 8), (3, 2), (9, 8),
          (45, 32), (225, 224), (19, 16), (23, 16), (29, 16), (31, 16),
          (37, 32), (41, 32), (43, 32), (47, 32), (5, 3), (7, 5), (10, 9),
          (16, 15), (25, 24), (128, 125), (6, 5), (27, 26), (256, 243),
          (1053, 1024), (4375, 4374)]:
    vec({}, r[0], r[1], "C")
vec({}, 5, 4, "D")
vec({}, 7, 6, "bE")
vec({}, 11, 9, "#F")
vec({}, 13, 12, "bbG")
vec({}, 3, 2, "xA")
vec({}, 55, 49, "bB")
vec({3: 4, 5: -1}, 1, 1, "C")
vec({61: 1}, 1, 1, "C")
vec({53: -2}, 1, 1, "D")
vec({7: 2, 11: -1}, 1, 1, "E")
vec({3: -3, 13: 1}, 1, 1, "G")
vec({5: 1, 7: 1, 11: 1}, 1, 1, "A")
vec({3: 2, 5: 1}, 7, 5, "bD")
vec({17: 1}, 9, 8, "B")
rng = random.Random(20260717)
for _ in range(10):
    e = {}
    for p in rng.sample(PRIMES, rng.randint(1, 4)):
        e[p] = rng.choice([-3, -2, -1, 1, 2, 3])
    nom = rng.choice(["C", "D", "E", "F", "G", "A", "B", "bE", "#C", "bA"])
    VECTORS.append({"exps": {p: e.get(p, 0) for p in PRIMES},
                    "num": rng.choice([1, 3, 5, 7, 9, 15, 21, 33]),
                    "den": rng.choice([1, 2, 4, 8, 16, 32]),
                    "nominal": nom})


def norm(v):
    try:
        v = v.value[0, 0]
    except Exception:
        pass
    if v is None:
        return ""
    if isinstance(v, str):
        return v
    if isinstance(v, bool):
        return v
    try:
        f = float(v)
    except Exception:
        return str(v)
    return f


results = []
outputs = [ref("UI", a) for a in OUT_CELLS]
for i, v in enumerate(VECTORS):
    inputs = {ref("UI", cell): float(v["exps"][p])
              for cell, p in zip(EXP_CELLS, PRIMES)}
    inputs[ref("UI", "C10")] = float(v["num"])
    inputs[ref("UI", "C11")] = float(v["den"])
    inputs[ref("UI", "C13")] = v["nominal"]
    sol = xl.calculate(inputs=inputs, outputs=outputs)
    out = {}
    for a in OUT_CELLS:
        out[a] = norm(sol[ref("UI", a)])
    results.append({"input": v, "output": out})
    print(f"{i + 1}/{len(VECTORS)}", v["num"], "/", v["den"], v["nominal"],
          "->", out["W9"], "|", out["AR9"], flush=True)

with EXPECTED.open("w", encoding="utf-8") as fh:
    json.dump(results, fh, ensure_ascii=False, indent=0)
print("wrote", len(results), "vectors")
