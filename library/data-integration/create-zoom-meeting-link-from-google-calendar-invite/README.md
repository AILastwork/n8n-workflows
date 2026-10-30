# Create zoom meeting link from google calendar invite

> Создаёт ссылку на встречу Zoom для событий из Google Calendar.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную, по расписанию |
| **Сервисы** | Google Calendar, Zoom |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `googleCalendarOAuth2Api`, `zoomOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically schedules Zoom meetings based on upcoming calendar events, ensuring efficient coordination and productivity.

Example: A sales manager uses this workflow to automatically schedule Zoom meetings for their team's upcoming client meetings, saving time and ensuring consistent communication.

## What You Can Do
- Automatically retrieves upcoming calendar events from Google Calendar
- Filters out irrelevant events and schedules Zoom meetings for relevant ones
- Runs the workflow once a day to keep the Zoom meeting schedule up-to-date

</details>
