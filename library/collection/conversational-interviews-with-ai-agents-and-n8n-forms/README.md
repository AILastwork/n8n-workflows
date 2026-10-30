# Conversational Interviews with AI Agents and n8n Forms

> ИИ-интервьюер на формах n8n: задаёт вопросы по теме (Groq), хранит контекст в Redis и записывает ответы в Google Sheets.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук, форма n8n |
| **Сервисы** | Google Sheets, Groq, Redis |
| **Узлов в схеме** | 30 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `groqApi`, `redis` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### 🚨 Set Interview Topic Here!

## 1. Setup Interview
[Learn more about the form trigger node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.formtrigger)

The form trigger node will be our entry point into this workflow and to start, we'll just ask for the user's name to start the interview.
Our session storage will be using Redis via Upstash.com (you can use regular redis btw!) - whichever way, this ensures a highly scalable system able to handle many users.

## 2. AI Researcher for Endless Interview Questions
[Learn more about the AI Agent node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/)

An AI interviewer is an interesting take on a role traditionally understood as expensive and time-consuming - both in preparation and execution. What if this could be handed off to an AI/LLM, which could perform when it suits the interviewee and ask a never-ending list of open and follow-on questions for deeper insights?

This is what this AI researcher agent is designed to do! Upon activation, a loop is created where the agent generates the question and the user answers via the form node. This continues until the user asks to stop the interview.

## 3. Record Answers and Prep for Next Question
[Learn more about the n8n Form node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.form/)

The interview is no good if we can't record the answers somewhere for later analysis! Using n8n form node to capture the answer, we can simple push our new question and answer pair to our Redis session to build our transcript before continuing the loop with the agent.

## 4. Graciously End the Interview
[Read more about the Chat Manager node](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorymanager/)

Once the AI/LLM detects the user wishes to end the interview (which is done by the user explicitly saying in the form), then the loop breaks and we conclude the interview session and displaying the confirmation screen.

For this demo, I've created a special confirmation screen which also displays the transcript. This is done by redirecting to a webhook URL. If you don't need this, feel free to change this to "show completion screen" instead.

## Try it out! 

### Conducting user interviews have been traditionally difficult due to preparation, timing and execution costs. What if we let an AI/LLM do it instead?

This template enables automated AI/LLM powered user interviews using n8n forms and an AI agent where the question and answers are recorded in a google sheet for later analysis. A powerful tool for any researcher.

### Check out the full showcase post here: https://community.n8n.io/t/build-your-own-ai-interview-agents-with-n8n-forms/62312

### How it works
* A form trigger is used to start the interview and a new session is created in redis to capture the transcript.
* An AI agent is then tasked to ask questions to the user regarding the topic of the interview. This is setup as a loop so the questions never stop unless the user wishes to end the interview.
* Each answer is recorded in our session set up earlier between questions.
* Finally, when the user requests to end the interview we break the loop and show the interview completion screen.

### Why Redis?
Redis is a fast key-value datastore which makes it ideal for sessions. This ensures the interview flow stays snappy between questions. For my live demo, I used Upstash.com which has a generous free tier.


### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

### 🚨 Set Your Webhook URL here!
For this demo, we want to show a customised completion screen with transcript so it's necessary to redirect to a webhook (see step 6).

### 🚨 This is the webhook we want to redirect to!
If you're on n8n cloud, you may want to copy the webhook url generated here and use it as the form ending's redirect url.

## 6. Display the Transcript
[Read more about the Webhook Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook)

This step is totally optional. For a nicer user experience, I use this webhook mini-flow to display the user's transcript for the completion screen. It works by capturing the session_id in the webhook's url and searching for it in our redis database. If a match is found the transcript is fetched and rendered into a webpage using the HTML node and returned to the user. If no match is found, a 404 message is displayed instead.

## 5. Save the Interview to Sheets
[Read more about the Google Sheets node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/)

For easier data-sharing, we can have the workflow upload the session messages into data analysis tools for our team members.

For this demo, Google Sheets is an easy option. We'll pull the entire session out of redis and upload the messages one by one to sheets.

### Check out the example sheet here: https://docs.google.com/spreadsheets/d/1wKjVdm7HeufJkHrUJn_bW9bFI_blm0laoI_jgXKDe0Q/edit?usp=sharing

</details>
