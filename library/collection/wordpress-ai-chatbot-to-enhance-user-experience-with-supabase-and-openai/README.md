# RAG & GenAI App With WordPress Content

> RAG-приложение по контенту WordPress: индексация в Supabase, обновление векторов и ИИ-чат для посетителей.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, по расписанию, чат |
| **Сервисы** | Memory Postgres Chat, OpenAI, PostgreSQL, Supabase, WordPress |
| **Узлов в схеме** | 45 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# Workflow 1 : Initial Embedding 
## Use this workflow to create the initial embedding for your WordPress website content

# Workflow 2 : Upsert
## Use this workflow to upsert embeddings for documents stored in the Supabase vector table

# Workflow 3 : Use this workflow to enable chat functionality with your website content. The chat can be embedded into your website to enhance user experience

## Use filters to create embeddings only for content that you want to include in your GenAI application

## Run these two nodes if the "documents" table on Supabase and the "n8n_website_embedding_histories" table do not exist

## Set this node to match the frequency of publishing and updating on your website

## Retrieve documents from Supabase immediately after chat input to send metadata to OpenAI

## Switch:
- **If the document exists and has been updated:** delete rows and insert new embedding
- **If it’s a new document:** insert embedding

</details>
