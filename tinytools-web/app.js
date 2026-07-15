const $ = (selector) => document.querySelector(selector);

const languageMeta = {
  en: { label: "EN", locale: "en-US" },
  ko: { label: "KO", locale: "ko-KR" },
  ja: { label: "JA", locale: "ja-JP" },
  es: { label: "ES", locale: "es-ES" }
};

const translations = {
  en: {
    "nav.words": "Words", "nav.images": "Images", "nav.time": "Time", "nav.password": "Password", "nav.percent": "Percent", "nav.units": "Units", "nav.colors": "Colors", "nav.random": "Random",
    "hero.eyebrow": "Fast, free, private", "hero.title": "Everyday web tools that work instantly.", "hero.text": "No signup. No uploads to a server. Start with the tool you need and get back to work.",
    "tools.word": "Word Counter", "tools.image": "Image Resizer", "tools.time": "Time Zone", "tools.timeFull": "Time Zone Converter", "tools.password": "Password", "tools.passwordFull": "Password Generator", "tools.percent": "Percent", "tools.percentFull": "Percentage Calculator", "tools.unit": "Unit Converter", "tools.color": "Color Picker", "tools.random": "Random Picker",
    "sections.writing": "Writing", "sections.images": "Images", "sections.sharing": "Sharing", "sections.remote": "Remote work", "sections.security": "Security", "sections.numbers": "Numbers", "sections.measurements": "Measurements", "sections.design": "Design", "sections.lists": "Lists",
    "word.paste": "Paste text", "word.placeholder": "Paste an email, article, caption, or essay...", "word.characters": "characters", "word.words": "words", "word.sentences": "sentences", "word.readingTime": "reading time", "word.min": "min",
    "image.choose": "Choose image", "image.width": "Width", "image.height": "Height", "image.keepRatio": "Keep aspect ratio", "image.resize": "Resize image", "image.preview": "Image preview",
    "qr.textUrl": "Text or URL", "qr.size": "Size", "qr.generate": "Generate QR", "qr.preview": "QR preview", "qr.best": "Short URLs and text work best.", "qr.empty": "Enter a URL or text to generate a QR code.", "qr.tooLong": "Text is too long for this lightweight QR generator.", "qr.generated": "generated in your browser.",
    "time.pick": "Pick date and time", "time.converted": "Converted time",
    "password.length": "Length", "password.uppercase": "Uppercase", "password.numbers": "Numbers", "password.symbols": "Symbols", "password.generate": "Generate password", "password.click": "Click generate",
    "percent.tabOf": "What is X% of Y?", "percent.tabIncrease": "Increase by X%", "percent.tabChange": "Percent change", "percent.labelPercent": "Percent", "percent.labelNumber": "Number", "percent.labelIncrease": "Increase percent", "percent.labelOld": "Old value", "percent.labelNew": "New value", "percent.of": "{a}% of {b}", "percent.increased": "{a} increased by {b}%", "percent.change": "Change from {a} to {b}",
    "unit.category": "Category", "unit.value": "Value", "unit.converted": "Converted value", "unit.to": "{value} {from} to {to}", "unit.length": "Length", "unit.weight": "Weight", "unit.temperature": "Temperature",
    "color.pick": "Pick color", "color.hex": "Hex", "color.copyHex": "Copy hex",
    "random.onePerLine": "One item per line", "random.pickOne": "Pick one", "random.picked": "Picked item", "random.addList": "Add a list", "random.ready": "{count} {itemWord} ready", "random.item": "item", "random.items": "items",
    "common.downloadPng": "Download PNG", "common.from": "From", "common.to": "To", "common.result": "Result", "common.copy": "Copy", "common.copied": "Copied",
    "footer.local": "TinyTools runs in your browser.", "footer.top": "Back to top"
  },
  ko: {
    "nav.words": "글자", "nav.images": "이미지", "nav.time": "시간", "nav.password": "비밀번호", "nav.percent": "퍼센트", "nav.units": "단위", "nav.colors": "색상", "nav.random": "추첨",
    "hero.eyebrow": "빠르고 무료, 브라우저 안에서 처리", "hero.title": "바로 쓰는 생활 웹도구 모음.", "hero.text": "가입 없이, 서버 업로드 없이 필요한 도구를 바로 사용하세요.",
    "tools.word": "글자 수 계산기", "tools.image": "이미지 리사이저", "tools.time": "시간대 변환", "tools.timeFull": "시간대 변환기", "tools.password": "비밀번호", "tools.passwordFull": "비밀번호 생성기", "tools.percent": "퍼센트", "tools.percentFull": "퍼센트 계산기", "tools.unit": "단위 변환기", "tools.color": "색상 선택기", "tools.random": "랜덤 추첨기",
    "sections.writing": "글쓰기", "sections.images": "이미지", "sections.sharing": "공유", "sections.remote": "원격 업무", "sections.security": "보안", "sections.numbers": "숫자", "sections.measurements": "측정", "sections.design": "디자인", "sections.lists": "목록",
    "word.paste": "텍스트 붙여넣기", "word.placeholder": "이메일, 글, 캡션, 자기소개서 등을 붙여넣으세요...", "word.characters": "글자", "word.words": "단어", "word.sentences": "문장", "word.readingTime": "예상 읽기 시간", "word.min": "분",
    "image.choose": "이미지 선택", "image.width": "가로", "image.height": "세로", "image.keepRatio": "비율 유지", "image.resize": "이미지 크기 변경", "image.preview": "이미지 미리보기",
    "qr.textUrl": "텍스트 또는 URL", "qr.size": "크기", "qr.generate": "QR 생성", "qr.preview": "QR 미리보기", "qr.best": "짧은 URL과 텍스트에 가장 잘 맞아요.", "qr.empty": "QR 코드를 만들 텍스트나 URL을 입력하세요.", "qr.tooLong": "이 가벼운 QR 생성기에는 텍스트가 너무 깁니다.", "qr.generated": "브라우저에서 생성됨",
    "time.pick": "날짜와 시간 선택", "time.converted": "변환된 시간",
    "password.length": "길이", "password.uppercase": "대문자", "password.numbers": "숫자", "password.symbols": "특수문자", "password.generate": "비밀번호 생성", "password.click": "생성을 누르세요",
    "percent.tabOf": "Y의 X%는?", "percent.tabIncrease": "X% 증가", "percent.tabChange": "변화율", "percent.labelPercent": "퍼센트", "percent.labelNumber": "숫자", "percent.labelIncrease": "증가 퍼센트", "percent.labelOld": "이전 값", "percent.labelNew": "새 값", "percent.of": "{b}의 {a}%", "percent.increased": "{a}을/를 {b}% 증가", "percent.change": "{a}에서 {b}로 변화",
    "unit.category": "분류", "unit.value": "값", "unit.converted": "변환된 값", "unit.to": "{value} {from}에서 {to}로", "unit.length": "길이", "unit.weight": "무게", "unit.temperature": "온도",
    "color.pick": "색상 선택", "color.hex": "HEX", "color.copyHex": "HEX 복사",
    "random.onePerLine": "한 줄에 하나씩 입력", "random.pickOne": "하나 뽑기", "random.picked": "선택된 항목", "random.addList": "목록을 입력하세요", "random.ready": "{count}개 준비됨", "random.item": "항목", "random.items": "항목",
    "common.downloadPng": "PNG 다운로드", "common.from": "변환 전", "common.to": "변환 후", "common.result": "결과", "common.copy": "복사", "common.copied": "복사됨",
    "footer.local": "TinyTools는 브라우저에서 실행됩니다.", "footer.top": "맨 위로"
  },
  ja: {
    "nav.words": "文字", "nav.images": "画像", "nav.time": "時間", "nav.password": "パスワード", "nav.percent": "割合", "nav.units": "単位", "nav.colors": "色", "nav.random": "抽選",
    "hero.eyebrow": "高速、無料、プライベート", "hero.title": "すぐ使える日常ウェブツール。", "hero.text": "登録なし。サーバーへのアップロードなし。必要なツールをすぐ使えます。",
    "tools.word": "文字数カウンター", "tools.image": "画像リサイズ", "tools.time": "タイムゾーン", "tools.timeFull": "タイムゾーン変換", "tools.password": "パスワード", "tools.passwordFull": "パスワード生成", "tools.percent": "割合", "tools.percentFull": "割合計算", "tools.unit": "単位変換", "tools.color": "カラーピッカー", "tools.random": "ランダム抽選",
    "sections.writing": "文章", "sections.images": "画像", "sections.sharing": "共有", "sections.remote": "リモート作業", "sections.security": "セキュリティ", "sections.numbers": "数字", "sections.measurements": "計測", "sections.design": "デザイン", "sections.lists": "リスト",
    "word.paste": "テキストを貼り付け", "word.placeholder": "メール、記事、キャプション、文章を貼り付け...", "word.characters": "文字", "word.words": "単語", "word.sentences": "文", "word.readingTime": "読了時間", "word.min": "分",
    "image.choose": "画像を選択", "image.width": "幅", "image.height": "高さ", "image.keepRatio": "比率を維持", "image.resize": "画像をリサイズ", "image.preview": "画像プレビュー",
    "qr.textUrl": "テキストまたはURL", "qr.size": "サイズ", "qr.generate": "QR生成", "qr.preview": "QRプレビュー", "qr.best": "短いURLやテキストがおすすめです。", "qr.empty": "QRコードにするURLかテキストを入力してください。", "qr.tooLong": "この軽量QR生成器にはテキストが長すぎます。", "qr.generated": "ブラウザで生成済み",
    "time.pick": "日時を選択", "time.converted": "変換後の時間",
    "password.length": "長さ", "password.uppercase": "大文字", "password.numbers": "数字", "password.symbols": "記号", "password.generate": "パスワード生成", "password.click": "生成をクリック",
    "percent.tabOf": "YのX%は？", "percent.tabIncrease": "X%増加", "percent.tabChange": "変化率", "percent.labelPercent": "割合", "percent.labelNumber": "数値", "percent.labelIncrease": "増加率", "percent.labelOld": "元の値", "percent.labelNew": "新しい値", "percent.of": "{b}の{a}%", "percent.increased": "{a}を{b}%増加", "percent.change": "{a}から{b}への変化",
    "unit.category": "カテゴリ", "unit.value": "値", "unit.converted": "変換結果", "unit.to": "{value} {from} から {to}", "unit.length": "長さ", "unit.weight": "重さ", "unit.temperature": "温度",
    "color.pick": "色を選択", "color.hex": "HEX", "color.copyHex": "HEXをコピー",
    "random.onePerLine": "1行に1項目", "random.pickOne": "1つ選ぶ", "random.picked": "選ばれた項目", "random.addList": "リストを追加", "random.ready": "{count}件準備完了", "random.item": "項目", "random.items": "項目",
    "common.downloadPng": "PNGダウンロード", "common.from": "変換元", "common.to": "変換先", "common.result": "結果", "common.copy": "コピー", "common.copied": "コピー済み",
    "footer.local": "TinyToolsはブラウザで動作します。", "footer.top": "トップへ"
  },
  es: {
    "nav.words": "Texto", "nav.images": "Imágenes", "nav.time": "Hora", "nav.password": "Clave", "nav.percent": "Porcentaje", "nav.units": "Unidades", "nav.colors": "Colores", "nav.random": "Azar",
    "hero.eyebrow": "Rápido, gratis y privado", "hero.title": "Herramientas web cotidianas al instante.", "hero.text": "Sin registro. Sin subir archivos a un servidor. Elige una herramienta y sigue trabajando.",
    "tools.word": "Contador de palabras", "tools.image": "Redimensionar imagen", "tools.time": "Zona horaria", "tools.timeFull": "Conversor de zona horaria", "tools.password": "Contraseña", "tools.passwordFull": "Generador de contraseñas", "tools.percent": "Porcentaje", "tools.percentFull": "Calculadora de porcentajes", "tools.unit": "Conversor de unidades", "tools.color": "Selector de color", "tools.random": "Selector aleatorio",
    "sections.writing": "Escritura", "sections.images": "Imágenes", "sections.sharing": "Compartir", "sections.remote": "Trabajo remoto", "sections.security": "Seguridad", "sections.numbers": "Números", "sections.measurements": "Medidas", "sections.design": "Diseño", "sections.lists": "Listas",
    "word.paste": "Pegar texto", "word.placeholder": "Pega un correo, artículo, descripción o ensayo...", "word.characters": "caracteres", "word.words": "palabras", "word.sentences": "frases", "word.readingTime": "tiempo de lectura", "word.min": "min",
    "image.choose": "Elegir imagen", "image.width": "Ancho", "image.height": "Alto", "image.keepRatio": "Mantener proporción", "image.resize": "Redimensionar imagen", "image.preview": "Vista previa",
    "qr.textUrl": "Texto o URL", "qr.size": "Tamaño", "qr.generate": "Generar QR", "qr.preview": "Vista QR", "qr.best": "Funciona mejor con URLs y textos cortos.", "qr.empty": "Introduce una URL o texto para generar un QR.", "qr.tooLong": "El texto es demasiado largo para este generador ligero.", "qr.generated": "generado en tu navegador",
    "time.pick": "Elegir fecha y hora", "time.converted": "Hora convertida",
    "password.length": "Longitud", "password.uppercase": "Mayúsculas", "password.numbers": "Números", "password.symbols": "Símbolos", "password.generate": "Generar contraseña", "password.click": "Pulsa generar",
    "percent.tabOf": "¿X% de Y?", "percent.tabIncrease": "Aumentar X%", "percent.tabChange": "Cambio porcentual", "percent.labelPercent": "Porcentaje", "percent.labelNumber": "Número", "percent.labelIncrease": "Porcentaje de aumento", "percent.labelOld": "Valor anterior", "percent.labelNew": "Nuevo valor", "percent.of": "{a}% de {b}", "percent.increased": "{a} aumentado en {b}%", "percent.change": "Cambio de {a} a {b}",
    "unit.category": "Categoría", "unit.value": "Valor", "unit.converted": "Valor convertido", "unit.to": "{value} {from} a {to}", "unit.length": "Longitud", "unit.weight": "Peso", "unit.temperature": "Temperatura",
    "color.pick": "Elegir color", "color.hex": "Hex", "color.copyHex": "Copiar hex",
    "random.onePerLine": "Un elemento por línea", "random.pickOne": "Elegir uno", "random.picked": "Elemento elegido", "random.addList": "Añade una lista", "random.ready": "{count} {itemWord} listos", "random.item": "elemento", "random.items": "elementos",
    "common.downloadPng": "Descargar PNG", "common.from": "De", "common.to": "A", "common.result": "Resultado", "common.copy": "Copiar", "common.copied": "Copiado",
    "footer.local": "TinyTools funciona en tu navegador.", "footer.top": "Volver arriba"
  }
};

