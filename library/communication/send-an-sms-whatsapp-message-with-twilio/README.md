# Send an sms whatsapp message with twilio

> Отправляет SMS или сообщение WhatsApp через Twilio.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Twilio |
| **Узлов в схеме** | 2 |
| **Нужные учётные данные** | `twilioApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow allows users to trigger a Twilio SMS message by manually executing the workflow.

Example: A small business owner could use this workflow to quickly send a promotional SMS message to their customer list with a special offer or announcement.

## What You Can Do
- Triggered by a manual execution, allowing for on-demand messaging
- Integrates with the Twilio API to send SMS messages
- Provides a simple, straightforward way to communicate with customers or contacts

</details>
