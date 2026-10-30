# Generate and insert data into a postgres database

> По расписанию генерирует тестовые данные датчика влажности и записывает в PostgreSQL.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | PostgreSQL |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | `postgres` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically generates and stores sensor data (humidity readings) in a PostgreSQL database on a regular schedule.

Example: A facility manager could use this workflow to automatically track and record humidity levels in a building, allowing them to monitor environmental conditions and identify any potential issues or trends over time.

## What You Can Do
- Scheduled data generation using a Cron trigger
- Randomized sensor data creation with a Function node
- Automated storage of sensor data in a PostgreSQL database

</details>
