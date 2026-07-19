// Interaction tests for the built page: run in-page, report into #TESTOUT.
(() => {
  const out = [];
  const ok = (name, cond, extra) =>
    out.push((cond ? "PASS " : "FAIL ") + name + (extra === undefined ? "" : "  [" + extra + "]"));
  const $ = (id) => document.getElementById(id);
  const fire = (el, type) => el.dispatchEvent(new Event(type || "input", { bubbles: true }));
  const expInput = (p) => document.querySelector('input[aria-label="Exponent of prime ' + p + '"]');
  const primeLab = (p) => [...document.querySelectorAll("#vec .p")]
    .find((e) => e.textContent === String(p));
  const visibleCount = () =>
    [...document.querySelectorAll("#vec .p")].filter((e) => !e.hidden).length;
  const ratio = () => $("num").value + "/" + $("den").value;
  const vecOf = () => SAG_DATA.primes.map((p) => Number(expInput(p).value)).join(",");
  const card = (lvl) => document.querySelector('[data-level="' + lvl + '"]');
  const groupTh = (lvl, name) =>
    [...card(lvl).querySelectorAll("th.grouphead")]
      .find((t) => t.textContent.replace(/[−+]/g, "").trim() === name);
  // the first header cell is the row-collapse toggle column
  const heads = (lvl) => [...card(lvl).querySelectorAll("thead tr:first-child th")]
    .slice(1).map((t) => t.textContent.replace(/[−+]/g, "").replace(/\s+/g, " ").trim());
  const bodyRows = (lvl) => [...card(lvl).querySelectorAll("tbody tr")];
  const dataCells = (lvl, r) => [...bodyRows(lvl)[r].children].slice(1);
  const cellText = (lvl, r, c) => dataCells(lvl, r)[c].querySelector(".cv").textContent.trim();
  const colIndex = (lvl, name, offset) => {
    let idx = 0;   // the toggle column is skipped by the slice below
    for (const th of [...card(lvl).querySelectorAll("thead tr:first-child th")].slice(1)) {
      if (th.textContent.replace(/[−+]/g, "").trim() === name) return idx + (offset || 0);
      idx += th.colSpan || 1;
    }
    return -1;
  };
  const setNominal = (nm) => {
    $("nominal-btn").click();
    [...document.querySelectorAll("#nominal-list li")]
      .find((li) => li.dataset.value === nm).click();
  };

  // ---------- copy / labels ----------
  ok("title drops Just Intonation",
    document.querySelector("h1").textContent.trim() === "Sagittal Standard Notation Calculator",
    document.querySelector("h1").textContent);
  ok("the tab title matches the heading",
    document.title === "Sagittal Standard Notation Calculator", document.title);
  ok("subtitle is one line",
    document.querySelector("header .sub").getBoundingClientRect().height < 30);
  ok("subtitle ends at the Flavor choice",
    /choose your preferred Sagittal Flavor\.$/.test(
      document.querySelector("header .sub").textContent.replace(/\s+/g, " ").trim())
    && !/Precision Level/.test(document.querySelector("header .sub").textContent),
    document.querySelector("header .sub").textContent.replace(/\s+/g, " ").trim().slice(-60));

  const labelOf = (text) => [...document.querySelectorAll(".field-label")]
    .find((e) => e.textContent.trim() === text);
  ok("tonic label reads TONIC (1/1)", Boolean(labelOf("Tonic (1/1)")),
    [...document.querySelectorAll(".field-label")].map((e) => e.textContent).join("|"));
  const tonicLab = labelOf("Tonic (1/1)"), flavorLab = labelOf("Flavor");
  ok("the Evo/Revo field is labelled FLAVOR", Boolean(flavorLab));
  ok("FLAVOR aligned with TONIC",
    Math.abs(tonicLab.getBoundingClientRect().top
      - flavorLab.getBoundingClientRect().top) < 1.5);

  const ratioLab = labelOf("Ratio");
  const numBox = $("num").getBoundingClientRect();
  const ratioLabBox = ratioLab.getBoundingClientRect();
  ok("RATIO centred over the ratio",
    Math.abs((ratioLabBox.left + ratioLabBox.width / 2)
      - (numBox.left + numBox.width / 2)) < 3,
    Math.round(ratioLabBox.left + ratioLabBox.width / 2) + " vs "
    + Math.round(numBox.left + numBox.width / 2));

  // primes sit close to the tops of the exponent boxes
  const gap = expInput(3).getBoundingClientRect().top
    - primeLab(3).getBoundingClientRect().bottom;
  ok("prime row sits close to the exponent boxes", gap >= 0 && gap < 6,
    gap.toFixed(1) + "px");
  const expLab = document.querySelector(".vec-lab-exp").getBoundingClientRect();
  const expBox = expInput(3).getBoundingClientRect();
  ok("EXPONENT label centred on its row",
    Math.abs((expLab.top + expLab.height / 2) - (expBox.top + expBox.height / 2)) < 2,
    ((expLab.top + expLab.height / 2) - (expBox.top + expBox.height / 2)).toFixed(1));

  // exponent row still centred on the vinculum
  const vinc = document.querySelector(".ratio .vinculum").getBoundingClientRect();
  const expRow = expInput(3).getBoundingClientRect();
  ok("exponent row centred on the vinculum",
    Math.abs((vinc.top + vinc.height / 2) - (expRow.top + expRow.height / 2)) <= 3);

  // ---------- colours ----------
  const inkColor = getComputedStyle(document.body).color;
  ok("reset button uses the text colour, not the accent",
    getComputedStyle($("reset")).color === inkColor,
    getComputedStyle($("reset")).color);
  ok("the checkbox is drawn by us, not by the browser",
    getComputedStyle($("show-evo")).appearance === "none",
    getComputedStyle($("show-evo")).appearance);
  ok("a checked box fills with the text colour",
    getComputedStyle($("show-evo")).backgroundColor === inkColor,
    getComputedStyle($("show-evo")).backgroundColor);
  const mutedColor = getComputedStyle(document.querySelector(".hint")).color;
  ok("flavor labels are the muted text colour, not white",
    [...document.querySelectorAll(".checks span")]
      .every((s) => getComputedStyle(s).color === mutedColor),
    getComputedStyle(document.querySelector(".checks span")).color);
  const acc = document.querySelector(".hint .acc");
  ok("accidentals match the surrounding text colour",
    getComputedStyle(acc).color === getComputedStyle(acc.parentElement).color);
  // ---------- the cents readout ----------
  const cents = document.querySelector(".cents");
  ok("cents shown as a bare field, not a sentence",
    /^-?[\d.]+¢$/.test(cents.textContent.trim()), cents.textContent.trim());
  ok("cents sits to the right of the exponent row",
    cents.getBoundingClientRect().left > expInput(3).getBoundingClientRect().right);
  ok("cents is labelled", Boolean(labelOf("Cents")));
  ok("cents is set at the input size",
    getComputedStyle(cents).fontSize === getComputedStyle($("num")).fontSize,
    getComputedStyle(cents).fontSize);

  // ---------- reset in the panel's bottom-right ----------
  const panelBox = document.querySelector(".panel").getBoundingClientRect();
  const resetBox = $("reset").getBoundingClientRect();
  ok("reset pinned to the panel's bottom-right corner",
    panelBox.right - resetBox.right < 30 && panelBox.bottom - resetBox.bottom < 30,
    (panelBox.right - resetBox.right).toFixed(0) + "," 
    + (panelBox.bottom - resetBox.bottom).toFixed(0));

  // ---------- exponents ----------
  expInput(5).value = "1"; fire(expInput(5));
  ok("a non-zero exponent is inked, not accented",
    getComputedStyle(expInput(5)).color === inkColor,
    getComputedStyle(expInput(5)).color);
  ok("a zero exponent stays muted",
    getComputedStyle(expInput(7)).color === mutedColor);
  expInput(5).value = "0"; fire(expInput(5));

  // ---------- the whole vector fits on one line at 61 ----------
  for (let i = 6; i < SAG_DATA.primes.length; i++) $("add-prime").click();
  const vecBox = document.querySelector(".vec").getBoundingClientRect();
  ok("all 17 primes fit on one row", vecBox.height < 80, vecBox.height.toFixed(0) + "px");
  ok("adding every prime does not make the page scroll sideways",
    document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1,
    document.documentElement.scrollWidth + " vs "
    + document.documentElement.clientWidth);
  ok("the + button explains the ceiling once 61 is reached",
    /47-limit/.test($("add-prime").dataset.tip), $("add-prime").dataset.tip);
  $("reset").click();

  // ---------- tonic combo ----------
  const opts = [...document.querySelectorAll("#nominal-list li")];
  ok("35 nominals offered", opts.length === 35, opts.length);
  const bbF = opts.find((li) => li.dataset.value === "bbF");
  ok("nominals spelled with real accidental glyphs",
    bbF.querySelector(".acc") && bbF.querySelector(".acc").textContent === ""
      && bbF.textContent.trim().endsWith("F"),
    JSON.stringify(bbF.textContent));
  ok("sharp nominals use the sharp glyph",
    opts.find((li) => li.dataset.value === "#C").querySelector(".acc").textContent === "");
  ok("double sharp uses the double-sharp glyph",
    opts.find((li) => li.dataset.value === "xB").querySelector(".acc").textContent === "");
  ok("plain nominals carry no accidental",
    !opts.find((li) => li.dataset.value === "F").querySelector(".acc"));
  ok("combo shows the current nominal",
    $("nominal-btn").querySelector(".combo-val").textContent.trim() === "D");
  const notationWithD = card("medium").querySelector("tbody").textContent;
  const comboText = () => $("nominal-btn").querySelector(".combo-val").textContent;
  setNominal("bE");
  ok("choosing a nominal recomputes",
    /^E$/.test(comboText().trim())
    && card("medium").querySelector("tbody").textContent !== notationWithD,
    JSON.stringify(comboText()));
  setNominal("D");
  ok("changing back restores the notation",
    card("medium").querySelector("tbody").textContent === notationWithD);

  // ---------- vector ----------
  ok("starts at 17-limit", visibleCount() === 6, visibleCount());
  $("add-prime").click(); $("add-prime").click();
  ok("+ adds primes", visibleCount() === 8, visibleCount());
  primeLab(19).dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
  ok("hover marks the prime and those above it",
    primeLab(19).classList.contains("doomed") && primeLab(23).classList.contains("doomed"));
  primeLab(19).click();
  ok("clicking a prime removes it and those above", visibleCount() === 6, visibleCount());
  $("num").value = "81"; $("den").value = "80"; fire($("num"));
  ok("81/80 contracts to 5-limit", visibleCount() === 2, visibleCount());
  $("num").value = "1"; $("den").value = "1"; fire($("num"));
  ok("1/1 resets to 17-limit", visibleCount() === 6, visibleCount());
  expInput(5).value = "1"; fire(expInput(5));
  ok("vector 5^1 -> ratio 5/4", ratio() === "5/4", ratio());
  expInput(5).value = "0"; fire(expInput(5));

  // ---------- table shape ----------
  ok("Unicode column first",
    heads("medium").join("|")
    === "Bravura|Sagitype|Unicode|UnicodeCodepoints|FifthsCount|Cents|Error",
    heads("medium").join("|"));
  const allCells = [...card("medium").querySelectorAll("th, td")]
    .filter((c) => !c.classList.contains("rowtog"));
  ok("every column is right-justified",
    allCells.every((c) => getComputedStyle(c).textAlign === "right"),
    allCells.map((c) => getComputedStyle(c).textAlign).find((a) => a !== "right"));
  const bravCell = dataCells("medium", 0)[colIndex("medium", "Bravura")];
  ok("Bravura is big enough to read the nominal",
    parseFloat(getComputedStyle(bravCell).fontSize) >= 48,
    getComputedStyle(bravCell).fontSize);
  const pvGl = card("high").querySelector(".pv-gl");
  ok("preview glyphs are big too",
    parseFloat(getComputedStyle(pvGl).fontSize) >= 48, getComputedStyle(pvGl).fontSize);

  // ---------- collapsing ----------
  const groupCell = (lvl, name) =>
    dataCells(lvl, 0)[colIndex(lvl, name)];
  const shrunk = (lvl, name) =>
    getComputedStyle(groupCell(lvl, name).querySelector(".cw")).maxWidth === "0px";
  const dashShown = (lvl, name) => {
    const d = groupCell(lvl, name).querySelector(".cd");
    return Boolean(d) && getComputedStyle(d).opacity === "1"
      && getComputedStyle(d).maxWidth !== "0px";
  };
  const asciiTh = groupTh("medium", "Sagitype");
  ok("expanded groups show a − toggle",
    asciiTh.querySelector(".tog").textContent === "−");
  const togStyle = getComputedStyle(asciiTh.querySelector(".tog"));
  ok("the toggle looks like a button",
    parseFloat(togStyle.borderTopWidth) > 0 && togStyle.borderTopStyle === "solid"
    && parseFloat(togStyle.borderTopLeftRadius) > 0,
    togStyle.border);
  ok("cell contents carry a pinned width so the collapse can animate",
    /px$/.test(groupCell("medium", "Sagitype").querySelector(".cw").style.getPropertyValue("--w")),
    groupCell("medium", "Sagitype").querySelector(".cw").style.getPropertyValue("--w"));
  // the suite runs with reduced motion forced, so read the rule, not the computed style
  const cssText = [...document.styleSheets].flatMap((s) => {
    try { return [...s.cssRules].map((r) => r.cssText); } catch (e) { return []; }
  }).join(" ");
  ok("a width transition is declared for the shrinkable spans",
    /\.cw, \.cd \{ transition: max-width/.test(cssText));
  const beforeTop = asciiTh.querySelector(".tog").getBoundingClientRect().top;
  const beforeWidth = asciiTh.getBoundingClientRect().width;
  asciiTh.click();
  const asciiAfter = groupTh("medium", "Sagitype");
  ok("collapsed groups show a + toggle",
    asciiAfter.querySelector(".tog").textContent === "+");
  ok("the header text does not move vertically",
    Math.abs(asciiAfter.querySelector(".tog").getBoundingClientRect().top - beforeTop) < 1.5,
    (asciiAfter.querySelector(".tog").getBoundingClientRect().top - beforeTop).toFixed(1));
  ok("collapsed column takes minimal space",
    asciiAfter.getBoundingClientRect().width < beforeWidth * 0.75,
    Math.round(beforeWidth) + " -> " + Math.round(asciiAfter.getBoundingClientRect().width));
  ok("collapsed cells shrink their content away", shrunk("medium", "Sagitype"));
  ok("collapsed cells show a dash instead", dashShown("medium", "Sagitype"));
  ok("collapse applies to every card",
    ["high", "ultra", "extreme"].every((l) => shrunk(l, "Sagitype") && dashShown(l, "Sagitype")));
  groupTh("medium", "Sagitype").click();
  ok("clicking again expands", !shrunk("medium", "Sagitype"));

  const repTh = groupTh("medium", "Cents");
  repTh.click();
  ok("REPRESENTING collapses too", shrunk("medium", "Cents"));
  groupTh("medium", "Cents").click();
  ok("REPRESENTING expands again", !shrunk("medium", "Cents"));

  // ---------- Evo / Revo ----------
  const subRow = () => card("medium").querySelector("thead tr.subhead");
  ok("sub-header row present with both on", Boolean(subRow()));
  $("show-evo").checked = false; fire($("show-evo"), "change");
  ok("unchecking Evo drops the sub-header row", !subRow());
  ok("unchecking Evo halves the notation columns",
    dataCells("medium", 0).length === 7,
    dataCells("medium", 0).length);
  ok("the last checked variant is not greyed out", $("show-revo").disabled === false);
  const lum = (c) => {
    const [r, g, b] = c.match(/\d+/g).map(Number);
    return 0.299 * r + 0.587 * g + 0.114 * b;
  };
  const lockTick = getComputedStyle($("show-revo"), "::after").borderRightColor;
  const lockBack = getComputedStyle($("show-revo")).backgroundColor;
  ok("the locked box is a dark tick on a grey ground, in either theme",
    lum(lockTick) < 60 && lum(lockBack) > 140 && lum(lockBack) < 215,
    lockTick + " on " + lockBack);
  ok("the locked box explains why it will not switch off",
    /at least one Flavor/i.test($("show-revo").closest("label").dataset.tip || ""),
    $("show-revo").closest("label").dataset.tip);
  $("show-revo").checked = false; fire($("show-revo"), "change");
  ok("unchecking the last one is refused", $("show-revo").checked === true);
  ok("with one flavor the preview carries no label at all",
    card("medium").querySelectorAll(".pv-lab").length === 0
    && card("medium").querySelectorAll(".pv-gl").length === 1,
    card("medium").querySelectorAll(".pv-lab").length + " labels, "
    + card("medium").querySelectorAll(".pv-gl").length + " glyphs");
  $("show-evo").checked = true; fire($("show-evo"), "change");
  ok("re-checking restores both", Boolean(subRow()));

  // ---------- preview picks the simplest notation ----------
  const labsPv = [...card("high").querySelectorAll(".pv-lab")].map((e) => e.textContent);
  ok("preview labels Evo and Revo", labsPv.join("|") === "Evo|Revo", labsPv.join("|"));
  const repIdx = colIndex("medium", "Cents");
  const simplestRow = bodyRows("medium")
    .findIndex((tr) => [...tr.children].slice(1)[repIdx].querySelector(".cv").textContent.trim() === "-");
  ok("an unaltered row shows a dash rather than a blank", simplestRow >= 0);
  const previewGl = card("medium").querySelectorAll(".pv-gl")[1].textContent.trim();
  ok("preview shows the simplest notation",
    simplestRow >= 0
    && previewGl === cellText("medium", simplestRow, colIndex("medium", "Bravura", 1)),
    JSON.stringify(previewGl) + " vs row " + simplestRow);

  // ---------- no scrollbar ----------
  const wrap = card("medium").querySelector(".tbl-wrap");
  ok("table does not scroll horizontally", wrap.scrollWidth <= wrap.clientWidth + 1,
    wrap.scrollWidth + " vs " + wrap.clientWidth);
  ok("no scrollbar is ever drawn",
    getComputedStyle(wrap).scrollbarWidth === "none");

  // ---------- tooltips ----------
  const medTip = card("medium").querySelector(".lv-name").dataset.tip;
  ok("Medium tooltip names the level first",
    medTip.startsWith("The medium precision level"), medTip.slice(0, 40));
  ok("symbol sets are capitalised",
    /the Athenian/.test(medTip) && !/athenian/.test(medTip));
  ok("Xenharmonikôn is accented", /Xenharmonikôn/.test(medTip));
  const resTip = card("medium").querySelector(".lv-meta .tip").dataset.tip;
  ok("resolution tooltip says the figure is given, not quoted",
    /the figure given here is just that apotome/.test(resTip));
  ok("resolution tooltip explains the EDA plainly",
    resTip.startsWith("The Medium level's symbols are laid out on a 21-fold equal "
      + "division of the apotome (21-EDA)"), resTip.slice(0, 70));
  ok("resolution tooltip admits the spacing is uneven",
    /not in fact evenly spaced/.test(resTip));
  ok("resolution tooltip quotes the real spread",
    /run from 2\.95¢ to 6\.11¢/.test(resTip));
  ok("High tooltip carries 'not recommended'",
    /not recommended/i.test(card("high").querySelector(".lv-name").dataset.tip));
  ok("Representing header keeps its tooltip",
    /single-shaft Sagittal has to stand for/.test(
      groupTh("medium", "Cents").querySelector(".tip").dataset.tip));

  // ---------- levels ----------
  ok("only Medium open",
    [...document.querySelectorAll("details.level")].filter((d) => d.open)
      .map((d) => d.dataset.level).join() === "medium");
  card("ultra").querySelector("summary").click();
  ok("clicking a summary expands it", card("ultra").open);
  card("ultra").querySelector("summary").click();

  // ---------- copy ----------
  const cpCell = dataCells("medium", 0).find((c) => c.classList.contains("cp"));
  const btn = cpCell.querySelector("button.copy");
  ok("copy button with an icon", Boolean(btn && btn.querySelector("svg")));
  let copied = null;
  Object.defineProperty(navigator, "clipboard", {
    configurable: true,
    value: { writeText: (t) => { copied = t; return Promise.resolve(); } },
  });
  btn.click();
  ok("copy copies the cell text",
    copied === cpCell.querySelector(".cv").textContent, JSON.stringify(copied));

  // ---------- a folded row is short, and its cells all show a dash ----------
  const firstRow = bodyRows("medium")[0];
  const tallBefore = firstRow.getBoundingClientRect().height;
  firstRow.querySelector(".rowtog").click();
  const shortAfter = firstRow.getBoundingClientRect().height;
  ok("folding a row makes it short", shortAfter < 34 && shortAfter < tallBefore * 0.5,
    Math.round(tallBefore) + " -> " + Math.round(shortAfter));
  ok("a folded row shows a dash in every cell",
    [...firstRow.children].slice(1).every((td) => {
      const d = td.querySelector(".cd");
      return d && getComputedStyle(d).opacity === "1";
    }));
  ok("the row toggle wears the same chip as the column toggles",
    Boolean(firstRow.querySelector(".rowtog .tog")));
  firstRow.querySelector(".rowtog").click();

  // ---------- preview slots line up across cards ----------
  const shownPreview = (sel) =>
    [...document.querySelectorAll("#levels details.level:not([open]) " + sel)]
      .map((e) => Math.round(e.getBoundingClientRect().left))
      .filter((x) => x > 0);
  const labXs = shownPreview(".lv-preview .pv-lab");
  const glXs = shownPreview(".lv-preview .pv-gl");
  ok("preview labels share one left edge per slot",
    labXs.length > 0 && new Set(labXs).size === 2, labXs.join());
  ok("preview glyphs share one left edge per slot",
    glXs.length > 0 && new Set(glXs).size === 2, glXs.join());

  // ---------- section headers are labels again ----------
  const secHead = document.querySelector(".section-head");
  ok("section headers are uppercase labels, but bigger than a field label",
    getComputedStyle(secHead).textTransform === "uppercase"
    && parseFloat(getComputedStyle(secHead).fontSize)
       > parseFloat(getComputedStyle(document.querySelector(".field-label")).fontSize),
    getComputedStyle(secHead).fontSize + " vs field label "
    + getComputedStyle(document.querySelector(".field-label")).fontSize);

  // ---------- no dotted underlines, and the ceiling bubble stays on screen ----------
  ok("tooltips carry no dotted underline",
    [...document.querySelectorAll(".tip")].every(
      (e) => getComputedStyle(e).borderBottomStyle !== "dotted"));
  for (let i = 6; i < SAG_DATA.primes.length; i++) $("add-prime").click();
  const addBox = $("add-prime").getBoundingClientRect();
  ok("the ceiling bubble is anchored to open leftwards",
    getComputedStyle($("add-prime"), "::after").right === "0px"
    && addBox.right < window.innerWidth,
    getComputedStyle($("add-prime"), "::after").right);
  $("reset").click();

  // ---------- the codepoints copy on one line ----------
  const cpsCell = dataCells("medium", 0)[colIndex("medium", "UnicodeCodepoints")];
  ok("codepoints show one per line",
    cpsCell.querySelector(".cv").textContent.includes("\n"));
  let copiedCp = null;
  Object.defineProperty(navigator, "clipboard", {
    configurable: true,
    value: { writeText: (t) => { copiedCp = t; copied = t; return Promise.resolve(); } },
  });
  cpsCell.querySelector("button.copy").click();
  ok("copying codepoints gives one line, no newlines",
    typeof copiedCp === "string" && !copiedCp.includes("\n") && /U\+/.test(copiedCp),
    JSON.stringify(copiedCp));

  // ---------- the preview glyph never wraps ----------
  const pvGls = [...document.querySelectorAll("#levels details.level:not([open]) .pv-gl")];
  ok("preview glyphs are given enough room, so none overflows its slot",
    pvGls.length > 0 && pvGls.every((e) => e.scrollWidth <= e.clientWidth + 1),
    pvGls.map((e) => e.scrollWidth + "/" + e.clientWidth).join(" "));

  // ---------- nothing calls the prime list a vector ----------
  const tips = [...document.querySelectorAll("[data-tip]")].map((e) => e.dataset.tip);
  ok("no tooltip calls the prime list a vector",
    !tips.some((x) => /vector/i.test(x)),
    tips.find((x) => /vector/i.test(x)));

  // ---------- reset ----------
  setNominal("bA");
  $("reset").click();
  ok("reset restores 1/1, 17-limit and D",
    ratio() === "1/1" && visibleCount() === 6
    && $("nominal-btn").querySelector(".combo-val").textContent.trim() === "D");
  ok("reset zeroes the vector", vecOf() === SAG_DATA.primes.map(() => 0).join(","));

  // ---------- errors ----------
  $("den").value = "0"; fire($("den"));
  ok("zero denominator reports a problem", !$("error-msg").hidden);
  $("den").value = "1"; fire($("den"));
  ok("recovers after a bad ratio", $("error-msg").hidden);

  // ---------- prime factor ----------
  const pfCard = $("pf-card");
  ok("prime factor section head present",
    [...document.querySelectorAll(".section-head")]
      .some((h) => h.textContent.trim() === "Prime Factor"));
  ok("prime factor card is a collapsed level card",
    Boolean(pfCard) && pfCard.classList.contains("level") && !pfCard.open);
  ok("sixteen symbol tiles",
    document.querySelectorAll("#pf-strip .pf-tile").length === 16,
    document.querySelectorAll("#pf-strip .pf-tile").length);
  ok("tiles teach their Sagispeak names",
    /^pao — /.test(document.querySelector('#pf-strip [data-prime="5"]').dataset.tip),
    document.querySelector('#pf-strip [data-prime="5"]').dataset.tip.slice(0, 30));
  ok("collapsed preview shows the bare tonic notehead",
    pfCard.querySelector(".lv-preview .pv-gl").textContent === SAG_DATA.noteheads.D);
  pfCard.querySelector("summary").click();
  ok("summary click opens the card", pfCard.open);
  const pfHeads = [...document.querySelectorAll("#pf-table thead th")]
    .map((t) => t.textContent.replace(/\s+/g, " ").trim());
  ok("spelling table shows the four notation forms",
    pfHeads.join("|") === "Bravura|Sagitype|Unicode|Codepoints", pfHeads.join("|"));
  const pfAscii = () => document.querySelector("#pf-table tbody td.mono .cv").textContent;
  expInput(5).value = "1"; fire(expInput(5));   // 5/4 over D
  ok("5/4 over D spells F sharp with the 5-comma down", pfAscii() === "\\!#F", pfAscii());
  ok("the 5 tile lights up with its exponent",
    document.querySelector('#pf-strip [data-prime="5"]').classList.contains("on")
    && document.querySelector('#pf-strip [data-prime="5"] .pf-tile-e').textContent === "+1");
  ok("other tiles stay dark",
    document.querySelectorAll("#pf-strip .pf-tile.on").length === 1);
  const pfRows = () => [...document.querySelectorAll("#pf-factors tbody tr")];
  ok("factor rows: the prime and the total", pfRows().length === 2, pfRows().length);
  ok("the factor row shifts four fifths",
    pfRows()[0].lastElementChild.querySelector(".cv").textContent === "+4",
    pfRows()[0].lastElementChild.textContent);
  ok("the reconciliation lands on the pitch",
    /386\.314/.test($("pf-recon").textContent), $("pf-recon").textContent);
  expInput(41).value = "1"; fire(expInput(41));  // 5 and 41 together
  ok("an accented symbol keeps its mina accent",
    pfAscii() === ",/| \\! #A", pfAscii());
  expInput(41).value = "0"; fire(expInput(41));
  expInput(5).value = "0"; fire(expInput(5));
  $("num").value = "67"; $("den").value = "64"; fire($("num"));
  ok("a prime past 61 explains itself",
    !$("pf-note").hidden && /61/.test($("pf-note").textContent),
    $("pf-note").textContent);
  ok("no spelling is shown for it", $("pf-result").style.display === "none");
  $("num").value = "1"; $("den").value = "1"; fire($("num"));
  expInput(7).value = "1"; fire(expInput(7));   // 7/4 over D
  const pfCp = document.querySelector("#pf-table td.cp");
  pfCp.querySelector("button.copy").click();
  ok("spelling cells copy",
    copied === pfCp.querySelector(".cv").textContent, JSON.stringify(copied));
  expInput(7).value = "0"; fire(expInput(7));
  $("den").value = "0"; fire($("den"));
  ok("an input error hides the prime factor card", pfCard.style.display === "none");
  $("den").value = "1"; fire($("den"));
  ok("recovering restores it", pfCard.style.display !== "none");
  pfCard.querySelector("summary").click();

  const div = document.createElement("div");
  div.id = "TESTOUT";
  div.textContent = out.join("\n");
  document.body.appendChild(div);
})();
