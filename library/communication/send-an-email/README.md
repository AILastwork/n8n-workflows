# Send an email

> Отправляет письмо по SMTP.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 2 |
| **Нужные учётные данные** | `smtp` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow allows users to manually trigger the sending of an email with a pre-defined message.

Example: A small business owner could use this workflow to quickly send a promotional email to their customer list with a special offer or announcement.

## What You Can Do
- Manually triggered email sending
- Customizable email subject, body, and recipient
- Supports SMTP credentials for email delivery

</details>
