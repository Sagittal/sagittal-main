// Check the prime-factor (one-symbol-per-prime) tables and speller against the
// app's own extreme-level data and the set agreed on forum topic t=99.
import { createRequire } from "module";
const require = createRequire(import.meta.url);
globalThis.SAG_DATA = require("../src/data.js");
globalThis.SAG = require("../src/core.js");
const PF = require("../src/primeFactor.js");
const fs = require("fs");

const D = globalThis.SAG_DATA;
const S = globalThis.SAG;

let failures = 0;
function ok(name, cond, extra) {
  if (!cond) {
    failures++;
    console.log("FAIL " + name + (extra === undefined ? "" : "  [" + JSON.stringify(extra) + "]"));
  }
}

// ---------- the comma table ----------
ok("one comma per prime of the vector, 5 through 61",
  PF.COMMAS.map((c) => c.prime).join() === D.primes.slice(1).join(),
  PF.COMMAS.map((c) => c.prime).join());

for (const c of PF.COMMAS) {
  // the ratio really is 2^exp2 * 3^exp3 * prime
  let n = BigInt(c.prime), d = 1n;
  for (const [base, e] of [[2n, c.exp2], [3n, c.exp3]]) {
    if (e > 0) n *= base ** BigInt(e);
    else d *= base ** BigInt(-e);
  }
  ok(c.prime + " comma matches its monzo",
    n * BigInt(c.den) === d * BigInt(c.num), c.num + "/" + c.den);
  ok(c.prime + " comma is signed cents of its ratio",
    Math.abs(c.cents - 1200 * Math.log(c.num / c.den) / Math.LN2) < 1e-9, c.cents);
  ok(c.prime + " comma fits a single-shaft symbol", Math.abs(c.cents) < 68.57, c.cents);
  ok(c.prime + " keeps the chain offset within -5..+6 of the tonic",
    -c.exp3 >= -5 && -c.exp3 <= 6, -c.exp3);
}

