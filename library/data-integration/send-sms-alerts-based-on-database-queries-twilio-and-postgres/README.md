# Send sms alerts based on database queries twilio and postgres

> Проверяет показания датчиков в Postgres и при превышении порога отправляет SMS через Twilio.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | PostgreSQL, Twilio |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | `postgres`, `twilioApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow periodically checks a Postgres database for sensor readings above a certain threshold, sends a notification via Twilio, and updates the database to mark the notification as sent.

Example: A manufacturing company uses this workflow to monitor sensor data from their production equipment. The workflow checks the database every hour, identifies any sensors with readings above 70, and sends a text message to the on-duty maintenance team. This allows the team to quickly respond to potential issues and prevent downtime.

## What You Can Do
- Automated monitoring of sensor data in a Postgres database
- Sending SMS notifications via Twilio when critical thresholds are exceeded
- Updating the database to track which notifications have been sent

</details>
