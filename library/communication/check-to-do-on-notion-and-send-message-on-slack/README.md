# Check to do on notion and send message on slack

> Проверяет незакрытые задачи пользователя в Notion и пишет ему в Slack.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Notion, Slack |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `notionApi`, `slackApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically checks for incomplete tasks assigned to a specific user in Notion, and sends a direct message to that user in Slack with the task details.

Example: A team manager uses this workflow to stay on top of their team's tasks. Every morning at 8 AM, the workflow checks Notion for any incomplete tasks assigned to the team member "Harshil". If there are any, it sends a direct message to Harshil in Slack with the task details, helping him stay organized and on top of his work.

## What You Can Do
- Automated daily task check in Notion
- Conditional logic to only notify the assigned user
- Direct message delivery in Slack for quick communication

</details>
