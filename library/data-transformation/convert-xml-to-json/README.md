# Convert xml to json

> Конвертирует XML в JSON.

| | |
|---|---|
| **Категория** | [🔄 Преобразование данных](../README.md) |
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

This workflow allows users to convert a hardcoded XML string into a structured JSON object, providing a simple way to work with XML data in n8n.

Example: A user might use this workflow to parse an XML response from an API, converting it into a more manageable JSON format for further processing or integration with other applications.

## What You Can Do
- Accepts a manual trigger, allowing users to execute the workflow on demand
- Provides a set node to define the XML string to be processed
- Utilizes the XML node to convert the XML data into a structured JSON object

</details>
