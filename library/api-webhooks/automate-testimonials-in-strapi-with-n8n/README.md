# Automate testimonials in strapi with n8n

> Собирает твиты про Strapi и n8n, отсеивает ретвиты и старые записи, оценивает тональность через Google Natural Language и сохраняет хорошие отзывы в Strapi.

| | |
|---|---|
| **Категория** | [🌐 API и вебхуки](../README.md) |
| **Запуск** | вебхук, по расписанию |
| **Сервисы** | Google Natural Language, Strapi, X (Twitter) |
| **Узлов в схеме** | 14 |
| **Нужные учётные данные** | `googleCloudNaturalLanguageOAuth2Api`, `strapiApi`, `twitterOAuth1Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically collects and analyzes tweets related to Strapi and n8n.io, filters out retweets and old tweets, and stores the relevant tweets along with their sentiment analysis in a Strapi content management system.

Example: A marketing team for a Strapi-based website could use this workflow to continuously monitor social media for mentions of their product and related topics, and automatically store positive tweets in their website's content management system for use in marketing campaigns.

## What You Can Do
- Automatically searches Twitter for relevant tweets and filters out retweets and old tweets
- Analyzes the sentiment of each tweet using Google Cloud Natural Language API
- Stores positive tweets in a Strapi content management system for easy access and use
- Can be triggered by a webhook, allowing users to manually submit content for analysis and storage

</details>
