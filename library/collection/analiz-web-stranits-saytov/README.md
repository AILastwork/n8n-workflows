# Agent with custom HTTP Request

> ИИ-агент с собственным HTTP-запросом: умеет исправлять параметры запроса по сообщению об ошибке.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вызов из другого воркфлоу, чат |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 16 |
| **Нужные учётные данные** | `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### Convert the query string into JSON, apply the limit for a page length

## Send an error message:
1. If query param was incorrect, return the instruction. AI Agent should pick up on this and adapt the query on the next iteration.
2. If the query is OK and an error was during the HTTP Request, then send back the original error message.

## Post-processing of the HTML page:
1. Keep only <BODY> content
2. Remove inline <SCRIPT> tag entirely, as well as: NOSCRIPT, IFRAME, OBJECT, EMBED, VIDEO, AUDIO, SVG, and HTML comments.
3. In case query parameter method=simplified, replace all page URLs (a href) and IMG (src) with NOURL / NOIMG - this may save up to 20% of the page length
4. Convert the remaining HTML to Markdown. This step further reduces the length of the page: long HTML tags and styles are eliminated, but the markdown syntax keeps some page structure. This gives much better results compared to just a blank text.
5. Finally, check the page length. If it's too long, send an "ERROR: PAGE CONTENT TOO LONG" instead of the actual page. Of course, you could split the page content in chunks, but sometimes long pages just don't have a needed content, so it makes little sense to burn tokens on them.

## Example ReAct AI Agent
1. Agent Prompt is default
2. Check the description of the HTTP_Request_Tool, it guides the agent to provide a query string with several parameters instead of a JSON object

</details>
