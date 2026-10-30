# Respond with file download to incoming http request

> Отдаёт файл (PDF) для скачивания в ответ на HTTP-запрос.

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
| **Запуск** | вебхук |
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

This workflow allows users to download a PDF file by sending a GET request to a specific endpoint.

Example: A company might use this workflow to provide customers with a downloadable PDF document, such as a product brochure or a technical manual, without the need for a complex web application.

## What You Can Do
- Accepts a GET request at a specified endpoint
- Fetches a binary file from a remote URL
- Responds with the binary file as an attachment, allowing the user to download it

</details>
