# Upsert huge documents in a vector store with supabase and notion

> Загружает большие документы из Notion в векторную базу Supabase (с обновлением) и даёт чат с ответами по базе знаний.

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
| **Запуск** | по расписанию, событие в Notion, чат |
| **Сервисы** | Notion, OpenAI, Supabase |
| **Узлов в схеме** | 19 |
| **Нужные учётные данные** | `notionApi`, `openAiApi`, `supabaseApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically ingests and embeds content from a Notion knowledge base, stores the embeddings in a Supabase vector store, and provides a conversational interface to query the knowledge base using natural language.

Example: A company maintains a Notion-based knowledge base for their internal teams. This workflow automatically processes new and updated content in the knowledge base, creating vector embeddings and storing them in a Supabase database. Employees can then interact with a chatbot interface to ask questions and receive relevant information from the knowledge base.

## What You Can Do
- Automatic ingestion and embedding of Notion content
- Storage of embeddings in a scalable vector store (Supabase)
- Conversational interface for querying the knowledge base using natural language

</details>
