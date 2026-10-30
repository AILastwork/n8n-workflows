# Enhance Customer Chat by Buffering Messages with Twilio and Redis

> Буферизует несколько коротких сообщений клиента (Twilio SMS) в Redis и отвечает ИИ одним сообщением.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Twilio |
| **Сервисы** | OpenAI, Redis, Twilio |
| **Узлов в схеме** | 13 |
| **Нужные учётные данные** | `openAiApi`, `redis`, `twilioApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Step 2. Buffer Incoming Messages
[Learn more about using Redis](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.redis)

* New messages are captured into a list.
* After X seconds, we get a fresh copy of this list
* If the last message on the list is the same as the incoming message, then we know no new follow-on messages were sent within the last 5 seconds. Hence the user should be waiting and it is safe to reply.
* But if the reverse is true, then we will abort the execution here.

## Step 1. Listen for Twilio Messages
[Read more about Twilio Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.twiliotrigger)

In this example, we'll use the sender's phone number as the session ID. This will be important in retrieving chat history.

## Step 3. Get Messages Since Last Reply
[Read more about using Chat Memory](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorymanager)

Once conditions are met and we allow the agent to reply, we'll need to find the bot's last reply and work out the buffer of user messages since then. We can do this by looking using chat memory and comparing this to the latest message in our redis messages stack.

## Step 4. Send Single Agent Reply For Many Messages
[Learn more about using AI Agents](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent)

Finally, our buffered messages are sent to the AI Agent that can formulate a single response for all. This could potentially improve the conversation experience if the chat interaction is naturally more rapid and spontaneous. A drawback however is that responses could be feel much slower - tweak the wait threshold to suit your needs!

## Try It Out!
### This workflow demonstrates a simple approach to stagger an AI Agent's reply if users often send in a sequence of partial messages and in short bursts.

* Twilio webhook receives user's messages which are recorded in a message stack powered by Redis.
* The execution is immediately paused for 5 seconds and then another check is done against the message stack for the latest message.
* The purpose of this check lets use know if the user is sending more messages or if they are waiting for a reply.
* The execution is aborted if the latest message on the stack differs from the incoming message and continues if they are the same.
* For the latter, the agent receives buffered messages and is able to respond to all in a single reply.

</details>
