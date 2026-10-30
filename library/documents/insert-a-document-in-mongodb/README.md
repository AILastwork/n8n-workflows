# Insert a document in mongodb

> Добавляет документ в MongoDB.

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | MongoDB |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | `mongoDb` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow allows users to manually trigger the insertion of a key-value pair into a MongoDB database.

Example: A small business owner could use this workflow to quickly add new customer information to their MongoDB database whenever a new customer signs up on their website.

## What You Can Do
- Provides a manual trigger for initiating the workflow
- Allows users to set custom key-value pairs to be inserted into the database
- Integrates with MongoDB to securely store the data

</details>
