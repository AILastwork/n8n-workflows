# Auto-label incoming Gmail messages with AI nodes

> Автоматически ставит метки входящим письмам Gmail по содержанию (Partnership, Inquiry, Notification) с помощью ИИ.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Gmail |
| **Сервисы** | Gmail, OpenAI |
| **Узлов в схеме** | 11 |
| **Нужные учётные данные** | `gmailOAuth2`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Add AI labels to Gmail messages
With this workflow you can automatically set labels for your Gmail message according to its content. 

In this workflow available are 3 labels: "Partnership", "Inquiry" and "Notification". Feel free to adjust labels according to your needs. 

**Please remember to set label names both in your Gmail account and workflow.**

## ⚠️ Note

1. Complete video guide for this workflow is available [on my YouTube](https://youtu.be/a8Dhj3Zh9vQ). 
2. Remember to add your credentials and configure nodes (covered in the video guide).
3. If you like this workflow, please subscribe to [my YouTube channel](https://www.youtube.com/@workfloows) and/or [my newsletter](https://workfloows.com/).

**Thank you for your support!**

### Gmail Trigger
Receive data from Gmail about new incoming message. 

⚠️ Set polling interval according to your needs.

###










### JSON schema
Edit JSON schema and label names according to your needs.

⚠️ **Label names in system prompt and JSON schema should be the same.**

### Merge labels
Combine labels retrieved from Gmail account and assigned by AI together.

### Aggregarte labels and add to message
Create array of label IDs and add to the desired email message in Gmail.

### Get message content
Based on Gmail message ID retrieve body content of the email and pass it to AI chain.

### Assign labels
Let the AI decide which labels suit the best content of the message.

⚠️ **Remember to edit system prompt** - modify label names and instructions according to your needs.

</details>
