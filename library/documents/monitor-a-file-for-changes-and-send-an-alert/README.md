# Monitor a file for changes and send an alert

> Следит за файлом и отправляет оповещение в SIGNL4 при изменениях.

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Signl4 |
| **Узлов в схеме** | 9 |
| **Нужные учётные данные** | `signl4Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically monitors and resolves alerts by reading and writing binary data, integrating with the SIGNL4 incident management platform.

Example: A company that operates critical infrastructure could use this workflow to automatically detect and respond to system alerts. The workflow would periodically check for new alert data, send notifications to the SIGNL4 platform, and then mark the alerts as resolved once the issue has been addressed.

## What You Can Do
- Scheduled monitoring of alert data using a Cron trigger
- Seamless integration with the SIGNL4 incident management platform for alert notifications and resolution
- Efficient data handling with binary file read/write and JSON conversion

</details>
