# Download and compress folder from s3 to zip file

> Скачивает все файлы папки из AWS S3 и упаковывает их в ZIP.

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | AWS S3 |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow downloads all files from a specific folder in an AWS S3 bucket, compresses them into a ZIP file, and makes the compressed file available for download.

Example: A marketing team needs to share a large number of files with a client, but the files are stored in an S3 bucket. This workflow allows them to easily download all the files in a compressed format, which can then be shared with the client.

## What You Can Do
- Automatically downloads all files from a specified folder in an S3 bucket
- Compresses the downloaded files into a single ZIP file
- Provides the compressed file for easy download or further processing

</details>
