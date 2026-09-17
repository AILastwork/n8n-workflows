// Alert Ops — формирует сообщение об отбраковке для темы «Операции».
// Выполняется только по ветке ok=false. В канал ничего не уходит.

const esc = (s) => String(s || '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const j = $json || {};
const reason = esc(j.reason || 'причина не указана');
const title = esc(String(j.title || '').slice(0, 200));
const link = esc(j.link || '');
const source = esc(j.sourceName || 'неизвестен');

const wf = $workflow || {};
const ex = $execution || {};

const lines = [];
lines.push('⚠️ <b>Автопостинг: пост отбракован</b>');
lines.push('');
lines.push('<b>Причина:</b> ' + reason);
lines.push('<b>Источник:</b> ' + source);
if (title) lines.push('<b>Новость:</b> ' + title);
if (link) lines.push('<a href="' + link + '">Первоисточник</a>');
lines.push('');
lines.push('В канал ничего не отправлено. Слот пропущен, следующая попытка — по расписанию.');
lines.push('');
lines.push('<i>Воркфлоу: ' + esc(wf.name || 'My_ITnews') + ' · запуск ' + esc(ex.id || '?') + '</i>');

return { json: { alert: lines.join('\n') } };