// ---------- symbols agree with the app's own extreme-level tables ----------
// The full Olympian symbol for the comma's size, minus mina accents unless
// dropping them collides with a lower prime's symbol (41 and 43 keep theirs).
const bounds = D.bounds.extreme;
function keyFor(cents) {
  let key = null;
  for (const [lower, k] of bounds) if (lower <= cents) key = k;
  return key;
}
const MINA_CHARS = new RegExp("[" + String.fromCharCode(0xE3F4, 0xE3F5, 0xE3F6, 0xE3F7) + "] ?", "g");
const MINA_ASCII = /^[`,]+/;
for (const c of PF.COMMAS) {
  const key = keyFor(Math.abs(c.cents));
  const keep = c.prime === 41 || c.prime === 43;
  const pick = (k) => [D.key[k][0], D.key[k][2]];
  const strip = ([ascii, uni]) => keep ? [ascii, uni]
    : [ascii.replace(MINA_ASCII, ""), uni.replace(MINA_CHARS, "")];
  const [wantAscii, wantUni] = strip(pick(c.cents > 0 ? key : -key));
  const [wantAsciiInv, wantUniInv] = strip(pick(c.cents > 0 ? -key : key));
  ok(c.prime + " symbol is the extreme level's, minas dropped when free",
    c.ascii === wantAscii && c.uni === wantUni,
    c.ascii + " vs " + wantAscii);
  ok(c.prime + " inverse symbol mirrors it",
    c.asciiInv === wantAsciiInv && c.uniInv === wantUniInv,
    c.asciiInv + " vs " + wantAsciiInv);
}

// ---------- every glyph ships in the embedded font subset ----------
const embedded = new Set(fs.readFileSync(
  new URL("../src/codepoints.txt", import.meta.url), "utf-8")
  .trim().split(",").map((s) => parseInt(s.slice(2), 16)));
for (const c of PF.COMMAS) {
  const glyphs = [...c.uni + c.uniInv].filter((ch) => ch !== " ");
  ok(c.prime + " glyphs are all in the font subset",
    glyphs.every((ch) => embedded.has(ch.codePointAt(0))),
    glyphs.map((ch) => ch.codePointAt(0).toString(16)).join());
}

// ---------- the speller ----------
const chr = String.fromCharCode;
const spell = (exps, nominal, residue) => PF.spell({
  exps, nominal: nominal || "C",
  residueNum: residue ? residue[0] : 1, residueDen: residue ? residue[1] : 1,
});
const NH = D.noteheads;

let r = spell({}, "D");
ok("1/1 is the bare tonic",
  !r.error && r.ascii === "D" && r.uni === NH.D && r.factors.length === 0,
  JSON.stringify(r && r.ascii));
r = spell({ 5: 1 });
ok("5/4 over C is E with the 5-comma down",
  !r.error && r.ascii === "\\!E" && r.uni === chr(0xE303) + NH.E,
  JSON.stringify(r && r.ascii));
ok("factor rows carry the chain shift",
  !r.error && r.factors[0].prime === 5 && r.factors[0].fifths === 4
  && r.fifthsFromTonic === 4);
r = spell({ 7: 1 });
ok("7/4 over C is B flat with the 7-comma down",
  !r.error && r.ascii === "!)bB"
  && r.uni === chr(0xE305) + " " + chr(0xE260) + NH.B,
  JSON.stringify(r && r.ascii));
r = spell({ 3: -1, 5: 1 });
ok("5/3 over C is A with the 5-comma down",
  !r.error && r.ascii === "\\!A", JSON.stringify(r && r.ascii));
r = spell({ 3: 2 });
ok("9/8 over C is a bare D",
  !r.error && r.ascii === "D" && r.factors.length === 0,
  JSON.stringify(r && r.ascii));
r = spell({ 11: 1 }, "G");
ok("11/8 over G is C half-sharp",
  !r.error && r.ascii === "/|\\C", JSON.stringify(r && r.ascii));
r = spell({ 13: 1 }, "D");
ok("13/8 over D is B with the 13 arc down",
  !r.error && r.ascii === "(!/B", JSON.stringify(r && r.ascii));

r = spell({ 5: 2 });
ok("repeated primes repeat the symbol, spaced apart",
  !r.error && r.ascii === "\\! \\! #G", JSON.stringify(r && r.ascii));
r = spell({ 7: -1 });
ok("a denominator prime inverts its symbol",
  !r.error && r.ascii === "|)D", JSON.stringify(r && r.ascii));
r = spell({ 5: -1, 7: 1 }, "G");
ok("7/5 over G is D flat, the greater alteration nearer the nominal",
  !r.error && r.ascii === "/| !) bD", JSON.stringify(r && r.ascii));
ok("multi-symbol unicode spaces every glyph",
  !r.error && r.uni === [0xE302, 0xE305, 0xE260].map((c) => chr(c)).join(" ") + NH.D,
  r && [...r.uni].map((ch) => ch.codePointAt(0).toString(16)).join());
r = spell({ 11: 1, 13: 1 });
ok("143/128 over C keeps the larger 13 next to the nominal",
  !r.error && r.ascii === "/|\\ (!/ D", JSON.stringify(r && r.ascii));

r = spell({ 5: 5 });
ok("off the chain reports which way it fell off",
  /chain/.test(r.error || "") && /above/.test(r.error || ""), r.error);
r = spell({ 5: -4 });
ok("off the flat end reports too",
  /chain/.test(r.error || "") && /below/.test(r.error || ""), r.error);
r = spell({}, "C", [67, 1]);
ok("a leftover prime beyond 61 reports the factor",
  /67/.test(r.error || "") && /61/.test(r.error || ""), r.error);

// the nominal's pythagorean cents plus the commas' cents is always the pitch
for (const c of PF.COMMAS) {
  const one = spell({ [c.prime]: 1 }, "D");
  const want = S.compute({ exps: { [c.prime]: 1 }, num: 1, den: 1, nominal: "D" })
    .centsAbove11;
  ok(c.prime + " reconciles nominal + comma to the pitch",
    !one.error && Math.abs(one.totalCents - want) < 1e-6,
    one.error || one.totalCents + " vs " + want);
}
const mixExps = { 3: 1, 5: -2, 7: 1, 41: 1 };
r = spell(mixExps, "bE");
const mixWant = S.compute({ exps: mixExps, num: 1, den: 1, nominal: "bE" }).centsAbove11;
ok("a mixed vector reconciles as well",
  !r.error && Math.abs(r.totalCents - mixWant) < 1e-6,
  r.error || r.totalCents + " vs " + mixWant);

if (failures) {
  console.log(failures + " failures");
  process.exit(1);
}
console.log("OK: prime-factor tables and speller all match");