let currentLang = localStorage.getItem("tinytools-lang") || "en";

function t(key, replacements = {}) {
  const template = translations[currentLang]?.[key] || translations.en[key] || key;
  return Object.entries(replacements).reduce((text, [name, value]) => text.replaceAll(`{${name}}`, value), template);
}

function applyLanguage(lang) {
  currentLang = translations[lang] ? lang : "en";
  localStorage.setItem("tinytools-lang", currentLang);
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });

  $("#current-lang").textContent = languageMeta[currentLang].label;
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLang);
  });

  updateWordStats();
  if (!sourceImage) drawPlaceholder();
  if (qrInput.value.trim()) {
    renderQr();
  } else {
    drawQrPlaceholder();
    qrStatus.textContent = t("qr.best");
  }
  updateTime();
  updatePercentLabels();
  updatePercent();
  updateUnit();
  updateRandomCount();
}

const languageToggle = $("#language-toggle");
const languageOptions = $("#language-options");

languageToggle.addEventListener("click", () => {
  const isOpen = languageOptions.classList.toggle("open");
  languageToggle.setAttribute("aria-expanded", String(isOpen));
});

languageOptions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lang]");
  if (!button) return;
  applyLanguage(button.dataset.lang);
  languageOptions.classList.remove("open");
  languageToggle.setAttribute("aria-expanded", "false");
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".language-menu")) {
    languageOptions.classList.remove("open");
    languageToggle.setAttribute("aria-expanded", "false");
  }
});

