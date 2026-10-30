# Export json file to google sheets

> Читает JSON-файл и добавляет данные в Google Sheets.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | — |
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

This workflow reads a JSON file, moves the binary data, and appends the data to a Google Sheets spreadsheet.

Example: A marketing team might use this workflow to automatically upload customer data from a JSON file to a Google Sheets spreadsheet for further analysis and reporting.

## What You Can Do
- Reads a JSON file containing customer data
- Moves the binary data to prepare it for upload
- Appends the data to a specified Google Sheets spreadsheet

</details>
