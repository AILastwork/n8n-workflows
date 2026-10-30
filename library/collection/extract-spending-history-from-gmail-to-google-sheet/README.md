# Extract spend details (template)

> Извлекает данные о расходах из писем Gmail (Gemini/Groq) и записывает в Google Sheets.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Gmail |
| **Сервисы** | Gmail, Google Gemini, Google Sheets, Groq |
| **Узлов в схеме** | 21 |
| **Нужные учётные данные** | `gmailOAuth2`, `googlePalmApi`, `googleSheetsOAuth2Api`, `groqApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# A. Get data
- Set up labels in Gmail
- Suggested using Gmail filters to move emails to labels automatically

# B. Deal with the data
1. Multiple payment info in one mail: input the "sender" of the emails that contain more than one payment info. e.g. credit card daily spend notification
2. One payment info in one mail: input the "sender" of the emails that contain only one payment info. e.g. instant credit card spend notification
3. Invoices: input the mails that contain one invoice in one mail

# C. Get spend details and send to google sheet
- Edit the output schema to fit your google sheet format
- Edit the prompt to fit your needs

</details>
