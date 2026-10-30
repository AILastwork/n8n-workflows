# Manipulate pdf with adobe developer api

> Обёртка над Adobe PDF Services API: загружает PDF, обрабатывает его (извлечение текста, конвертация и т. п.) и сохраняет результат в Dropbox.

| | |
|---|---|
| **Категория** | [🌐 API и вебхуки](../README.md) |
| **Запуск** | вручную, вызов из другого воркфлоу |
| **Сервисы** | Dropbox |
| **Узлов в схеме** | 14 |
| **Нужные учётные данные** | `dropboxOAuth2Api`, `httpCustomAuth`, `httpHeaderAuth` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow is an Adobe API wrapper that allows users to upload a PDF file, process it using various Adobe PDF services, and download the resulting file.

Example: A marketing team might use this workflow to extract text and tables from a product brochure PDF, then download the processed file for further analysis or inclusion in a report.

## What You Can Do
- Handles authentication with Adobe's PDF Services API
- Supports various PDF processing operations, such as splitting, extracting, and converting PDF files
- Provides a flexible, configurable interface for specifying the desired PDF processing operation and parameters

</details>
