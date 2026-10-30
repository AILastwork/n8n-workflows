# Manage adobe acrobat e signatures with webhooks

> Обрабатывает вебхуки Adobe Acrobat Sign (электронные подписи): отвечает с нужным заголовком и дополняет данные.

| | |
|---|---|
| **Категория** | [🌐 API и вебхуки](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow processes incoming webhook requests, enriches the data, and responds with a custom header and additional data stored in the workflow.

Example: A user might use this workflow to handle incoming webhook notifications from a document signing service, such as Adobe Sign. The workflow would process the webhook data, add custom fields, and respond with a unique client ID in the response header.

## What You Can Do
- Handles both POST and GET webhook requests
- Enriches the incoming webhook data with custom fields
- Responds to the webhook with a custom header and additional data

</details>
