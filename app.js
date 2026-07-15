const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const resultText = $("#result-text");
const ladderCanvas = $("#ladder-canvas");
const wheelCanvas = $("#wheel-canvas");
const numberResult = $("#number-result");
const languageSelect = $("#language-select");

const palette = ["#ff6b6b", "#ff9f1c", "#2ec4b6", "#3a86ff", "#8338ec", "#ffd166", "#06d6a0", "#ef476f"];
const translations = {
  ko: {
    code: "ko",
    title: "랜덤툴 스튜디오 - 추첨 도구",
    metaDescription: "사다리타기, 돌림판, 범위 번호 뽑기를 한곳에서 쓰는 랜덤 추첨 도구입니다.",
    brand: "랜덤툴 스튜디오",
    navLadder: "사다리",
    navWheel: "돌림판",
    navNumbers: "번호뽑기",
    heroEyebrow: "Random draw playground",
    heroTitle: "사다리, 돌림판, 번호 뽑기를 한곳에서.",
    ladderEyebrow: "Ladder game",
    ladderTitle: "사다리 타기",
    ladderShuffle: "사다리 섞기",
    ladderCount: "사다리 개수",
    sample: "샘플 넣기",
    showAll: "전체 결과 보기",
    ladderHint: "위쪽 참가자 번호를 누르면 사다리를 타고 내려갑니다.",
    wheelEyebrow: "Spin wheel",
    wheelTitle: "돌림판 추첨",
    wheelItems: "돌림판 항목",
    wheelHint: "x2, *3는 조각을 여러 개 만들지 않고 그만큼 큰 조각으로 만듭니다.",
    spin: "돌리기",
    numbersEyebrow: "Number draw",
    numbersTitle: "범위 번호 뽑기",
    drawNumbers: "번호 뽑기",
    startNumber: "시작 번호",
    endNumber: "끝 번호",
    drawCount: "뽑을 개수",
    excludeNumbers: "제외할 번호",
    excludePlaceholder: "예: 4, 13, 27",
    numberSample: "번호 샘플",
    resultLabel: "결과",
    initialResult: "아직 추첨 전입니다.",
    ladderPrompt: "위쪽 참가자 번호를 눌러 사다리를 타세요.",
    allResults: "전체 결과",
    wheelResult: "돌림판 결과",
    noNumbers: "뽑을 수 있는 번호가 없습니다.",
    participant: "참가자",
    result: "결과",
    participantAria: "번 참가자",
    resultAria: "번 결과",
    runTitle: "이 참가자로 사다리 타기",
    ladderSamples: {
      names: ["민수", "지우", "서윤", "하린", "도현", "나은"],
      results: ["1번", "2번", "커피", "꽝", "간식", "다시 뽑기"]
    },
    wheelSample: "피자 x2\n치킨\n커피\n아이스크림\n분식\n꽝 x3\n한 번 더\n영화"
  },
  en: {
    code: "en",
    title: "Random Tool Studio - Draw Tools",
    metaDescription: "Use ladder games, spin wheels, and number draws in one simple random picker.",
    brand: "Random Tool Studio",
    navLadder: "Ladder",
    navWheel: "Wheel",
    navNumbers: "Numbers",
    heroEyebrow: "Random draw playground",
    heroTitle: "Ladder, wheel, and number draw in one place.",
    ladderEyebrow: "Ladder game",
    ladderTitle: "Ladder Game",
    ladderShuffle: "Shuffle Ladder",
    ladderCount: "Ladder count",
    sample: "Add sample",
    showAll: "Show all results",
    ladderHint: "Tap a top participant number to run the ladder.",
    wheelEyebrow: "Spin wheel",
    wheelTitle: "Spin Wheel",
    wheelItems: "Wheel items",
    wheelHint: "x2 and *3 make one larger slice instead of duplicate slices.",
    spin: "Spin",
    numbersEyebrow: "Number draw",
    numbersTitle: "Range Number Draw",
    drawNumbers: "Draw numbers",
    startNumber: "Start number",
    endNumber: "End number",
    drawCount: "How many",
    excludeNumbers: "Exclude numbers",
    excludePlaceholder: "e.g. 4, 13, 27",
    numberSample: "Number sample",
    resultLabel: "Result",
    initialResult: "No draw yet.",
    ladderPrompt: "Tap a top participant number to run the ladder.",
    allResults: "All results",
    wheelResult: "Wheel result",
    noNumbers: "No numbers can be drawn.",
    participant: "Participant",
    result: "Result",
    participantAria: " participant",
    resultAria: " result",
    runTitle: "Run the ladder with this participant",
    ladderSamples: {
      names: ["Alex", "Mia", "Noah", "Emma", "Leo", "Sofia"],
      results: ["1st", "2nd", "Coffee", "Miss", "Snack", "Draw again"]
    },
    wheelSample: "Pizza x2\nChicken\nCoffee\nIce cream\nSnack\nMiss x3\nOne more\nMovie"
  },
  ja: {
    code: "ja",
    title: "ランダムツールスタジオ - 抽選ツール",
    metaDescription: "あみだくじ、ルーレット、範囲番号抽選を1か所で使えるランダム抽選ツールです。",
    brand: "ランダムツールスタジオ",
    navLadder: "あみだ",
    navWheel: "ルーレット",
    navNumbers: "番号抽選",
    heroEyebrow: "Random draw playground",
    heroTitle: "あみだ、ルーレット、番号抽選を1か所で。",
    ladderEyebrow: "Ladder game",
    ladderTitle: "あみだくじ",
    ladderShuffle: "あみだを混ぜる",
    ladderCount: "あみだの数",
    sample: "サンプル入力",
    showAll: "全結果を見る",
    ladderHint: "上の参加者番号を押すと、あみだをたどります。",
    wheelEyebrow: "Spin wheel",
    wheelTitle: "ルーレット抽選",
    wheelItems: "ルーレット項目",
    wheelHint: "x2、*3 は同じ項目を増やさず、その分だけ大きい区画にします。",
    spin: "回す",
    numbersEyebrow: "Number draw",
    numbersTitle: "範囲番号抽選",
    drawNumbers: "番号を引く",
    startNumber: "開始番号",
    endNumber: "終了番号",
    drawCount: "引く数",
    excludeNumbers: "除外する番号",
    excludePlaceholder: "例: 4, 13, 27",
    numberSample: "番号サンプル",
    resultLabel: "結果",
    initialResult: "まだ抽選していません。",
    ladderPrompt: "上の参加者番号を押してあみだを始めてください。",
    allResults: "全結果",
    wheelResult: "ルーレット結果",
    noNumbers: "引ける番号がありません。",
    participant: "参加者",
    result: "結果",
    participantAria: "番の参加者",
    resultAria: "番の結果",
    runTitle: "この参加者であみだを始める",
    ladderSamples: {
      names: ["ミナ", "ユウ", "ソラ", "ハル", "レン", "ナナ"],
      results: ["1番", "2番", "コーヒー", "はずれ", "おやつ", "もう一回"]
    },
    wheelSample: "ピザ x2\nチキン\nコーヒー\nアイス\nおやつ\nはずれ x3\nもう一回\n映画"
  },
  es: {
    code: "es",
    title: "Random Tool Studio - Herramientas de sorteo",
    metaDescription: "Usa escalera, ruleta y sorteo de números en una sola herramienta aleatoria.",
    brand: "Random Tool Studio",
    navLadder: "Escalera",
    navWheel: "Ruleta",
    navNumbers: "Números",
    heroEyebrow: "Random draw playground",
    heroTitle: "Escalera, ruleta y números en un solo lugar.",
    ladderEyebrow: "Ladder game",
    ladderTitle: "Juego de Escalera",
    ladderShuffle: "Mezclar escalera",
    ladderCount: "Cantidad",
    sample: "Poner ejemplo",
    showAll: "Ver resultados",
    ladderHint: "Pulsa un número superior para recorrer la escalera.",
    wheelEyebrow: "Spin wheel",
    wheelTitle: "Ruleta",
    wheelItems: "Elementos",
    wheelHint: "x2 y *3 crean una porción más grande, no elementos duplicados.",
    spin: "Girar",
    numbersEyebrow: "Number draw",
    numbersTitle: "Sorteo de Números",
    drawNumbers: "Sacar números",
    startNumber: "Número inicial",
    endNumber: "Número final",
    drawCount: "Cantidad",
    excludeNumbers: "Excluir números",
    excludePlaceholder: "ej. 4, 13, 27",
    numberSample: "Ejemplo",
    resultLabel: "Resultado",
    initialResult: "Aún no hay sorteo.",
    ladderPrompt: "Pulsa un número superior para recorrer la escalera.",
    allResults: "Todos los resultados",
    wheelResult: "Resultado de ruleta",
    noNumbers: "No hay números disponibles.",
    participant: "Participante",
    result: "Resultado",
    participantAria: " participante",
    resultAria: " resultado",
    runTitle: "Recorrer la escalera con este participante",
    ladderSamples: {
      names: ["Ana", "Luis", "Mia", "Diego", "Sofia", "Leo"],
      results: ["1ro", "2do", "Cafe", "Pierde", "Snack", "Otra vez"]
    },
    wheelSample: "Pizza x2\nPollo\nCafe\nHelado\nSnack\nPierde x3\nOtra vez\nPelicula"
  }
};
const langNames = ["ko", "en", "ja", "es"];
const savedLang = localStorage.getItem("randomToolsLang");
let currentLang = langNames.includes(savedLang) ? savedLang : "ko";
const defaultLadderNames = [...translations[currentLang].ladderSamples.names];
const defaultLadderResults = [...translations[currentLang].ladderSamples.results];

