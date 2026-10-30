# Add data from google sheet to dropbox

> Каждые 15 минут выгружает данные из Google Sheets в Excel-файл и загружает в Dropbox.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Dropbox, Google Sheets |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | `dropboxApi`, `googleApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically reads data from a Google Sheet, converts it to an Excel file, and uploads the file to Dropbox on a 15-minute interval.

Example: A small business owner could use this workflow to regularly backup their product pricing data stored in a Google Sheet to their Dropbox account, ensuring the information is securely stored and easily accessible.

## What You Can Do
- Scheduled data extraction from Google Sheets
- Automatic conversion of data to Excel format
- Seamless file upload to Dropbox
- Configurable interval for workflow execution (every 15 minutes)

</details>
