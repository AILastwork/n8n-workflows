# Create a short url and get the statistics of the url

> Создаёт короткую ссылку в YOURLS и получает статистику по ней.

| | |
|---|---|
| **Категория** | [📊 Аналитика](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Yourls |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | `yourlsApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow creates a short URL for a given URL and provides statistics on the short URL's usage.

Example: A marketing team could use this workflow to shorten long URLs for social media posts or email campaigns, then track the performance of those shortened links.

## What You Can Do
- Generates a short URL using the Yourls API
- Retrieves statistics on the short URL's usage, such as click count and referrers
- Allows for easy sharing and tracking of shortened links

</details>
