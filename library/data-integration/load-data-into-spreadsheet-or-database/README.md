# Load data into spreadsheet or database

> Учебный пример: загрузка записей в таблицу или базу данных.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow allows users to create a new record in a destination system (e.g., Google Sheet, Airtable, or database) by manually triggering the workflow and using mock data from a CRM system.

Example: A sales team member can use this workflow to quickly add new contact information from their CRM system to a centralized database or spreadsheet, without having to manually copy and paste the data.

## What You Can Do
- Manually triggered workflow for on-demand data transfer
- Ability to use mock data from a CRM system (e.g., HubSpot) as the source
- Flexible destination system integration (Google Sheet, Airtable, or database)

</details>
