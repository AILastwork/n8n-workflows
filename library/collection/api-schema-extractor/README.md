# API Schema Extractor

> Собирает документацию API для списка сервисов (Google + Apify), извлекает операции через Gemini и генерирует схемы.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, вызов из другого воркфлоу |
| **Сервисы** | Google Drive, Google Gemini, Google Sheets, Qdrant |
| **Узлов в схеме** | 82 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Stage 1 - Research for API Documentation
- Fetch a list of services pending research from Database (Google Sheet)
- Uses a search engine (Google) to find API Documentation for each service
- Uses Webscraper (Apify) to read the contents of search results to filter irrelevant pages
- Stores webpage contents and metadata into Vector Store (Qdrant)

## Stage 2 - Extract API Operations From Documentation
- Fetch a list of services pending extraction from Database (Google Sheet)
- Query Vector store (Qdrant) to figure out service's products, solutions and offerings
- Query Vector store (Qdrant) again for API documentation relevant to these products, solutions and offerings
- Extract any API operations found in the API documentation results using LLM (Gemini)
- Store extracted API operations into Database (Google Sheet)

## Stage 3 - Generate Custom Schema From API Operations
- Fetch a list of services pending generation from Database (Google Sheet)
- Fetch all API operations for each service from Database (Google Sheet)
- Use Code node to combine and group all API operations for a service and convert to a custom schema
- Upload the resulting custom schema to file storage (Google Drive)

## Stage 1 - Subworkflow

## Stage 2 - Subworkflow

## Stage 3 - Subworkflow

</details>
