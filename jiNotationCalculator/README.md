# jiNotationCalculator

A web port of the *Sagittal Standard JI Notation Calculator* spreadsheet
([forum.sagittal.org t=86](http://forum.sagittal.org/viewtopic.php?t=86)).

Enter a pitch as a ratio or as its prime exponents, choose the Pythagorean nominal
that is your 1/1, and read off its Sagittal notation — Evo and/or Revo, as ASCII,
as Unicode codepoints, and drawn in Bravura — at all four precision levels, with a
live diagram of where your pitch falls among each level's symbols. A closing
section spells the same pitch in the prime-factor notation
([t=99](http://forum.sagittal.org/viewtopic.php?t=99)): one Sagittal per prime
factor, with the factor-by-factor arithmetic laid out.

The build is a single self-contained `index.html`: no server, no network, no font
to install.

## Layout

    src/template.html   markup, styles and the UI runtime
    src/core.js         the computation, ported cell for cell from the workbook
    src/primeFactor.js  the one-symbol-per-prime comma table and speller
    src/data.js         generated — boundary, comma and key tables, verbatim
    src/font.b64        generated — a ~12 KB subset of the Sagittal Bravura
    data/*.xlsx         the workbook the tables come from
    tools/              build and specs

Nothing in `src/data.js` is re-derived: the boundaries, commas and symbol keys are
lifted straight out of the spreadsheet, and `core.js` reproduces the Calculator
sheet's formulas including Excel's `MOD`, `ROUND` and `VLOOKUP` semantics.

## Build

    python tools/build.py                 # -> index.html and dist/artifact.html

Regenerating the data (only needed when the workbook or the font changes) requires
`openpyxl` and `fonttools`:

    python tools/dumpWorkbook.py          # xlsx  -> data/workbookDump.json
    python tools/extractData.py           # dump  -> src/data.js + src/font.b64

The font subset is cut from `../bravura/BravuraSagittalUpdate_v10.otf`, so the
glyphs match the rest of this repo, mina diacritics included.

## Specs

    node tools/coreSpec.mjs               # the maths, against the workbook itself
    node tools/primeFactorSpec.mjs        # the prime-factor tables and speller
    python tools/runInteractionSpec.py    # the UI, in headless Edge or Chrome

`coreSpec.mjs` checks every UI output cell for 59 input vectors against values
recalculated from the workbook's own formulas (`tools/oracle.py` produces
`data/expectedFromWorkbook.json` using the `formulas` package) — 10,384 cells.
`primeFactorSpec.mjs` re-derives each prime's symbol from the app's own
extreme-level tables and font subset, and pins the speller's spellings, symbol
order and cents reconciliation. `runInteractionSpec.py` drives the built page and
asserts the behaviour of the inputs, the linked ratio/vector, the collapsing
columns, the copy buttons, the diagram and the prime-factor section.

## Credit

The spreadsheet is George Secor's and Dave Keenan's. Bravura is © Steinberg Media
Technologies GmbH under the SIL Open Font License 1.1; the subset embedded in the
page is cut from this repo's Sagittal-corrected build of it.
