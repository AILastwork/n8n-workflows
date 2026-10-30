# Convert web page to pdf using convertapi

> Сохраняет веб-страницу в PDF через ConvertAPI.

| | |
|---|---|
| **Категория** | [🔄 Преобразование данных](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | `httpQueryAuth` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow converts a web page to a PDF file and saves it to disk.

Example: A user could use this workflow to quickly convert a web page, such as their company's homepage, into a PDF document that can be shared or archived.

## What You Can Do
- Converts a web page to a PDF file using the ConvertAPI service
- Saves the generated PDF file to disk
- Includes authentication instructions and a parameter to set the URL of the web page to be converted

</details>
