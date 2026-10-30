# Respond to WhatsApp Messages with AI Like a Pro!

> ИИ-ответы в WhatsApp с Gemini и Википедией.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в WhatsApp |
| **Сервисы** | Google Gemini, WhatsApp, Wikipedia |
| **Узлов в схеме** | 24 |
| **Нужные учётные данные** | `googlePalmApi`, `whatsAppApi`, `whatsAppTriggerApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## 1. WhatsApp Trigger
[Learn more about the WhatsApp Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.whatsapptrigger)

To start receiving WhatsApp messages in your workflow, there are quite a few steps involved so be sure to follow the n8n documentation. When we recieve WhatsApp messages, we'll split out the messages part of the payload and handle them depending on the message type using the Switch node.

### 2. Transcribe Audio Messages 💬
For audio messages or voice notes, we can use GPT4o to transcribe the message for our AI Agent.

### 3. Describe Video Messages 🎬
For video messages, one approach is to use a Multimodal Model that supports parsing video. Currently, Google Gemini is a well-tested service for this task. We'll need to use the HTTP request node as currrently n8n's LLM node doesn't currently support video binary types.

### 4. Analyse Image Messages 🏞️
For image messages, we can use GPT4o to explain what is going on in the message for our AI Agent.

### 5. Text summarizer 📘
For text messages, we don't need to do much transformation but it's nice to summarize for easier understanding.

## 6. Generate Response with AI Agent
[Read more about the AI Agent node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent)

Now that we'll able to handle all message types from WhatsApp, we could do pretty much anything we want with it by giving it our AI agent. Examples could include handling customer support, helping to book appointments or verifying documents.

In this demonstration, we'll just create a simple AI Agent which responds to our WhatsApp user's message and returns a simple response.

## 7. Respond to WhatsApp User
[Read more about the Whatsapp node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.whatsapp/)

To close out this demonstration, we'll simple send a simple text message back to the user. Note that this WhatsApp node also allows you to send images, audio, videos, documents as well as location!

## Try It Out!

### This n8n template demonstrates the beginnings of building your own n8n-powered WhatsApp chatbot! Under the hood, utilise n8n's powerful AI features to handle different message types and use an AI agent to respond to the user. A powerful tool for any use-case!

* Incoming WhatsApp Trigger provides a way to get messages into the workflow.
* The message received is extracted and sent through 1 of 4 branches for processing.
* Each processing branch uses AI to analyse, summarize or transcribe the message so that the AI agent can understand it.
* The AI Agent is used to generate a response generally and uses a wikipedia tool for more complex queries.
* Finally, the response message is sent back to the WhatsApp user using the WhatsApp node.

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

### Activate workflow to use!
You must activate the workflow to use this WhatsApp Chabot. If you are self-hosting, ensure WhatsApp is able to connect to your server.

### 🚨 Google Gemini Required!
Not using Gemini? Feel free to swap this out for any Multimodal Model that supports Video.

### 🚨 Google Gemini Required!
Not using Gemini? Feel free to swap this out for any Multimodal Model that supports Audio.

</details>
