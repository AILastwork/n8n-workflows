# Read a file from disk

> Читает файл с диска.

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

This workflow allows users to read and process binary files, such as images, on demand.

Example: A user might use this workflow to upload and process an image file, such as a product photo, for use in an e-commerce platform or marketing materials.

## What You Can Do
- Triggered manually by the user, allowing for on-demand file processing
- Reads binary files, such as images, from a specified file path
- Flexible file processing capabilities, enabling further manipulation or integration with other systems

</details>
