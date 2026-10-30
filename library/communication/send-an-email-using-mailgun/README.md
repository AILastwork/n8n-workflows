# Send an email using mailgun

> Отправляет письмо через Mailgun.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Mailgun |
| **Узлов в схеме** | 2 |
| **Нужные учётные данные** | `mailgunApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow allows users to manually trigger the sending of a test email using the Mailgun email service.

Example: A marketing team member could use this workflow to quickly send a test email to a colleague or client to ensure email templates and content are working as expected before a larger email campaign.

## What You Can Do
- Manually triggered email sending
- Customizable email content including subject, body, and sender/recipient
- Integration with the Mailgun email service

</details>
