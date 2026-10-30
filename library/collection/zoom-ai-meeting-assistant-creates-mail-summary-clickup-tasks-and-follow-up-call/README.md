# Zoom AI Meeting Assistant

> ИИ-ассистент для встреч Zoom: саммари, задачи в ClickUp, письма участникам и встречи в Outlook.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, вызов из другого воркфлоу |
| **Сервисы** | ClickUp, OpenAI, Outlook, Zoom |
| **Узлов в схеме** | 22 |
| **Нужные учётные данные** | `clickUpOAuth2Api`, `microsoftOutlookOAuth2Api`, `openAiApi`, `smtp`, `zoomOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Sub workflow: Create Task in ClickUp

## Welcome to my Zoom AI Meeting Assistant Workflow!

### This workflow has the following sequence:

1. manual trigger (Can be replaced by a scheduled trigger or a webhook)
2. retrieval of of Zoom meeting data
3. filter the events of the last 24 hours
4. retrieval of transcripts and extract of the text
5. creating a meeting summary, format to html and send per mail
6. create tasks and follow-up call (if discussed in the meeting) in ClickUp/Outlook (can be replaced by Gmail, Airtable, and so forth) via sub workflow

### The following accesses are required for the workflow:
- Zoom Workspace (via API and HTTP Request): [Documentation](https://docs.n8n.io/integrations/builtin/credentials/zoom/)
- Microsoft Outlook: [Documentation](https://docs.n8n.io/integrations/builtin/credentials/microsoft/)
- ClickUp: [Documentation](https://docs.n8n.io/integrations/builtin/credentials/clickup/)
- AI API access (e.g. via OpenAI, Anthropic, Google or Ollama)
- SMTP access data (for sending the mail)

You can contact me via LinkedIn, if you have any questions: https://www.linkedin.com/in/friedemann-schuetz

</details>
