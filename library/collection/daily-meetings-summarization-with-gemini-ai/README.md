# Daily meetings summarization with Gemini AI

> Каждый день делает сводку встреч из Google Calendar через Gemini и отправляет в Slack.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Google Calendar, Google Gemini, Slack |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | `googleCalendarOAuth2Api`, `googlePalmApi`, `slackApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### Gemini Flash model a base

### Send the response from AI back to slack channel

## Trigger the task daily, receive the meetings data, process the data and return response for sending











No memory assigned to the model since the model is running one task and doesn't need a followup, then send the data to the user.

### Access Google Calendar and fetch all the data

</details>
