"""Assemble the single-file app from the template, data, core and font.

Writes:
  index.html            a complete standalone document
  dist/artifact.html    body-only flavor, for hosts that supply the skeleton
"""
from paths import CORE, DATA_JS, DIST, FONT_B64, INDEX, PRIME_FACTOR, TEMPLATE

body = TEMPLATE.read_text(encoding="utf-8")
body = body.replace("%%FONT_B64%%", FONT_B64.read_text(encoding="utf-8").strip())
body = body.replace("%%DATA_JS%%", DATA_JS.read_text(encoding="utf-8").strip())
body = body.replace("%%CORE_JS%%", CORE.read_text(encoding="utf-8").strip())
body = body.replace("%%PRIME_FACTOR_JS%%", PRIME_FACTOR.read_text(encoding="utf-8").strip())

DIST.mkdir(exist_ok=True)
(DIST / "artifact.html").write_text(body, encoding="utf-8")

INDEX.write_text(
    '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
    '<meta name="viewport" content="width=device-width, initial-scale=1">\n'
    "</head>\n<body>\n" + body + "\n</body>\n</html>\n",
    encoding="utf-8",
)

print(f"index.html {INDEX.stat().st_size // 1024} KB")
