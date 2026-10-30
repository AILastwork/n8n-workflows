# Sync your github issues to your notion database

> Синхронизирует GitHub-issue с базой Notion (создание, изменение, закрытие).

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | событие в GitHub |
| **Сервисы** | GitHub, Notion |
| **Узлов в схеме** | 10 |
| **Нужные учётные данные** | `githubApi`, `notionApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically manages GitHub issues by creating, updating, deleting, closing, and reopening Notion database pages based on the actions taken on the issues.

Example: A software development team uses this workflow to track and manage their GitHub issues in a Notion database. Whenever a new issue is opened in GitHub, a corresponding database page is created in Notion. If the issue is edited, deleted, closed, or reopened, the workflow updates the Notion database page accordingly.

## What You Can Do
- Automatically creates Notion database pages for new GitHub issues
- Updates Notion database pages when GitHub issues are edited, deleted, closed, or reopened
- Provides a centralized view of all GitHub issues in a Notion database

</details>
