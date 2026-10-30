# Manage files in s3

> Работа с файлами в S3: загрузка картинки и получение списка файлов.

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | S3 |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | `s3` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow downloads an image from a URL, uploads it to an S3 bucket, and then retrieves a list of all files in the same S3 bucket.

Example: A user might use this workflow to automatically download a company logo from a website, store it in an S3 bucket for easy access, and then view a list of all files in the bucket for further management or processing.

## What You Can Do
- Triggered manually by the user
- Fetches an image from a specified URL
- Uploads the image to an S3 bucket
- Retrieves a list of all files in the same S3 bucket

</details>
