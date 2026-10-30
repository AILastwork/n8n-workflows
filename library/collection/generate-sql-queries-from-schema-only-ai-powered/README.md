# Generate SQL queries from schema only - AI-powered

> ИИ-агент, который по одной только схеме базы MySQL пишет SQL и отвечает в чате.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, чат |
| **Сервисы** | MySQL, OpenAI |
| **Узлов в схеме** | 20 |
| **Нужные учётные данные** | `mySql`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Run this part only once
This section:
* loads a list of all tables from the database hosted on [db4free](https://db4free.net/signup.php) 
* extracts the database schema for each table and adds the table name
* converts the schema into a binary JSON format
* saves the schema `./chinook_mysql.json` file locally

***Now you can use chat to "talk" to your data!*** 🎉

## Pre-workflow setup 
Connect to a free MySQL server and import your database. Follow Step 1 and 2 in this [tutorial](https://blog.n8n.io/compare-databases/) for more.

*The Chinook data used in this workflow is available on [GitHub](https://github.com/msimanga/chinook/tree/master/mysql).*

## On every chat message:

* The workflow gets the data from the local schema file and extracts it as a JSON object. This way, we achieve two important improvements:
 * faster processing time as we don't need to fetch the schema for each table from a slow remote database
 * the Agent will know database structure without seeing the actual data
* DB schema is then converted into a long string, JSON fields from the Chat Trigger are added before they are entered into the Agent node.

### LangChain AI Agent's system prompt is modified.
It uses only the database schema to generate SQL queries. The agent creates these queries but does not execute them. Instead, it passes them to subsequent nodes.

**Example:**
"Can you show me the list of all German customers?" 

Queries are generated only when necessary; for some requests, a query may not be needed. This is because certain questions can be answered directly without SQL execution.

**Example:**
"Can you list me all tables?"

## SQL query extraction
Check if the agent's response contains an SQL query. If it does, we extract the query using a regular expression.

The AI Agent remembers the schema, questions, and final answers, but not data values, since queries run externally. The agent can't access database content.

- The SQL node accesses the database and executes the query. The results are then formatted for readability.
- Both the chat response and the query result are displayed in the chat window.

When the agent responds without an SQL query, you receive an immediate answer with no additional processing.

</details>
