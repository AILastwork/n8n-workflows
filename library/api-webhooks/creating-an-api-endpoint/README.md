# Creating an api endpoint

> Простейший API-эндпоинт: по имени и фамилии из запроса возвращает ссылку на поиск в Google.

| | |
|---|---|
| **Категория** | [🌐 API и вебхуки](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow creates a simple API endpoint that generates a Google search URL based on the first and last name provided in the webhook request.

Example: A user could use this workflow to create a custom API endpoint that allows them to quickly generate a Google search URL for a person's name. For example, they could send a request to the API endpoint with the parameters `?first_name=John&last_name=Doe`, and the workflow would respond with the URL `https://www.google.com/search?q=John+Doe`.

## What You Can Do
- Webhook node to create a custom API endpoint
- Set node to generate the Google search URL based on the input parameters
- Respond to Webhook node to return the generated URL to the user

</details>
