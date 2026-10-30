# Enrich Property Inventory Survey with Image Recognition and AI Agent

> Распознаёт фото из описи имущества в Airtable и заполняет характеристики ИИ-агентом.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, вызов из другого воркфлоу |
| **Сервисы** | Airtable, OpenAI |
| **Узлов в схеме** | 19 |
| **Нужные учётные данные** | `airtableTokenApi`, `httpHeaderAuth`, `openAiApi`, `serpApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## 1. Use Airtable to Capture Survey Photos
[Read more about AirTable](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.airtable)

To enable this workflow, we need a database where we can retreive the title and photo to analyse and write the generate values back to. Airtable is perfect for this since it has a robust API we can work with.

For this demo, we'll manually trigger but this can be changed for forms or other triggers.

## 2. Use AI Vision Model to Analyse the Photo.
[Read more about OpenAI Vision](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.openai)

We'll use OpenAi vision model to create a detailed description of the product in the photo. We split this step from the agent because it uses an image model rather than the usual text-based one.

## 3. Build an AI Agent who Searches the Internet
[Read more about OpenAI Agents](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.openai)

This AI Agent has the ability to perform reverse image searches using our captured photos as well visit external webpages in order to obtain accurate product names and attributes. The Agent along with the tools might mimic what the average human user would carry out the same task.

* For reverse image search, we're using SERP API service however we won't use the built-in SERP node as we need to specify custom parameters. 
* For scraping, we'll use [Firecrawl](https://www.firecrawl.dev/) as this service also helps to parse and return the page as markdown which is more efficient.

## 4. Overwrite our Rows with Enriched Results

And Viola! Our AI agent has potentially saved hours of manual data entry work for our surveyor. This technique can be used for many other usecases.

## 5. Using the Custom Workflow Tool
[Read more about Workflow Tools](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow)

AI Agents rely on Tools to make decisions and become exponentially more powerful the more tools they have. A common pattern to manage multiple tools is to create a routing system for tools using the API pattern.

## Try It Out!
### This workflow does the following:
* Scans an Airtable spreadsheet for rows with product photo images.
* Uses an AI vision model to attempt to identify the product.
* Uses an AI Agent to research the product on the internet to enrich the product data.
* Overwrites our Airtable spreadsheet with the enriched data.

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

🚨**Required**
* Set Airtable Base and Table IDs here.

🚨**Required**
* Set Airtable Base and Table IDs here.

## 5.1 Google Reverse Image Tool
This tool uses Google's reverse image API to return websites where similar images are found.

## 5.2 Webscraper Tool
This tool uses Firecrawl.dev API to crawl webpages and returns those pages in markdown format.

</details>
