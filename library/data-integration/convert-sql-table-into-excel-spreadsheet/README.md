# Convert sql table into excel spreadsheet

> Выгружает таблицу MySQL в Excel (XLSX).

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | MySQL |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | `mySql` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow exports a MySQL table to an XLSX spreadsheet file, providing a convenient way to access and share data.

Example: A marketing team needs to analyze sales data stored in a MySQL database. They can use this workflow to quickly export the relevant table to a spreadsheet, which they can then share with the sales team or import into their data analysis tools.

## What You Can Do
- Allows users to specify the MySQL table to export
- Automatically generates an XLSX file with the table data
- Provides a sticky note with instructions and suggestions for further integration

</details>
