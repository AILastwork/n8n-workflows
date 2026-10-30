# Send a file from s3 to aws textract

> Отправляет файл из S3 в AWS Textract для распознавания текста.

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | AWS S3, AWS Textract |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | `aws` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow extracts text and data from an image file stored in an AWS S3 bucket using the AWS Textract service.

Example: A user might use this workflow to automatically extract information from invoices or other documents stored in an S3 bucket, which could be useful for automating data entry, document processing, or other business processes.

## What You Can Do
- Triggers the workflow when the user manually executes it
- Retrieves an image file from an AWS S3 bucket
- Sends the image file to the AWS Textract service to extract text and data

</details>
