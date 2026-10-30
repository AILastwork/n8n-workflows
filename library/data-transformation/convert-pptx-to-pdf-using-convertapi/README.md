# Convert pptx to pdf using convertapi

> Конвертирует PPTX в PDF через ConvertAPI.

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

This workflow converts a PowerPoint (PPTX) file to a PDF file and saves the result to disk.

Example: A user might use this workflow to automate the conversion of a PPTX presentation to a PDF format, which can be more convenient for sharing or printing. The workflow can be triggered manually, and the resulting PDF file is saved to the local file system.

## What You Can Do
- Automatic conversion of PPTX to PDF format
- Saving the converted file to disk for easy access
- Includes a note about the need for authentication to use the conversion service

</details>
