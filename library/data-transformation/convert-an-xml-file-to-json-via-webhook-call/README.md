# Convert an xml file to json via webhook call

> API на вебхуке: принимает XML и возвращает JSON; об ошибках сообщает в Slack.

| | |
|---|---|
| **Категория** | [🔄 Преобразование данных](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | Slack |
| **Узлов в схеме** | 9 |
| **Нужные учётные данные** | `slackApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow provides a webhook-based API for converting XML data to JSON format, with error handling and Slack notifications.

Example: A web application or mobile app could use this workflow to accept XML data from users, convert it to JSON, and return the result. This could be useful for integrating with third-party services that require JSON data or for providing a simple API for XML-to-JSON conversion.

## What You Can Do
- Accepts XML data via a webhook, with support for both file uploads and plain text data
- Converts the XML data to JSON format, handling errors gracefully
- Provides both success and error responses in a consistent JSON format
- Sends notifications to a Slack channel when errors occur, including a link to the workflow execution details

</details>
