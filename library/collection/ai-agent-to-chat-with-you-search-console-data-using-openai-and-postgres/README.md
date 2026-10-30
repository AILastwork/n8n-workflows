# AI Agent to chat with you Search Console Data, using OpenAI and Postgres

> ИИ-агент для чата с данными Google Search Console; память диалога в Postgres.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук, вызов из другого воркфлоу |
| **Сервисы** | Memory Postgres Chat, OpenAI |
| **Узлов в схеме** | 16 |
| **Нужные учётные данные** | `httpBasicAuth`, `oAuth2Api`, `openAiApi`, `postgres` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Webhook - ChatInput

This webhook serves as the endpoint for receiving `ChatInput` data. Ensure that you include:
- `chatInput` – the content you wish to send (😉)
- `sessionId` – a unique identifier for the session

If you're using an interface such as **Open WebUI**, the `sessionId` will be generated automatically.

## Set fields

This node sets three fields:
- `chatInput`: retrieved from the previous webhook node
- `sessionId`: retrieved from the previous webhook node
- `date_message`: formatted within this node. This will be used later to help the AI agent determine the date range for retrieving Search Console data.

## AI Agent - Tools Agent

This AI Agent is configured with a system prompt that instructs it to:
- On the first user message, **retrieve available Search Console properties** and offer the user the option to **fetch data from these properties**
- Based on the user’s natural language input, **construct an API call** to the selected Search Console property and retrieve the requested data
- Present the data in a **markdown-formatted table**

The AI Agent has a friendly tone and is designed to **confirm the user’s data requirements accurately** before executing any API requests.

### AI Agent Sub-node - OpenAI Chat Model

This sub-node utilizes the selected **OpenAI Chat Model**. You can replace it with any LLM that **supports tool calling**.

### ⚠️ Choose Your Model
In this template, the **default model is `gpt-4o`**, a **costly option**. If you'd like a more **affordable alternative**, select `gpt4-o-mini`, though note that responses may occasionally be of slightly lower quality compared to `gpt-4o`.

### AI Agent Sub-node - Postgres Chat Memory

Connect your **Postgres credentials** and specify a **table name** to store the chat history. In this template, the default table name is `insights_chat_histories`, and the **context window length is set to 5**.

**👋 Tip:** If you don’t have a Postgres database, you can quickly **set one up with [Supabase](https://supabase.com/)**.

### AI Agent Sub-node - Call Search Console Tool

This **tool is used by the AI Agent** to:
- Retrieve the **list of accessible properties in Search Console**
- **Fetch Search Console data** based on the user’s natural language request

## Respond to Webhook

This node is used to send a response back to the user.

**👋 Tip:** `intermediateSteps` are configured, allowing you to use raw data fetched from Search Console to **create charts or other visualizations** if desired.

## Tool Call Trigger

This **node is triggered when the AI Agent needs to retrieve the `website_list`** (accessible Search Console properties) or **`custom_insights`** based on user data.

## Set Fields - Construct API Call

This node configures fields based on the JSON sent by the AI agent:
- The `request_type` field determines the route: `website_list` (to retrieve the list of websites) or `custom_insights` (to get insights from Search Console)
- Additional fields are set to construct the API call, following the **[Search Console API Documentation](https://developers.google.com/webmaster-tools/v1/searchanalytics/query?hl=en)**

## Search Console - Get Custom Insights

This node **performs the API call to retrieve data from Search Console**.

## Search Console - Get List of Properties

This node **performs the API call to retrieve the list of accessible properties from Search Console**.

## Set Fields - Create `searchConsoleDataArray`

These nodes **create an array based on the response from the Search Console API**.

## Array Aggregation - Response to AI Agent

These nodes **aggregate the array from the previous** step and send it back to the AI Agent through the field named output as `response`.

# AI Agent to Chat with Your Search Console Data

This **AI Agent enables you to interact with your Search Console data** through a **chat interface**. Each node is **documented within the template**, providing sufficient information for setup and usage. You will also need to **configure Search Console OAuth credentials**.

Follow this **[n8n documentation](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic/#configure-your-oauth-consent-screen)** to set up the OAuth credentials.

## Important Notes

### Correctly Configure Scopes for Search Console API Calls
- It’s essential to **configure the scopes correctly** in your Google Search Console API OAuth2 credentials. Incorrect **configuration can cause issues with the refresh token**, requiring frequent reconnections. Below is the configuration I use to **avoid constant re-authentication**:
![Search Console API oAuth2 config 1](https://i.imgur.com/vVLM7gG.png)
![Search Console API oAuth2 config 2](https://i.imgur.com/naT1NaX.png)

Of course, you'll need to add your **client_id** and **client_secret** from the **Google Cloud Platform app** you created to access your Search Console data.

### Configure Authentication for the Webhook

Since the **webhook will be publicly accessible**, don’t forget to **set up authentication**. I’ve used **Basic Auth**, but feel free to **choose the method that best meets your security requirements**.

## 🤩💖 Example of awesome things you can do with this AI Agent
![Example of chat with this AI Agent](https://i.imgur.com/jbfsYvT.png)

</details>
