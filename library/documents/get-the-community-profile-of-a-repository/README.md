# Get the community profile of a repository

> Получает профиль сообщества GitHub-репозитория (README, лицензия, правила и т. п.).

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | GitHub |
| **Узлов в схеме** | 2 |
| **Нужные учётные данные** | `githubApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow allows users to retrieve information about the n8n GitHub repository with a single click.

Example: A developer or project manager might use this workflow to quickly check the latest details about the n8n open-source project, such as the repository owner, description, and other key information, without having to manually navigate to the GitHub website.

## What You Can Do
- Triggered by a manual click, providing on-demand access to GitHub repository data
- Retrieves information about the specified GitHub repository (in this case, the n8n repository)
- Integrates with the GitHub API to fetch the requested data

</details>
