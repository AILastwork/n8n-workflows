# Convert postgresql table to csv

> Выгружает таблицу PostgreSQL в CSV.

| | |
|---|---|
| **Категория** | [🔄 Преобразование данных](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | PostgreSQL |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | `postgres` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow exports data from a Postgres database table to a CSV file.

Example: A user could use this workflow to regularly export data from a "booksRead" table in their Postgres database to a CSV file, which could then be used for reporting or analysis purposes.

## What You Can Do
- Triggered manually by the user
- Allows the user to specify the name of the Postgres table to export
- Exports the data from the specified table to a CSV file

</details>
