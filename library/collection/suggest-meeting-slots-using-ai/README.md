# Calendar scheduling

> Отвечает на письма с просьбой о встрече, проверяя свободное время в Google Calendar.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вызов из другого воркфлоу, событие в Gmail |
| **Сервисы** | Gmail, Google Calendar, OpenAI |
| **Узлов в схеме** | 17 |
| **Нужные учётные данные** | `gmailOAuth2`, `googleCalendarOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Check if incoming email is about appointment
We use LLM to check subject and body of the email and determine if it's an appointment request.

## Get calendar availability and compose a response
Make sure to update the Workflow ID if you are running this as 2 workflows

### Get all query google events for the next month and extract relevant data

### Wrap the result in `response` object and return

</details>
