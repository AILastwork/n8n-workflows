# Convert xlsx to pdf using convertapi

> Конвертирует XLSX в PDF через ConvertAPI.

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

This workflow allows users to convert an XLSX file to a PDF file and save the resulting PDF to disk.

Example: A user might use this workflow to convert a financial report or other spreadsheet-based document to a more widely-accessible PDF format, which can then be shared or archived.

## What You Can Do
- Automatic conversion of XLSX files to PDF format
- Saving the converted PDF file to disk for easy access
- Includes a sticky note with instructions for authenticating the conversion service

</details>
