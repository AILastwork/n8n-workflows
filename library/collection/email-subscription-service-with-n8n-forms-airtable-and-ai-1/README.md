# Email Subscription Service with n8n Forms, Airtable and AI (1)

> Сервис рассылки на формах n8n: подписка, хранение в Airtable, письма с ИИ-контентом (Groq + Википедия) по расписанию.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вызов из другого воркфлоу, по расписанию, форма n8n |
| **Сервисы** | Airtable, Gmail, Groq, OpenAI, Wikipedia |
| **Узлов в схеме** | 24 |
| **Нужные учётные данные** | `airtableTokenApi`, `gmailOAuth2`, `groqApi`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### 4. Using Subworkflows to run executions concurrently
This configuration is desired when sequential execution is slow and unnecessary. Also if one email fails, it doesn't fail the execution for everyone else.

### 1. Subscribe flow
Use a form to allow users to subscribe to the service.

### 2. Unsubscribe flow
* Uses Form's pre-fill field feature to identify user
* Doesn't use "email" as identifier so you can't unsubscribe others

### 3. Scheduled Trigger
* Runs every day at 9am
* Handles all 3 frequency types
* Send emails concurrently

### 5. Use Execution Data to Filter Logs
If you've registered for community+ or are on n8n cloud, best practice is to use execution node to allow filtering of execution logs.

### 6. Use AI to Generate Factoid and Image
Use an AI agent to automate the generation of factoids as requested by the user. This is a simple example but we recommend a adding a unique touch to stand out from the crowd!

### 7. Send Email to User
Finally, send a message to the user with both text and image.
Log the event in the Airtable for later analysis if required.

![Screenshot of email result](https://res.cloudinary.com/daglih2g8/image/upload/f_auto,q_auto/v1/n8n-workflows/dbpctdhohj3vlewy6oyc)

## Try It Out!

### This n8n templates demonstrates how to build a simple subscriber service entirely in n8n using n8n forms as a frontend, n8n generally as the backend and Airtable as the storage layer.

This template in particular shows a fully automated service to send automated messages containing facts about a topic the user requested for.

### How it works
* An n8n form is setup up to allow users to subscribe with a desired topic and interval of which to recieve messages via n8n forms which is then added to the Airtable.
* A scheduled trigger is executed every morning and searches for subscribers to send messages for based on their desired intervals.
* Once found, Subscribers are sent to a subworkflow which performs the text content generation via an AI agent and also uses a vision model to generate an image.
* Both are attached to an email which is sent to the subscriber. This email also includes an unsubscribe link.
* The unsubscribe flow works similarly via n8n form interface which when submitted disables further scheduled emails to the user.

## How to use
* Make a copy of sample Airtable here: https://airtable.com/appL3dptT6ZTSzY9v/shrLukHafy5bwDRfD
* Make sure the workflow is "activated" and the forms are available and reachable by your audience.


### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

</details>
