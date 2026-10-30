# Visualize your SQL Agent queries with OpenAI and Quickchart.io

> SQL-агент с визуализацией результатов графиками QuickChart.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вызов из другого воркфлоу, чат |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 14 |
| **Нужные учётные данные** | `openAiApi`, `postgres` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### Overview 
- This workflow aims to provide data visualization capabilities to a native SQL Agent. 
- Together, they can help foster data analysis and data visualization within a team. 
- It uses the native SQL Agent that works well and adds visualization capabilities thanks to OpenAI’s Structured Output and Quickchart.io. 

### How it works 
1. Information Extraction: 
 - The Information Extractor identifies and extracts the user's question. 
 - If the question includes a visualization aspect, the SQL Agent alone may not respond accurately. 
2. SQL Querying: 
 - It leverages a regular SQL Agent: it connects to a database, queries it, and translates the response into a human-readable format. 
3. Chart Decision: 
 - The Text Classifier determines whether the user would benefit from a chart to support the SQL Agent's response. 
4. Chart Generation: 
 - If a chart is needed, the sub-workflow dynamically generates a chart and appends it to the SQL Agent’s response. 
 - If not, the SQL Agent’s response is output as is. 
5. Calling OpenAI for Chart Definition: 
 - The sub-workflow calls OpenAI via the HTTP Request node to retrieve a chart definition. 
6. Building and Returning the Chart: 
 - In the "Set Response" node, the chart definition is appended to a Quickchart.io URL, generating the final chart image. 
 - The AI Agent returns the response along with the chart. 

### How to use it 
- Use an existing database or create a new one. 
- For example, I've used [this Kaggle dataset](https://www.kaggle.com/datasets/ihelon/coffee-sales/versions/15?resource=download) and uploaded it to a Supabase DB. 
- Add the PostgreSQL or MySQL credentials. 
- Alternatively, you can use SQLite binary files (check [this template](https://n8n.io/workflows/2292-talk-to-your-sqlite-database-with-a-langchain-ai-agent/)). 
- Activate the workflow. 
- Start chatting with the AI SQL Agent. 
- If the Text Classifier determines a chart would be useful, it will generate one in addition to the SQL Agent's response. 

### Notes 
- The full Quickchart.io specifications have not been fully integrated, so there may be some glitches (e.g., radar graphs may not display properly due to size limitations).

## Generate a Quickchart definition 
[Original template](https://n8n.io/workflows/2400-ai-agent-with-charts-capabilities-using-openai-structured-output-and-quickchart/)

**HTTP Request node**
- Send the chart query to OpenAI, with a defined JSON response format - *using HTTP Request node as it has not yet been implemented in the OpenAI nodes*
- The JSON structure is based on ChartJS and Quickchart.io definitions, that let us create nice looking graphs.
- The output is a JSON containing the chart definition that is passed to the next node.

**Set Response node**
- Adds the chart definition at the end of a Quickchart.io URL ([see documentation](https://quickchart.io/documentation/usage/parameters/))
- Note that in the parameters, we specify the width to 250 in order to be properly displayed in the chart interface.

### Information Extractor 
- This Information Extractor is added to extract the user's question
- In some cases, if the question contains a visualization aspect, the SQL Agent may not responding accurately.

### SQL Agent
- This SQL Agent is connected to a Database.
- It queries the Database for each user message.
- In this example, the prompt has been slightly changed to address an issue with querying a Supabase DB. Feel free to change the `Prefix Prompt` to suit your needs.
- This example uses the data from this [Kaggle dataset](https://www.kaggle.com/datasets/ihelon/coffee-sales/versions/15?resource=download)

### Respond with a text only or also include a chart 
- The text classifier determines if the response from the SQL Agent would benefit from a chart
- If it does, then it executes the subworkflow to dynamically generate a chart, and append the chart to the response from the SQL Agent
- If it doesn't, then the SQL Agent response is directly outputted.

## Demo
![Demo SQL Agent](https://media.licdn.com/dms/image/v2/D4E22AQERT4FEXEUncw/feedshare-shrink_800/feedshare-shrink_800/0/1731433289953?e=1741824000&v=beta&t=e6xUqjcsSq5U_NELeD-nn1mFROGYZLazkYC0eELTv5Y)

</details>
