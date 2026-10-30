# Building Your First WhatsApp Chatbot (1)

> Первый WhatsApp-чат-бот: ИИ-агент продаж отвечает по PDF-брошюре, загруженной во векторное хранилище.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, событие в WhatsApp |
| **Сервисы** | OpenAI, WhatsApp |
| **Узлов в схеме** | 18 |
| **Нужные учётные данные** | `openAiApi`, `whatsAppApi`, `whatsAppTriggerApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## 1. Download Product Brochure PDF
[Read more about the HTTP Request Tool](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest)

Import your marketing PDF document to build your vector store. This will be used as the knowledgebase by the Sales AI Agent.

For this demonstration, we'll use the HTTP request node to import the YAMAHA POWERED LOUDSPEAKERS 2024 brochure ([Source](https://usa.yamaha.com/files/download/brochure/1/1474881/Yamaha-Powered-Loudspeakers-brochure-2024-en-web.pdf)) and an Extract from File node to extract the text contents.

## 2. Create Product Brochure Vector Store
[Read more about the In-Memory Vector Store](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreinmemory/)

Vector stores are powerful databases which serve the purpose of matching a user's questions to relevant parts of a document. By creating a vector store of our product catalog, we'll allow users to query using natural language.

To keep things simple, we'll use the **In-memory Vector Store** which comes built-in to n8n and doesn't require a separate service. For production deployments, I'd recommend replacing the in-memory vector store with either [Qdrant](https://qdrant.tech) or [Pinecone](https://pinecone.io).

## 3. Use the WhatsApp Trigger
[Learn more about the WhatsApp Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.whatsapptrigger/)

The WhatsApp Trigger allows you to receive incoming WhatsApp messages from customers. It requires a bit of setup so remember to follow the documentation carefully! Once ready however, it's quite easy to build powerful workflows which are easily accessible to users.

Note that WhatsApp can send many message types such as audio and video so in this demonstration, we'll filter them out and just accept the text messages.

### Want to handle all message types?
Check out my other WhatsApp template in my creator page! https://n8n.io/creators/jimleuk/

### 3a. Handle Unsupported Message Types
For non-text messages, we'll just reply with a simple message to inform the sender.

## 4. Sales AI Agent Responds To Customers
[Learn more about using AI Agents](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/)

n8n's AI agents are powerful nodes which make it incredibly easy to use state-of-the-art AI in your workflows. Not only do they have the ability to remember conversations per individual customer but also tap into resources such as our product catalogue vector store to pull factual information and data for every question.

In this demonstration, we use an AI agent which is directed to help the user navigate the product brochure. A Chat memory subnode is attached to identify and keep track of the customer session. A Vector store tool is added to allow the Agent to tap into the product catalogue knowledgebase we built earlier.

## 5. Repond to WhatsApp User
[Learn more about the WhatsApp Node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.whatsapp/)

The WhatsApp node is the go-to if you want to interact with WhatsApp users. With this node, you can send text, images, audio and video messages as well as use your WhatsApp message templates.

Here, we'll keep it simple by replying with a text message which is the output of the AI agent.

## Try It Out!

### This n8n template builds a simple WhatsApp chabot acting as a Sales Agent. The Agent is backed by a product catalog vector store to better answer user's questions.

* This template is in 2 parts: creating the product catalog vector store and building the WhatsApp AI chatbot.
* A product brochure is imported via HTTP request node and its text contents extracted.
* The text contents are then uploaded to the in-memory vector store to build a knowledgebase for the chatbot.
* A WhatsApp trigger is used to capture messages from customers where non-text messages are filtered out.
* The customer's message is sent to the AI Agent which queries the product catalogue using the vector store tool.
* The Agent's response is sent back to the user via the WhatsApp node.

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

### You only have to run this part once!
Run this step to populate our product catalogue vector. Run again if you want to update the vector store with a new version.

### Activate your workflow to use!
To start using the WhatsApp chatbot, you'll need to activate the workflow. If you are self-hosting ensure WhatsApp is able to connect to your server.

</details>
