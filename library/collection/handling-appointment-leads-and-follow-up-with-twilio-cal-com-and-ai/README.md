# Handling Appointment Leads and Follow-up With Twilio, Cal.com and AI

> Обработка лидов на запись: переписка по SMS (Twilio) с ИИ, запись через Cal.com, напоминания тем, кто не записался.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | по расписанию, событие в Twilio |
| **Сервисы** | Airtable, OpenAI, Twilio |
| **Узлов в схеме** | 24 |
| **Нужные учётные данные** | `airtableTokenApi`, `calApi`, `httpHeaderAuth`, `openAiApi`, `twilioApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Step 6. Filter Open Enquiries from Airtable

### 💡Criteria For Follow Up Candidates
* No Scheduled Appointment
* No Request to STOP
* No Previous Follow-up in Past 3 days
* Follow-up is less than 3 times

## Step 3. Appointment Scheduling With AI
[Learn about using AI Agents](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent)

Using an AI Agent is a powerful way to simplify and enhance workflows using the latest in AI technology. Our appointment scheduling agent is equipped to converse with the customer and all the necessary tools to schedule, re-schedule and cancel appointments.

Using the **HTTP Tool** node, it's easy to connect to third party API services to perform actions. In this workflow, we're calling the Cal.com API to handle scheduling events.

## Step 2. Check for Existing Chat History
[Read more about using Airtable](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.airtable)

We're using Airtable for customer session management and to capture chat history. Airtable is an ideal choice because it acts as a persistent database with a flexible API which could prove essential for further extension.

We'll pull any previous chat history and pass this to our agent to continue the conversation.

## Step 1. Wait For Customer SMS
[Read more about Twilio trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.twiliotrigger)

For this workflow, we'll use the twilio SMS trigger to receive enquiries from customers looking to book a PC or laptop repair.

Since we'll be working with SMS, we'll have a check to see if the customer wishes to STOP any further follow-up messages. This is an optional step that we'll get to later.

## Step 9. Cancelling Follow-Up Messages 

If the customer messages the bot with the word STOP, we'll update our customer record in Airtable which will prevent further follow-ups from being trigger. A confirmation message is sent after to the customer.

## Step 4. Updating Airtable and Responding to the Customer 
[Read more about using Twilio](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.twilio)

Once the agent formulates a response, we can update our appointment table accordingly ensuring the conversation at any stage is captured.

If no appointment is scheduled, we can move onto the second half of this workflow which covers following up with prospective customers and their enquiries.

## Step 5. Following Up With Open Enquiries
[Read more about using scheduled trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger)

The second half of this workflow deals with identifying customers who have engaged our chatbot but have not yet confirmed an appointment. We intend to send a follow-up message asking if the enquiry is still valid and encourage an appointment to be made with the customer.

## Step 7. Generating a Follow-Up Message
[Read more about Basic LLM Chain](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm)

With our session and chat history retrieved from Airtable, we can simple ask our AI to generate a nicely worded follow-up message to re-engage the customer.

Where the logic is linear, the Basic LLM chain is suitable for many workflows. An agent is not always required!

## Step 8. Update Follow-Up Properties and Send Message
[Read more about using Twilio](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.twilio/)

Finally, we'll update our follow-up activity as part of the customer record in Airtable. Keeping track of the number of times we follow-up helps prevent spamming the customer unnecessarily.

The follow-up message is sent via Twilio and includes instruction to disable further follow-up messages using the keyword STOP.

## Try It Out!

### This workflow implements an appointment scheduling chatbot which is powered by an AI tools agent.
* Workflow is triggered by Customer enquires sent via SMS
* Customer session management and chat history are captured in Airtable to enable the SMS conversation.
* An AI Agent is equipped to answer any questions as well as schedule, re-schedule and cancel appointments on behalf of the customer.
* The agent's reply is sent back to the customer via SMS.
* Additional a follow-up system is implemented to re-engage customers who haven't scheduled an appointment.

 
### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

![alt](https://upload.wikimedia.org/wikipedia/commons/a/a5/Cal.com%2C_Inc._Logo.svg#100x80)
You'll need to set a custom Header Auth Credential for Cal.com API v2. See the following doc for more info: https://cal.com/docs/api-reference/v2/introduction

### 🚨 Change EventTypeID Here!
* EventTypeID must be a number.
* Your event type dictates the allowed duration of the booking.
* If Event Type set to 30mins and the agent attempts to book 60mins, this will fail so make sure the agent knows how long to set the booking for!

</details>
