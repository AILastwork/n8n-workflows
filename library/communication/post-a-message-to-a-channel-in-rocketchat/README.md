# Post a message to a channel in rocketchat

> Отправляет сообщение в канал Rocket.Chat.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Rocketchat |
| **Узлов в схеме** | 2 |
| **Нужные учётные данные** | `rocketchatApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow allows users to manually trigger a message to be sent to a Rocket.Chat channel.

Example: A team member can use this workflow to quickly send an important update or announcement to the entire team in the company's Rocket.Chat channel.

## What You Can Do
- Manually triggered workflow for sending messages
- Ability to send messages to specific Rocket.Chat channels
- Customizable message content

</details>
