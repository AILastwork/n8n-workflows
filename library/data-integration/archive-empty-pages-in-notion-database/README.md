# Archive empty pages in notion database

> Ежедневно архивирует пустые страницы в базе Notion.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Notion |
| **Узлов в схеме** | 10 |
| **Нужные учётные данные** | `notionApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically archives Notion database pages with empty properties or content on a daily schedule.

Example: A marketing team uses this workflow to maintain a clean and organized Notion database of their content calendar. The workflow automatically archives any pages that have empty fields or no content, ensuring the database stays up-to-date and clutter-free.

## What You Can Do
- Automatically checks Notion databases for pages with empty properties or content
- Archives pages that meet the criteria, keeping the database organized
- Runs on a daily schedule to maintain the database proactively

</details>
