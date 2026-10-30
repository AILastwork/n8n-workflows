# Stock Q&A Workflow

> Вопросы и ответы по отчётам: загружает PDF из Google Drive в векторную базу Supabase и отвечает на вопросы через вебхук.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук, вручную, чат |
| **Сервисы** | Google Drive, OpenAI, Qdrant |
| **Узлов в схеме** | 14 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `openAiApi`, `qdrantApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Step 2: Setup the Q&A 
### The incoming message from the webhook is queried from the Supabase Vector Store. The response is provided in the response webhook.

## Step 1: Upserting the PDF
### Fetch file from Google Drive, split it into chunks and insert into Supabase index

## Start here: Step-by Step Youtube Tutorial :star:

[![Building an AI Crew to Analyze Financial Data with CrewAI and n8n](https://img.youtube.com/vi/pMvizUx5n1g/sddefault.jpg)](https://www.youtube.com/watch?v=pMvizUx5n1g)

</details>
