# Voice RAG Chatbot with ElevenLabs and OpenAI

> Голосовой RAG-чат-бот: ElevenLabs принимает голос, n8n отвечает по документам из векторной базы (OpenAI).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук, вручную |
| **Сервисы** | Google Drive, OpenAI, Qdrant |
| **Узлов в схеме** | 18 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `httpHeaderAuth`, `openAiApi`, `qdrantApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# STEP 4

## RAG System

Click on "test workflow" on n8n and "Test AI agent" on ElevenLabs. If everything is configured correctly, when you ask a question to the agent, the webhook on n8n is activated with the "question" field in the body filled with the question asked to the voice agent.

The AI ​​Agent will extract the information from the vector database, send it to the model to create the response which will be sent via the response webhook to ElevenLabs which will transform it into voice

# STEP 1

## Create an Agent on ElevenLabs 
- Create an agent on ElevenLabs (eg. test_n8n)
- Add "First message" (eg. Hi, Can I help you?)
- Add the "System Prompt" message... eg:
'You are the waiter of "Pizzeria da Michele" in Verona. If you are asked a question, use the tool "test_chatbot_elevenlabs". When you receive the answer from "test_chatbot_elevenlabs" answer the user clearly and precisely.'
- In Tools add a Webhook called eg. "test_chatbot_elevenlabs" and add the following description:
'You are the waiter. Answer the questions asked and store them in the question field.'
- Add the n8n webhook URL (method POST)
- Enable "Body Parameters" and insert in the description "Ask the user the question to ask the place.", then in the "Properties" add a data type string called "question", value type "LLM Prompt" and description "user question"

# STEP 2

## Create Qdrant Collection
Change:
- QDRANTURL
- COLLECTION

# STEP 3












## Documents vectorization with Qdrant and Google Drive
Change:
- QDRANTURL
- COLLECTION

# STEP 5

## Add Widget

Add the widget to your business website by replacing AGENT_ID with the agent id you created on ElevenLabs

<elevenlabs-convai agent-id="AGENT_ID"></elevenlabs-convai><script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"></script>

</details>
