# Read xml file and store content in google sheets

> Скачивает XML, разбирает его и записывает данные в Google Sheets.

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

This workflow downloads an XML file, parses its contents, and writes the data to a new Google Sheets spreadsheet.

Example: A user might use this workflow to automatically extract data from an XML file and store it in a Google Sheets spreadsheet for further analysis or reporting.

## What You Can Do
- Fetches an XML file from a specified URL
- Parses the XML content and extracts the relevant data
- Creates a new Google Sheets spreadsheet and writes the data to it
- Handles the asynchronous nature of spreadsheet creation by using a Merge node to wait for the spreadsheet to be created before writing the data

</details>
