# AI chat with any data source (using the n8n workflow tool)

> ИИ-агент, который получает данные из любого источника через под-воркфлоу как инструмент (пример с Hacker News).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вызов из другого воркфлоу, чат |
| **Сервисы** | Hacker News, OpenAI |
| **Узлов в схеме** | 8 |
| **Нужные учётные данные** | `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### Replace me
with any other service, e.g. fetching your own data

### Sub-workflow: Custom tool
This can be called by the agent above. This example fetches the top 50 posts ever on Hacker News

### Main workflow: AI agent using custom tool
Try it out by clicking 'Chat' and entering 'What is the 5th most popular post ever on Hacker News?'

## Try me out

Click the 'Chat' button and enter:

_What is the 5th most popular post ever on Hacker News?_

</details>
