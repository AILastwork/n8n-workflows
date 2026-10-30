# Working with excel spreadsheet files xls xlsx

> Работа с Excel-файлами (XLS/XLSX) из разных источников: FTP, Google Drive, OneDrive.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | FTP, Google Drive, OneDrive |
| **Узлов в схеме** | 12 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `microsoftOneDriveOAuth2Api`, `sftp` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow allows users to load spreadsheet files from various sources, manipulate the data, and optionally save or upload the modified file to local or cloud storage platforms.

Example: A business analyst needs to analyze customer data stored in an Excel file. They can use this workflow to fetch the file from a cloud storage service like Google Drive or Microsoft OneDrive, perform data transformations, and then save the updated file back to the cloud or a local server.

## What You Can Do
- Supports loading spreadsheet files from various sources, including public URLs, local file systems, and cloud storage platforms
- Provides the ability to manipulate and transform the spreadsheet data using built-in nodes
- Offers options to save the modified file locally or upload it to cloud storage services like Google Drive and Microsoft OneDrive, as well as FTP/SFTP servers

</details>
