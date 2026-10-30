# Convert URL HTML to Markdown Format and Get Page Links

> Конвертирует страницы по списку URL в Markdown через Firecrawl и собирает ссылки со страниц.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 10 |
| **Нужные учётные данные** | `httpHeaderAuth` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

**40 at a time seems to be the memory limit on my server - run until complete with batches of 40 or increase based on your server memory**

**Firecrawl.dev retrieves markdown inc. title, description, links & content. First define the URLs you'd like to scrape**

**REQUIRED**
Connect to your database of urls to input. Name the column `Page` like in the `Example fields from data source` node and make sure it has one link per row like `split out page urls`

**REQUIRED**
Update the Auth parameter to your own [Firecrawl](https://firecrawl.dev) dev token

**Header Auth parameter**
name - Authorization
value - your-own-api-key

**REQUIRED** 
Output the data to your own data source e.g. Airtable

**Respect API limits (10 requests per min)**

## Convert URL HTML to Markdown and Get Page Links

## Use Case
Transform web pages into AI-friendly markdown format:
- You need to process webpage content for LLM analysis
- You want to extract both content and links from web pages
- You need clean, formatted text without HTML markup
- You want to respect API rate limits while crawling pages

## What this Workflow Does
The workflow uses Firecrawl.dev API to process webpages:
- Converts HTML content to markdown format
- Extracts all links from each webpage
- Handles API rate limiting automatically
- Processes URLs in batches from your database

## Setup
1. Create a [Firecrawl.dev](https://www.firecrawl.dev/) account and get your API key
2. Add your Firecrawl API key to the HTTP Request node's Authorization header
3. Connect your URL database to the input node (column name must be "Page") or edit the array in `Example fields from data source`
4. Configure your preferred output database connection

## How to Adjust it to Your Needs
- Modify input source to pull URLs from different databases
- Adjust rate limiting parameters if needed
- Customize output format for your specific use case


Made by Simon @ [automake.io](https://automake.io)

</details>
