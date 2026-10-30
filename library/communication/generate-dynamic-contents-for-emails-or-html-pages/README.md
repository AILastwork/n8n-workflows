# Generate dynamic contents for emails or html pages

> Генерирует динамический контент для писем и HTML-страниц (счета клиентам, сводка по новым клиентам).

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Document Generator |
| **Узлов в схеме** | 8 |
| **Нужные учётные данные** | `smtp` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow generates customer invoices and sends them via email, as well as a summary email of new customers added in the last 24 hours.

Example: A marketing agency uses this workflow to automatically generate and send invoices to their clients after a design project is completed. The workflow also sends a summary email to the agency's management team with a list of new customers added in the last day.

## What You Can Do
- Generates individual invoices for each customer with customizable details like service descriptions, quantities, and totals
- Sends a single HTML email with a summary of all new customers added in the last 24 hours
- Utilizes a customer datastore to retrieve customer information and generate the invoices and email content

</details>
