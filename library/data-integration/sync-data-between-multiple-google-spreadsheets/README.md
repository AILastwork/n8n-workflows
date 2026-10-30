# Sync data between multiple google spreadsheets

> Синхронизирует данные между несколькими таблицами Google Sheets.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Google Sheets |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically reads data from a Google Sheet, and then updates two other Google Sheets with the same data on a scheduled interval.

Example: A small business owner could use this workflow to regularly sync data from a master inventory sheet to separate sheets for different departments or locations, ensuring everyone has access to the latest information.

## What You Can Do
- Scheduled data synchronization using a Cron trigger
- Reads data from a specified range in a Google Sheet
- Writes the same data to two separate Google Sheets
- Configurable range and update operation for flexibility

</details>
