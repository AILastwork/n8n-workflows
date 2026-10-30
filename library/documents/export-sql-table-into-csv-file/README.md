# Export sql table into csv file

> Выгружает таблицу Microsoft SQL в CSV-файл.

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | MS SQL |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | `microsoftSql` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow extracts data from a Microsoft SQL Server table and saves it as a CSV file, enabling users to easily share or work with the data.

Example: A sales manager needs to share a report on product categories with their team. They can use this workflow to quickly extract the data from the "SalesLT.ProductCategory" table, save it as a CSV file, and then share the file with their team or upload it to a file storage system.

## What You Can Do
- Allows users to specify the SQL table they want to extract data from
- Automatically generates a CSV file with the extracted data
- Provides a flexible way to share or work with the exported data

</details>
