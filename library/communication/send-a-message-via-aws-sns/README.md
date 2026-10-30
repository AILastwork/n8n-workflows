# Send a message via aws sns

> Отправляет сообщение через AWS SNS.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | AWS SNS |
| **Узлов в схеме** | 2 |
| **Нужные учётные данные** | `aws` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow allows users to trigger an AWS SNS (Simple Notification Service) message with a custom message and subject.

Example: A marketing team could use this workflow to quickly send out notifications to their subscribers whenever they have a new product launch or a special promotion.

## What You Can Do
- Triggered by a manual click, allowing for on-demand message sending
- Integrates with AWS SNS to send customized notifications
- Provides flexibility in crafting the message content and subject line

</details>
