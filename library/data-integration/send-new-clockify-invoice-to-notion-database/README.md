# Send new clockify invoice to notion database

> Создаёт страницу в Notion для каждого нового счёта Clockify.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | Notion |
| **Узлов в схеме** | 2 |
| **Нужные учётные данные** | `notionApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically creates a new Notion database page whenever a new invoice is generated in Clockify, allowing for seamless tracking and organization of invoices.

Example: A small business owner who uses Clockify to manage their invoicing process can set up this workflow to automatically create a corresponding Notion database page for each new invoice. This ensures that all invoice details are centralized and easily accessible, streamlining the invoice management process.

## What You Can Do
- Triggers on new invoice creation in Clockify
- Automatically creates a new Notion database page with key invoice details (invoice number, issue date, due date, and amount)
- Allows for customization of the Notion database fields to suit specific business needs

</details>
