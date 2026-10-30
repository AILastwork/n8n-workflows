# Sync data between google drive and aws s3

> Загружает обновлённые файлы из папки Google Drive в AWS S3.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | событие в Google Drive |
| **Сервисы** | AWS S3, Google Drive |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | `aws`, `googleDriveOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically uploads files updated in a specific Google Drive folder to an AWS S3 bucket, with additional metadata tags.

Example: A marketing team could use this workflow to automatically back up and archive all updated files in their Google Drive content library to a secure AWS S3 storage, making it easy to access and manage their digital assets.

## What You Can Do
- Triggers on file updates in a specific Google Drive folder
- Merges data from the Google Drive trigger and AWS S3 get operations
- Uploads the updated files to an AWS S3 bucket with custom metadata tags

</details>
