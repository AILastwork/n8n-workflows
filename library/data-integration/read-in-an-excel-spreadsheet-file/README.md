# Read in an excel spreadsheet file

> Читает Excel-файл.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow allows users to manually trigger the extraction and processing of data from a spreadsheet file.

Example: A sales manager could use this workflow to quickly extract and analyze sales data from a spreadsheet file, without needing to manually open and process the file.

## What You Can Do
- Manual trigger: Users can execute the workflow on-demand by clicking a button.
- Spreadsheet file processing: The workflow can read and process data from a spreadsheet file.
- Binary file handling: The workflow can handle and process binary file formats, such as CSV files.

</details>
