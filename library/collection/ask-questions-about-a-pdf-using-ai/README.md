# Ask questions about a PDF using AI

> Задавайте вопросы по PDF с помощью ИИ: файл из Google Drive индексируется в Pinecone.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, чат |
| **Сервисы** | Google Drive, OpenAI, Pinecone |
| **Узлов в схеме** | 13 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `openAiApi`, `pineconeApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### Load data into database
Fetch file from Google Drive, split it into chunks and insert into Pinecone index

### Chat with database
Embed the incoming chat message and use it retrieve relevant chunks from the vector store. These are passed to the model to formulate an answer

## Try me out
1. In Pinecone, create an index with 1536 dimensions and select it in *both* Pinecone nodes
2. Click 'test workflow' at the bottom of the canvas to load data into the vector store
3. Click 'chat' at the bottom of the canvas to ask questions about the data

</details>
