# Send labeled email to a notion database

> Создаёт задачи в Notion из писем Gmail с определённой меткой и снимает метку после выполнения.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | по расписанию, событие в Notion |
| **Сервисы** | Gmail, Notion |
| **Узлов в схеме** | 13 |
| **Нужные учётные данные** | `gmailOAuth2`, `notionApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically creates Notion database pages for emails with a specific label, and removes the label when the task is completed in Notion.

Example: A user has a Gmail account and a Notion workspace. They want to create a workflow that automatically creates Notion pages for emails that are labeled "Notion". When the task is completed in Notion, the label is removed from the email. This allows the user to easily track and manage their email-related tasks in Notion.

## What You Can Do
- Automatically creates Notion database pages for emails with a specific label
- Removes the label from the email when the task is completed in Notion
- Checks if the email already exists in the Notion database before creating a new page

</details>
