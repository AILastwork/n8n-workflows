# Send onfleet driver signup messages in slack

> Сообщает в Slack о регистрации нового водителя в Onfleet.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | событие в Onfleet |
| **Сервисы** | Onfleet, Slack |
| **Узлов в схеме** | 2 |
| **Нужные учётные данные** | `onfleetApi`, `slackApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically sends a notification to a Slack channel whenever a new driver is created in the Onfleet platform, enabling efficient team communication and onboarding.

Example: A logistics company using Onfleet to manage their delivery drivers can set up this workflow to instantly notify their operations team in Slack whenever a new driver is added to the system. This allows the team to quickly welcome the new driver, provide any necessary onboarding information, and ensure a smooth integration into the company's operations.

## What You Can Do
- Triggers on the creation of a new driver in Onfleet
- Sends a customizable message to a designated Slack channel
- Provides real-time visibility into new driver signups for the operations team

</details>
