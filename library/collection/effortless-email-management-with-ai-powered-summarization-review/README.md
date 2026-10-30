# Effortless Email Management with AI

> Обработка почты с ИИ: саммари писем, ответ по базе знаний (Qdrant, документы из Google Drive) с моделью DeepSeek и отправка.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, новое письмо (IMAP) |
| **Сервисы** | DeepSeek, Gmail, Google Drive, OpenAI, Qdrant |
| **Узлов в схеме** | 22 |
| **Нужные учётные данные** | `deepSeekApi`, `gmailOAuth2`, `googleDriveOAuth2Api`, `httpHeaderAuth`, `imap`, `openAiApi`, `qdrantApi`, `smtp` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

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

# STEP 3 - MAIN FLOW


## How it works
This workflow automates the handling of incoming emails, summarizes their content, generates appropriate responses using a retrieval-augmented generation (RAG) approach, and obtains approval or suggestions before sending replies. 

You can quickly integrate Gmail and Outlook via the appropriate trigger nodes

Chain that summarizes the received email

Agent that retrieves business information from a vector database and processes the response

Convert email to Markdown format for better understanding of LLM models

## IMPORTANT

For the "Send Draft" node, you need to send the draft email to a Gmail address because it is the only one that allows the "Send and wait for response" function.

Based on the suggestion received, the text classifier can understand whether the feedback received approves the generated email or not.

The Email Reviewer agent, taking inspiration from human feedback, rewrites the email

</details>
