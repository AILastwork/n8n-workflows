# AI web researcher for sales

> ИИ-исследователь для продаж: по списку компаний в Google Sheets ищет информацию в интернете и заполняет данные.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, по расписанию |
| **Сервисы** | Google Sheets, OpenAI, SerpAPI |
| **Узлов в схеме** | 14 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `openAiApi`, `serpApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Read Me

This workflow allows you to do account research with the web using AI.

The advanced AI module has 2 capabilities: 
- Research Google using SerpAPI
- Visit and get website content using a sub-workflow


From an unstructured input like a domain or a company name. 

It will return the following properties: 
- domain
- company Linkedin Url
- cheapest plan
- has free trial
- has entreprise plan
- has API
- market (B2B or B2C)


The strength of n8n here is that you can adapt this workflow to research whatever information you need.

You just have to precise it in the prompt and to precise the output format in the "Strutured Output Parser" module.

[Click here to find more detailed instructions with video guide.](https://lempire.notion.site/AI-Web-research-with-n8n-a25aae3258d0423481a08bd102f16906)

### Process rows 1 by 1
This module will allow us to process rows 1 by 1

Precise here the format in which you need the data to be

### Ask AI what are the information you are looking for about the company

Get your free API key here https://serpapi.com/

Run the workflow manually or activate it to run it every 2 hours

Instead of SERP API module, you can also use this custom module for ScrapingBee. It is more cost-efficient.

Get your free API key here https://www.scrapingbee.com/

In this workflow, I use Google Sheets to store the results. 

You can use my template to get started faster:

1. [Click on this link to get the template](https://docs.google.com/spreadsheets/d/1vR6s2nlTwu01v3GP7wvSRWS5W49FJIh20ZF7AUkmMDo/edit?usp=sharing)
2. Make a copy of the Sheets
3. Add the URL to this node and the node **"Google Sheets - Update Row with data"**

</details>
