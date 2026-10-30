# Send a chatgpt email reply and save responses to google sheets

> Отвечает на письма через ChatGPT и сохраняет письма, ответы и оценки в Google Sheets.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вебхук, событие в Gmail |
| **Сервисы** | Gmail, Google Sheets, OpenAI |
| **Узлов в схеме** | 40 |
| **Нужные учётные данные** | `gmailOAuth2`, `googleSheetsOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow sends a ChatGPT email reply when an email is received from specific email recipients, and saves the initial email and the GPT response to a Google spreadsheet. It also records feedback on the GPT responses, which can be used to fine-tune the model.

Example: A user receives an email from a customer and wants to provide a helpful response using ChatGPT. This workflow would automatically generate a response, send it back to the customer, and store the conversation in a spreadsheet for future reference and model fine-tuning.

## What You Can Do
- Automatically generates and sends ChatGPT email replies
- Saves email conversations and ChatGPT responses to a Google spreadsheet
- Allows users to provide feedback on the ChatGPT responses, which can be used to fine-tune the model
- Handles cases where the email content exceeds the token limit for the ChatGPT model
- Automatically creates a new spreadsheet if one doesn't already exist

</details>