const wordInput = $("#word-input");
const charCount = $("#char-count");
const wordCount = $("#word-count");
const sentenceCount = $("#sentence-count");
const readTime = $("#read-time");

function updateWordStats() {
  const text = wordInput.value.trim();
  const words = text ? text.match(/\S+/g) || [] : [];
  const sentences = text ? text.split(/[.!?]+/).filter((item) => item.trim().length > 0) : [];
  charCount.textContent = wordInput.value.length.toLocaleString();
  wordCount.textContent = words.length.toLocaleString();
  sentenceCount.textContent = sentences.length.toLocaleString();
  readTime.textContent = `${Math.max(0, Math.ceil(words.length / 220))} ${t("word.min")}`;
}

wordInput.addEventListener("input", updateWordStats);
updateWordStats();

const imageInput = $("#image-input");
const widthInput = $("#image-width");
const heightInput = $("#image-height");
const lockRatio = $("#lock-ratio");
const resizeButton = $("#resize-button");
const canvas = $("#image-canvas");
const ctx = canvas.getContext("2d");
const downloadImage = $("#download-image");
let sourceImage = null;
let sourceRatio = 1;

function drawPlaceholder() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#687174";
  ctx.font = "20px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(t("image.preview"), canvas.width / 2, canvas.height / 2);
}

