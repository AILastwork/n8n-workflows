# Automate Competitor Research with Exa.ai, Notion and AI Agents

> Исследование конкурентов: находит похожие компании через Exa.ai, ИИ-агенты собирают данные и сохраняют отчёт в Notion.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Notion, OpenAI |
| **Узлов в схеме** | 30 |
| **Нужные учётные данные** | `httpHeaderAuth`, `notionApi`, `openAiApi`, `serpApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Try It Out!

### This workflow builds a competitor research agent using Exa.ai as a starting point. The HTTP Request tool is used to demonstrate how you can build powerful agents with minimal effort.

* Using Exa's findSimilar search, we ask it to look for similar companies ie. competitors, to our source company.
* This list of competitors is sent to 3 agents to scour the internet to find company overview, product offering and customer reviews.
* A report is then compiled from the output of all 3 agents into a notion table.

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

## Step 1. Get Competitors
[Read more about using the HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest)

Exa.ai is a relatively new AI search engine startup with a specialised API for finding similar companies.
This is perfect for marketing research as we can easily find competitors to compare against.

### 🚨Required!
Remember to set your company here.

## Step 2. Feed into Agent Pipeline
[Learn more about loops](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.splitinbatches)

A loop is used to ensure competitors are processed one at a time. This is ideal when we don't want errors to fail the entire pipeline.

## Step 4. Research Competitor Product Offering
[Learn more about using AI Agents](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent)

This agent uses SERPAPI to discover the competitor's product pages. Once found, it will use the webscraping tool to fetch the page's contents to extract the necessary data points.

## Step 3. Discover Competitor Company and Funding Overview
[Learn more about using AI Agents](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent)

This agent searches crunchbase.com, wellfound.com and linkedin.com for the competitor's company details, people data, funding activity and latest news.

## Step 5. Capture Competitor Product Reviews
[Learn more about using AI Agents](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent)

This agent uses SERPAPI to discover product reviews for the competitor's product or service and then summarises the pros and cons.

## Step 6. Collect Results and Send to Notion
[Read more about using Notion](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.notion)

Finally, once the agent's have completed their tasks successfully, we compiled a competitor report and insert it as a new row in our Notion table.
You can check out a copy of this table here: https://jimleuk.notion.site/2d1c3c726e8e42f3aecec6338fd24333?v=de020fa196f34cdeb676daaeae44e110&pvs=4

### 🚨Required!
Remember to set your Notion Database here.

</details>
