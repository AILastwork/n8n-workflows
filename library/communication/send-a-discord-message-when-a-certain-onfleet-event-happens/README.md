# Send a discord message when a certain onfleet event happens

> Отправляет сообщение в Discord при событии в Onfleet (например, старт доставки).

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | событие в Onfleet |
| **Сервисы** | Discord, Onfleet |
| **Узлов в схеме** | 2 |
| **Нужные учётные данные** | `onfleetApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically sends a notification to a Discord channel whenever a task is started in Onfleet, a delivery management platform.

Example: A logistics company using Onfleet to manage their delivery operations can set up this workflow to keep their team informed in real-time about the status of deliveries. Whenever a driver starts a new delivery task in Onfleet, the workflow will instantly send a message to a designated Discord channel, allowing the team to stay up-to-date and coordinate their efforts.

## What You Can Do
- Triggers on task start events in Onfleet
- Sends notifications to a specified Discord channel
- Provides real-time visibility into delivery operations

</details>
