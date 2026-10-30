# Use redis to rate limit your low code api

> Ограничивает частоту запросов к вашему low-code API: считает использование ключей в Redis и сообщает о превышении лимита.

| | |
|---|---|
| **Категория** | [🌐 API и вебхуки](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | Airtable, Redis |
| **Узлов в схеме** | 11 |
| **Нужные учётные данные** | `airtableApi`, `httpHeaderAuth`, `redis` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow manages API usage limits by tracking API key usage in Redis and sending a message when limits are exceeded.

Example: A developer building a web application that integrates with an external API could use this workflow to automatically monitor and enforce API usage limits for their users, ensuring they don't exceed their allotted quota and providing a clear message when the limit is reached.

## What You Can Do
- Tracks API key usage in Redis, with separate limits for per-minute and per-hour usage
- Sends a customizable message when usage limits are exceeded
- Integrates with Airtable to retrieve and display relevant data when the limit is reached

</details>
