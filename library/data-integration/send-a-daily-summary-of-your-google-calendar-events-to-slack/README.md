# Send a daily summary of your google calendar events to slack

> Каждый день отправляет в Slack список встреч из Google Calendar.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Google Calendar, Slack |
| **Узлов в схеме** | 12 |
| **Нужные учётные данные** | `googleCalendarOAuth2Api`, `slackApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically retrieves upcoming events from a Google Calendar, compares the event dates with the current date, and sends a daily summary of the day's meetings to a Slack channel.

Example: A busy professional could use this workflow to stay on top of their daily meeting schedule. The workflow would automatically pull their calendar events, identify the ones happening that day, and send a concise summary to their team's Slack channel, ensuring everyone is informed and prepared for the day's meetings.

## What You Can Do
- Integrates with Google Calendar to retrieve upcoming events
- Compares event dates with the current date to identify meetings happening that day
- Formats and sends a summary of the day's meetings to a Slack channel

</details>
