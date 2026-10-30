# Export csv file to json

> Конвертирует CSV-файл в JSON.

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow converts a CSV file into a JSON file, enabling easy data transformation and storage.

Example: A user might use this workflow to convert a CSV file containing sales data into a JSON format, which can then be easily integrated with other systems or stored in a database for further analysis.

## What You Can Do
- Reads a binary file (CSV) from a specified location
- Converts the CSV data into a spreadsheet format
- Moves the spreadsheet data into a binary format (JSON)
- Writes the binary JSON data to a specified file location

</details>
