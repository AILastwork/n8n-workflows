# Monitor changes in google sheets every 45 mins

> Каждые 45 минут проверяет Google Sheets на новые данные и сообщает в Mattermost.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Google Sheets, Mattermost |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `mattermostApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically checks a Google Sheet for new data, and sends a notification to a Mattermost channel whenever new information is added.

Example: A sales team uses this workflow to monitor a Google Sheet containing customer information. Whenever a new customer is added to the sheet, the team receives a notification in their Mattermost channel with the customer's ID, name, and email.

## What You Can Do
- Periodically checks a Google Sheet for new data
- Compares new data to previously stored IDs to identify new entries
- Sends a notification to a Mattermost channel with details of new data

</details>
