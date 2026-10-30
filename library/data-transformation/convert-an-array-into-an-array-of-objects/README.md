# Convert an array into an array of objects

> Превращает массив в массив объектов.

| | |
|---|---|
| **Категория** | [🔄 Преобразование данных](../README.md) |
| **Запуск** | — |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 2 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow generates a list of data items and then maps each item to a new JSON object.

Example: A user might use this workflow to create a list of product SKUs or customer IDs, and then transform each item into a standardized JSON format for further processing or integration with other systems.

## What You Can Do
- Generates a list of sample data using a "Mock Data" node
- Transforms the list of items into individual JSON objects using a "Function" node
- Provides a flexible and customizable way to process and format data

</details>
