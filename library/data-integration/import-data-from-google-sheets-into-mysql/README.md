# Import data from google sheets into mysql

> Еженедельно импортирует данные из Google Sheets в MySQL.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Google Sheets, MySQL |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `mySql` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically retrieves data from a Google Sheet, and then inserts the data into a MySQL database on a weekly schedule.

Example: A small business owner could use this workflow to regularly sync their product catalog data from a Google Sheet into their MySQL database, ensuring their inventory and pricing information is always up-to-date.

## What You Can Do
- Scheduled data transfer from Google Sheets to MySQL on a weekly basis
- Ability to select specific columns to be transferred from the Google Sheet
- Option to configure MySQL insert settings, such as ignoring duplicates and setting low priority

</details>
