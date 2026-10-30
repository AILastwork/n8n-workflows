# Chat with a database using ai

> ИИ-агент для чата с базой данных Postgres на естественном языке.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | чат |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | `openAiApi`, `postgres` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow enables users to interact with a conversational AI agent that can query a Postgres database and provide natural language responses, powered by the OpenAI language model.

Example: A user could use this workflow to ask questions about their company's database, such as "Which tables are available?" or "What are the top 5 products by sales?". The AI agent would then query the database and provide a natural language response, allowing the user to quickly and easily access the information they need.

## What You Can Do
- Integrates with OpenAI's language model to provide advanced natural language processing capabilities
- Connects to a Postgres database to allow the AI agent to query and retrieve data
- Provides a user-friendly chat interface for interacting with the AI agent

</details>
