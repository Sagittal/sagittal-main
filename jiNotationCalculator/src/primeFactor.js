/* Sagittal prime-factor (one-symbol-per-prime) notation.
 *
 * One comma per prime, as agreed by George Secor and Dave Keenan
 * (forum.sagittal.org t=99): each comma is the smallest-|3-exponent| comma of
 * its prime under 68.57¢, its symbol the extreme-level (Olympian) symbol for
 * that size with mina accents dropped unless that collides with a lower
 * prime's symbol (41 would become 5, 43 would become 17, so theirs stay).
 * primeFactorSpec.mjs re-derives every symbol from the app's own tables.
 */
"use strict";

const SAG_PF = (() => {
  const D = typeof SAG_DATA !== "undefined" ? SAG_DATA : require("./data.js");
  const S = typeof SAG !== "undefined" ? SAG : require("./core.js");

  // Each row: the ratio one factor of the prime applies (so the prime is in
  // the numerator), its monzo's 2- and 3-exponents, the symbol's Sagispeak
  // name, and the symbol in that direction plus its inverse.
  const COMMAS = [
    { prime: 5, num: 80, den: 81, exp2: 4, exp3: -4, name: "pao",
      ascii: "\\!", uni: "", asciiInv: "/|", uniInv: "" },
    { prime: 7, num: 63, den: 64, exp2: -6, exp3: 2, name: "tao",
      ascii: "!)", uni: "", asciiInv: "|)", uniInv: "" },
    { prime: 11, num: 33, den: 32, exp2: -5, exp3: 1, name: "vai",
      ascii: "/|\\", uni: "", asciiInv: "\\!/", uniInv: "" },
    { prime: 13, num: 26, den: 27, exp2: 1, exp3: -3, name: "dao",
      ascii: "(!/", uni: "", asciiInv: "(|\\", uniInv: "" },
    { prime: 17, num: 4131, den: 4096, exp2: -12, exp3: 5, name: "sanai",
      ascii: "~|(", uni: "", asciiInv: "~!(", uniInv: "" },
    { prime: 19, num: 513, den: 512, exp2: -9, exp3: 3, name: "rai",
      ascii: ")|", uni: "", asciiInv: ")!", uniInv: "" },
    { prime: 23, num: 736, den: 729, exp2: 5, exp3: -6, name: "zai",
      ascii: "|~", uni: "", asciiInv: "!~", uniInv: "" },
    { prime: 29, num: 261, den: 256, exp2: -8, exp3: 2, name: "jai",
      ascii: "(|", uni: "", asciiInv: "(!", uniInv: "" },
    { prime: 31, num: 31, den: 32, exp2: -5, exp3: 0, name: "jpao",
      ascii: "(\\!", uni: "", asciiInv: "(/|", uniInv: "" },
    { prime: 37, num: 37, den: 36, exp2: -2, exp3: -2, name: "phrai",
      ascii: ")//|", uni: "", asciiInv: ")\\\\!", uniInv: "" },
    { prime: 41, num: 82, den: 81, exp2: 1, exp3: -4, name: "mopai",
      ascii: ",/|", uni: " ", asciiInv: "`\\!", uniInv: " " },
    { prime: 43, num: 129, den: 128, exp2: -7, exp3: 1, name: "momosanai",
      ascii: ",,~|(", uni: " ", asciiInv: "``~!(", uniInv: " " },
    { prime: 47, num: 47, den: 48, exp2: -4, exp3: -1, name: "bijanao",
      ascii: "'(!(", uni: " ", asciiInv: ".(|(", uniInv: " " },
    { prime: 53, num: 53, den: 54, exp2: -1, exp3: -3, name: "kao",
      ascii: "!/", uni: "", asciiInv: "|\\", uniInv: "" },
    { prime: 59, num: 531, den: 512, exp2: -9, exp3: 2, name: "bodai",
      ascii: ".(|\\", uni: " ", asciiInv: "'(!/", uniInv: " " },
    { prime: 61, num: 244, den: 243, exp2: 2, exp3: -5, name: "binai",
      ascii: "'|(", uni: " ", asciiInv: ".!(", uniInv: " " },
  ];
  for (const c of COMMAS) c.cents = 1200 * Math.log(c.num / c.den) / Math.LN2;

  // The chain of fifths the nominal comes from, bbF at -15 through xB at +19.
  const ENTRIES = [];
  for (let i = 0; i < D.fifthsString.length; i += 3) {
    ENTRIES.push(D.fifthsString.slice(i, i + 3).trim());
  }
  const C_INDEX = ENTRIES.indexOf("C");
  const FIFTH_CENTS = 1200 * (Math.log(3) - Math.log(2)) / Math.LN2;
  const SF_GLYPH = { "": "", "#": String.fromCharCode(0xE262),
                     b: String.fromCharCode(0xE260), x: String.fromCharCode(0xE263),
                     bb: String.fromCharCode(0xE264) };

  /**
   * Spell {exps, nominal} in the prime-factor notation. residueNum/residueDen
   * carry whatever part of the entered ratio the vector could not absorb.
   * Every prime above 3 contributes its symbol once per factor (inverted for
   * denominator primes) and shifts the nominal by minus its comma's
   * 3-exponent; the 3-exponent and tonic move the nominal directly.
   */
  function spell(inputs) {
    if (inputs.residueNum !== 1 || inputs.residueDen !== 1) {
      const left = inputs.residueDen === 1 ? String(inputs.residueNum)
        : inputs.residueNum + "/" + inputs.residueDen;
      return { error: "The leftover factor " + left + " holds a prime beyond 61, "
        + "and the one-symbol-per-prime set stops there." };
    }
    const tonicFifths = S.fifthsAboveC(inputs.nominal);
    if (tonicFifths === null) {
      return { error: "1/1 nominal must be one of bbF ... xB (e.g. C, D, bE, #F)." };
    }

    const exp3 = Number(inputs.exps[3] || 0);
    let fifths = exp3 + tonicFifths;
    const factors = [];
    for (const c of COMMAS) {
      const e = Number(inputs.exps[c.prime] || 0);
      if (!e) continue;
      fifths += -c.exp3 * e;
      factors.push({
        prime: c.prime, exp: e, count: Math.abs(e),
        ascii: e > 0 ? c.ascii : c.asciiInv,
        uni: e > 0 ? c.uni : c.uniInv,
        num: e > 0 ? c.num : c.den,          // the ratio each copy applies
        den: e > 0 ? c.den : c.num,
        centsEach: (e > 0 ? 1 : -1) * c.cents,
        cents: e * c.cents,
        fifths: -c.exp3 * e,
      });
    }

    const pos = fifths + C_INDEX;
    if (pos < 0 || pos >= ENTRIES.length) {
      return { error: "Off the chain of fifths: this spelling needs the nominal "
        + Math.abs(fifths) + " fifths " + (fifths > 0 ? "above" : "below")
        + " C, and the chain only runs bbF to xB." };
    }
    const entry = ENTRIES[pos];
    const letter = entry.slice(-1);
    const sharpFlat = entry.slice(0, -1);

    // One symbol per factor, the greater alteration nearer the nominal; a
    // lone sagittal attaches to its nominal, more get spaced apart (t=99).
    const tokens = [];
    for (const f of factors.slice().sort(
      (a, b) => Math.abs(a.centsEach) - Math.abs(b.centsEach))) {
      for (let i = 0; i < f.count; i++) tokens.push(f);
    }
    const ascii = tokens.length === 0 ? entry
      : tokens.length === 1 ? tokens[0].ascii + entry
      : tokens.map((f) => f.ascii).join(" ") + " " + entry;
    const parts = tokens.map((f) => f.uni);
    if (SF_GLYPH[sharpFlat]) parts.push(SF_GLYPH[sharpFlat]);
    const uni = parts.join(" ") + D.noteheads[letter];

    const fifthsFromTonic = fifths - tonicFifths;
    const pythCents = S.excelMod(fifthsFromTonic * FIFTH_CENTS, 1200);
    const altCents = factors.reduce((t, f) => t + f.cents, 0);
    return {
      factors, exp3, tonicFifths, fifths, fifthsFromTonic,
      entry, letter, sharpFlat, ascii, uni,
      pythCents, altCents, totalCents: S.excelMod(pythCents + altCents, 1200),
    };
  }

  return { COMMAS, spell };
})();

if (typeof module !== "undefined") module.exports = SAG_PF;
