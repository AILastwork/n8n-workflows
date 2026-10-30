# Customer Support Channel and Ticketing System with Slack and Linear

> Канал поддержки в Slack: сообщения с эмодзи-тикетом превращаются в задачи Linear с ИИ-описанием.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Linear, OpenAI, Slack |
| **Узлов в схеме** | 12 |
| **Нужные учётные данные** | `linearApi`, `openAiApi`, `slackApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## 1. Query Slack for Messages 
[Read more about the Slack Trigger](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.slack)

Slack API search uses the same search syntax found in the app. Here, we'll use it to filter the latest messages with the ticket emoji within our designated channel called #n8n-tickets.

## 2. Decide If We Need to Create a New Ticket 
[Read more about using Linear](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.linear)

For generated issues, we add the message id to the description of the message so that we can check them at this point in the workflow to avoid duplicates.

## 3. Use AI to Generate Ticket Contents
[Read more about using Basic LLM Chain](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm)

For this demo, we've instructed the AI to do the following:
* Generate a descriptive title of the issue
* Summarise the user message into an actionable request.
* Determine a prority based on tone and context of the user message. 
* Can offer possible fixes through use of tools or RAG. (not implemented)

## Try It Out!
### This workflow does the following:
* Monitors a Slack channel for new user messages asking for assistance
* Only user messages which are tagged with the ticket(🎫) emoji are processed.
* Linear is first checked to see if a ticket was created for the user message.
* User messages are sent to ChatGPT to generate title, description and priority.
* Support ticket is created in Linear.

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

## 4. Create New Ticket in Linear
[Read more about using Linear](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.linear)

With our ticket contents generated, we can now create our ticket in Linear for support to handle.

🚨**Required**
* Set the Slack channel to monitor here.

🚨**Required**
* Set the Linear Team Name or ID here.

</details>
