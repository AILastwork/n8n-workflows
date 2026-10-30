# AI Email processing autoresponder with approval (Yes/No)

> Автоответчик на письма с ИИ: делает саммари, готовит ответ по базе знаний в Qdrant и отправляет его после одобрения (Да/Нет).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | новое письмо (IMAP) |
| **Сервисы** | Gmail, OpenAI, Qdrant |
| **Узлов в схеме** | 12 |
| **Нужные учётные данные** | `gmailOAuth2`, `imap`, `openAiApi`, `qdrantApi`, `smtp` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# Main Flow

## Preliminary step:
Create a vector database on Qdrant and tokenize the documents useful for generating a response


## How it works
This workflow is designed to automate the process of handling incoming emails, summarizing their content, generating appropriate responses with RAG, and obtaining approval (YES/NO button) before sending replies.

This workflow is designed to handle general inquiries that come in via corporate email via IMAP and generate responses using RAG. You can quickly integrate Gmail and Outlook via the appropriate trigger nodes

Convert email to Markdown format for better understanding of LLM models

Chain that summarizes the received email

Agent that retrieves business information from a vector database and processes the response

## IMPORTANT

For the "Send Draft" node, you need to send the draft email to a Gmail address because it is the only one that allows the "Send and wait for response" function.

</details>
