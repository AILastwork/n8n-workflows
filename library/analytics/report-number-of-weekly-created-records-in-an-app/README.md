# Report number of weekly created records in an app

> Раз в неделю считает новые идеи в базе Notion и отправляет число в Slack.

| | |
|---|---|
| **Категория** | [📊 Аналитика](../README.md) |
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

This workflow automatically retrieves new product ideas from a Notion database, filters and summarizes the data, and then sends a Slack message with the number of new UX ideas added in the last 7 days.

Example: A product team could use this workflow to stay on top of new ideas being added to their Notion database. The workflow would run on a weekly schedule, pulling in the latest ideas, filtering for UX-related ones, and sending a summary to the team's Slack channel. This helps the team stay informed and engaged with the ideation process.

## What You Can Do
- Scheduled execution to run the workflow on a regular cadence
- Flexible data source integration (can use Notion or any other service)
- Powerful data transformation and filtering capabilities
- Customizable notification channel (Slack, Teams, email, etc.)

</details>
