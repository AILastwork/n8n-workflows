# Synchronize your google sheets with postgres

> Синхронизирует Google Sheets с Postgres.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Compare Datasets, Google Sheets, PostgreSQL |
| **Узлов в схеме** | 7 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically synchronizes data between a Google Sheet and a Postgres database, ensuring that the data is up-to-date and consistent.

Example: A small business owner wants to keep their customer information up-to-date in their Postgres database. They can use this workflow to automatically retrieve the latest customer data from a Google Sheet, compare it with the existing data in the database, and update the database accordingly.

## What You Can Do
- Scheduled data retrieval from a Google Sheet
- Comparison of data between the Google Sheet and the Postgres database
- Automatic insertion of new records and updating of existing records in the Postgres database

</details>
