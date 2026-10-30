# Download a file and upload it to an ftp server

> Скачивает файл и загружает его на FTP-сервер.

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | FTP |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | `ftp` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automates the process of downloading an image from a URL, uploading it to an FTP server, and then listing the contents of the upload directory on the FTP server.

Example: A user might use this workflow to regularly upload a company logo or other important image to an FTP server for easy access and distribution. The workflow can be triggered manually, allowing the user to upload the image on-demand.

## What You Can Do
- Automatic download of an image from a specified URL
- Seamless upload of the downloaded image to an FTP server
- Listing of the contents of the FTP server's upload directory for verification

</details>
