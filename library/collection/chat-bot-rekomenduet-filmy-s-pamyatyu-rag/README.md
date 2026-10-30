# Building RAG Chatbot for Movie Recommendations with Qdrant and Open AI

> RAG-чат-бот рекомендаций фильмов на Qdrant и OpenAI.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, вызов из другого воркфлоу, чат |
| **Сервисы** | GitHub, OpenAI, Qdrant |
| **Узлов в схеме** | 25 |
| **Нужные учётные данные** | `githubApi`, `openAiApi`, `qdrantApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

Tool, calling Qdrant's recommendation API based on user's request, transformed by AI agent

Uploading data (movies and their descriptions) to Qdrant Vector Store

</details>
