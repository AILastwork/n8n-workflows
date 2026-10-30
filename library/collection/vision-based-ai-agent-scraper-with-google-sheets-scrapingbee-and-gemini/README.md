# Vision-Based AI Agent Scraper - with Google Sheets, ScrapingBee, and Gemini

> ИИ-парсер с компьютерным зрением: делает скриншоты страниц из списка (ScrapingBee) и извлекает данные Gemini в Google Sheets.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, вызов из другого воркфлоу |
| **Сервисы** | Google Gemini, Google Sheets |
| **Узлов в схеме** | 14 |
| **Нужные учётные данные** | `googleApi`, `googlePalmApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Trigger
The default trigger is **When clicking ‘Test workflow’**, meaning the workflow will **need to be triggered manually**. 

You can replace this by selecting a **trigger of your choice**.

## Google Sheets - List of URLs

The Google Sheet will contain two sheets: 
- **List of URLs to** scrape 
- **Results** page, populated with the scraping results and AI-extracted data.

Here is an **[example Google Sheet](https://docs.google.com/spreadsheets/d/10Gc7ooUeTBbOOE6bgdNe5vSKRkkcAamonsFSjFevkOE/)** you can use. The "Results" sheet is pre-configured for e-commerce website scraping. You can adapt it to your specific needs, but remember to adjust the `Structured Output Parser` node accordingly.

## Set Fields

This node allows you to **define the fields** that will be sent to the **ScrapingBee HTTP Node** and the AI Agent. 

In this template, **only one field** is pre-configured: **url**. You can customize it by adding additional fields as needed.

## ScrapingBee - Get Page Screenshot

This node uses ScrapingBee, a powerful scraping tool, to capture a screenshot of the desired URL. 
You can [try ScrapingBee](https://www.scrapingbee.com/) and enjoy 1,000 free requests (non-affiliate link). 

Ensure the `screenshot_full_page` parameter is set to *`true`* for a full-page screenshot. This is crucial for vision-based scraping with the AI Agent. 

Alternatively, you can **choose to screenshot only a specific part of the page**. However, keep in mind that the **AI Agent will extract data only from the visible section—it has vision**, but not a crystal ball 🔮!

## Vision-Based Scraping AI Agent

This is the central node of the workflow, powered by an AI Agent with two key prompts:

- **System Prompt**: Instructs the AI on how and what data to extract from the screenshot. You can customize this to suit your needs. It also includes fallback instructions to call a tool for retrieving the HTML page if data extraction from the screenshot fails. 
- **User Message**: Provides the page URL for context.

### Sub-Nodes

1. **Google Gemini Chat Model** 
 Chosen because tests show that **Gemini-1.5-Pro** outperforms GPT-4 and GPT-4-Vision in visual tasks. *Either my prompt wasn’t optimized for GPT models, or GPT might need glasses 👓*. 
**Other multimodal LLMs haven’t been tested yet**.

2. **HTML-Based Scraping Tool** 
 A **fallback tool** the agent **uses if it cannot extract data directly from the screenshot**.

3. **Structured Output Parser** 
 Formats the **extracted data into an easy-to-use structure**, ready to be added to the **results page in Google Sheets**.

### Google Gemini Chat Model

The **default model is gemini-1.5-pro**. It offers excellent performance for this use case, but **it’s not the most cost-effective option—use it judiciously**.

### HTML-Based Scraping Tool

This tool is **invoked when the AI Agent requires the HTML** (*converted to Markdown*) to extract data because the **screenshot alone wasn’t sufficient**.

### Structured Output Parser

This node **organizes the extracted data into an easy-to-use JSON format**. 

In this template, the JSON is **designed for an e-commerce webpage**. Customize it to fit your specific needs.

## Split Out

This node **splits the array** created by the `Structured Output Parser` into **individual rows**, making them easy to append to the **subsequent Google Sheets node**.

## Google Sheets - Create Rows

This node **creates rows** in the **Results** sheet using the extracted data. 

You can use the **[example Google Sheet](https://docs.google.com/spreadsheets/d/10Gc7ooUeTBbOOE6bgdNe5vSKRkkcAamonsFSjFevkOE/)** as a template. However, ensure that the **columns in the Results sheet are aligned with the structure of the output** from the `Structured Output Parser node`.

## HTML-Scraping Tool Trigger

This **node serves as the entry point for the HTML scraping tool. 

It is triggered by the **AI Agent only when it fails to extract data** from the screenshot. The **URL** is sent as a **parameter for the query**.

## Set Fields - From AI Agent Query

This node sets the fields from the AI Agent’s query. 

In this template, the only field configured is **url**.

## ScrapingBee - Get Page HTML

This node utilizes the ScrapingBee API to **retrieve the HTML of the webpage**.

## HTML to Markdown

This node **converts the HTML from the previous node** into Markdown format, **helping to save tokens**. 

The converted **Markdown is then automatically sent to the AI Agent** through this node.

# ✨ Vision-Based AI Agent Scraper - with Google Sheets, ScrapingBee, and Gemini

## Important notes :
### Check legal regulations: 
This workflow involves scraping, so make sure to check the legal regulations around scraping in your country before getting started. Better safe than sorry!

## Workflow description
This workflow leverages a **vision-based AI Agent**, integrated with Google Sheets, ScrapingBee, and the Gemini-1.5-Pro model, to **extract structured data from webpages**. The AI Agent primarily **uses screenshots for data extraction** but switches to HTML scraping when necessary, ensuring high accuracy. 

Key features include: 
- **Google Sheets Integration**: Manage URLs to scrape and store structured results. 
- **ScrapingBee**: Capture full-page screenshots and retrieve HTML data for fallback extraction. 
- **AI-Powered Data Parsing**: Use Gemini-1.5-Pro for vision-based scraping and a Structured Output Parser to format extracted data into JSON. 
- **Token Efficiency**: HTML is converted to Markdown to optimize processing costs.

This template is designed for e-commerce scraping but can be customized for various use cases.

</details>
