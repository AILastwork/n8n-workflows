# Convert json to an excel file

> Принимает данные на вебхук и отдаёт в ответ Excel-файл.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow accepts data via a webhook, converts it into a spreadsheet file, and responds to the webhook with the generated file.

Example: A business might use this workflow to create a downloadable spreadsheet report from data submitted through a web form or application. For example, a customer could submit a list of items they want to purchase, and the workflow would generate an Excel file with the order details that the customer can then download.

## What You Can Do
- Accepts data via a webhook, allowing for easy integration with various applications and systems
- Converts the incoming data into a spreadsheet file, making it easy to view and analyze the information
- Responds to the webhook with the generated spreadsheet file, providing a seamless user experience

</details>
