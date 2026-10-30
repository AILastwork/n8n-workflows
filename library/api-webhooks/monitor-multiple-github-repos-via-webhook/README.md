# Monitor multiple github repos via webhook

> Следит за несколькими GitHub-репозиториями через вебхук и присылает уведомления о новых коммитах в Slack или Telegram.

| | |
|---|---|
| **Категория** | [🌐 API и вебхуки](../README.md) |
| **Запуск** | вебхук, вручную |
| **Сервисы** | Slack, Telegram |
| **Узлов в схеме** | 13 |
| **Нужные учётные данные** | `httpHeaderAuth`, `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow allows you to monitor multiple GitHub repositories for changes and receive notifications when new commits are pushed.

Example: A software development team can use this workflow to stay up-to-date on the latest changes across their codebase. Whenever a team member commits to any of the monitored repositories, the workflow will automatically send notifications to the team's Slack or Telegram channels, providing details about the commit, such as the author, modified files, and commit message.

## What You Can Do
- Ability to easily add or remove repositories to the monitoring list
- Automatic registration and deletion of GitHub webhooks to monitor repository changes
- Customizable notification messages with details about the commit
- Support for sending notifications to Slack, Telegram, or other communication channels

</details>
