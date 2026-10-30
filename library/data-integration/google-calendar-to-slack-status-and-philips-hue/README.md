# Google calendar to slack status and philips hue

> Меняет статус в Slack (и свет Philips Hue) по событиям Google Calendar.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную, событие в Google Calendar |
| **Сервисы** | Google Calendar, Slack |
| **Узлов в схеме** | 9 |
| **Нужные учётные данные** | `googleCalendarOAuth2Api`, `slackApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically updates your Slack status based on your Google Calendar events, allowing you to easily communicate your availability and activity to your team.

Example: Imagine you're a busy professional who uses Google Calendar to manage your schedule. This workflow would automatically detect when you have a calendar event starting, determine the type of activity (e.g., "Doing", "Managing", "Leading", "Living"), and update your Slack status accordingly. This helps your team understand your current availability and focus, improving communication and collaboration.

## What You Can Do
- Integrates with Google Calendar to monitor your upcoming events
- Categorizes your calendar events into different activity types (e.g., "Doing", "Managing", "Leading", "Living")
- Automatically updates your Slack status with the event summary and a corresponding emoji to indicate your current activity
- Provides visual cues (e.g., "Light - Busy", "Light - Available") to further communicate your availability

</details>
