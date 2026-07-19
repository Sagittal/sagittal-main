// Compare the JS core against expected.json (the workbook's own formulas,
// recalculated by the `formulas` oracle) plus the workbook's cached baseline.
import { createRequire } from "module";
const require = createRequire(import.meta.url);
globalThis.SAG_DATA = require("../src/data.js");
const SAG = require("../src/core.js");
const fs = require("fs");

const expected = JSON.parse(fs.readFileSync(new URL("../data/expectedFromWorkbook.json", import.meta.url), "utf-8"));

const LEVEL_COLS = {
  medium: ["W", "X", "Y", "Z", "AA", "AB"],
  high: ["AD", "AE", "AF", "AG", "AH", "AI"],
  ultra: ["AK", "AL", "AM", "AN", "AO", "AP"],
  extreme: ["AR", "AS", "AT", "AU", "AV", "AW"],
};
const FIELDS = ["evoAscii", "revoAscii", "evoUnicode", "revoUnicode", "fifthsCount", "error"];

// Oracle sanity: vector 0 is the workbook's saved input state; these literals
// are Excel's own cached results read straight from the file.
const CACHED_BASELINE = {
  W9: "\\!xC", X9: "X\\C", AA9: 12, AB9: 1.953720788,
  AD9: ")\\!xC", AE9: ")X)C", AI9: 1.424297941,
  AK9: ".\\!xC", AR9: ".\\!xC", AV9: 12, AW9: 0,
  W10: " D", X10: " D", AA10: 0,
  W11: "/|bbE", X11: "Y/E", AA11: -12,
  AY9: -23.46001038, AY11: 23.46001038, N10: 0,
};

let failures = 0;
function fail(msg) {
  failures++;
  if (failures <= 40) console.log("FAIL", msg);
}

function close(a, b, tol = 1e-6) {
  return Math.abs(a - b) <= tol;
}

function cmp(tag, cell, got, want) {
  const gotNum = typeof got === "number";
  const wantNum = typeof want === "number";
  if (gotNum !== wantNum) {
    fail(`${tag} ${cell}: type mismatch got=${JSON.stringify(got)} want=${JSON.stringify(want)}`);
  } else if (gotNum) {
    if (!close(got, want)) fail(`${tag} ${cell}: got=${got} want=${want}`);
  } else if (got !== want) {
    fail(`${tag} ${cell}: got=${JSON.stringify(got)} want=${JSON.stringify(want)}`);
  }
}

// 1) oracle vs cached workbook values
for (const [cell, want] of Object.entries(CACHED_BASELINE)) {
  cmp("oracle-baseline", cell, expected[0].output[cell], want);
}

// 2) JS core vs oracle, every vector, every UI output cell
for (let i = 0; i < expected.length; i++) {
  const { input, output } = expected[i];
  const res = SAG.compute({ exps: input.exps, num: input.num, den: input.den, nominal: input.nominal });
  if (res.error) { fail(`vec${i}: compute error ${res.error}`); continue; }
  const tag = `vec${i} (${input.num}/${input.den} ${input.nominal} ${JSON.stringify(input.exps).replace(/"/g, "")})`;
  cmp(tag, "N10", res.centsAbove11, output.N10);
  for (let r = 0; r < 7; r++) {
    const row = res.rows[r];
    const excelRow = 9 + r;
    const ay = (row.alteration === 0 || row.alteration === "") ? "" : row.alteration;
    cmp(tag, `AY${excelRow}`, ay, output[`AY${excelRow}`]);
    for (const [level, cols] of Object.entries(LEVEL_COLS)) {
      const lv = row.levels[level];
      const got = [lv.evoAscii, lv.revoAscii, lv.evoUnicode, lv.revoUnicode, row.fifthsCount, lv.error];
      for (let c = 0; c < 6; c++) {
        cmp(tag, `${cols[c]}${excelRow}[${FIELDS[c]}]`, got[c], output[`${cols[c]}${excelRow}`]);
      }
    }
  }
}

const cells = expected.length * (7 * (4 * 6 + 1) + 1);
if (failures) {
  console.log(`${failures} failures across ${cells} compared cells`);
  process.exit(1);
}
console.log(`OK: ${expected.length} vectors, ${cells} cells, all match`);
