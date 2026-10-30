# IT Ops AI SlackBot Workflow - Chat with your knowledge base

> Slack-бот для IT-отдела: отвечает на вопросы по базе знаний.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | OpenAI, Slack |
| **Узлов в схеме** | 11 |
| **Нужные учётные данные** | `openAiApi`, `slackApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

![Imgur](https://i.imgur.com/iKyMV0N.png)
## Webhook Trigger
The first node receives all messages from Slack API via Subscription Events API. You can find more information about setting up the subscription events API by [clicking here](https://api.slack.com/apis/connections/events-api). The second node responds to the periodic security challenges that Slack sends to ensure the N8n webhook is still active.

![n8n](https://i.imgur.com/lKnBNnH.png)
## Check for Bot Responses
If the message received is from a Bot instead of a real user, it will ignore the message.

![Slack](https://i.imgur.com/iKyMV0N.png)
## Delete Receipt and Send Response 
Once the AI response is generated in response to the slack message, n8n delete's it's original *Message Received* message to avoid cluttering up the user's DMs, and then sends the final Slack message back to the user.

![OpenAI](https://i.imgur.com/o89G0If.png)
## Parse Response with AI Model 
This workflow currently uses OpenAI to power it's responses, but you can open the AI Agent node below and set your own AI LLM using the n8n options offered.

![Slack](https://i.imgur.com/iKyMV0N.png)
## Response Received
Once N8n sees that the messaged received is from a user, it will respond right away to acknowledge a message was received. You can edit the message by opening the node below.

![n8n](https://i.imgur.com/FWJX4km.png)
## Build n8n workflow to query Knowledge Base
Building your own tools for an AI Agent to use is simple and straightforward, but requires that you build a second workflow and then connect it to this one by inputting the workflow ID from the workflow URL in the *Custom n8n KB Tool* sub node. 

This gives you the freedom to work with any tool, whether n8n has support for it or not. In this sample build, we have connected the AI agent to Confluence, which does not have a native built in n8n node. For this we use the HTTP request node and pointed it to Confluence's search api. It then returns a response that the AI agent uses to generate a final slack message response to the user.

![n8n](https://i.imgur.com/lKnBNnH.png)

## Remembers the last 5 messages that a user sent
Because we are passing the channel ID of the user to the memory module, n8n is storing the last 5 slack messages sent to it per slack channel. This means that it will remember all your users conversations separately from one another and not get confused by different requests from different users. You can increase the memory storage by using a different storage medium and increase the number of prompts and responses it should remember.

![OpenAI](https://i.imgur.com/o89G0If.png)

## Change the AI Agents LLM
To change the model used, simply delete the ChatGPT model and replace with a different supported model by hitting the plus sign under model in the AI Agent.

![n8n](https://i.imgur.com/lKnBNnH.png)
# Streamline IT Inquiries with n8n & AI!

## Introducing the IT Ops AI SlackBot Workflow---a sophisticated solution designed to automate and optimize the management of IT-related inquiries via Slack.

When an employee messages the IT department slack app, the workflow kicks off with the "Receive DMs" node, which captures incoming messages and ensures a secure and active communication line by responding to Slack's webhook challenges.

**How It Works:**

- Verify Webhook: Responds to slacks challenge and respond requests to ensure is still active.
- Check if bot: Checks whether the message sender is a bot to prevent unnecessary processing.
- Send Initial Message: Sends a quick confirmation, like "On it!", to let the user know their query is being handled.
- AI-Driven Responses: Employs the "AI Agent" node with OpenAI to craft relevant replies based on the conversation history maintained by the "Window Buffer Memory" node.
- Knowledge Integration tool: Uses a custom Knowledge Base tool to fetch pertinent information from confluence, enhancing the quality of responses.
- Cleanup and Reply: Deletes the initial acknowledgment to tidy up before sending the final detailed response back to the user.


**Get Started:**
- Ensure your [Slack](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.slack/?utm_source=n8n_app&utm_medium=node_settings_modal-credential_link&utm_campaign=n8n-nodes-base.slack) and [OpenAI](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatopenai/?utm_source=n8n_app&utm_medium=node_settings_modal-credential_link&utm_campaign=@n8n/n8n-nodes-langchain.lmChatOpenAi) integrations are properly set up.
- Customize the workflow to align with your IT department's protocols.


**Need Help?**
- Join the discussion on our Forum or check out resources on Discord!


Deploy this workflow to improve response times and enhance the efficiency of your IT support services.

</details>
