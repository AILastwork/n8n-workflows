# MongoDB Agent

> ИИ-агент для MongoDB: отвечает на вопросы в чате через запросы aggregation.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | чат |
| **Сервисы** | MongoDB, OpenAI |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `mongoDb`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## AI Agent powered by OpenAI and MongoDB 

This flow is designed to work as an AI autonomous agent that can get chat messages, query data from MongoDB using the aggregation framework.

Following by augmenting the results from the sample movies collection and allowing storing my favorite movies back to the database using an "insert" flow.

## Process

The message is being processed by the "Chat Model" and the correct tool is used according to the message.

</details>
