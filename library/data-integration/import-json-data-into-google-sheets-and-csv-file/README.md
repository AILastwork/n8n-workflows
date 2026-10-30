# Import json data into google sheets and csv file

> Получает JSON из API, записывает данные в Google Sheets и в CSV-файл.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | — |
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

This workflow fetches random user data from an API, extracts relevant information, and appends it to a Google Sheet while also generating a CSV file.

Example: A small business owner could use this workflow to automatically gather and store customer data, such as names and locations, in a spreadsheet and a CSV file for further analysis and record-keeping.

## What You Can Do
- Fetches random user data from an API
- Extracts specific information (name and country) from the API response
- Appends the extracted data to a Google Sheet
- Generates a CSV file with the same data

</details>
