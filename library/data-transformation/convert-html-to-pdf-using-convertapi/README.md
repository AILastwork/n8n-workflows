# Convert html to pdf using convertapi

> Конвертирует HTML в PDF через ConvertAPI.

| | |
|---|---|
| **Категория** | [🔄 Преобразование данных](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | `httpQueryAuth` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow converts an HTML document to a PDF file and saves it to disk, providing a simple way to generate PDF documents from HTML content.

Example: A user might use this workflow to create a PDF version of a web page or a custom HTML document, which could be useful for sharing, archiving, or printing the content.

## What You Can Do
- Generates an HTML document with a basic structure and content
- Converts the HTML to a binary file format
- Sends the binary file to a PDF conversion service and retrieves the resulting PDF
- Writes the PDF file to disk for further use or distribution

</details>
