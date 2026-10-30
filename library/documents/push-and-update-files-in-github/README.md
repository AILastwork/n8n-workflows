# Push and update files in github

> Изменяет файлы в GitHub-репозитории и пушит изменения.

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Git, GitHub |
| **Узлов в схеме** | 10 |
| **Нужные учётные данные** | `gitPassword`, `githubOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automates the process of updating a file in a GitHub repository and adding a new file, then pushing the changes back to the remote repository.

Example: A developer or content creator can use this workflow to quickly update the README file in a GitHub repository and add a new Markdown file, all without leaving the n8n interface. This can be useful for making small updates or additions to a project's documentation.

## What You Can Do
- Retrieves the current contents of the README file from the GitHub repository
- Appends new content to the README file and creates a new Markdown file
- Commits the changes and pushes them back to the remote GitHub repository
- Provides a user-friendly interface for configuring the local repository path

</details>