let ladderNames = [...defaultLadderNames];
let ladderResults = [...defaultLadderResults];
let ladderMap = [];
let ladderSegments = [];
let wheelRotation = 0;
let wheelItems = [];
let wheelSpinning = false;
let wheelFrameId = 0;
let wheelSpinToken = 0;
let activeToolId = "ladder";
const resultState = {
  ladder: { key: "initialResult", text: "" },
  wheel: { key: "initialResult", text: "" },
  numbers: { key: "initialResult", text: "" }
};

function lines(value) {
  return String(value).split(/\r?\n|,/).map((item) => item.trim()).filter(Boolean);
}

function escapeAttr(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function parseWeighted(value, fallback) {
  const source = lines(value);
  const entries = source.length ? source : fallback;
  const expanded = [];

  entries.forEach((entry) => {
    const match = entry.match(/^(.*?)(?:\s*(?:x|\*|×)\s*(\d+))?$/i);
    const label = (match?.[1] || entry).trim();
    const count = Math.max(1, Math.min(99, Number(match?.[2] || 1)));
    if (!label) return;
    for (let i = 0; i < count; i += 1) expanded.push(label);
  });

  return expanded.length ? expanded : [...fallback];
}

function parseWeightedSlices(value, fallback) {
  const source = lines(value);
  const entries = source.length ? source : fallback;
  const slices = [];

  entries.forEach((entry) => {
    const match = entry.match(/^(.*?)(?:\s*(?:x|\*|×)\s*(\d+))?$/i);
    const label = (match?.[1] || entry).trim();
    const weight = Math.max(1, Math.min(99, Number(match?.[2] || 1)));
    if (!label) return;
    slices.push({ label, weight });
  });

  return slices.length ? slices : fallback.map((label) => ({ label, weight: 1 }));
}

function randomIndex(length) {
  return crypto.getRandomValues(new Uint32Array(1))[0] % Math.max(1, length);
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = randomIndex(i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function fitCanvas(canvas, forceResize = false) {
  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const nextWidth = Math.max(1, Math.round(rect.width * ratio));
  const nextHeight = Math.max(1, Math.round(rect.height * ratio));
  if (forceResize || canvas.width !== nextWidth || canvas.height !== nextHeight) {
    canvas.width = nextWidth;
    canvas.height = nextHeight;
  }
  const ctx = canvas.getContext("2d");
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  return { ctx, width: rect.width, height: rect.height };
}

function drawText(ctx, text, x, y, maxWidth, size = 14, weight = 850, color = "#211827") {
  ctx.fillStyle = color;
  ctx.font = `${weight} ${size}px system-ui, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  let output = String(text);
  while (ctx.measureText(output).width > maxWidth && output.length > 2) {
    output = `${output.slice(0, -2)}...`;
  }
  ctx.fillText(output, x, y);
}

function shortLabel(text, max = 4) {
  const value = String(text);
  return value.length > max ? `${value.slice(0, max - 1)}…` : value;
}

function t(key) {
  return translations[currentLang]?.[key] ?? translations.ko[key] ?? key;
}

function applyLanguage(lang = currentLang) {
  currentLang = translations[lang] ? lang : "ko";
  localStorage.setItem("randomToolsLang", currentLang);
  document.documentElement.lang = t("code");
  document.title = t("title");
  document.querySelector('meta[name="description"]')?.setAttribute("content", t("metaDescription"));
  if (languageSelect) languageSelect.value = currentLang;

  $$("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  $$("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  renderToolResult(activeToolId);
  renderLadderEditor();
  drawCurrentTool($(".tool-section.active")?.id || "ladder");
}

function renderToolResult(toolId = activeToolId) {
  const state = resultState[toolId] || resultState.ladder;
  resultText.textContent = state.key ? t(state.key) : state.text;
  resultText.dataset.resultKey = state.key || "";
}

function setResult(text, toolId = activeToolId) {
  resultState[toolId] = { key: "", text };
  if (toolId === activeToolId) renderToolResult(toolId);
}

function setResultKey(key, toolId = activeToolId) {
  resultState[toolId] = { key, text: "" };
  if (toolId === activeToolId) renderToolResult(toolId);
}

function clampLadderCount(value) {
  return Math.max(2, Math.min(12, Number(value) || 2));
}

function readLadderEditor() {
  const nameInputs = $$(".ladder-name-input");
  const resultInputs = $$(".ladder-result-input");
  if (!nameInputs.length) return;
  ladderNames = nameInputs.map((input, index) => input.value.trim() || `${t("participant")} ${index + 1}`);
  ladderResults = resultInputs.map((input, index) => input.value.trim() || `${t("result")} ${index + 1}`);
}

function getLadderHorizontal(width, count) {
  const safeWidth = Math.max(260, width || 940);
  const usableWidth = Math.min(safeWidth - 56, Math.max(160, (count - 1) * 132));
  const gap = count > 1 ? usableWidth / (count - 1) : usableWidth;
  const cellWidth = Math.min(74, Math.max(52, gap * 0.72));
  return { usableWidth, gap, cellWidth, columnGap: Math.max(0, gap - cellWidth) };
}

function renderLadderEditor() {
  const count = clampLadderCount($("#ladder-count").value);
  $("#ladder-count").value = count;

  while (ladderNames.length < count) ladderNames.push(`${t("participant")} ${ladderNames.length + 1}`);
  while (ladderResults.length < count) ladderResults.push(`${t("result")} ${ladderResults.length + 1}`);
  ladderNames = ladderNames.slice(0, count);
  ladderResults = ladderResults.slice(0, count);

  const editorWidth = ladderCanvas.getBoundingClientRect().width || $("#ladder-name-editor").clientWidth || 940;
  const { cellWidth, columnGap } = getLadderHorizontal(editorWidth, count);
  const columns = `repeat(${count}, ${cellWidth}px)`;
  ["#ladder-name-editor", "#ladder-result-editor"].forEach((selector) => {
    const editor = $(selector);
    editor.style.gridTemplateColumns = columns;
    editor.style.columnGap = `${columnGap}px`;
  });

  $("#ladder-name-editor").innerHTML = ladderNames.map((name, index) => `
    <label class="ladder-inline-cell" data-ladder-index="${index}">
      <span class="ladder-pick" title="${escapeAttr(t("runTitle"))}">${index + 1}</span>
      <input class="ladder-name-input" type="text" value="${escapeAttr(name)}" aria-label="${index + 1}${escapeAttr(t("participantAria"))}">
    </label>
  `).join("");

  $("#ladder-result-editor").innerHTML = ladderResults.map((result, index) => `
    <label class="ladder-inline-cell result">
      <input class="ladder-result-input" type="text" value="${escapeAttr(result)}" aria-label="${index + 1}${escapeAttr(t("resultAria"))}">
      <span>${index + 1}</span>
    </label>
  `).join("");

  $$(".ladder-name-input, .ladder-result-input").forEach((input) => {
    input.addEventListener("input", () => {
      readLadderEditor();
      buildLadder();
      drawLadder();
    });
  });

  $$(".ladder-inline-cell[data-ladder-index]").forEach((cell) => {
    cell.addEventListener("click", (event) => {
      if (event.target.tagName === "INPUT") return;
      animateLadder(Number(cell.dataset.ladderIndex));
    });
  });

  $$(".ladder-name-input").forEach((input, index) => {
    input.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      input.blur();
      animateLadder(index);
    });
  });
}

function getLadderNames() {
  readLadderEditor();
  return ladderNames.length ? ladderNames : [`${t("participant")} 1`, `${t("participant")} 2`];
}

function getLadderResults(count) {
  while (ladderResults.length < count) ladderResults.push(`${t("result")} ${ladderResults.length + 1}`);
  return ladderResults.slice(0, count);
}

function buildLadder() {
  const names = getLadderNames();
  const count = names.length;
  const rows = Math.max(7, count + 4);
  ladderSegments = [];

  for (let row = 0; row < rows; row += 1) {
    const blocked = new Set();
    for (let col = 0; col < count - 1; col += 1) {
      if (blocked.has(col) || blocked.has(col - 1)) continue;
      if (Math.random() > 0.48) continue;
      ladderSegments.push({ row, col });
      blocked.add(col);
      blocked.add(col + 1);
    }
  }

  const results = getLadderResults(count);
  ladderMap = names.map((name, startCol) => {
    let col = startCol;
    ladderSegments.forEach((segment) => {
      if (segment.col === col) col += 1;
      else if (segment.col + 1 === col) col -= 1;
    });
    return { name, result: results[col], startCol, endCol: col };
  });
}

function getLadderGeometry(width, height, count) {
  const { usableWidth } = getLadderHorizontal(width, count);
  const left = (width - usableWidth) / 2;
  const right = left + usableWidth;
  const top = 18;
  const bottom = height - 18;
  const gap = count > 1 ? (right - left) / (count - 1) : 0;
  const rows = Math.max(7, count + 4);
  const rowGap = (bottom - top) / rows;
  return { left, right, top, bottom, gap, rows, rowGap };
}

function getLadderPath(startCol, width, height, count) {
  const { left, top, bottom, gap, rowGap } = getLadderGeometry(width, height, count);
  const points = [{ x: left + gap * startCol, y: top }];
  let col = startCol;

  ladderSegments.forEach((segment) => {
    const y = top + rowGap * (segment.row + 0.65);
    if (segment.col === col) {
      points.push({ x: left + gap * col, y });
      col += 1;
      points.push({ x: left + gap * col, y });
    } else if (segment.col + 1 === col) {
      points.push({ x: left + gap * col, y });
      col -= 1;
      points.push({ x: left + gap * col, y });
    }
  });

  points.push({ x: left + gap * col, y: bottom });
  return { points, endCol: col };
}

function drawPath(ctx, points, progress) {
  if (points.length < 2) return;
  const lengths = [];
  let total = 0;

  for (let i = 0; i < points.length - 1; i += 1) {
    const length = Math.hypot(points[i + 1].x - points[i].x, points[i + 1].y - points[i].y);
    lengths.push(length);
    total += length;
  }

  let remaining = total * Math.max(0, Math.min(1, progress));
  ctx.strokeStyle = "#ff2e63";
  ctx.lineWidth = 7;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);

  for (let i = 0; i < lengths.length; i += 1) {
    const from = points[i];
    const to = points[i + 1];
    if (remaining >= lengths[i]) {
      ctx.lineTo(to.x, to.y);
      remaining -= lengths[i];
      continue;
    }
    const ratio = lengths[i] ? remaining / lengths[i] : 0;
    ctx.lineTo(from.x + (to.x - from.x) * ratio, from.y + (to.y - from.y) * ratio);
    break;
  }

  ctx.stroke();
}

function drawLadder(highlightIndex = -1, progress = 1, reveal = false) {
  const { ctx, width, height } = fitCanvas(ladderCanvas);
  const names = getLadderNames();
  const count = names.length;
  const { left, top, bottom, gap, rowGap } = getLadderGeometry(width, height, count);

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fff8ee";
  ctx.fillRect(0, 0, width, height);

  for (let col = 0; col < count; col += 1) {
    const x = left + gap * col;
    ctx.strokeStyle = highlightIndex === col ? "#ff6b6b" : "#4a2d70";
    ctx.lineWidth = highlightIndex === col ? 5 : 3;
    ctx.beginPath();
    ctx.moveTo(x, top);
    ctx.lineTo(x, bottom);
    ctx.stroke();
  }

  if (reveal) {
    ladderSegments.forEach((segment, index) => {
      const y = top + rowGap * (segment.row + 0.65);
      const x1 = left + gap * segment.col;
      const x2 = left + gap * (segment.col + 1);
      ctx.strokeStyle = palette[index % palette.length];
      ctx.lineWidth = 5;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(x1, y);
      ctx.lineTo(x2, y);
      ctx.stroke();
    });
  }

  if (highlightIndex >= 0) {
    const { points } = getLadderPath(highlightIndex, width, height, count);
    drawPath(ctx, points, progress);
  }
}

function shuffleLadder() {
  buildLadder();
  drawLadder();
  setResultKey("ladderPrompt", "ladder");
}

function formatAllLadderResults(selectedIndex = -1) {
  return ladderMap.map((item, index) => {
    const mark = index === selectedIndex ? "★ " : "";
    return `${mark}${item.name} → ${item.result}`;
  }).join(" / ");
}

function showAllLadderResults() {
  readLadderEditor();
  if (!ladderMap.length) buildLadder();
  drawLadder(-1, 1, true);
  setResult(`${t("allResults")}: ${formatAllLadderResults()}`, "ladder");
}

function animateLadder(startIndex) {
  readLadderEditor();
  const names = getLadderNames();
  const started = performance.now();
  const duration = 950;

  function step(now) {
    const t = Math.min(1, (now - started) / duration);
    const ease = 1 - Math.pow(1 - t, 3);
    drawLadder(startIndex, ease, true);
    if (t < 1) {
      requestAnimationFrame(step);
      return;
    }
    const winner = ladderMap[startIndex];
    setResult(`${names[startIndex]} → ${winner.result}`, "ladder");
  }

  requestAnimationFrame(step);
}

function getWheelItems() {
  return parseWeightedSlices($("#wheel-items").value, [`${t("result")} 1`, `${t("result")} 2`, `${t("result")} 3`]).slice(0, 60);
}

function stopWheelSpin(redraw = false) {
  wheelSpinToken += 1;
  if (wheelFrameId) {
    cancelAnimationFrame(wheelFrameId);
    wheelFrameId = 0;
  }
  wheelSpinning = false;
  if (redraw && $(".tool-section.active")?.id === "wheel") {
    drawWheel();
  }
}

function drawWheel(rotation = wheelRotation) {
  const { ctx, width, height } = fitCanvas(wheelCanvas);
  wheelItems = getWheelItems();
  const cx = width / 2;
  const cy = height / 2 + 8;
  const radius = Math.min(width, height) * 0.37;
  const totalWeight = wheelItems.reduce((sum, item) => sum + item.weight, 0);

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#f4fbff";
  ctx.fillRect(0, 0, width, height);

  let cursor = rotation;
  wheelItems.forEach((item, index) => {
    const angle = (Math.PI * 2) * (item.weight / totalWeight);
    const start = cursor;
    const end = start + angle;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, start, end);
    ctx.closePath();
    ctx.fillStyle = palette[index % palette.length];
    ctx.fill();

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(start + angle / 2);
    drawText(ctx, item.label, radius * 0.63, 0, radius * 0.55, Math.max(11, Math.min(16, 230 / wheelItems.length)), 950, "#fff");
    ctx.restore();
    cursor = end;
  });

  ctx.beginPath();
  ctx.arc(cx, cy, radius * 0.18, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#211827";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(cx - 18, cy - radius - 22);
  ctx.lineTo(cx + 18, cy - radius - 22);
  ctx.lineTo(cx, cy - radius + 18);
  ctx.closePath();
  ctx.fillStyle = "#211827";
  ctx.fill();
}

function runWheel() {
  if (wheelSpinning) return;
  wheelSpinning = true;
  const spinToken = wheelSpinToken + 1;
  wheelSpinToken = spinToken;
  const items = getWheelItems();
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  const winningUnit = randomIndex(totalWeight);
  let accumulated = 0;
  let winnerIndex = 0;

  for (let i = 0; i < items.length; i += 1) {
    accumulated += items[i].weight;
    if (winningUnit < accumulated) {
      winnerIndex = i;
      break;
    }
  }

  const beforeWeight = items.slice(0, winnerIndex).reduce((sum, item) => sum + item.weight, 0);
  const centerWeight = beforeWeight + items[winnerIndex].weight / 2;
  const target = -Math.PI / 2 - (Math.PI * 2) * (centerWeight / totalWeight);
  const start = wheelRotation;
  const fullTurn = Math.PI * 2;
  let end = target;
  while (end <= start + fullTurn * 5) {
    end += fullTurn;
  }
  end += fullTurn * 2;
  const duration = 1800;
  const started = performance.now();

  function step(now) {
    if (spinToken !== wheelSpinToken) return;
    const t = Math.min(1, (now - started) / duration);
    const ease = 1 - Math.pow(1 - t, 4);
    wheelRotation = start + (end - start) * ease;
    drawWheel(wheelRotation);
    if (t < 1) {
      wheelFrameId = requestAnimationFrame(step);
      return;
    }
    wheelFrameId = 0;
    wheelSpinning = false;
    setResult(`${t("wheelResult")}: ${items[winnerIndex].label}`, "wheel");
  }

  wheelFrameId = requestAnimationFrame(step);
}

function runNumbers() {
  const start = Number($("#number-start").value) || 1;
  const end = Number($("#number-end").value) || 30;
  const count = Math.max(1, Math.min(100, Number($("#number-count").value) || 1));
  const min = Math.min(start, end);
  const max = Math.max(start, end);
  const excluded = new Set(lines($("#number-exclude").value).map(Number).filter((num) => Number.isFinite(num)));
  const pool = [];

  for (let num = min; num <= max; num += 1) {
    if (!excluded.has(num)) pool.push(num);
  }

  const picks = shuffle(pool).slice(0, Math.min(count, pool.length)).sort((a, b) => a - b);
  if (!picks.length) {
    numberResult.classList.remove("single");
    numberResult.textContent = t("noNumbers");
    setResultKey("noNumbers", "numbers");
    return;
  }

  numberResult.classList.toggle("single", picks.length === 1);
  numberResult.innerHTML = picks.map((pick) => `<span class="ball">${pick}</span>`).join("");
  setResult(picks.join(", "), "numbers");
}

function drawAll() {
  buildLadder();
  drawLadder();
  drawWheel();
}

function drawCurrentTool(toolId) {
  if (toolId === "ladder") {
    buildLadder();
    drawLadder();
  }
  if (toolId === "wheel") drawWheel();
}

function showTool(toolId) {
  const target = $(`#${toolId}`);
  if (!target) {
    showTool("ladder");
    return;
  }
  if (toolId !== "wheel") {
    stopWheelSpin();
  }
  activeToolId = toolId;
  $$(".tool-section").forEach((section) => {
    section.classList.toggle("active", section.id === toolId);
  });
  $$(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tool === toolId);
  });
  history.replaceState(null, "", `#${toolId}`);
  renderToolResult(toolId);
  requestAnimationFrame(() => drawCurrentTool(toolId));
}

$("#ladder-count").addEventListener("input", () => {
  readLadderEditor();
  renderLadderEditor();
  buildLadder();
  drawLadder();
});

ladderCanvas.addEventListener("click", (event) => {
  const names = getLadderNames();
  const rect = ladderCanvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const { left, gap } = getLadderGeometry(rect.width, rect.height, names.length);
  const index = Math.max(0, Math.min(names.length - 1, Math.round((x - left) / gap)));
  animateLadder(index);
});

$$(".primary").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    if (action === "ladder") shuffleLadder();
    if (action === "wheel") runWheel();
    if (action === "numbers") runNumbers();
  });
});

