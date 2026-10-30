# Merge pdf files using convertapi

> Объединяет несколько PDF-файлов в один через ConvertAPI.

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

This workflow downloads two PDF files, merges them using a PDF merge API, and saves the resulting PDF file to disk.

Example: A user might use this workflow to combine multiple PDF documents into a single file, such as merging a contract and a set of supporting documents before saving the final document.

## What You Can Do
- Retrieves two PDF files from remote URLs
- Merges the PDF files using a third-party API
- Saves the merged PDF file to the local file system

</details>
