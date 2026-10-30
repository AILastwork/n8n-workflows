# AI Agent for project management and meetings with Airtable and Fireflies

> ИИ-агент для проектов и встреч: берёт расшифровки Fireflies, создаёт задачи в Airtable, письма и события в календаре.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук, вызов из другого воркфлоу |
| **Сервисы** | Airtable, Gmail, Google Calendar, OpenAI |
| **Узлов в схеме** | 10 |
| **Нужные учётные данные** | `airtableTokenApi`, `gmailOAuth2`, `googleCalendarOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### Replace API key for Fireflies

### Replace connections for Airtable and Google

### Scenario 2 - Create Tasks tool

### Scenario 1 - AI agent

### Replace OpenAI connection

### Set up steps

#### Preparation
1. **Create Accounts**:
 - [N8N](https://n8n.partnerlinks.io/2hr10zpkki6a): For workflow automation.
 - [Airtable](https://airtable.com/): For database hosting and management.
 - [Fireflies](https://fireflies.ai/): For recording meetings.

#### N8N Workflow

1. **Configure the Webhook**: 
 - Set up a webhook to capture meeting completion events and integrate it with Fireflies.

2. **Retrieve Meeting Content**: 
 - Use GraphQL API requests to extract meeting details and transcripts, ensuring appropriate authentication through Bearer tokens.

3. **AI Processing Setup**: 
 - Define system messages for AI tasks and configure connections to the AI chat model (e.g., OpenAI's GPT) to process transcripts.

4. **Task Creation Logic**: 
 - Create structured tasks based on AI output, ensuring necessary details are captured and records are created in Airtable.

5. **Client Notifications**: 
 - Use an email node to notify clients about their tasks, ensuring communications are client-specific.

6. **Scheduling Follow-Up Calls**: 
 - Set up Google Calendar events if follow-up meetings are required, populating details from the original meeting context.

7. **Final Testing**: 
 - Conduct tests to ensure each part of the workflow is functional and seamless, making adjustments as needed based on feedback.

![5min Logo](https://cflobdhpqwnoisuctsoc.supabase.co/storage/v1/object/public/my_storage/banner.png)
## AI Agent for project management and meetings with Airtable and Fireflies
**Made by [Philipp Bekher](https://www.linkedin.com/in/philipp-bekher-5437171a4/) from community [5minAI](https://www.skool.com/5minai-2861)**

Managing action items from meetings can often lead to missed tasks and poor follow-up. This automation alleviates that issue by automatically generating tasks from meeting transcripts, keeping everyone informed about their responsibilities and streamlining communication.

The workflow leverages n8n to create a Smart Agent that listens for completed meeting transcripts, processes them using AI, and generates tasks in Airtable. Key functionalities include:
- Capturing completed meeting events through webhooks.
- Extracting relevant meeting details such as transcripts and participants using API calls.
- Generating structured tasks from meeting discussions and sending notifications to clients.

### ... or watch set up video [10 min]
[![Youtube Link](https://cflobdhpqwnoisuctsoc.supabase.co/storage/v1/object/public/my_storage/Video%2011%20-%20Fireflies%20Agent%20Blur.png)](https://www.youtube.com/watch?v=0TyX7G00x3A)

</details>
