# Sync jira issues with subsequent comments to notion database

> Синхронизирует задачи Jira и комментарии к ним в базу Notion.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | событие в Jira |
| **Сервисы** | Jira, Notion |
| **Узлов в схеме** | 9 |
| **Нужные учётные данные** | `jiraSoftwareCloudApi`, `notionApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically creates, updates, or deletes Notion database pages based on Jira issue events, providing a seamless integration between the two platforms.

Example: A project manager can use this workflow to track the status of Jira issues in a Notion database, ensuring that the project's progress is always up-to-date and easily accessible.

## What You Can Do
- Automatically creates a new Notion database page when a Jira issue is created, with key details like the issue key, ID, and status.
- Updates the corresponding Notion database page when a Jira issue is updated, keeping the information in sync.
- Deletes the Notion database page when a Jira issue is deleted, maintaining data integrity.
- Utilizes a lookup table to map Jira issue statuses to Notion's select property options, ensuring consistent data representation.

</details>
