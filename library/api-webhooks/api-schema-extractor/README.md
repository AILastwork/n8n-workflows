# Api schema extractor

> Обходит сайты с документацией API, с помощью ИИ (Gemini) находит описания операций и собирает для каждого сервиса JSON-схему; результаты складывает в Google Sheets и Google Drive.

| | |
|---|---|
| **Категория** | [🌐 API и вебхуки](../README.md) |
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

This workflow automates the process of crawling and extracting API documentation from the web, analyzing the content to identify API operations, and generating a custom JSON schema for each service.

Example: A company that offers a suite of SaaS products with public APIs could use this workflow to systematically gather and organize API documentation from across their product offerings. The workflow would automatically search for and extract relevant API information, then generate a standardized schema for each product's APIs, making it easier to maintain and share the API documentation.

## What You Can Do
- Automated web crawling and scraping to gather API documentation
- Natural language processing to identify and extract API operations from the documentation
- Generation of custom JSON schemas for each service's APIs
- Centralized storage and organization of API documentation and schemas
- Tracking and reporting on the status of the API documentation extraction process

</details>
