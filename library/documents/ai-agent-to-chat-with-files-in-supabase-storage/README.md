# Ai agent to chat with files in supabase storage

> ИИ-агент для чата с файлами (текст, PDF) из хранилища Supabase: индексирует их в векторную базу и отвечает по ним.

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
| **Запуск** | вручную, чат |
| **Сервисы** | OpenAI, Supabase |
| **Узлов в схеме** | 22 |
| **Нужные учётные данные** | `openAiApi`, `supabaseApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automates the process of fetching, processing, and storing text and PDF files from a Supabase storage, enabling an AI-powered chatbot to query and retrieve context-based information from the uploaded files.

Example: A company that manages a large repository of technical documents, reports, and research papers could use this workflow to streamline the process of making this information easily accessible to their employees. The workflow would automatically fetch new files from the Supabase storage, extract and vectorize the content, and store it in a vector store. Employees could then interact with the AI chatbot to quickly find relevant information from the document repository, without having to manually search through the files.

## What You Can Do
- Automated file processing and storage: The workflow fetches new files from Supabase storage, extracts the content, and stores the vectorized data in a Supabase vector store.
- AI-powered chatbot integration: The workflow includes an AI chatbot that can be used to query the stored document data and retrieve relevant information.
- Efficient data retrieval: The use of vector embeddings and a vector store allows for fast and contextual information retrieval, making it easy to find relevant content within the document repository.

</details>
