/* Sagittal Standard JI Notation Calculator — computation core.
 * A direct port of the workbook's Calculator-sheet formulas; every function
 * mirrors a spreadsheet cell, preserving Excel's MOD/ROUND/VLOOKUP semantics.
 */
"use strict";

const SAG = (() => {
  const D = typeof SAG_DATA !== "undefined" ? SAG_DATA : require("./data.js");

  const LN2 = Math.LN2;
  const APOTOME = (Math.log(3) / LN2 * 7 - 11) * 1200;          // Calculator!AD2
  const bounds = D.bounds;
  const extreme = bounds.extreme;
  const CENTS_MAX = extreme[extreme.length - 1][0] + 0.000000001; // Calculator!AD3
  const MAX_FRAC = CENTS_MAX / APOTOME;                           // Calculator!AD4

  // Excel MOD: result has the divisor's sign.
  const excelMod = (a, b) => a - b * Math.floor(a / b);
  // Excel ROUND: half away from zero.
  const excelRound = (x, digits) => {
    const m = Math.pow(10, digits);
    return Math.sign(x) * Math.round(Math.abs(x) * m) / m;
  };

  // Calculator!A1 chain of fifths; FIND(entry)-46)/3 = fifths above C.
  const FIFTHS = D.fifthsString;
  function fifthsAboveC(name) {
    const padded = name + "   ".slice(name.length);
    const pos = FIFTHS.indexOf(padded);
    if (pos < 0) return null; // Excel FIND would raise #VALUE!
    return (pos + 1 - 46) / 3;
  }

  // VLOOKUP(value, bounds, 2, TRUE): key of the largest lower-bound <= value.
  function lookupKey(value, rows) {
    if (value < rows[0][0]) return null; // Excel would raise #N/A
    let lo = 0, hi = rows.length - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (rows[mid][0] <= value) lo = mid; else hi = mid - 1;
    }
    return rows[lo][1];
  }

  const NOMINALS = [
    // [letter, base-cents ratio [num, den], wrap: +1 / -1 / 0 octaves]
    ["C", [1, 1], +1],
    ["D", [9, 8], +1],
    ["E", [81, 64], 0],
    ["F", [4, 3], 0],
    ["G", [3, 2], 0],
    ["A", [27, 16], 0],
    ["B", [243, 128], -1],
  ];

  const SF_SHIFT = { x: 2000, "#": 1000, "": 0, b: -1000, bb: -2000 };
  const LEVELS = ["medium", "high", "ultra", "extreme"];

  function keyRow(fullKey) {
    const row = D.key[fullKey];
    return row || null; // Excel VLOOKUP FALSE would raise #N/A
  }

  /**
   * inputs: { exps: {3: int, 5: int, ...}, num, den, nominal }
   * Mirrors UI rows 9..15 (Calculator rows 6..12).
   */
  function compute(inputs) {
    const nominalFifths = fifthsAboveC(inputs.nominal);
    if (nominalFifths === null) {
      return { error: "1/1 nominal must be one of bbF ... xB (e.g. C, D, bE, #F)." };
    }
    const num = Number(inputs.num), den = Number(inputs.den);
    if (!(num > 0) || !(den > 0)) {
      return { error: "Numerator and denominator must be positive numbers." };
    }

    // Calculator!AG2/AG3/AG4 in log2 domain (avoids overflow for big exponents).
    let log2Total = Math.log(num / den) / LN2;
    for (const p of D.primes) {
      const e = Number(inputs.exps[p] || 0);
      if (!Number.isFinite(e)) return { error: "Exponents must be numbers." };
      if (e !== 0) log2Total += e * (Math.log(p) / LN2);
    }
    if (!Number.isFinite(log2Total)) {
      return { error: "Pitch is out of numeric range." };
    }

    const exp3 = Number(inputs.exps[3] || 0);
    const centsAbove11 = excelMod(1200 * log2Total, 1200);              // AG5
    const fifths11 = exp3 + nominalFifths;                              // AJ2
    const cents8 = excelMod(
      1200 * (log2Total + nominalFifths * (Math.log(3) / LN2)), 1200);  // AG8

    const rows = [];
    for (const [letter, [rn, rd], wrap] of NOMINALS) {
      let base = 1200 * (Math.log(rn / rd) / LN2);                      // A col
      if (wrap === +1 && Math.abs(cents8 - base - 1200) < 300) base += 1200;
      if (wrap === -1 && Math.abs(cents8 - base + 1200) < 300) base -= 1200;

      const inRange = !(Math.abs(cents8 - base) > 2.000001 * APOTOME);  // B col
      const row = {
        letter: inRange ? letter : "",
        notehead: inRange ? D.noteheads[letter] : "",
        levels: {},
      };

      let sf = "";                                                      // D col
      if (inRange) {
        if (cents8 - base > APOTOME * (1 + MAX_FRAC)) sf = "x";
        else if (cents8 - base > APOTOME * MAX_FRAC) sf = "#";
        else if (base - cents8 > APOTOME * (1 + MAX_FRAC)) sf = "bb";
        else if (base - cents8 > APOTOME * MAX_FRAC) sf = "b";
      }
      const shift = SF_SHIFT[sf];                                       // E col
      let adjusted = "";                                                // F col
      if (inRange) {
        if (cents8 - base > APOTOME * (1 + MAX_FRAC)) adjusted = base + APOTOME * 2;
        else if (cents8 - base > APOTOME * MAX_FRAC) adjusted = base + APOTOME;
        else if (base - cents8 > APOTOME * (1 + MAX_FRAC)) adjusted = base - 2 * APOTOME;
        else if (base - cents8 > APOTOME * MAX_FRAC) adjusted = base - APOTOME;
        else adjusted = base;
      }
      const alteration = !inRange ? ""                                  // G col
        : (excelRound(cents8 - adjusted, 3) === 0 ? 0 : cents8 - adjusted);
      row.sharpFlat = sf;
      row.alteration = alteration;

      row.fifthsCount = inRange                                         // AB col
        ? exp3 + fifthsAboveC(sf + letter) - fifths11
        : "";

      for (const level of LEVELS) {
        const tbl = bounds[level];
        let key;                                                        // I col
        if (alteration === "") key = "";
        else if (excelRound(alteration, 3) === 0) key = 0;
        else if (alteration > 0) key = lookupKey(alteration, tbl);
        else key = -lookupKey(-alteration, tbl);
        const fullKey = alteration === "" ? 0 : key + shift;            // H col

        let comma;                                                      // K col
        if (key === "" || key === 0) comma = "";
        else if (key > 0) comma = D.commas[key].cents;
        else comma = -D.commas[-key].cents;

        // L/Q cols (medium, high) fall back to the alteration when the comma
        // is blank; V/AA cols (ultra, extreme) fall back to 0.
        let error;
        if (!inRange) error = "";
        else if (alteration === "") error = 0;
        else if (comma === "") {
          error = (level === "medium" || level === "high") ? alteration : 0;
        } else error = Math.abs(alteration - comma);

        const k = keyRow(fullKey);
        row.levels[level] = {
          evoAscii: k ? k[0] + row.letter : "#N/A",
          revoAscii: k ? k[1] + row.letter : "#N/A",
          evoUnicode: k ? k[2] + row.notehead : "#N/A",
          revoUnicode: k ? k[3] + row.notehead : "#N/A",
          error,
        };
      }
      rows.push(row);
    }

    return { centsAbove11, rows };
  }

  return { compute, APOTOME, CENTS_MAX, MAX_FRAC, data: D,
           excelMod, excelRound, fifthsAboveC };
})();

if (typeof module !== "undefined") module.exports = SAG;
