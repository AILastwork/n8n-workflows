# Send a message via a lark bot

> Отправляет сообщение через бота Lark (Feishu).

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | `httpHeaderAuth` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow allows users to send a message to a specific Lark chat using a predefined message content and chat ID.

Example: A marketing team could use this workflow to quickly send a message with a link to their company's website to a specific Lark chat, such as a sales team or customer support group, without having to manually compose and send the message.

## What You Can Do
- Retrieves a Lark access token using predefined app ID and secret
- Allows users to specify the chat ID and message content
- Sends the message to the specified Lark chat using the retrieved access token

</details>
