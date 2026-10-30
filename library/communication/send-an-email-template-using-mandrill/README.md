# Send an email template using mandrill

> Отправляет письмо по шаблону через Mandrill.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Mandrill |
| **Узлов в схеме** | 2 |
| **Нужные учётные данные** | `mandrillApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow sends a welcome email to a specified email address using the Mandrill email service.

Example: A business might use this workflow to automatically send a personalized welcome email to new customers or subscribers, providing them with important information or a special offer.

## What You Can Do
- Triggered manually by the user clicking the "execute" button
- Sends the email using the Mandrill email service, which provides advanced features like email templates and tracking
- Allows customization of the email recipient, sender, and email template

</details>