$$(".action").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.action === "ladder-results") {
      showAllLadderResults();
    }
  });
});

$$(".ghost").forEach((button) => {
  button.addEventListener("click", () => {
    const sample = button.dataset.sample;
    if (sample === "ladder") {
      ladderNames = [...translations[currentLang].ladderSamples.names];
      ladderResults = [...translations[currentLang].ladderSamples.results];
      $("#ladder-count").value = ladderNames.length;
      renderLadderEditor();
    }
    if (sample === "wheel") {
      stopWheelSpin();
      $("#wheel-items").value = translations[currentLang].wheelSample;
    }
    if (sample === "numbers") {
      $("#number-start").value = 1;
      $("#number-end").value = 30;
      $("#number-count").value = 1;
      $("#number-exclude").value = "";
      numberResult.classList.remove("single");
      numberResult.textContent = "";
      setResultKey("initialResult", "numbers");
    }
    drawCurrentTool($(".tool-section.active")?.id || "ladder");
  });
});

["wheel-items"].forEach((id) => {
  $(`#${id}`).addEventListener("input", () => {
    stopWheelSpin(true);
    drawCurrentTool($(".tool-section.active")?.id || "ladder");
  });
});

["number-start", "number-end", "number-count", "number-exclude"].forEach((id) => {
  $(`#${id}`).addEventListener("input", () => {
    numberResult.classList.remove("single");
    numberResult.textContent = "";
    setResultKey("initialResult", "numbers");
  });
});

languageSelect?.addEventListener("change", () => {
  stopWheelSpin();
  applyLanguage(languageSelect.value);
});

$$("[data-tool]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showTool(link.dataset.tool);
  });
});

document.addEventListener("pointerdown", (event) => {
  const toolLink = event.target.closest("[data-tool]");
  if (toolLink && toolLink.dataset.tool !== "wheel") {
    stopWheelSpin();
  }
}, { capture: true });

window.addEventListener("resize", () => {
  const activeTool = $(".tool-section.active")?.id || "ladder";
  if (activeTool === "wheel") {
    fitCanvas(wheelCanvas, true);
    if (!wheelSpinning) drawWheel();
    return;
  }
  stopWheelSpin();
  if (activeTool === "ladder") renderLadderEditor();
  drawCurrentTool(activeTool);
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) stopWheelSpin();
});

window.addEventListener("pagehide", () => {
  stopWheelSpin();
});

renderLadderEditor();
applyLanguage(currentLang);
showTool(location.hash.replace("#", "") || "ladder");
