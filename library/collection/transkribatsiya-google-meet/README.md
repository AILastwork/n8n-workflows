# Транскрибация Google Meet

> Получает расшифровку Google Meet, извлекает договорённости и создаёт события в Google Calendar.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, вызов из другого воркфлоу |
| **Сервисы** | Google Calendar, Google Drive, OpenAI |
| **Узлов в схеме** | 19 |
| **Нужные учётные данные** | `googleCalendarOAuth2Api`, `googleDriveOAuth2Api`, `googleOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## 4. This Tool Creates Calendar Events
This tool, given event details and a list of attendees, will create a new Google calendar event and add the attendees to it.

## 1. Retrieve Meeting Transcript
[Read more about working with HTTP node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest)

There's no built-in support for Google Meets transcript API however, we can solve this problem with the HTTP node. Note you may also need to setup a separate Google OAuth API Credential to obtain the required scopes.

## 2. Let AI Agent Carry Out Follow-Up Actions
[Read more about working with AI Agents](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent)

The big difference between Basic LLM chains and AI Agents is that AI agents are given the automony to perform actions. Provided the right tool exists, AI Agents can send emails, book flights and even order pizza! Here we're leaving it up to our agent to book any follow-up meetings after the call and invite all interested parties.

## 3: Using the Custom Workflow Tool
[Read more about Workflow Triggers](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executeworkflowtrigger)

One common implementation of tool use is to set them up as workflows which are intended triggered via other workflows. With this, we can either build a tool per workflow or for efficiency, take an API approach where multiple tools can exist behind a router (in this case our "switch" node).

Our AI agent will therefore only passing through the parameters of the request and won't have to learn/know how to intereact directly with the tools and services.

## Try It Out!
### This workflow does the following:
* Retrieves a meeting transcript
* Sends transcript to an AI Agent to parse and carry out follow up actions if necessary.
* If transcript mentions a follow up meeting is required, the AI Agent will call a tool to create the meeting.
* Additionally if able, the AI Agent will also assign attendees it thinks should attend the meeting. 

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

## 1. Get Calendar Event
[Read more about working with Google Calendar](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecalendar)

In this demo, we've decided to go with google meet as transcripts are stored in the user google drive. First, we'll need to get the calendar event of which the google meet was attached.
If the meet was not arranged through Google calendar, you may need to skip this step and just reference the transcripts in google drive directly.

🚨**Required**
* Set your calendar event ID here.

### 💡 Can't find your transcript?
Only meetings which own and were recorded and had transcription enabled will be available.

🚨**Required**
* Set your calendar ID here.

</details>
