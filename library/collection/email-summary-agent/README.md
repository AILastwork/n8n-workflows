# Email Summary Agent

> Каждое утро делает саммари писем за сутки через OpenAI и присылает на почту.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Gmail, OpenAI |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | `gmailOAuth2`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

- Starts the workflow every day at 7 AM.
- Adjust the time if you want the workflow to run at a different hour.

Fetches all emails received in the past 24 hours from the email address

Organizes the fetched email data, extracting fields like sender, receiver, CC, and a preview snippet.

- Sends the summarized email report to recipients with a styled HTML layout.
- Update the "sendTo" and "ccList" fields with the email addresses of your recipients.

</details>
