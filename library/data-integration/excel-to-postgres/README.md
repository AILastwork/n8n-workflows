# Excel to postgres

> Импортирует данные из Excel в PostgreSQL.

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

This workflow extracts data from a binary spreadsheet file, processes it, and inserts the data into a PostgreSQL database.

Example: A company that receives product data in the form of an Excel spreadsheet could use this workflow to automatically import the data into their PostgreSQL database, streamlining their product management processes.

## What You Can Do
- Reads binary spreadsheet files (e.g., .xls, .xlsx) and converts the data into a format suitable for further processing
- Integrates with a PostgreSQL database to insert the processed data into a designated table
- Provides a flexible and scalable solution for automating data import tasks, reducing manual effort and potential errors

</details>
