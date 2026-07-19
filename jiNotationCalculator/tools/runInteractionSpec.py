"""Run tools/interactionSpec.js against the built index.html in headless Edge.

The spec appends its results to the DOM; this dumps the DOM and reports them.
Reduced motion is forced so collapsing settles synchronously and the
assertions can read the result straight after a click.
"""
import html as html_mod
import os
import re
import subprocess
import sys

from paths import DIST, INDEX, ROOT, TOOLS

EDGE = next((p for p in [
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
] if os.path.exists(p)), None)
if EDGE is None:
    sys.exit("no Edge found to run the spec in")

DIST.mkdir(exist_ok=True)
harness = DIST / "interactionSpec.html"
harness.write_text(
    INDEX.read_text(encoding="utf-8").replace(
        "</body>",
        "<script>\n" + (TOOLS / "interactionSpec.js").read_text(encoding="utf-8")
        + "\n</script>\n</body>"),
    encoding="utf-8")

dom = subprocess.run(
    [EDGE, "--headless=new", "--disable-gpu", "--window-size=1240,1400",
     "--force-prefers-reduced-motion", "--dump-dom", harness.as_uri()],
    capture_output=True, text=True, encoding="utf-8", errors="replace", timeout=240,
).stdout

found = re.search(r'<div id="TESTOUT">(.*?)</div>', dom, re.S)
if not found:
    sys.exit("no results — the page threw before the spec finished")

lines = html_mod.unescape(found.group(1)).split("\n")
failures = [line for line in lines if line.startswith("FAIL")]
for line in failures:
    print(line)
print(f"interaction: {len(lines) - len(failures)}/{len(lines)} passed")
sys.exit(1 if failures else 0)
