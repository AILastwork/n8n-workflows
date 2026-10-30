# AI Agent to chat with Supabase PostgreSQL DB

> ИИ-агент для чата с базой Supabase/PostgreSQL на естественном языке.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | чат |
| **Сервисы** | OpenAI, PostgreSQL |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `openAiApi`, `postgres` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

**Replace password and username for Supabase**

### Set up steps

#### Preparation
1. **Create Accounts**:
 - [N8N](https://n8n.partnerlinks.io/2hr10zpkki6a): For workflow automation.
 - [Supabase](https://supabase.com/): For database hosting and management.
 - [OpenAI](https://openai.com/): For building the conversational AI agent.
2. **Configure Database Connection**:
 - Set up a PostgreSQL database in Supabase.
 - Use appropriate credentials (`username`, `password`, `host`, and `database` name) in your workflow.

#### N8N Workflow

AI agent with tools:

1. **Code Tool**:
 - Execute SQL queries based on user input.
2. **Database Schema Tool**:
 - Retrieve a list of all tables in the database.
 - Use a predefined SQL query to fetch table definitions, including column names, types, and references.
3. **Table Definition**:
 - Retrieve a list of columns with types for one table.

![5min Logo](https://res.cloudinary.com/de9jgixzm/image/upload/v1739773200/Skool%20Assets/ejm3hqnvhgwpnu2fv92s.png)
## AI Agent to chat with Supabase/PostgreSQL DB
**Made by [Mark Shcherbakov](https://www.linkedin.com/in/marklowcoding/) from community [5minAI](https://www.skool.com/5minai-2861)**

Accessing and analyzing database data often requires SQL expertise or dedicated reports, which can be time-consuming. This workflow empowers users to interact with a database conversationally through an AI-powered agent. It dynamically generates SQL queries based on user requests, streamlining data retrieval and analysis.

This workflow integrates OpenAI with a Supabase database, enabling users to interact with their data via an AI agent. The agent can:
- Retrieve records from the database.
- Extract and analyze JSON data stored in tables.
- Provide summaries, aggregations, or specific data points based on user queries.

### ... or watch set up video [20 min]
[![Youtube Thumbnail](https://res.cloudinary.com/de9jgixzm/image/upload/v1739773279/Youtube%20Thumbs/Chat%20With%20DB.png)](https://www.youtube.com/watch?v=-GgKzhCNxjk)

**Finetune the prompt of assistant**

</details>
