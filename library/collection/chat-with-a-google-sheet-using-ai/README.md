# Chat with Google Sheet

> Чат с таблицей Google Sheets: агент получает только нужные данные через под-воркфлоу.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вызов из другого воркфлоу, чат |
| **Сервисы** | Google Sheets, OpenAI |
| **Узлов в схеме** | 14 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### Sub-workflow: Custom tool
This can be called by the agent above. It returns three different types of data from the Google Sheet, which can be used together for more complex queries without returning the whole sheet (which might be too big for GPT to handle)

### Main workflow: AI agent using custom tool

## Try me out

Click the 'Chat' button at the bottom and enter:

_Which is our biggest customer?_

These tools all call the sub-workflow below

Change the URL of the Google Sheet here

</details>
