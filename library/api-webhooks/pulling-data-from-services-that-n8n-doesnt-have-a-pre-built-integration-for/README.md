# Pulling data from services that n8n doesnt have a pre built integration for

> Учебный пример по HTTP Request: парсинг страниц, разбиение ответа на элементы, пагинация — для сервисов без готовой интеграции.

| | |
|---|---|
| **Категория** | [🌐 API и вебхуки](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 10 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow demonstrates various use cases of the HTTP Request node, including data scraping, splitting response data into items, and handling pagination.

Example: A user might use this workflow to fetch a list of their starred GitHub repositories, extract the titles of recent blog posts, and split a JSON response into individual items for further processing.

## What You Can Do
- Data Scraping: The workflow fetches a random Wikipedia page and extracts the article title using the HTML Extract node.
- Splitting Response Data: The workflow takes the response body from an HTTP Request and splits it into individual items using the Item Lists node.
- Handling Pagination: The workflow demonstrates how to loop through paginated data from the GitHub API, incrementing the page number after each request.

</details>
