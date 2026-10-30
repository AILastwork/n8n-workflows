# Insert and read data from google sheets

> Добавляет и читает данные из Google Sheets.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную |
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

This workflow allows users to easily append data to a Google Sheet by manually triggering the workflow and setting the data to be added.

Example: A small business owner could use this workflow to quickly add new customer information to a Google Sheet tracking their sales leads, without having to manually enter the data.

## What You Can Do
- Triggered by a manual button click
- Allows setting custom data to be added to the Google Sheet
- Appends the data to the specified Google Sheet

</details>
