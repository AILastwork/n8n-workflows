# Send notification when deployment fails

> Сообщает в Slack, если деплой на Netlify упал.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | событие в Netlify |
| **Сервисы** | Netlify, Slack |
| **Узлов в схеме** | 2 |
| **Нужные учётные данные** | `netlifyApi`, `slackApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically sends a notification to a Slack channel when a website deployment fails on Netlify.

Example: A web development team uses this workflow to stay informed about any issues with their website deployments. Whenever a deployment fails on Netlify, the team receives a detailed Slack message with the error message and a link to the failed deployment, allowing them to quickly investigate and resolve the problem.

## What You Can Do
- Triggers on Netlify's "deployFailed" event, automatically detecting when a deployment fails
- Sends a customized Slack message with the site name, error message, and a link to the failed deployment
- Allows the team to stay informed about deployment issues in real-time, improving their ability to respond and resolve problems quickly

</details>
