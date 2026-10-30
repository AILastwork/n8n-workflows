# Import csv from url to google sheets

> Скачивает CSV по ссылке (данные о COVID-19), фильтрует и загружает в Google Sheets.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Google Sheets |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automates the process of downloading a COVID-19 data CSV file, filtering the data to include only DACH (Germany, Austria, Switzerland) countries in 2023, and then uploading the filtered data to a Google Sheets spreadsheet.

Example: A data analyst or researcher working on COVID-19 trends could use this workflow to regularly update a spreadsheet with the latest data from the European Centre for Disease Prevention and Control (ECDC) without having to manually download and process the CSV file.

## What You Can Do
- Automatically downloads the latest COVID-19 data CSV file from the ECDC website
- Filters the data to include only DACH countries in 2023
- Uploads the filtered data to a specified Google Sheets spreadsheet
- Includes a sticky note with a warning about Google API rate limits and a suggestion to add a "Split In Batches" and "Wait" node to handle larger datasets

</details>
