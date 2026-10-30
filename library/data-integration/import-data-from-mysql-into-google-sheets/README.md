# Import data from mysql into google sheets

> Еженедельно выгружает данные из MySQL в Google Sheets.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Google Sheets, MySQL |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `mySql` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically retrieves data from a MySQL database, and then appends that data to a Google Sheets spreadsheet on a weekly schedule.

Example: A small business owner could use this workflow to regularly export their book inventory data from a MySQL database into a Google Sheets spreadsheet, which could then be shared with their team or used for reporting purposes.

## What You Can Do
- Scheduled data extraction from a MySQL database using a Cron trigger
- Automatic data transfer to a Google Sheets spreadsheet
- Seamless integration between MySQL, Cron, and Google Sheets

</details>
