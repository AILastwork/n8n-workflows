# Create a channel add a member and post a message to the channel on mattermost

> Создаёт канал в Mattermost, добавляет участника и публикует сообщение.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Mattermost |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | `mattermostApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automates the process of adding a user to a Mattermost channel and sending a welcome message to the channel.

Example: A team lead can use this workflow to quickly onboard new team members by adding them to a designated Mattermost channel and sending a welcome message to the entire team.

## What You Can Do
- Triggered by a manual execution
- Adds a user to a specified Mattermost channel
- Sends a welcome message to the channel

</details>
