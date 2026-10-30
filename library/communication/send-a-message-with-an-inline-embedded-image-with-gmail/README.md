# Send a message with an inline embedded image with gmail

> Отправляет письмо через Gmail с картинкой, встроенной прямо в текст.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `gmailOAuth2` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automates the process of sending an email with an embedded image using Gmail.

Example: A marketing team could use this workflow to quickly send personalized emails with a company logo or product image to their customer list.

## What You Can Do
- Allows users to easily customize email content, including the sender, recipient, subject, and HTML body
- Automatically converts an image to base64 format for embedding in the email
- Integrates with Gmail to securely send the email using OAuth2 authentication

</details>
