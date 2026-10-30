# Send google drive files to notion database

> Создаёт страницу в базе Notion для каждого нового файла в папке Google Drive.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | событие в Google Drive |
| **Сервисы** | Google Drive, Notion |
| **Узлов в схеме** | 2 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `notionApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically creates a new Notion database page whenever a file is uploaded to a specific Google Drive folder, providing a seamless way to organize and track file uploads.

Example: A marketing team could use this workflow to automatically create a Notion database page every time a new design file is uploaded to their Google Drive folder. This would help them keep track of all the design assets and associated metadata in a centralized location.

## What You Can Do
- Triggers on file uploads to a specific Google Drive folder
- Automatically creates a new Notion database page with the file name and a link to the file
- Provides a centralized location to manage and track uploaded files

</details>
