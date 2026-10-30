# Creating a AI Slack Bot with Google Gemini

> Slack-бот на Google Gemini: отвечает на сообщения через вебхук.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | Google Gemini, Slack |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## This is a POST Webhook endpoint

Make sure to configure this webhook using a https:// wraper and dont use the default http://localhost:5678 as that will not be recognized by your slack webhook


Once the data has been sent to your webhook, the next step will be passing it via an AI Agent to process data based on the queries we pass to our agent.

To have some sort of a memory, be sure to set the slack token to the memory node. This way you can refer to other chats from the history.

The final message is relayed back to slack as a new message. Since we can not wait longer than 3000 ms for slack response, we will create anew message with reference to the input we passed.

We can advance this using the tools or data sources for it to be more custom tailored for your company.

### Conversation history is stored in memory using the body token as the chatsession id

### The chat LLM to process the prompt. Use any AI model here

### Send the response from AI back to slack channel

## Receive a POST webhook, process data and return response

</details>
