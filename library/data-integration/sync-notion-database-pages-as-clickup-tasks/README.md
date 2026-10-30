# Sync notion database pages as clickup tasks

> Синхронизирует страницы базы Notion с задачами ClickUp.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | событие в ClickUp, событие в Notion |
| **Сервисы** | ClickUp, Notion |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | `clickUpApi`, `notionApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically updates a ClickUp task and the corresponding Notion database page when changes are made to the Notion database.

Example: A project manager uses this workflow to keep their team's tasks and project status in sync between ClickUp and Notion. Whenever a task's status is updated in ClickUp, the corresponding Notion database page is automatically updated to reflect the change.

## What You Can Do
- Triggers on updates to a Notion database page
- Updates the corresponding ClickUp task with the new information
- Triggers on status updates to ClickUp tasks and updates the Notion database page accordingly

</details>
