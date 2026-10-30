# Identify new google sheets rows

> Находит новые строки в Google Sheets и помечает их как обработанные.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную, по расписанию |
| **Сервисы** | Google Sheets |
| **Узлов в схеме** | 7 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically processes new rows in a Google Sheet, marking them as processed and performing additional actions as needed.

Example: A business might use this workflow to monitor a Google Sheet containing customer orders or sales leads. Whenever a new row is added to the sheet, the workflow will detect it, mark the row as processed, and perform any necessary follow-up actions, such as sending a notification or updating a CRM system.

## What You Can Do
- Automatically detects and processes new rows in a Google Sheet
- Marks rows as processed to avoid duplicate processing
- Allows for additional actions to be performed on new rows, such as sending notifications or updating other systems

</details>
