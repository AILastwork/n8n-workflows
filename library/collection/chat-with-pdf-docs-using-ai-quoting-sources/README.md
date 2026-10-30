# Chat with PDF docs using AI (quoting sources)

> Чат с PDF-документами с указанием источников (Pinecone + OpenAI).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, чат |
| **Сервисы** | Google Drive, OpenAI, Pinecone |
| **Узлов в схеме** | 18 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `openAiApi`, `pineconeApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## 1. Setup: Fetch file from Google Drive, split it into chunks and insert into a vector database
Note that running this part multiple times will insert multiple copies into your DB

# Try me out
1. In Pinecone, create an index with 1536 dimensions and select it in the two vector store nodes
2. Populate Pinecone by clicking the 'test workflow' button below
3. Click the 'chat' button below and enter the following:

_Which email provider does the creator of Bitcoin use?_

## 2. Chat with file, getting citations in reponse

Will fetch the Bitcoin whitepaper, but you can change this

</details>
