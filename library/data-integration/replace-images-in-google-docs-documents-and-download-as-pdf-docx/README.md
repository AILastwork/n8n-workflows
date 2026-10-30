# Replace images in google docs documents and download as pdf docx

> Заменяет картинки в документах Google Docs и скачивает результат в PDF/DOCX.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Google Drive |
| **Узлов в схеме** | 9 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automates the process of finding and replacing images in Google Docs documents, allowing users to dynamically update document images from a database of image URLs and optionally generate shareable PDF and DOCX versions of the updated documents.

Example: A marketing team needs to create multiple versions of a marketing plan document with different product images. They can use this workflow to connect to their image database, automatically replace the placeholder images in a template document, and generate shareable PDF and DOCX versions of the updated documents.

## What You Can Do
- Connects to a database of image URLs to dynamically update document images
- Finds and replaces images in Google Docs documents, including support for documents with multiple images
- Optionally creates copies of a template document with updated images
- Provides options to make the updated documents publicly shareable and download them in DOCX and PDF formats

</details>
