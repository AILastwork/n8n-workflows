# Sync tasks automatically from todoist to notion

> Переносит задачи Todoist с определённой меткой в Notion.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Notion, Todoist |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | `notionApi`, `todoistOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically syncs Todoist tasks with a specific label to a Notion database, and then updates the Todoist task to indicate it has been sent to Notion.

Example: A user has a Todoist project for their work tasks, and they want to keep track of these tasks in a Notion database. They create a "send-to-notion" label in Todoist, and this workflow will automatically fetch those tasks, add them to the Notion database, and update the Todoist task to indicate it has been synced.

## What You Can Do
- Scheduled trigger to run the workflow at regular intervals
- Fetches Todoist tasks with a specific label
- Adds the tasks to a Notion database, including the Todoist task ID as a property
- Updates the Todoist task to indicate it has been sent to Notion, and includes a link to the Notion page

</details>
