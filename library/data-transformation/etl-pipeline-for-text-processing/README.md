# Etl pipeline for text processing

> ETL-пайплайн: собирает твиты, хранит в MongoDB, оценивает тональность (Google NL), пишет в Postgres и публикует лучшие в Slack.

| | |
|---|---|
| **Категория** | [🔄 Преобразование данных](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Google Natural Language, MongoDB, PostgreSQL, Slack, X (Twitter) |
| **Узлов в схеме** | 9 |
| **Нужные учётные данные** | `googleCloudNaturalLanguageOAuth2Api`, `mongoDb`, `postgres`, `slackApi`, `twitterOAuth1Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically collects tweets with the "#OnThisDay" hashtag, analyzes their sentiment using Google Cloud Natural Language, and posts the most positive tweets to a Slack channel.

Example: A social media manager could use this workflow to curate and share historical tweets on their company's Slack channel, helping to engage their audience and showcase their brand's personality.

## What You Can Do
- Automatically collects tweets with a specific hashtag using the Twitter API
- Analyzes the sentiment of the tweets using Google Cloud Natural Language
- Filters and posts the most positive tweets to a Slack channel
- Runs on a daily schedule using a Cron trigger

</details>
