# AI Agent : Google calendar assistant using OpenAI

> ИИ-агент — ассистент по Google Calendar: создаёт и ищет события по сообщениям в чате.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | чат |
| **Сервисы** | Google Calendar, OpenAI |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `googleCalendarOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Chat trigger - When a message is received

This node is the **entry point of the workflow**. 
It triggers the workflow whenever a message is sent to the **chat interface**.

Options with n8n:
- **Embed the chat interface** anywhere you want.
- Use a **webhook node** instead of this node to connect with interfaces like **[Streamlit](https://docs.streamlit.io/develop/tutorials/llms/build-conversational-apps)** or **[OpenWebUI](https://docs.openwebui.com/)**.
- Use nodes for communication platforms (**Slack**, **Teams**, **Discord**, etc.) if you know how to configure them.

## Tools Agent - Calendar AI Agent

This **node** configures the **AI agent** for interaction with Google Calendar. 
It includes the following features:

- A **prompt source**: This is the user message derived from the chat input of the preceding node (`When chat message is received`).
- A **system message**: This defines the system prompt to guide the AI agent's behavior. It incorporates the variable `{{ DateTime.local().toFormat('cccc d LLLL yyyy') }`, allowing the AI agent to determine the current date and interact with Google Calendar accordingly. For example, the agent can understand a request like "Create an event called 'n8n workflow review' for next Tuesday."


n8n nodes come with built-in **guardrails**, ensuring that if the user requests tasks outside the AI agent's setup, it may not function as intended. (Feel free to test it!)

## OpenAI chat model

This node specifies the chat model used by the agent. 
In the template, the **default LLM is gpt-4o** for its high relevance.

Other options:
- You can **try gpt-4o-mini**, which is more cost-effective.
- You can also choose **other LLM providers besides OpenAI**, but make sure the LLM you select **supports tool-calling**.

## Window buffer memory

This node manages the **memory** of the agent, specifically the **context window length** for chat history. 
The default is set to 5 messages.

Note: 
The **memory** is **temporary**. If you want to **store conversations with the agent**, you should use other nodes like **Postgres chat memory**. 
This can be easily set up with services like **[Supabase](https://supabase.com/)**.

## Google Calendar - Get Events

This sub-node is a tool used by the AI agent. 
Its purpose is to **retrieve events based on the user input**. 
For example: *"Can you give me the events from last week about internal process ?"*

The AI agent is designed to **use this tool only** when it has a **date range**. 
If the user hasn’t provided a date range, the **AI agent will ask the user** for it.

The **variables** `{{ $fromAI('start_date') }}` and `{{ $fromAI('end_date') }}` are **dynamically filled by the AI**.

## Google Calendar - Create Events

This sub-node is a tool used by the AI agent. 
Its purpose is to **create events based on the user input**. 
For example: "Can you create an event 'Quarter revenue meeting' on [date] from [hour] to [hour] ?"

The AI agent is designed to **use this tool only** when it has a **date range**. 
If the user hasn’t provided a **date range**, the AI agent will **ask the user** for it. 
The variables `{{ $fromAI('start_date') }}` and `{{ $fromAI('end_date') }}` are dynamically filled by the AI.

Before creating the event, the AI agent will **confirm with the user** if the **title** and **description** of the event are correct. 
The variables used for this are:
- `{{ $fromAI('event_title') }}`
- `{{ $fromAI('event_description') }}`

## Having fun with it ? Here’s how to level up this AI agent ! 

This workflow demonstrates **how easily you can set up an AI agent to call tools** for you using **n8n**. 
The tasks here are **useful but very basic**. 

If you want to **enhance the tool-calling capabilities**, consider the following:

- Explore the **"options"** in the Google Calendar nodes to see additional features you can use. 
 For example, let the AI agent add attendees to events it creates.

- Implement the AI agent with your **teammates and link it to each calendar**. 
 Use a `{{ $fromAI('') }}` variable for the calendar field and refine the prompts to suit your needs.

- Add **more actions** for the AI agent to perform with the **Google Calendar API**, expanding its functionality.

</details>
