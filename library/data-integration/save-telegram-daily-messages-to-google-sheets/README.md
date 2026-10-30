# Save telegram daily messages to google sheets

> Сохраняет ежедневные сообщения-дневник из Telegram в Google Sheets.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | событие в Telegram |
| **Сервисы** | Google Sheets, Telegram |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow allows users to submit journal entries via Telegram, which are then automatically added to a Google Sheets spreadsheet.

Example: A user who wants to keep a daily journal can send a message to a Telegram bot with their journal entry, and the workflow will automatically add the entry to a designated Google Sheets spreadsheet, along with the date.

## What You Can Do
- Telegram integration for easy journal entry submission
- Automatic parsing of journal entries and dates from Telegram messages
- Integration with Google Sheets for storing and organizing journal entries

</details>
