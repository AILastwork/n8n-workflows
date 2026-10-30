# Business WhatsApp AI RAG Chatbot

> ИИ-чат-бот для WhatsApp Business с RAG: документы из Google Drive в Qdrant.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук, вручную |
| **Сервисы** | Google Drive, OpenAI, Qdrant, WhatsApp |
| **Узлов в схеме** | 18 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `httpHeaderAuth`, `openAiApi`, `qdrantApi`, `whatsAppApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# STEP 4

## RAG System













* *Respond* webhook receives various POST Requests from Meta regarding WhatsApp messages (user messages + status notifications)
* Check if the incoming JSON contains user message
* Echo back the text message to the user. This is a custom message, not a WhatsApp Business template message

## Important!
### Configure the webhook nodes this way:
* Make sure that both *Verify* and *Respond* have the same URL
* *Verify* should have GET HTTP Method
* *Respond* should have POST HTTP Method

# STEP 3

## Create Webhook
* Go to your [Meta for Developers App page](https://developers.facebook.com/apps/), navigate to the App settings
* Add a **production webhook URL** as a new Callback URL
* *Verify* webhook receives a GET Request and sends back a verification code
* After that you can delete this

# STEP 1

## Create Qdrant Collection
Change:
- QDRANTURL
- COLLECTION

# STEP 2












## Documents vectorization with Qdrant and Google Drive
Change:
- QDRANTURL
- COLLECTION

## Configure AI Agent
Set System prompt and chat model. If you want you can set any tools

</details>