drawPlaceholder();

imageInput.addEventListener("change", () => {
  const file = imageInput.files && imageInput.files[0];
  if (!file) return;

  const image = new Image();
  image.onload = () => {
    sourceImage = image;
    sourceRatio = image.width / image.height;
    widthInput.value = image.width;
    heightInput.value = image.height;
    renderResizedImage(image.width, image.height);
  };
  image.src = URL.createObjectURL(file);
});

widthInput.addEventListener("input", () => {
  if (lockRatio.checked && sourceImage && widthInput.value) {
    heightInput.value = Math.round(Number(widthInput.value) / sourceRatio);
  }
});

heightInput.addEventListener("input", () => {
  if (lockRatio.checked && sourceImage && heightInput.value) {
    widthInput.value = Math.round(Number(heightInput.value) * sourceRatio);
  }
});

function renderResizedImage(width, height) {
  if (!sourceImage || width < 1 || height < 1) return;
  canvas.width = width;
  canvas.height = height;
  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(sourceImage, 0, 0, width, height);
  downloadImage.href = canvas.toDataURL("image/png");
  downloadImage.classList.remove("disabled");
}

resizeButton.addEventListener("click", () => {
  renderResizedImage(Number(widthInput.value), Number(heightInput.value));
});

const qrInput = $("#qr-input");
const qrSize = $("#qr-size");
const makeQr = $("#make-qr");
const qrCanvas = $("#qr-canvas");
const qrCtx = qrCanvas.getContext("2d");
const downloadQr = $("#download-qr");
const qrStatus = $("#qr-status");

const qrVersions = [
  null,
  { size: 21, data: 19, ecc: 7, align: [] },
  { size: 25, data: 34, ecc: 10, align: [6, 18] },
  { size: 29, data: 55, ecc: 15, align: [6, 22] },
  { size: 33, data: 80, ecc: 20, align: [6, 26] },
  { size: 37, data: 108, ecc: 26, align: [6, 30] }
];

function drawQrPlaceholder() {
  qrCtx.fillStyle = "#ffffff";
  qrCtx.fillRect(0, 0, qrCanvas.width, qrCanvas.height);
  qrCtx.fillStyle = "#687174";
  qrCtx.font = "18px sans-serif";
  qrCtx.textAlign = "center";
  qrCtx.fillText(t("qr.preview"), qrCanvas.width / 2, qrCanvas.height / 2);
}

function makeGfTables() {
  const exp = new Array(512).fill(0);
  const log = new Array(256).fill(0);
  let value = 1;
  for (let i = 0; i < 255; i += 1) {
    exp[i] = value;
    log[value] = i;
    value <<= 1;
    if (value & 0x100) value ^= 0x11d;
  }
  for (let i = 255; i < 512; i += 1) exp[i] = exp[i - 255];
  return { exp, log };
}

const gf = makeGfTables();

function gfMul(a, b) {
  if (a === 0 || b === 0) return 0;
  return gf.exp[gf.log[a] + gf.log[b]];
}

