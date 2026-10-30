# Message on website content changed in telegram

> Следит за изменениями на сайте и сообщает о них в Telegram.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Telegram |
| **Узлов в схеме** | 7 |
| **Нужные учётные данные** | `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow periodically checks a website for changes and sends a notification via Telegram if any changes are detected.

Example: A business owner could use this workflow to monitor their company's website for updates or changes, and receive instant notifications if the website content is modified. This could help them stay informed about any updates or issues with their online presence.

## What You Can Do
- Periodic website monitoring: The workflow uses a Cron node to check the website every 5 minutes.
- Change detection: The workflow compares the website content before and after the 5-minute wait period to detect any changes.
- Telegram notification: If a change is detected, the workflow sends a notification to a Telegram chat, allowing the user to be alerted in real-time.

</details>
