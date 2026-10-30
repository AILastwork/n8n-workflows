# Send rss feed data to webhook

> Периодически читает RSS, фильтрует статьи по ключевым словам, сохраняет новые в MongoDB и отправляет их на вебхук.

| | |
|---|---|
| **Категория** | [🌐 API и вебхуки](../README.md) |
| **Запуск** | вручную, по расписанию |
| **Сервисы** | MongoDB, RSS |
| **Узлов в схеме** | 18 |
| **Нужные учётные данные** | `mongoDb` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow periodically checks an RSS feed, filters the articles based on specific keywords, and stores the unique articles in a MongoDB database, while also sending notifications about the new articles.

Example: A real estate company could use this workflow to automatically monitor industry news and blogs, identify relevant articles about the real estate market or specific properties, and store them in a database for further analysis or sharing with their team.

## What You Can Do
- Scheduled RSS feed monitoring with the ability to manually trigger the workflow
- Filtering articles based on keywords like "realtors" or "real estate"
- Deduplicating articles based on the link URL and storing them in a MongoDB database
- Sending notifications about new articles via a webhook

</details>
