"""Run tools/interactionSpec.js against the built index.html in a headless
Chromium browser (Edge, falling back to Chrome).

The spec appends its results to the DOM; this dumps the DOM and reports them.
Reduced motion is forced so collapsing settles synchronously and the
assertions can read the result straight after a click.

The fallback exists because Edge 150's --dump-dom prints nothing (the launcher
detaches from the console before the dump). An empty dump means the browser
never delivered a DOM at all, so the next browser is tried; a non-empty dump
with no results means the page itself threw, which no other browser would fix.
"""
import html as html_mod
import os
import re
import subprocess
import sys

from paths import DIST, INDEX, ROOT, TOOLS

BROWSERS = [p for p in [
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
] if os.path.exists(p)]
if not BROWSERS:
    sys.exit("no Edge or Chrome found to run the spec in")

DIST.mkdir(exist_ok=True)
harness = DIST / "interactionSpec.html"
harness.write_text(
    INDEX.read_text(encoding="utf-8").replace(
        "</body>",
        "<script>\n" + (TOOLS / "interactionSpec.js").read_text(encoding="utf-8")
        + "\n</script>\n</body>"),
    encoding="utf-8")

dom = ""
for browser in BROWSERS:
    dom = subprocess.run(
        [browser, "--headless=new", "--disable-gpu", "--window-size=1240,1400",
         "--force-prefers-reduced-motion", "--dump-dom", harness.as_uri()],
        capture_output=True, text=True, encoding="utf-8", errors="replace", timeout=240,
    ).stdout
    if dom.strip():
        break
if not dom.strip():
    sys.exit("no browser delivered a DOM")

found = re.search(r'<div id="TESTOUT">(.*?)</div>', dom, re.S)
if not found:
    sys.exit("no results — the page threw before the spec finished")

lines = html_mod.unescape(found.group(1)).split("\n")
failures = [line for line in lines if line.startswith("FAIL")]
for line in failures:
    print(line.encode("ascii", "backslashreplace").decode("ascii"))
print(f"interaction: {len(lines) - len(failures)}/{len(lines)} passed")
sys.exit(1 if failures else 0)
