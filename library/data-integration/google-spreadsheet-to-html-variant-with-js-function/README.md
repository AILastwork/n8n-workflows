# Google spreadsheet to html variant with js function

> Отдаёт данные из Google Sheets как HTML-таблицу (вариант с JS-функцией).

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | Google Sheets |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow retrieves data from a Google Sheet, generates an HTML table with the data, and responds to a webhook with the HTML content.

Example: A small business owner wants to display a table of their latest sales data on their website. They can set up this workflow to automatically fetch the data from their Google Sheet, generate an HTML table, and respond to a webhook with the HTML content, which can then be embedded on their website.

## What You Can Do
- Retrieves data from a Google Sheet using the Google Sheets node
- Generates an HTML table with the data using a custom JavaScript function
- Responds to a webhook with the generated HTML content

</details>
