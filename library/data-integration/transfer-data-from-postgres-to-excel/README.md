# Transfer data from postgres to excel

> Выгружает данные из Postgres в Excel.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | — |
| **Сервисы** | PostgreSQL |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | `postgres` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow extracts product data from a PostgreSQL database, converts it into a spreadsheet file, and saves the file to the local file system.

Example: A business might use this workflow to regularly export product information from their database (such as product names and EAN codes) into a spreadsheet file, which can then be shared with sales teams or used for other reporting and analysis purposes.

## What You Can Do
- Retrieves data from a PostgreSQL database using a SQL query
- Converts the retrieved data into a spreadsheet file format (e.g., Excel)
- Saves the spreadsheet file to the local file system for further use or distribution

</details>
