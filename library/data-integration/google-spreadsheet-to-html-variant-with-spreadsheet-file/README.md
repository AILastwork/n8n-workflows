# Google spreadsheet to html variant with spreadsheet file

> Отдаёт данные из Google Sheets как HTML-таблицу (вариант с узлом Spreadsheet File).

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | Google Sheets |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow allows users to automatically generate an HTML file from data stored in a Google Sheet, triggered by a webhook.

Example: A small business owner wants to create a weekly report that summarizes key sales data from their Google Sheet. They can set up this workflow to automatically generate an HTML file with the latest data whenever a webhook is triggered (e.g., by a scheduled task or an external system).

## What You Can Do
- Retrieves data from a specific Google Sheet using the Google Sheets API
- Converts the sheet data into an HTML file using the Spreadsheet File node
- Triggers the workflow via a webhook, enabling integration with other systems or scheduling

</details>
