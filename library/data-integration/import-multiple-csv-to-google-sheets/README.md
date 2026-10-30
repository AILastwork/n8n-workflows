# Import multiple csv to google sheets

> Импортирует несколько CSV-файлов в одну таблицу Google Sheets, убирая дубли.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Google Sheets |
| **Узлов в схеме** | 9 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automates the process of importing and organizing subscriber data from multiple CSV files into a Google Sheets spreadsheet, ensuring data integrity and providing a centralized view of the subscriber base.

Example: A marketing team managing a newsletter subscription list can use this workflow to automatically import and consolidate subscriber data from various sources (e.g., website signups, event registrations) into a single Google Sheets spreadsheet. This allows them to easily track and analyze their subscriber base, identify active subscribers, and keep the data up-to-date.

## What You Can Do
- Reads multiple CSV files from a designated directory and processes them in batches
- Removes duplicate subscriber records based on the "user_name" field
- Filters the data to include only active subscribers (those with "subscribed" set to "TRUE")
- Sorts the subscriber data by the "date_subscribed" field
- Appends or updates the subscriber data in a Google Sheets spreadsheet

</details>