function rsGenerator(degree) {
  let poly = [1];
  for (let i = 0; i < degree; i += 1) {
    const next = new Array(poly.length + 1).fill(0);
    for (let j = 0; j < poly.length; j += 1) {
      next[j] ^= poly[j];
      next[j + 1] ^= gfMul(poly[j], gf.exp[i]);
    }
    poly = next;
  }
  return poly.slice(1);
}

function rsRemainder(data, degree) {
  const generator = rsGenerator(degree);
  const result = new Array(degree).fill(0);
  data.forEach((byte) => {
    const factor = byte ^ result.shift();
    result.push(0);
    for (let i = 0; i < degree; i += 1) {
      result[i] ^= gfMul(generator[i], factor);
    }
  });
  return result;
}

function pushBits(bits, value, length) {
  for (let i = length - 1; i >= 0; i -= 1) {
    bits.push((value >>> i) & 1);
  }
}

function bitsToBytes(bits) {
  const bytes = [];
  for (let i = 0; i < bits.length; i += 8) {
    let value = 0;
    for (let j = 0; j < 8; j += 1) value = (value << 1) | (bits[i + j] || 0);
    bytes.push(value);
  }
  return bytes;
}

function chooseQrVersion(bytes) {
  for (let version = 1; version <= 5; version += 1) {
    if (4 + 8 + bytes.length * 8 <= qrVersions[version].data * 8) return version;
  }
  return null;
}

function buildQrCodewords(text) {
  const bytes = Array.from(new TextEncoder().encode(text));
  const version = chooseQrVersion(bytes);
  if (!version) return null;
  const spec = qrVersions[version];
  const bits = [];
  pushBits(bits, 0b0100, 4);
  pushBits(bits, bytes.length, 8);
  bytes.forEach((byte) => pushBits(bits, byte, 8));
  const remaining = spec.data * 8 - bits.length;
  pushBits(bits, 0, Math.min(4, remaining));
  while (bits.length % 8 !== 0) bits.push(0);

  const data = bitsToBytes(bits);
  const pads = [0xec, 0x11];
  let padIndex = 0;
  while (data.length < spec.data) {
    data.push(pads[padIndex % 2]);
    padIndex += 1;
  }
  return { version, bytes: data.concat(rsRemainder(data, spec.ecc)) };
}

function makeMatrix(size) {
  return {
    modules: Array.from({ length: size }, () => new Array(size).fill(false)),
    reserved: Array.from({ length: size }, () => new Array(size).fill(false))
  };
}

function setModule(matrix, x, y, dark, reserve = true) {
  if (x < 0 || y < 0 || y >= matrix.modules.length || x >= matrix.modules.length) return;
  matrix.modules[y][x] = Boolean(dark);
  if (reserve) matrix.reserved[y][x] = true;
}

function drawFinder(matrix, x, y) {
  for (let dy = -1; dy <= 7; dy += 1) {
    for (let dx = -1; dx <= 7; dx += 1) {
      const xx = x + dx;
      const yy = y + dy;
      const inFinder = dx >= 0 && dx <= 6 && dy >= 0 && dy <= 6;
      const border = dx === 0 || dx === 6 || dy === 0 || dy === 6;
      const center = dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4;
      setModule(matrix, xx, yy, inFinder && (border || center), true);
    }
  }
}

function drawAlignment(matrix, cx, cy) {
  for (let dy = -2; dy <= 2; dy += 1) {
    for (let dx = -2; dx <= 2; dx += 1) {
      const edge = Math.max(Math.abs(dx), Math.abs(dy)) === 2;
      const center = dx === 0 && dy === 0;
      setModule(matrix, cx + dx, cy + dy, edge || center, true);
    }
  }
}

function drawQrPatterns(matrix, version) {
  const size = matrix.modules.length;
  drawFinder(matrix, 0, 0);
  drawFinder(matrix, size - 7, 0);
  drawFinder(matrix, 0, size - 7);

  for (let i = 8; i < size - 8; i += 1) {
    setModule(matrix, i, 6, i % 2 === 0, true);
    setModule(matrix, 6, i, i % 2 === 0, true);
  }

  qrVersions[version].align.forEach((x) => {
    qrVersions[version].align.forEach((y) => {
      const nearTop = y < 9;
      const nearLeft = x < 9;
      const nearRight = x > size - 10;
      if ((nearTop && nearLeft) || (nearTop && nearRight) || (y > size - 10 && nearLeft)) return;
      drawAlignment(matrix, x, y);
    });
  });

  setModule(matrix, 8, 4 * version + 9, true, true);

  for (let i = 0; i < 9; i += 1) {
    if (i !== 6) {
      matrix.reserved[8][i] = true;
      matrix.reserved[i][8] = true;
    }
  }
  for (let i = 0; i < 8; i += 1) {
    matrix.reserved[8][size - 1 - i] = true;
    matrix.reserved[size - 1 - i][8] = true;
  }
}

function maskBit(mask, x, y) {
  if (mask === 0) return (x + y) % 2 === 0;
  if (mask === 1) return y % 2 === 0;
  if (mask === 2) return x % 3 === 0;
  return (x + y) % 3 === 0;
}

