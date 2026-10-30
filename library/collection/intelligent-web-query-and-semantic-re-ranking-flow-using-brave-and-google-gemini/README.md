# Intelligent Web Query and Semantic Re-Ranking Flow

> Умный веб-поиск: запрос через Brave Search и семантическое переранжирование результатов с помощью ИИ.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | Anthropic Claude, Google Gemini, OpenAI |
| **Узлов в схеме** | 16 |
| **Нужные учётные данные** | `anthropicApi`, `googlePalmApi`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Step 1. Set Up a Free Brave Web Search Query API Key

To attain the free web search API tier from Brave, follow these steps:

1. Visit api.search.brave.com
2. Create an account
3. Subscribe to the free plan (no charge)
4. Navigate to the API Keys section
5. Generate an API key. For the subscription type, choose "Free".
6. Go to the "Query" Nodes and change the "X-Subscription-Token" value to your API Key.

## If you require to change this Node to Webhook Or any Other Item:

- In case you want to change the input type from Webhook to any other item, Make sure to go to the Query 1 and Query 1 Ranker and replace the Webhook Input to your Node's input.

## Step 2. Setup the Webhook Call Node

**Instructions for Setting Up the Webhook Call and Using It in Your Workflow**

This node is designed to send a **web search query** to the workflow (partly built in this chart) and return the results. Follow these steps to correctly configure and use it:

1. **Locate the "Webhook" Node in the Workflow**:
 - Navigate to the workflow above, the first item, the "Webhook" node.
 - In the "Webhook" node, change the **Webhook URL option** from "Test URL" to "Production URL."
 - Copy the generated **Production URL**.

2. **Paste the Webhook URL in the HTTP Node**:
 - In your target workflow, locate the **HTTP Request** node.
 - Paste the copied **Production URL** into the URL field of the HTTP Request node. This connects the two workflows.

3. **Send the Research Request**:
 - When sending the request to this workflow, make sure to include your web search query in the **"Research Question" parameter** of the HTTP Request node.

4. **Move the Webhook Call Node**:
 - Move this **Webhook Call Node** into the workflow where you need the research results. Ensure that it’s correctly connected and configured to send the data to the main workflow.

## Customized Models to Replace

In case you rather to use another LLM Model to Perform the Semantic Search and Re-Ranking, These nodes below are Optimized based on the LLM Structure of OpenAI GPT4o & Anthropic Claude.

</details>
