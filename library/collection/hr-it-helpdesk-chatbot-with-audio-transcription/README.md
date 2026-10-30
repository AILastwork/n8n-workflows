# HR & IT Helpdesk Chatbot with Audio Transcription

> Чат-бот HR и IT-поддержки в Telegram: отвечает по внутренним документам (RAG), понимает голосовые.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, событие в Telegram |
| **Сервисы** | Memory Postgres Chat, OpenAI, Telegram, Vector Store P G Vector |
| **Узлов в схеме** | 21 |
| **Нужные учётные данные** | `openAiApi`, `postgres`, `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## 1. Download & Extract Internal Policy Documents
[Read more about the HTTP Request Tool](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest)

Begin by importing the PDF documents that contain your internal policies and FAQs—these will become the knowledge base for your Internal Helpdesk Assistant. For example, you can store a company handbook or IT/HR policy PDFs on a shared drive or cloud storage and reference a direct download link here.

In this demonstration, we'll use the **HTTP Request node** to fetch the PDF file from a given URL and then parse its text contents using the **Extract from File node**. Once extracted, these text chunks will be used to build the vector store that underpins your helpdesk chatbot’s responses.

[Example Employee Handbook with Policies](https://s3.amazonaws.com/scschoolfiles/656/employee_handbook_print_1.pdf)

## 2. Create Internal Policy Vector Store
[Read more about the In-Memory Vector Store](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreinmemory/)

Vector stores power the retrieval process by matching a user's natural language questions to relevant chunks of text. We'll transform your extracted internal policy text into vector embeddings and store them in a database-like structure.

We will be using PostgreSQL which has production ready vector support.

**How it works** 
1. The text extracted in Step 1 is split into manageable segments (chunks). 
2. An embedding model transforms these segments into numerical vectors. 
3. These vectors, along with metadata, are stored in PostgreSQL. 
4. When users ask a question, their query is embedded and matched to the most relevant vectors, improving the accuracy of the chatbot's response.

## 3. Handling Messages with Fallback Support

This workflow processes Telegram messages to handle **text** and **voice** inputs, with a fallback for unsupported message types. Here’s how it works:

1. **Trigger Node**:
 - The workflow starts with a Telegram trigger that listens for incoming messages.

2. **Message Type Check**:
 - The workflow verifies the type of message received:
 - **Text Message**: If the message contains `$json.message.text`, it is sent directly to the agent.
 - **Voice Message**: If the message contains `$json.message.voice`, the audio is transcribed into text using a transcription service, and the result is sent to the agent.

3. **Fallback Path**:
 - If the message is neither text nor voice, a fallback response is returned:
 `"Sorry, I couldn’t process your message. Please try again."`

4. **Unified Output**:
 - Both text messages and transcribed voice messages are converted into the same format before sending to the agent, ensuring consistency in handling.

The setup needs to be run at the start or when data is changed

## 4. HR & IT AI Agent Provides Helpdesk Support 
n8n's AI agents allow you to create intelligent and interactive workflows that can access and retrieve data from internal knowledgebases. In this workflow, the AI agent is configured to provide answers for HR and IT queries by performing Retrieval-Augmented Generation (RAG) on internal documents.

### How It Works:
- **Internal Knowledgebase Access**: A **Vector store tool** is used to connect the agent to the HR & IT knowledgebase built earlier in the workflow. This enables the agent to fetch accurate and specific answers for employee queries.
- **Chat Memory**: A **Chat memory subnode** tracks the conversation, allowing the agent to maintain context across multiple queries from the same user, creating a personalized and cohesive experience.
- **Dynamic Query Responses**: Whether employees ask about policies, leave balances, or technical troubleshooting, the agent retrieves relevant data from the vector store and crafts a natural language response.

By integrating the AI agent with a vector store and chat memory, this workflow empowers your HR & IT helpdesk chatbot to provide quick, accurate, and conversational support to employees. 

PostgrSQL is used for all steps to simplify development in production.

## 5. Send Message

The simplest and most important part :)

</details>
