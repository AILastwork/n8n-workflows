# Database alerts with notion and signl4

> Следит за базой оповещений в Notion: новые отправляет в SIGNL4, закрытые закрывает.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вебхук, по расписанию, событие в Notion |
| **Сервисы** | Notion, Signl4 |
| **Узлов в схеме** | 13 |
| **Нужные учётные данные** | `notionApi`, `signl4Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically monitors and updates the status of alerts in a Notion database, sending notifications to SIGNL4 for new alerts and resolving closed alerts.

Example: A manufacturing company uses this workflow to track equipment malfunctions and maintenance issues. Whenever a new alert is triggered, the workflow sends a notification to the on-call team via SIGNL4. As the issue is acknowledged, resolved, or annotated, the workflow updates the Notion database and sends further notifications. This allows the team to stay informed and respond quickly to address the problem.

## What You Can Do
- Automatic monitoring and status updates for alerts in a Notion database
- Integration with SIGNL4 for real-time notifications and alert resolution
- Customizable logic to categorize alert types (new, acknowledged, closed, etc.) and update the Notion database accordingly

</details>
