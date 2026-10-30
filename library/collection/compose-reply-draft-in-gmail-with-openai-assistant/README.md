# Compose reply draft in Gmail with OpenAI Assistant

> Передаёт входящие письма Gmail с определённой меткой ассистенту OpenAI и создаёт черновик ответа.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Gmail, OpenAI |
| **Узлов в схеме** | 13 |
| **Нужные учётные данные** | `gmailOAuth2`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Reply draft with OpenAI Assistant
This workflow automatically transfers content of incoming email messages with specific labels into OpenAI Assitant and returns reply draft. After draft is composed, trigger label is deleted from the thread.

**Please remember to configure your OpenAI Assistant first.**

### Schedule trigger and get emails
Run the workflow in equal intervals and check for threads with specific labels (trigger labels).

## ⚠️ Note

1. Complete video guide for this workflow is available [on my YouTube](https://youtu.be/a8Dhj3Zh9vQ). 
2. Remember to add your credentials and configure nodes (covered in the video guide).
3. If you like this workflow, please subscribe to [my YouTube channel](https://www.youtube.com/@workfloows) and/or [my newsletter](https://workfloows.com/).

**Thank you for your support!**

### Generate reply
Transfer email content to OpenAI Assitant and return AI-generated reply.

### Create HTML message
Convert incoming Markdown from OpenAI Assistant into HTML content.

### Build and encode message
Create raw message in RFC standard and encode it into base64 string (please see [Gmail API reference](https://developers.google.com/gmail/api/reference/rest/v1/users.drafts/create) for more details).

### Insert reply draft
Add reply draft from OpenAI Assistant to specific Gmail thread.

### Remove label
Delete trigger label from the Gmail thread.

### Return message content
Retrieve content of the last message in the thread.

### Get last message from thread
Return all messages for a single thread and pass for further processing only the last one.

</details>
