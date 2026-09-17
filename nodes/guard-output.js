// Guard Output (строгий режим).
// Ставится между Basic LLM Chain и узлом «Публиковать?».
// Ничего не подменяет: либо отдаёт годный текст (ok: true), либо помечает
// отбраковку (ok: false) с причиной. Решение о публикации — у следующего узла.

let src = {};
try { src = $('Remove Duplicates').item.json || {}; } catch (e) { src = {}; }
let sourceName = '';
try { sourceName = ($('Pick Source').item.json || {}).sourceName || ''; } catch (e) { sourceName = ''; }

const title = String(src.title || '').trim();
const link = String(src.link || '').trim();

const reject = (reason) => ({
  json: { ok: false, reason, title, link, sourceName }
});

const rawField = $json.text;
if (rawField === undefined || rawField === null) return reject('модель не вернула поле text');

let text = String(rawField).replace(/<think[\s\S]*?<\/think>\s*/gi, '').trim();
if (!text) return reject('пустой ответ модели');

// --- признаки вырожденного вывода ---
const len = text.length;
if (len < 200) return reject('слишком короткий текст: ' + len + ' симв.');
if (len > 3500) return reject('слишком длинный текст: ' + len + ' симв.');

const cyr = (text.match(/[а-яёА-ЯЁ]/g) || []).length;
if (cyr < 100) return reject('мало кириллицы: ' + cyr + ' симв. при длине ' + len);

const counts = Object.create(null);
for (const ch of text) counts[ch] = (counts[ch] || 0) + 1;
const uniq = Object.keys(counts).length;
if (uniq < 25) return reject('мало уникальных символов: ' + uniq);

let topCh = '', topN = 0;
for (const k in counts) if (counts[k] > topN) { topN = counts[k]; topCh = k; }
if (topN / len > 0.25) {
  const shown = topCh === '\n' ? '\\n' : (topCh === ' ' ? 'пробел' : topCh);
  return reject('символ «' + shown + '» занимает ' + Math.round(topN / len * 100) + '% текста');
}

if (/(.)\1{29,}/.test(text)) return reject('30+ одинаковых символов подряд');

// --- разметка: экранируем всё, кроме тегов, понятных Telegram ---
const ALLOWED = /^<\/?(b|strong|i|em|u|s|strike|del|code|pre|a|blockquote)(\s+href="[^"]*")?\s*\/?>$/i;
text = text.replace(/<[^>]*>?/g, (m) => (ALLOWED.test(m) ? m : m.replace(/</g, '&lt;').replace(/>/g, '&gt;')));

// Санитайз мог съесть содержимое, если это была сплошная битая разметка.
const cyrAfter = (text.match(/[а-яёА-ЯЁ]/g) || []).length;
if (cyrAfter < 100) return reject('после очистки разметки осталось мало текста: ' + cyrAfter + ' симв.');

// --- парность тегов: Telegram падает на незакрытых ---
const openTags = (text.match(/<(?:b|strong|i|em|u|s|strike|del|code|pre|a|blockquote)(?:\s[^>]*)?>/gi) || []).length;
const closeTags = (text.match(/<\/(?:b|strong|i|em|u|s|strike|del|code|pre|a|blockquote)>/gi) || []).length;
if (openTags !== closeTags) {
  return reject('незакрытая разметка: ' + openTags + ' открывающих и ' + closeTags + ' закрывающих тегов');
}

return { json: { ok: true, text, title, link, sourceName } };