function placeData(matrix, codewords, mask) {
  const bits = [];
  codewords.forEach((byte) => pushBits(bits, byte, 8));
  const size = matrix.modules.length;
  let bitIndex = 0;
  let upward = true;

  for (let right = size - 1; right >= 1; right -= 2) {
    if (right === 6) right -= 1;
    for (let rowStep = 0; rowStep < size; rowStep += 1) {
      const y = upward ? size - 1 - rowStep : rowStep;
      for (let col = 0; col < 2; col += 1) {
        const x = right - col;
        if (matrix.reserved[y][x]) continue;
        const raw = bitIndex < bits.length ? bits[bitIndex] === 1 : false;
        bitIndex += 1;
        setModule(matrix, x, y, raw !== maskBit(mask, x, y), false);
      }
    }
    upward = !upward;
  }
}

function getFormatBits(mask) {
  let data = (0b01 << 3) | mask;
  let bits = data << 10;
  const generator = 0x537;
  for (let i = 14; i >= 10; i -= 1) {
    if ((bits >>> i) & 1) bits ^= generator << (i - 10);
  }
  return ((data << 10) | bits) ^ 0x5412;
}

function drawFormatBits(matrix, mask) {
  const size = matrix.modules.length;
  const bits = getFormatBits(mask);
  const first = [
    [8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 7], [8, 8],
    [7, 8], [5, 8], [4, 8], [3, 8], [2, 8], [1, 8], [0, 8]
  ];

  for (let i = 0; i < 15; i += 1) {
    const dark = ((bits >>> i) & 1) === 1;
    setModule(matrix, first[i][0], first[i][1], dark, true);
  }
  for (let i = 0; i < 8; i += 1) setModule(matrix, size - 1 - i, 8, ((bits >>> i) & 1) === 1, true);
  for (let i = 8; i < 15; i += 1) setModule(matrix, 8, size - 15 + i, ((bits >>> i) & 1) === 1, true);
}

function generateQrMatrix(text) {
  const payload = buildQrCodewords(text);
  if (!payload) return null;
  const matrix = makeMatrix(qrVersions[payload.version].size);
  const mask = 0;
  drawQrPatterns(matrix, payload.version);
  placeData(matrix, payload.bytes, mask);
  drawFormatBits(matrix, mask);
  return matrix.modules;
}

function renderQr() {
  const text = qrInput.value.trim();
  const size = Number(qrSize.value);
  qrCanvas.width = size;
  qrCanvas.height = size;
  if (!text) {
    drawQrPlaceholder();
    downloadQr.classList.add("disabled");
    qrStatus.textContent = t("qr.empty");
    return;
  }

  const modules = generateQrMatrix(text);
  if (!modules) {
    drawQrPlaceholder();
    downloadQr.classList.add("disabled");
    qrStatus.textContent = t("qr.tooLong");
    return;
  }

  const quiet = 4;
  const cells = modules.length + quiet * 2;
  const scale = Math.floor(size / cells);
  const offset = Math.floor((size - cells * scale) / 2);
  qrCtx.fillStyle = "#ffffff";
  qrCtx.fillRect(0, 0, size, size);
  qrCtx.fillStyle = "#11181b";
  modules.forEach((row, y) => {
    row.forEach((dark, x) => {
      if (dark) qrCtx.fillRect(offset + (x + quiet) * scale, offset + (y + quiet) * scale, scale, scale);
    });
  });
  downloadQr.href = qrCanvas.toDataURL("image/png");
  downloadQr.classList.remove("disabled");
  qrStatus.textContent = `${modules.length} x ${modules.length} modules, ${t("qr.generated")}`;
}

makeQr.addEventListener("click", renderQr);
qrInput.addEventListener("input", renderQr);
qrSize.addEventListener("input", renderQr);
drawQrPlaceholder();

const zones = [
  "UTC",
  "America/New_York",
  "America/Los_Angeles",
  "Europe/London",
  "Europe/Paris",
  "Asia/Seoul",
  "Asia/Tokyo",
  "Asia/Singapore",
  "Australia/Sydney"
];

const fromZone = $("#from-zone");
const toZone = $("#to-zone");
const timeInput = $("#time-input");
const convertedTime = $("#converted-time");
const convertedZone = $("#converted-zone");

function fillZones() {
  zones.forEach((zone) => {
    fromZone.add(new Option(zone, zone));
    toZone.add(new Option(zone, zone));
  });
  fromZone.value = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  if (!zones.includes(fromZone.value)) fromZone.value = "UTC";
  toZone.value = "America/New_York";

  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  timeInput.value = now.toISOString().slice(0, 16);
}

function getParts(date, timeZone) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).formatToParts(date);
  return Object.fromEntries(parts.map((part) => [part.type, part.value]));
}

function zonedTimeToDate(localValue, timeZone) {
  const [datePart, timePart] = localValue.split("T");
  const [year, month, day] = datePart.split("-").map(Number);
  const [hour, minute] = timePart.split(":").map(Number);
  const utcGuess = new Date(Date.UTC(year, month - 1, day, hour, minute));
  const parts = getParts(utcGuess, timeZone);
  const asUTC = Date.UTC(parts.year, Number(parts.month) - 1, parts.day, parts.hour, parts.minute, parts.second);
  const wantedUTC = Date.UTC(year, month - 1, day, hour, minute, 0);
  return new Date(utcGuess.getTime() + wantedUTC - asUTC);
}

