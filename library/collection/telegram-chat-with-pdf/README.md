# Telegram RAG pdf

> RAG по PDF в Telegram: присланный файл загружается в Pinecone, бот отвечает на вопросы (Groq).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Telegram |
| **Сервисы** | Groq, OpenAI, Pinecone, Telegram |
| **Узлов в схеме** | 18 |
| **Нужные учётные данные** | `groqApi`, `openAiApi`, `pineconeApi`, `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# Load data into database
Fetch file from **Telegram**, split it into chunks and insert into **Pinecone** index, a message from **Telegram** will be sent just to let the user know that the process finished

# Chat with Database

1. **Receive** the incoming chat message.
2. **Retrieve** relevant chunks from the _vector store_.
3. **Pass** these chunks to the model.

The model will use the retrieved information to **formulate a precise response**.

</details>
