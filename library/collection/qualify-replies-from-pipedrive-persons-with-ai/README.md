# Qualify replies from Pipedrive persons with AI

> Читает ответы на холодную рассылку, ИИ определяет интерес к встрече и создаёт сделку в Pipedrive.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Gmail |
| **Сервисы** | Gmail, OpenAI, Pipedrive |
| **Узлов в схеме** | 10 |
| **Нужные учётные данные** | `openAiApi`, `pipedriveApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## About the workflow
The workflow reads every reply that is received from a cold email campaign and qualifies if the lead is interested in a meeting. If the lead is interested, a deal is made in pipedrive. You can add as many email inboxes as you need!

## Setup:
- Add credentials to the Gmail, OpenAI and Pipedrive Nodes.
- Add a in_campaign field in Pipedrive for persons. In Pipedrive click on your credentials at the top right, go to company settings > Data fields > Person and click on add custom field. Single option [TRUE/FALSE].
- If you have only one email inbox, you can delete one of the Gmail nodes.
- If you have more than two email inboxes, you can duplicate a Gmail node as many times as you like. Just connect it to the Get email node, and you are good to go!
- In the Gmail inbox nodes, select Inbox under label names and uncheck Simplify.

</details>
