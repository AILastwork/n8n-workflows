# Send github notifications to discord webhook

> Проверяет уведомления GitHub и отправляет сводку о новых событиях в Discord через вебхук.

| | |
|---|---|
| **Категория** | [🌐 API и вебхуки](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Discord |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `httpBasicAuth` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow monitors GitHub notifications and sends a summary to a Discord channel when new notifications are available.

Example: A developer or project manager can use this workflow to stay informed about new issues, pull requests, or other notifications from their GitHub repositories without constantly checking the GitHub website. The workflow will automatically check for new notifications every minute and send a summary to a designated Discord channel, allowing the user to quickly review and respond to important updates.

## What You Can Do
- Periodic monitoring of GitHub notifications using a Cron trigger
- Filtering of notifications based on a time window (last minute)
- Formatting and summarizing the notification details in a concise message
- Conditional sending of the notification message to a Discord channel only when new notifications are available

</details>
