# Read multiple files from disk

> Читает несколько файлов с диска.

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
| **Запуск** | вручную |
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

This workflow allows users to manually trigger the reading and processing of binary files (e.g., images) located in a specific directory.

Example: A marketing team could use this workflow to quickly upload and process a batch of product images for their website or social media campaigns. By triggering the workflow, the team can easily access and work with the images without having to manually locate and open each file.

## What You Can Do
- Manually triggered execution for on-demand processing
- Reads binary files (e.g., images) from a specified directory
- Flexible file selection options to target specific file types or locations

</details>
