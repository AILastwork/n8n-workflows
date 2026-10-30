# Chat with GitHub OpenAPI Specification using RAG (Pinecone and OpenAI)

> Чат с OpenAPI-спецификацией GitHub через RAG (Pinecone + OpenAI).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, чат |
| **Сервисы** | OpenAI, Pinecone |
| **Узлов в схеме** | 14 |
| **Нужные учётные данные** | `openAiApi`, `pineconeApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Indexing content in the vector database
This part of the workflow is responsible for extracting content, generating embeddings and sending them to the Pinecone vector store.

It requests the OpenAPI specifications from GitHub using a HTTP request. Then, it splits the file in chunks, generating embeddings for each chunk using OpenAI, and saving them in Pinecone vector DB.

## Querying and response generation 

This part of the workflow is responsible for the chat interface, querying the vector store and generating relevant responses.

It uses OpenAI GPT 4o-mini to generate responses.

## RAG workflow in n8n

This is an example of how to use RAG techniques to create a chatbot with n8n. It is an API documentation chatbot that can answer questions about the GitHub API. It uses OpenAI for generating embeddings, the gpt-4o-mini LLM for generating responses and Pinecone as a vector database.

### Before using this template
* create OpenAI and Pinecone accounts
* obtain API keys OpenAI and Pinecone 
* configure credentials in n8n for both
* ensure you have a Pinecone index named "n8n-demo" or adjust the workflow accordingly.

</details>
