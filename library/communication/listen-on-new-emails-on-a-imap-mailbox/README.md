# Listen on new emails on a imap mailbox

> Слушает почтовый ящик IMAP, конвертирует вложения в XML и отправляет в API.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | новое письмо (IMAP) |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | `imap` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow retrieves email attachments, converts them to XML format, and then sends the XML data to an API endpoint for further processing.

Example: A sales team might use this workflow to automatically process customer orders received via email. The workflow would retrieve the order details from the email attachments, convert them to a standardized XML format, and then send the order information to a sales order management system for fulfillment.

## What You Can Do
- Retrieves email attachments from an IMAP email account
- Converts the email attachments to XML format
- Sends the XML data to an API endpoint for further processing
- Supports configurable options for email access and data handling

</details>
