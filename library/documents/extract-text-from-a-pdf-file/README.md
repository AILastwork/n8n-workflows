# Extract text from a pdf file

> Извлекает текст из PDF-файла.

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
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

This workflow allows users to extract text and metadata from PDF files by first reading the binary file and then processing it through a PDF reader.

Example: A user might use this workflow to automate the extraction of key information from PDF documents, such as invoices or contracts, for further processing or analysis.

## What You Can Do
- Reads binary file from a specified location
- Extracts text and metadata from PDF files
- Provides a manual trigger to initiate the workflow

</details>
