# Sync google sheets data with mysql

> Синхронизирует Google Sheets и MySQL, помечая статус записей.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную, по расписанию |
| **Сервисы** | Compare Datasets, Google Sheets, MySQL |
| **Узлов в схеме** | 13 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `mySql` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically synchronizes data between a Google Sheet and a MySQL database, updating the Google Sheet's "DB Status" column and triggering notifications for outdated records.

Example: A company that collects event inquiries through a Google Form can use this workflow to streamline their data management process. The workflow automatically retrieves new inquiries from the Google Sheet, compares them with the MySQL database, and updates the Google Sheet's "DB Status" column accordingly. It also sends notifications for any inquiries that have not been updated in the database for more than 4 hours, allowing the team to quickly address any outstanding tasks.

## What You Can Do
- Automated data synchronization between Google Sheets and MySQL
- Conditional logic to update the Google Sheet's "DB Status" column based on database status
- Notification system to alert the team about outdated records

</details>
