# RAG:Context-Aware Chunking | Google Drive to Pinecone via OpenRouter & Gemini

> RAG с контекстной разбивкой на части: документы из Google Drive → Pinecone (OpenRouter + Gemini).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Google Drive, Google Gemini, OpenRouter, Pinecone |
| **Узлов в схеме** | 13 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `googlePalmApi`, `openRouterApi`, `pineconeApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Prepare Document. 
This section is responsible for downloading the file from Google Drive, splitting the text into sections by detecting separators, and preparing them for looping.

## Prepare context
In this section, the 
agent node will prepare 
context for a section 
(chunk of text), which 
will then be passed for 
conversion into a vectors 
along with the section itself.

## Convert Text To Vectors
In this step, the Pinecone node converts the provided text into vectors using Google Gemini and stores them in the Pinecone vector database.

## Video Demo
[![Video Thumbnail](https://img.youtube.com/vi/qBeWP65I4hg/maxresdefault.jpg)](https://www.youtube.com/watch?v=qBeWP65I4hg)

</details>
