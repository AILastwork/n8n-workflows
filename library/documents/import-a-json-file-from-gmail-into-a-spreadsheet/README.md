# Import a json file from gmail into a spreadsheet

> Берёт JSON-файл из вложения Gmail и сохраняет его как таблицу (CSV).

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
| **Запуск** | — |
| **Сервисы** | Gmail |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | `gmailOAuth2` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically retrieves a JSON file from Gmail, converts it to a CSV spreadsheet, and saves the file to disk.

Example: A sales manager could use this workflow to automatically download a daily sales report in JSON format from their Gmail account, convert it to a CSV file, and save it to a shared drive for their team to access.

## What You Can Do
- Retrieves email attachments from Gmail
- Converts JSON data to a CSV spreadsheet
- Saves the spreadsheet file to disk for easy access

</details>
