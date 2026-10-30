# Monitor strava and send email updates

> Проверяет активность в Strava и пишет партнёрам по мотивации, если тренировок было мало.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Strava |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `smtp`, `stravaOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically checks a user's Strava activity data daily and sends an email to their accountability partners if the user's activity level falls below a specified threshold.

Example: A fitness enthusiast wants to stay accountable to their workout routine. They set up this workflow to monitor their Strava activity and notify their accountability partners (e.g., friends, family, or a fitness group) if they haven't been active enough.

## What You Can Do
- Automatically checks Strava activity data daily at 11 AM
- Compares the user's activity time to a pre-set threshold
- Sends an email to the user's accountability partners if the activity time is below the threshold
- Allows the user to customize the activity threshold, their own name and email, and the email addresses of their accountability partners

</details>