function updateTime() {
  if (!timeInput.value) return;
  const date = zonedTimeToDate(timeInput.value, fromZone.value);
  convertedTime.textContent = new Intl.DateTimeFormat(languageMeta[currentLang].locale, {
    timeZone: toZone.value,
    dateStyle: "full",
    timeStyle: "short"
  }).format(date);
  convertedZone.textContent = toZone.value;
}

fillZones();
[fromZone, toZone, timeInput].forEach((element) => element.addEventListener("input", updateTime));
updateTime();

const passwordLength = $("#password-length");
const lengthValue = $("#length-value");
const passwordResult = $("#password-result");
const generatePassword = $("#generate-password");
const copyPassword = $("#copy-password");

function buildPassword() {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{};:,.?";
  let pool = lower;
  if ($("#include-uppercase").checked) pool += upper;
  if ($("#include-numbers").checked) pool += numbers;
  if ($("#include-symbols").checked) pool += symbols;

  const bytes = new Uint32Array(Number(passwordLength.value));
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (value) => pool[value % pool.length]).join("");
}

function updateLengthLabel() {
  lengthValue.textContent = passwordLength.value;
}

passwordLength.addEventListener("input", updateLengthLabel);
generatePassword.addEventListener("click", () => {
  passwordResult.textContent = buildPassword();
});
copyPassword.addEventListener("click", async () => {
  await navigator.clipboard.writeText(passwordResult.textContent);
  copyPassword.textContent = t("common.copied");
  setTimeout(() => {
    copyPassword.textContent = t("common.copy");
  }, 1200);
});
updateLengthLabel();

const tabs = document.querySelectorAll(".tab");
const percentA = $("#percent-a");
const percentB = $("#percent-b");
const percentResult = $("#percent-result");
const percentExplain = $("#percent-explain");
const percentALabel = $("#percent-a-label");
const percentBLabel = $("#percent-b-label");
let percentMode = "of";

function updatePercentLabels() {
  if (percentMode === "of") {
    percentALabel.firstChild.nodeValue = t("percent.labelPercent");
    percentBLabel.firstChild.nodeValue = t("percent.labelNumber");
  } else if (percentMode === "increase") {
    percentALabel.firstChild.nodeValue = t("percent.labelNumber");
    percentBLabel.firstChild.nodeValue = t("percent.labelIncrease");
  } else {
    percentALabel.firstChild.nodeValue = t("percent.labelOld");
    percentBLabel.firstChild.nodeValue = t("percent.labelNew");
  }
}

function updatePercent() {
  const a = Number(percentA.value);
  const b = Number(percentB.value);
  let result = 0;
  let explain = "";

  if (percentMode === "of") {
    result = (a / 100) * b;
    explain = t("percent.of", { a, b });
  } else if (percentMode === "increase") {
    result = a * (1 + b / 100);
    explain = t("percent.increased", { a, b });
  } else {
    result = a === 0 ? 0 : ((b - a) / Math.abs(a)) * 100;
    explain = t("percent.change", { a, b });
  }

  percentResult.textContent = Number.isFinite(result) ? result.toLocaleString(undefined, { maximumFractionDigits: 4 }) : "0";
  percentExplain.textContent = explain;
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    percentMode = tab.dataset.mode;
    updatePercentLabels();
    updatePercent();
  });
});

[percentA, percentB].forEach((element) => element.addEventListener("input", updatePercent));
updatePercentLabels();
updatePercent();

const unitCategory = $("#unit-category");
const unitValue = $("#unit-value");
const unitFrom = $("#unit-from");
const unitTo = $("#unit-to");
const unitResult = $("#unit-result");
const unitExplain = $("#unit-explain");

const unitData = {
  length: {
    base: "meter",
    units: {
      meter: 1,
      kilometer: 1000,
      centimeter: 0.01,
      millimeter: 0.001,
      inch: 0.0254,
      foot: 0.3048,
      yard: 0.9144,
      mile: 1609.344
    }
  },
  weight: {
    base: "gram",
    units: {
      gram: 1,
      kilogram: 1000,
      milligram: 0.001,
      ounce: 28.349523125,
      pound: 453.59237
    }
  },
  temperature: {
    units: {
      celsius: "celsius",
      fahrenheit: "fahrenheit",
      kelvin: "kelvin"
    }
  }
};

function fillUnitOptions() {
  const selected = unitData[unitCategory.value].units;
  unitFrom.innerHTML = "";
  unitTo.innerHTML = "";
  Object.keys(selected).forEach((unit) => {
    unitFrom.add(new Option(unit, unit));
    unitTo.add(new Option(unit, unit));
  });
  unitTo.selectedIndex = Math.min(1, unitTo.options.length - 1);
  updateUnit();
}

function toCelsius(value, unit) {
  if (unit === "fahrenheit") return (value - 32) * (5 / 9);
  if (unit === "kelvin") return value - 273.15;
  return value;
}

function fromCelsius(value, unit) {
  if (unit === "fahrenheit") return value * (9 / 5) + 32;
  if (unit === "kelvin") return value + 273.15;
  return value;
}

