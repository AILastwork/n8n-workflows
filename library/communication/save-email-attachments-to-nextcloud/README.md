# Save email attachments to nextcloud

> Сохраняет вложения из писем IMAP в Nextcloud, раскладывая по отправителю и дате.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | новое письмо (IMAP) |
| **Сервисы** | Nextcloud |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically retrieves emails from an IMAP mailbox, extracts and sanitizes the attachments, and uploads them to a Nextcloud folder, organizing them by the email sender and date.

Example: A small business owner who receives invoices from various suppliers via email can use this workflow to automatically save those invoices to a Nextcloud folder, making it easier to organize and access their financial records.

## What You Can Do
- Retrieves emails from an IMAP mailbox and processes the attachments
- Sanitizes the attachment filenames to ensure compatibility with Nextcloud
- Organizes the uploaded files by the email sender and date

</details>
