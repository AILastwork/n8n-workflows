# Receive messages from a queue via rabbitmq and send an sms

> Читает сообщения из очереди RabbitMQ и отправляет SMS через Vonage, если температура выше порога.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | событие в RabbitMQ |
| **Сервисы** | RabbitMQ, Vonage |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | `rabbitmq`, `vonageApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow monitors a RabbitMQ queue, checks if the value of the "temp" parameter exceeds 50, and sends an alert via Vonage if the condition is met.

Example: This workflow could be used to monitor a temperature sensor that sends data to a RabbitMQ queue. If the temperature exceeds a certain threshold (in this case, 50 degrees), the workflow will send an alert to a designated phone number, allowing the user to take immediate action.

## What You Can Do
- Triggers on new messages in a RabbitMQ queue
- Checks the value of a specific parameter ("temp") against a predefined threshold
- Sends an alert via Vonage if the condition is met
- Provides a "no-op" node for cases where the condition is not met

</details>
