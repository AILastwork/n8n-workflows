# Create e-mail responses with fastmail and OpenAI

> Создаёт черновики ответов на письма в Fastmail через GPT-4.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | новое письмо (IMAP) |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 9 |
| **Нужные учётные данные** | `httpHeaderAuth`, `imap`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Workflow Description:
This n8n workflow automates the drafting of email replies for Fastmail using OpenAI's GPT-4 model. Here’s the overall process:

1. **Email Monitoring**: The workflow continuously monitors a specified IMAP inbox for new, unread emails.
2. **Email Data Extraction**: When a new email is detected, it extracts relevant details such as the sender, subject, email body, and metadata.
3. **AI Response Generation**: The extracted email content is sent to OpenAI's GPT-4, which generates a personalized draft response.
4. **Get Fastmail Session and Mailbox IDs**: Connects to the Fastmail API to retrieve necessary session details and mailbox IDs.
5. **Draft Identification**: Identifies the "Drafts" folder in the mailbox.
6. **Draft Preparation**: Compiles all the necessary information to create the draft, including the generated response, original email details, and specified recipient.
7. **Draft Uploading**: Uploads the prepared draft email to the "Drafts" folder in the Fastmail mailbox.

## Prerequisites:
1. **IMAP Email Account**: You need to configure an IMAP email account in n8n to monitor incoming emails.
2. **Fastmail API Credentials**: A Fastmail account with JMAP API enabled. You should set up HTTP Header authentication in n8n with your Fastmail API credentials.
3. **OpenAI API Key**: An API key from OpenAI to access GPT-4. Make sure to configure the OpenAI credentials in n8n.

</details>
