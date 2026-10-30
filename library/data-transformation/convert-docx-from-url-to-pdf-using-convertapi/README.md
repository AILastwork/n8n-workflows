# Convert docx from url to pdf using convertapi

> Конвертирует DOCX по ссылке в PDF через ConvertAPI.

| | |
|---|---|
| **Категория** | [🔄 Преобразование данных](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | `httpQueryAuth` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow converts a Microsoft Word document (DOCX) to a PDF file and saves it to the local file system.

Example: A user might use this workflow to convert a DOCX file they have received from a client or colleague and save the resulting PDF for further processing or distribution.

## What You Can Do
- Accepts a URL to a DOCX file as input
- Converts the DOCX file to PDF using the ConvertAPI service
- Saves the resulting PDF file to the local file system

</details>
