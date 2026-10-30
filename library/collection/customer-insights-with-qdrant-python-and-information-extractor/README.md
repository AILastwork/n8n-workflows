# Customer Insights with Qdrant, Python and Information Extractor

> Собирает отзывы о компании с Trustpilot в Qdrant, кластеризует их (Python) и выделяет инсайты через ИИ в Google Sheets.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, вызов из другого воркфлоу |
| **Сервисы** | Google Sheets, OpenAI, Qdrant |
| **Узлов в схеме** | 24 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `openAiApi`, `qdrantApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Step 1. Starting Fresh
For this demo, we'll clear any existing records in our Qdrant vector store for the selected company. We do this using the Qdrant's delete points API.

## Step 2. Scraping TrustPilot For Company Reviews
[Read more about HTTP Request Node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/)

We'll scrape at the most recent 3 pages of reviews for illustrative purposes but we could easily scrape them all if required. The HTML node offers a convenient way to extract data from the returned html pages and using it, we'll retrieve all the reviews data.

## Step 3. Store Reviews in Qdrant
[Learn more about the Qdrant Vector Store](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreqdrant/)

Vector databases are a great way to store data if you're interested in perform similiarity searches which applies here as we want to group similar reviews to find patterns. Qdrant is a powerful vector database and tool of choice because of its robust API implementation and advanced filtering capabilities.

## Step 5. The Insight Subworkflow
[Learn more about Workflow Triggers](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executeworkflowtrigger)

This subworkflow takes the companyId to find the relevant records in our Qdrant vector store. It also takes a "from" and "to" date to scope the insights to a particular range - doing this we can say something like "we only want insights for the past month of reviews".

## Step 6. Apply Clustering Algorithm to Reviews
[Read more about using Python in n8n](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code)

We'll retrieve our vectors embeddings for the desired company reviews and perform an advanced clustering algorithm on them. This powerful echnique allows us to quickly group similar embeddings into clusters which we can then use to discover popular feedback, opinions and pain-points!

## Step 7. Fetch Reviews By Cluster
[Learn more about using the Code Node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code/)

With the Qdrant point IDs grouped and returned by our code node, all that's left is to fetch the payload of each. Note that the clustering algorithm isn't perfect and may require some tweaking depending on your data.

## Step 8. Getting Insights from Grouped Reviews
[Read more about using Information Extractor Node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.information-extractor)

Next, we'll use our state-of-the-art LLM to generate insights on our reviews. Doing it this way, we'll able to pull more granular results addressing many key topics within the reviews.

## Step 9. Write To Insights Sheet
Finally, our completed insights to appended to the Insights Sheet we created earlier in the workflow.

You can find a sample sheet here: https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6ipJnXWXgr5wlUJnhioNpeYrxaIpsRYZCwN3C-fFXumkbh9TAsA_JzE0kbv7DcGAVIP7az0L46_2P/pubhtml

## Step 4. Trigger Insights SubWorkflow
[Learn more about Workflow Triggers](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executeworkflow)

A subworkflow is used to trigger the analysis for the survey. This separation is optional but used here to better demonstrate the two part process.

### 🚨 Set company here!
Trustpilot must recognise it as part of the url.

## Try It Out!

### This workflow generates highly-detailed customer insights from Trustpilot reviews. Works best when dealing with a large number of reviews.

* Import Trustpilot reviews and vectorise in Qdrant vectorstore.
* Identify clusters of popular topics in reviews using K-means clustering algorithm. 
* Each valid cluster is analysed and summarised by LLM.
* Export LLM response and cluster results back into sheet.

Check out the reference google sheet here: https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6ipJnXWXgr5wlUJnhioNpeYrxaIpsRYZCwN3C-fFXumkbh9TAsA_JzE0kbv7DcGAVIP7az0L46_2P/pubhtml

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

### Run this once! 
If for any reason you need to run more than once, be sure to clear the existing data first.

### First Time Running?
There is a slight delay on first run because the code node has to download the required packages.

</details>
