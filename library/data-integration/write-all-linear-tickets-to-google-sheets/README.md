# Write all linear tickets to google sheets

> Выгружает все тикеты команды из Linear в Google Sheets по расписанию.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Google Sheets, GraphQL |
| **Узлов в схеме** | 9 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `httpHeaderAuth` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically retrieves all tickets from a specific team in a project management tool (Linear), applies custom fields, and writes the tickets to a Google Sheet.

Example: A project manager or team lead could use this workflow to keep track of all the tickets assigned to their team in a centralized Google Sheet. This could help them monitor progress, identify bottlenecks, and make data-driven decisions to improve team productivity.

## What You Can Do
- Retrieves all tickets from a specified team in Linear using GraphQL API
- Applies custom fields (e.g., estimate, labels) to each ticket
- Writes the tickets to a designated Google Sheet, allowing for easy analysis and reporting
- Handles pagination to retrieve all tickets, even if they exceed the initial API response limit
- Includes detailed setup instructions and notes to help users configure the workflow for their specific needs

</details>
