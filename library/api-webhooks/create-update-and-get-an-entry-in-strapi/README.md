# Create update and get an entry in strapi

> Пример работы со Strapi: создаёт запись, обновляет её и читает обратно.

| | |
|---|---|
| **Категория** | [🌐 API и вебхуки](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Strapi |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `strapiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automates the process of creating and updating content in a Strapi headless CMS using the n8n workflow automation tool.

Example: A content creator or marketing team can use this workflow to quickly create new blog posts or articles in Strapi, set the title, content, and description, and then automatically update the post's slug field to create a user-friendly URL.

## What You Can Do
- Triggers the workflow manually when the user clicks "execute"
- Allows the user to set the title, content, and description of the new Strapi post
- Automatically updates the slug field of the created post to a user-friendly URL

</details>
