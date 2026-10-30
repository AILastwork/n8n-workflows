# Api queries data from graphql

> По коду страны из вебхука запрашивает данные о стране через GraphQL API и возвращает понятный текстовый ответ.

| | |
|---|---|
| **Категория** | [🌐 API и вебхуки](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | GraphQL |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow retrieves country information based on a country code provided through a webhook, and then formats the response into a user-friendly message.

Example: A user could use this workflow to quickly look up the phone code and emoji for a specific country by sending a request to the workflow's webhook with the country code in the query parameters.

## What You Can Do
- Retrieves country information from a GraphQL API using the provided country code
- Parses the GraphQL response and formats the data into a user-friendly message
- Provides a webhook endpoint for easy integration with other applications or services

</details>
