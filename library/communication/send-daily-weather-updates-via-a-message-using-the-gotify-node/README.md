# Send daily weather updates via a message using the gotify node

> Ежедневно присылает погоду через Gotify.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Gotify, OpenWeatherMap |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | `gotifyApi`, `openWeatherMapApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow retrieves the current temperature in Berlin and sends a daily weather update notification to a Gotify messaging platform.

Example: A user could set up this workflow to receive a daily notification about the current temperature in Berlin, allowing them to plan their day and dress appropriately for the weather.

## What You Can Do
- Scheduled daily weather updates using a Cron trigger
- Retrieval of current temperature data from the OpenWeatherMap API
- Delivery of weather updates as notifications to a Gotify messaging platform

</details>
