# Automate Your RFP Process with OpenAI Assistants

> Автоматизирует ответы на RFP (запросы предложений): ассистент OpenAI отвечает на вопросы из документа, результат в Google Docs.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | Gmail, Google Docs, OpenAI, Slack |
| **Узлов в схеме** | 13 |
| **Нужные учётные данные** | `gmailOAuth2`, `googleDocsOAuth2Api`, `openAiApi`, `slackApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## 1. API to Trigger Workflow
[Read more about using Webhooks](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/)

This workflow requires the user to submit the RFP document via an API request. It's a common pattern to use the webhook node for this purpose. Be sure to secure this webhook endpoint in production!

## 2. Create a new Doc to Capture Responses For RFP Questions
[Read more about working with Google Docs](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledocs/)

For each RFP we process, let's create its very own document to store the results. It will serve as a draft document for the RFP response.

## 3. Identifying Questions using AI
[Read more about Question & Answer Chain](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainretrievalqa/)

Using the power of LLMs, we're able to extract the RFP questionnaire regardless of original formatting or layout. This allows AutoRFP to handle a wide range of RFPs without requiring explicit extraction rules for edge cases.

Additionally, We'll use the Input List Output Parser to return a list of questions for further processing.

## 4. Generating Question & Answer Pairs with AI
[Read more about using OpenAI Assistants in n8n](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.openai/)

By preparing an OpenAI Assistant with marketing material and sales documents about our company and business, we are able to use AI to answer RFP questions with the accurate and relevant context. Potentially allowing sales teams to increase the number of RFPs they can reply to.

This portion of the workflow loops through and answers each question individually for better answers. We can record the Question and Answer pairings to the RFP response document we created earlier.

## Try It Out!

**This workflow does the following:**
* Receives a RFP document via webhook
* Creates a new RFP response document via Google Docs
* Uses LLMs to extract the questions from the RFP document into a questions list
* Loops through each question and uses an OpenAI Assistant to generate an answer. Saving each answer into the response document.
* Once complete, sends a gmail and slack notification to the team.


📃**Example Documents**
To run this workflow, you'll need to following 2 documents:
* [RFP Document](https://drive.google.com/file/d/1G42h4Vz2lBuiNCnOiXF_-EBP1MaIEVq5/view?usp=sharing)
* [Example Company Document](https://drive.google.com/file/d/16WywCYcxBgYHXB3TY3wXUTyfyG2n_BA0/view?usp=sharing)

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

## 5. Send Notification Once Completed
[Read more about using Slack](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.slack)


Finally, we can use a number of ways to notify the sales team when the process is complete. Here, we've opted to send the requesting user an email with a link to the RFP response document.

🚨**Required**
* Use a tool such as Postman to send data to the webhook.

🚨**Required**
You'll need to create an OpenAI Assistant to use this workflow.
* Sign up for [OpenAI Dashboard](https://platform.openai.com) if you haven't already.
* Create an [OpenAI Assistant](https://platform.openai.com/playground/assistants)
* Upload the [example company doc](https://drive.google.com/file/d/16WywCYcxBgYHXB3TY3wXUTyfyG2n_BA0/view?usp=sharing) to the assistant.

The assistant will use the company doc to answer the questions.

🚨**Required**
* Update the email address to send to in Gmail Node.
* Update the channel and message for Slack.

### Example Webhook Request
curl --location 'https://<n8n_webhook_url>' \
--form 'id="RFP001"' \
--form 'title="BlueChip Travel and StarBus Web Services"' \
--form 'reply_to="jim@example.com"' \
--form 'data=@"k9pnbALxX/RFP Questionnaire.pdf"'

</details>
