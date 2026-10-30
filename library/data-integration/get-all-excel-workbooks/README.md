# Get all excel workbooks

> Получает все книги Microsoft Excel.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Excel |
| **Узлов в схеме** | 2 |
| **Нужные учётные данные** | `microsoftExcelOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow allows users to retrieve data from a Microsoft Excel spreadsheet by manually triggering the workflow.

Example: A sales manager could use this workflow to quickly pull data from a sales tracking spreadsheet, such as monthly sales figures or customer information, without having to manually open the spreadsheet.

## What You Can Do
- Triggered manually by the user
- Retrieves data from a Microsoft Excel spreadsheet
- Provides a simple and efficient way to access spreadsheet data without leaving the n8n platform

</details>
