# Send an email using aws ses

> Отправляет письмо через AWS SES.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | AWS SES |
| **Узлов в схеме** | 2 |
| **Нужные учётные данные** | `aws` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow allows users to easily send email notifications using the AWS Simple Email Service (SES) with a single click.

Example: A marketing team could use this workflow to quickly send email updates about a new product launch or promotional offer to their customer list.

## What You Can Do
- Triggered by a manual button click, allowing users to send emails on-demand
- Integrates with AWS SES to leverage a reliable and scalable email delivery service
- Supports customizable email content, including subject, body, and recipient addresses

</details>
