# Receive messages from a topic via kafka and send an sms

> Читает сообщения из топика Kafka и отправляет SMS через Vonage, если температура выше порога.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | событие в Kafka |
| **Сервисы** | Kafka, Vonage |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | `kafka`, `vonageApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow monitors a Kafka topic, checks if the temperature value exceeds a threshold, and sends a notification via the Vonage API if the condition is met.

Example: This workflow could be used in an IoT application that monitors environmental sensors. When the temperature value from a sensor exceeds a predefined threshold, the workflow triggers a notification to alert the user or system administrator.

## What You Can Do
- Kafka trigger to monitor a specific topic for incoming messages
- Conditional logic to check if the temperature value is above a set threshold
- Vonage API integration to send a notification message when the condition is met

</details>
