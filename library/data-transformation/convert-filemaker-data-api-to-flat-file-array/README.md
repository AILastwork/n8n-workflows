# Convert filemaker data api to flat file array

> Превращает ответ FileMaker Data API в плоский массив.

| | |
|---|---|
| **Категория** | [🔄 Преобразование данных](../README.md) |
| **Запуск** | — |
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

This workflow retrieves contact data from a FileMaker Data API and returns the contact information.

Example: A sales team could use this workflow to quickly access and view detailed contact information for their customers or prospects, including names, company details, addresses, and contact information.

## What You Can Do
- Fetches contact data from a FileMaker Data API
- Extracts and returns the contact information in a structured format
- Can be easily integrated into other business processes or applications

</details>
