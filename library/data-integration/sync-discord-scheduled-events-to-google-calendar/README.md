# Sync discord scheduled events to google calendar

> Синхронизирует запланированные события Discord-сервера с Google Calendar.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Google Calendar |
| **Узлов в схеме** | 7 |
| **Нужные учётные данные** | `googleCalendarOAuth2Api`, `httpHeaderAuth` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically syncs scheduled events from a Discord server to a Google Calendar, ensuring that the calendar is up-to-date with the latest event details.

Example: A community organizer who hosts regular events on a Discord server can use this workflow to automatically create and update the corresponding events on their Google Calendar. This helps them stay organized and ensures that their event details are easily accessible to all their members.

## What You Can Do
- Automatically retrieves scheduled events from a specified Discord server
- Checks if the events already exist in the Google Calendar, and either updates the existing event or creates a new one
- Synchronizes event details like start/end time, location, and description between Discord and Google Calendar

</details>
