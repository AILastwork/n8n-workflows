# Download a file from google drive

> Скачивает файл из Google Drive.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Google Drive |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | `googleApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow allows users to download a file from Google Drive and save it to a local file system.

Example: A user might use this workflow to download a PDF file from their Google Drive account and save it to their local computer for further processing or sharing.

## What You Can Do
- Triggered manually by the user clicking the "execute" button
- Integrates with Google Drive to download a specific file
- Saves the downloaded file to a specified location on the local file system

</details>
