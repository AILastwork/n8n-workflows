# Send alert when data is created in app database

> Отправляет в Slack сообщение, когда в Linear появляется срочный баг.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную, событие в Linear |
| **Сервисы** | Linear, Slack |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `linearApi`, `slackApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically triggers a Slack notification whenever a new urgent bug is reported in the "Product & Design" team, allowing for quick response and resolution.

Example: A product manager or developer can use this workflow to stay informed about critical issues that arise in their project, ensuring they are addressed promptly and effectively. Whenever a new urgent bug is logged in the team's project management tool, the workflow will automatically send a notification to the designated Slack channel, allowing the team to take immediate action.

## What You Can Do
- Flexible trigger: The workflow can be triggered by various events, such as new issues in a project management tool, changes in a spreadsheet, or custom webhooks.
- Data transformation: The workflow filters the incoming data to only include urgent bugs and transforms the title to a more readable format.
- Customizable notification: The Slack notification can be customized to include relevant details, such as the issue title and a link to the issue, making it easy for the team to take action.

</details>
