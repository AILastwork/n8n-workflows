# Send daily weather updates via a push notification using spontit

> Ежедневно присылает погоду push-уведомлением через Spontit.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | OpenWeatherMap, Spontit |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | `openWeatherMapApi`, `spontitApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically retrieves the current temperature in Berlin and sends a push notification with the weather update to the user's device every day at 9 AM.

Example: This workflow could be useful for someone who wants to stay informed about the daily weather in Berlin without having to check the forecast manually. By setting up this workflow, they can receive a push notification with the current temperature every morning, allowing them to plan their day accordingly.

## What You Can Do
- Scheduled daily weather updates at a specific time (9 AM)
- Retrieval of current temperature data for the city of Berlin
- Delivery of weather updates via push notification to the user's device

</details>
