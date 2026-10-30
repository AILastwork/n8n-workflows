# Survey Insights with Qdrant, Python and Information Extractor

> Анализ опросов: ответы из Google Sheets в Qdrant, кластеризация (Python) и инсайты через ИИ.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, вызов из другого воркфлоу |
| **Сервисы** | Google Sheets, OpenAI, Qdrant |
| **Узлов в схеме** | 30 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `openAiApi`, `qdrantApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Step 1. Import Survey Responses
[Read more about Google Sheets](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets)

Our approach requires to import all participant responses as vectors with metadata linking them to the questions being answered. To do this, we'll generate questiona and answer pairs from the survey.

## Step 2. Vectorize Each Response Into Qdrant
[Read more about using Qdrant](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreqdrant)

Special attention is given to how metadata is captured as it becomes key to this workflow is being able to retrieve subsets of the data for analysis.

## Step 3. Trigger Insights SubWorkflow
[Learn more about Workflow Triggers](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executeworkflow)

A subworkflow is used to trigger the analysis for the survey. This separation is optional but used here to better demonstrate the two part process.

## Step 4. Create Insights Sheet
[Learn more about Workflow Triggers](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executeworkflowtrigger)

To capture the generated insights, we'll create a new unique sheet within the survey spreadsheet. This is optional and you may want to capture in other datastores depending on your needs.

## Step 5. Get List Of Questions From Survey
[Read more about using Google Sheets](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets)

Next we'll fetch the survey for metadata and questions, splitting them into separate workflow items. Our intention is to process each question end-to-end before moving to the next. This approach is a little "safer" in the scenario where an interruption occurs we won't lose all our work.

## Step 6. Find Groups of Similar Answers For Each Question
[Learn more about using the Code Node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code/)

Giving all the responses to an LLM to analyse is the common but naive approach; the summarisation is usually too high level for real insights and loses a lot of detail such as the number and identity of respondants. What we want to do instead is find and group popular answers for each question to ensure all perspectives are considered.

Our approach does this by mapping our answer vectors to a 2D grid and then identifying where the vector points are "clustered"; where a group of points are within close proximity to each other.

## Step 7b. Skip If No Clusters Found
Where no clusters were found, it means the answers were unique enough to not show any pattern. eg. "What's you name?"

## Step 7a. Summarise the Top Groups of Similar Answers
[Read more about using the Information Extractor Node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.information-extractor)

Each discovered cluster will return a reference vector which is used to fetch all related answers in the group.
The group is then sent to the LLM to summarise as well as assign a sentiment score.

## Step 8. Write To Insights Sheet
Finally, our completed insights to appended to
the Insights Sheet we created earlier in the workflow.

### Run this once! 
If for any reason you need to run more than once, be sure to clear the existing data first.

## Try It Out!

### This workflow generates highly-detailed insights from survey responses. Works best when dealing with a large number of participants.

* Import survey responses and vectorise in Qdrant vectorstore.
* Identify clusters of popular responses to questions using K-means clustering algorithm. 
* Each valid cluster is analysed and summarised by LLM.
* Export LLM response and cluster results back into sheet.

Check out the reference google sheet here: https://docs.google.com/spreadsheets/d/e/2PACX-1vT6m8XH8JWJTUAfwojc68NAUGC7q0lO7iV738J7aO5fuVjiVzdTRRPkMmT1C4N8TwejaiT0XrmF1Q48/pubhtml

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

### First Time Running?
There is a slight delay on first run because the code node has to download the required packages.

</details>
