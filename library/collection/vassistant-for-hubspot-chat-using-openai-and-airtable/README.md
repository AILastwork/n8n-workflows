# OpenAI Assistant for Hubspot Chat

> Ассистент OpenAI для чата HubSpot: треды хранятся в Airtable.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | Airtable, OpenAI |
| **Узлов в схеме** | 26 |
| **Нужные учётные данные** | `airtableTokenApi`, `hubspotAppToken`, `hubspotDeveloperApi`, `hubspotOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

Watch for new message on the chatbot. 
This can be triggered with [n8n chat widget](https://www.npmjs.com/package/@n8n/chat), hubspot or other chat services.

Post assistant Message back to chat service, in this case Hubspot

Create a new Thread, save it to database and RUN

UPDATE USER FILTER FOR DUPLICATION

Search for Thread ID in a database. 

This database is maintaing references between messaging service thread id and OpenI Thread ID.

POST a new message to existing thread.

Get Run Status:
If still in progress, run again. 
If action needed go to respective action.
If Completed, post message.

Run required actions based on Assistant answer and respond to Assistant with the function answer. 

Each route is a function that you need to define inside your assistant configuration.

</details>
