# Piepdrive-test

> Обогащает данные новой организации в Pipedrive через GPT-4o (заметка о компании) и уведомляет в Slack.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Pipedrive |
| **Сервисы** | OpenAI, Pipedrive, Slack |
| **Узлов в схеме** | 7 |
| **Нужные учётные данные** | `openAiApi`, `pipedriveApi`, `slackOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# Enrich Pipedrive's Organization Data with GPT-4o When an Organization is Created in Pipedrive

This workflow **enriches a Pipedrive organization's data by adding a note to the organization object in Pipedrive**. It assumes there is a custom "website" field in your Pipedrive setup, as data will be scraped from this website to generate a note using OpenAI.

## ⚠️ Disclaimer
**These workflows use a scraping API. Before using it, ensure you comply with the regulations regarding web scraping in your country or state**.

## Important Notes
- The OpenAI model used is GPT-4o, chosen for its large input token context capacity. However, it is also **the most expensive option**, you should take cost into consideration.

- The system prompt in the OpenAI Node generates output with relevant information, but feel free to improve or **modify it according to your needs**.

## **How It Works**

### Node 1: `Pipedrive Trigger - An Organization is Created`
This is the trigger of the workflow. When **an organization object is created in Pipedrive**, this node is triggered and retrieves the data. Make sure you have a "website" custom field (the name of the field in the n8n node will appear as a random ID and not with the Pipedrive custom field name).

### Node 2: `ScrapingBee - Get Organization's Website's Homepage Content`
This node **scrapes the content** from the URL of the website associated with the **Pipedrive Organization** created in Node 1. The workflow uses the [ScrapingBee](https://www.scrapingbee.com/) API, but you can use any preferred API or simply the HTTP request node in n8n.

### Node 3: `OpenAI - Message GPT-4o with Scraped Data`
This node sends HTML-scraped data from the previous node to the **OpenAI GPT-4 model**. The system prompt instructs the model to **extract company data**, such as products or services offered and competitors (if known by the model), and format it as HTML for optimal use in a Pipedrive Note.

### Node 4: `Pipedrive - Create a Note with OpenAI Output`
This node **adds a Note to the Organization created in Pipedrive** using the OpenAI node output. The Note will include the company description, target market, selling products, and competitors (if GPT-4 was able to determine them).

### Node 5 & 6: `HTML To Markdown` & `Code - Markdown to Slack Markdown`
These two nodes **format the HTML output to Slack Markdown**.

The Note created in Pipedrive is in HTML format, **as specified by the System Prompt of the OpenAI Node**. To send it to Slack, it needs to be converted to Markdown and then to Slack-specific Markdown.

### Node 7: `Slack - Notify`
This node **sends a message in Slack containing the Pipedrive Organization Note** created with this workflow.

</details>
