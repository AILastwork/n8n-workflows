# SQL agent with memory

> SQL-агент с памятью на демо-базе SQLite Chinook.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, чат |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 10 |
| **Нужные учётные данные** | `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Run this part only once
This section:
* downloads the example zip file from https://www.sqlitetutorial.net/sqlite-sample-database/
* extracts the archive (it contains only a single file)
* saves the extracted `chinook.db` SQLite database locally

Now you can use chat to "talk" to your data!

## On every chat message:
* the local SQLite database is loaded
* JSON from Chat Trigger is combined with SQLite binary data

### LangChain SQL Agent can make several queries before producing the final answer.
Try these examples:
1. "Please describe the database". This input usually requires just 1 query + an extra observation to produce a final answer.
2. "What are the revenues by genre?". This input will launch a series of Agent actions, because it needs to make several queries.

The final answer is stored in the memory and will be recalled on the next input from the user.

</details>
