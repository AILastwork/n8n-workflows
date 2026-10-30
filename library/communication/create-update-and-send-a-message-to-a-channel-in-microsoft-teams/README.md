# Create update and send a message to a channel in microsoft teams

> Создаёт канал в Microsoft Teams, переименовывает и отправляет в него сообщение.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Microsoft Teams |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | `microsoftTeamsOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automates the process of creating a new Microsoft Teams channel, updating its name, and sending a message to the channel.

Example: A team manager could use this workflow to quickly set up a new channel for a project, update the channel name, and notify the team about the new channel, all with a single click.

## What You Can Do
- Triggered by a manual click to execute the workflow
- Automatically creates a new Microsoft Teams channel
- Updates the name of the newly created channel
- Sends a message to the new channel

</details>
