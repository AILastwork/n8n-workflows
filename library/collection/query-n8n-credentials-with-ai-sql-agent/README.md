# Query n8n Credentials with AI SQL Agent

> ИИ SQL-агент, который отвечает, где какие учётные данные n8n используются.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, чат |
| **Сервисы** | OpenAI, n8n API |
| **Узлов в схеме** | 9 |
| **Нужные учётные данные** | `n8nApi`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### 🚨Required
You'll need an n8n API key. Note: available workflows will be scoped to your key.

## Step 1. Store Workflows Credential Mappings to Database

We'll achieve this by querying n8n's built-in API to query all workflows, extract the credentials list from the nodes within and then store them in a SQLite database. Don't worry, the actual credential data won't be exposed! For the database, we'll abuse the fact that the code node is able to create Sqlite databases - however, this is created in memory and will be wiped if the n8n instance is restarted.

## Step 2. Use Agent as Search Interface

Instead of building a form interface like a regular person, we'll just use an AI tools agent who is given aaccess to perform queries on our database. You can ask it things like "which workflows are using slack + airtable + googlesheets?"

## Try It Out!

### This workflow let's you query workflow credentials using an AI SQL agent. Example use-case could be:
* "Which workflows are using Slack and Google Calendar?"
* "Which workflows have AI in their name but are not using openAI?"

### Run the Steps separately!
* Step 1 populates a local database
* Step 2 engages with the chatbot

</details>
