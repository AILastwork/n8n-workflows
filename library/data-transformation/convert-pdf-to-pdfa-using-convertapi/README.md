# Convert pdf to pdfa using convertapi

> Конвертирует PDF в архивный формат PDF/A через ConvertAPI.

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

This workflow downloads a PDF file, converts it to a PDF/A format, and saves the converted file to disk.

Example: A user might use this workflow to ensure that important documents are saved in a standardized, archival-quality PDF/A format for long-term storage and preservation.

## What You Can Do
- Automatic conversion of PDF files to the PDF/A format
- Ability to specify the desired PDF/A version
- Saving the converted file to disk for easy access and distribution

</details>