function updateUnit() {
  const value = Number(unitValue.value);
  const category = unitCategory.value;
  let result = 0;

  if (category === "temperature") {
    result = fromCelsius(toCelsius(value, unitFrom.value), unitTo.value);
  } else {
    const units = unitData[category].units;
    result = (value * units[unitFrom.value]) / units[unitTo.value];
  }

  unitResult.textContent = Number.isFinite(result) ? result.toLocaleString(undefined, { maximumFractionDigits: 6 }) : "0";
  unitExplain.textContent = t("unit.to", { value: value || 0, from: unitFrom.value, to: unitTo.value });
}

unitCategory.addEventListener("change", fillUnitOptions);
[unitValue, unitFrom, unitTo].forEach((element) => element.addEventListener("input", updateUnit));
fillUnitOptions();

const colorInput = $("#color-input");
const hexValue = $("#hex-value");
const colorSwatch = $("#color-swatch");
const colorHex = $("#color-hex");
const colorRgb = $("#color-rgb");
const colorHsl = $("#color-hsl");
const copyColor = $("#copy-color");

function normalizeHex(value) {
  const cleaned = value.trim().replace("#", "");
  if (/^[0-9a-fA-F]{3}$/.test(cleaned)) {
    return `#${cleaned.split("").map((char) => char + char).join("")}`.toLowerCase();
  }
  if (/^[0-9a-fA-F]{6}$/.test(cleaned)) {
    return `#${cleaned}`.toLowerCase();
  }
  return null;
}

function hexToRgb(hex) {
  const value = normalizeHex(hex);
  if (!value) return null;
  return {
    r: parseInt(value.slice(1, 3), 16),
    g: parseInt(value.slice(3, 5), 16),
    b: parseInt(value.slice(5, 7), 16)
  };
}

function rgbToHsl({ r, g, b }) {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const light = (max + min) / 2;
  const delta = max - min;
  let hue = 0;
  let sat = 0;

  if (delta !== 0) {
    sat = delta / (1 - Math.abs(2 * light - 1));
    if (max === red) hue = ((green - blue) / delta) % 6;
    if (max === green) hue = (blue - red) / delta + 2;
    if (max === blue) hue = (red - green) / delta + 4;
    hue = Math.round(hue * 60);
    if (hue < 0) hue += 360;
  }

  return `hsl(${hue}, ${Math.round(sat * 100)}%, ${Math.round(light * 100)}%)`;
}

function updateColor(value) {
  const hex = normalizeHex(value);
  if (!hex) return;
  const rgb = hexToRgb(hex);
  colorInput.value = hex;
  hexValue.value = hex;
  colorSwatch.style.background = hex;
  colorHex.textContent = hex;
  colorRgb.textContent = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  colorHsl.textContent = rgbToHsl(rgb);
}

colorInput.addEventListener("input", () => updateColor(colorInput.value));
hexValue.addEventListener("input", () => updateColor(hexValue.value));
copyColor.addEventListener("click", async () => {
  await navigator.clipboard.writeText(colorHex.textContent);
  copyColor.textContent = t("common.copied");
  setTimeout(() => {
    copyColor.textContent = t("color.copyHex");
  }, 1200);
});
updateColor(colorInput.value);

const randomInput = $("#random-input");
const pickRandom = $("#pick-random");
const randomResult = $("#random-result");
const randomCount = $("#random-count");

function getRandomItems() {
  return randomInput.value
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function updateRandomCount() {
  const count = getRandomItems().length;
  randomCount.textContent = t("random.ready", {
    count,
    itemWord: count === 1 ? t("random.item") : t("random.items")
  });
}

randomInput.addEventListener("input", updateRandomCount);
pickRandom.addEventListener("click", () => {
  const items = getRandomItems();
  if (items.length === 0) {
    randomResult.textContent = t("random.addList");
    updateRandomCount();
    return;
  }
  const index = crypto.getRandomValues(new Uint32Array(1))[0] % items.length;
  randomResult.textContent = items[index];
  updateRandomCount();
});
updateRandomCount();
applyLanguage(currentLang);

let deferredInstallPrompt = null;
const installAppButton = $("#install-app");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  if (installAppButton) installAppButton.hidden = false;
});

if (installAppButton) {
  installAppButton.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    installAppButton.hidden = true;
  });
}

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  if (installAppButton) installAppButton.hidden = true;
});

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

const adsenseConfig = {
  client: "ca-pub-9614308858326044"
};

function hasRealAdsenseClient(client) {
  return /^ca-pub-\d{16}$/.test(client);
}

function hasRealAdsenseSlot(slot) {
  return /^\d+$/.test(slot);
}

function setupAdsense() {
  if (!hasRealAdsenseClient(adsenseConfig.client)) return;

  document.documentElement.classList.add("adsense-enabled");
  const slots = Array.from(document.querySelectorAll(".adsbygoogle")).filter((slot) =>
    hasRealAdsenseSlot(slot.dataset.adSlot || "")
  );

  slots.forEach((slot) => {
    slot.dataset.adClient = adsenseConfig.client;
  });

  const loadSlots = () => {
    slots.forEach(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (_) {}
    });
  };

  const existingScript = document.querySelector(`script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]`);
  if (existingScript) {
    existingScript.addEventListener("load", loadSlots, { once: true });
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.crossOrigin = "anonymous";
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseConfig.client}`;
  script.onload = loadSlots;
  document.head.appendChild(script);
}

setupAdsense();
