# Create an event in posthog when a request is made to a webhook url

> Принимает запрос на вебхук и создаёт по нему событие в PostHog — для трекинга действий пользователей.

| | |
|---|---|
| **Категория** | [🌐 API и вебхуки](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | PostHog |
| **Узлов в схеме** | 2 |
| **Нужные учётные данные** | `postHogApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow captures and tracks user events from a web application using PostHog, a product analytics platform.

Example: A SaaS company might use this workflow to automatically track user actions, such as signing up, making a purchase, or completing a tutorial, and send that data to PostHog for analysis and reporting.

## What You Can Do
- Captures user events from a web application using a Webhook node
- Sends the captured event data to PostHog for analysis and reporting
- Allows for customization of the event name and other event properties

</details>
