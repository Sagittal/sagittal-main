"""Shared project paths, resolved from this file's location."""
from pathlib import Path

TOOLS = Path(__file__).resolve().parent
ROOT = TOOLS.parent
SRC = ROOT / "src"
DATA = ROOT / "data"
DIST = ROOT / "dist"
SAGITTAL_MAIN = ROOT.parent

WORKBOOK = DATA / "SagittalStandardJiNotationCalculatorSpreadsheet.xlsx"
WORKBOOK_DUMP = DATA / "workbookDump.json"
EXPECTED = DATA / "expectedFromWorkbook.json"
BRAVURA = SAGITTAL_MAIN / "bravura" / "BravuraSagittalUpdate_v10.otf"

TEMPLATE = SRC / "template.html"
CORE = SRC / "core.js"
PRIME_FACTOR = SRC / "primeFactor.js"
DATA_JS = SRC / "data.js"
FONT_B64 = SRC / "font.b64"
CODEPOINTS = SRC / "codepoints.txt"

INDEX = ROOT / "index.html"
