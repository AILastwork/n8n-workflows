# Sync tasks data between notion and asana

> Синхронизирует задачи между Asana и Notion.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | событие в Asana |
| **Сервисы** | Asana, Notion |
| **Узлов в схеме** | 10 |
| **Нужные учётные данные** | `asanaApi`, `notionApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow synchronizes tasks between Asana and Notion, automatically creating or updating tasks based on changes in Asana.

Example: A project manager uses this workflow to keep their team's tasks up-to-date across both Asana and Notion. Whenever a task is created or updated in Asana, the workflow automatically mirrors those changes in Notion, ensuring that all team members have access to the latest task information.

## What You Can Do
- Bi-directional task synchronization between Asana and Notion
- Automatic task creation or update based on changes in Asana
- Validation of required task fields (e.g., due date) before updating Notion

</details>
