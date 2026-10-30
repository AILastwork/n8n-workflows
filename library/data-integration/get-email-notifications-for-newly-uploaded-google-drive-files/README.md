# Get email notifications for newly uploaded google drive files

> Присылает письмо, когда в папке Google Drive появляется новый файл.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | событие в Google Drive |
| **Сервисы** | Google Drive |
| **Узлов в схеме** | 2 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `smtp` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically sends an email notification whenever a new file is created in a specific Google Drive folder.

Example: A marketing team uses this workflow to stay informed about new content being added to their shared Google Drive folder. Whenever a team member uploads a new file, the workflow triggers and sends an email to the team, allowing them to quickly review and act on the new content.

## What You Can Do
- Monitors a specific Google Drive folder for new file creation
- Sends an email notification with details about the new file
- Configurable email settings, including recipient, subject, and message content

</details>
