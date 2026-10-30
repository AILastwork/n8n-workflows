# Sync zendesk tickets with subsequent comments to github issues

> Создаёт GitHub-issue из тикетов Zendesk и синхронизирует комментарии.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | GitHub, Zendesk |
| **Узлов в схеме** | 7 |
| **Нужные учётные данные** | `githubApi`, `zendeskApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically creates or updates a GitHub issue when a new Zendesk ticket is created, providing a seamless integration between customer support and development.

Example: A customer service agent receives a new support ticket in Zendesk. This workflow automatically creates a corresponding GitHub issue, or updates an existing one, with the ticket details, allowing the development team to quickly address the customer's issue.

## What You Can Do
- Triggers on new Zendesk tickets and creates or updates a GitHub issue accordingly
- Automatically adds the GitHub issue number to the Zendesk ticket, providing a clear link between the two systems
- Allows for commenting on existing GitHub issues, keeping all relevant information in one place

</details>
