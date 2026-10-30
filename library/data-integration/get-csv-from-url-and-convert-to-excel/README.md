# Get csv from url and convert to excel

> Скачивает CSV по ссылке и конвертирует в Excel.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automates the process of converting a CSV file from a public data source into an Excel (.xlsx) file.

Example: A user might use this workflow to regularly download and convert a dataset of event locations in Potsdam, Germany, from a public data portal into a more widely-used Excel format for further analysis or reporting.

## What You Can Do
- Triggers the workflow when the user clicks "Execute Workflow"
- Downloads a CSV file from a public data source
- Imports the CSV data and converts it to an Excel (.xlsx) file
- Provides a sticky note with step-by-step instructions and the data source

</details>
