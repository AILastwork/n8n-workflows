# Backup n8n workflows to google drive

> Бэкапит все воркфлоу n8n в JSON-файлы на Google Drive.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную, по расписанию |
| **Сервисы** | Google Drive |
| **Узлов в схеме** | 9 |
| **Нужные учётные данные** | `googleApi`, `httpBasicAuth` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically retrieves a list of workflows from an n8n instance, downloads the details of each workflow, and uploads the workflow data as JSON files to a specified Google Drive folder.

Example: A user who manages multiple n8n workflows might use this workflow to regularly backup their workflow configurations to a secure Google Drive folder. This ensures that the workflows can be easily restored or shared if needed.

## What You Can Do
- Scheduled daily execution at 2:30 AM to automatically backup workflows
- Ability to manually trigger the workflow for on-demand backups
- Uploads workflow data as JSON files to a specified Google Drive folder

</details>
