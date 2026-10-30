# Telegram-bot AI Da Nang

> ИИ-бот для Telegram (OpenRouter) с базой знаний в Google Sheets — пример для туристического гида по Дананг.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Telegram, чат |
| **Сервисы** | Google Sheets, OpenRouter, Telegram |
| **Узлов в схеме** | 15 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `openRouterApi`, `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Chat input triggered inside n8n
Used for testing and debugging

## Chat input triggered by Telegram
Used for live chat within Telegram

## Chat response to Telegram

## Chat response inside n8n

## Prepare response
Decide to which chat the response will go.

## AI Processing
Chat input → Chat output

## Retrieve Data
Get schedule from Google Spreadsheet and convert it to a Markdown-Table as context for the LLM

## Normalize input
Transfer the chat data into a unified set of variables

</details>
