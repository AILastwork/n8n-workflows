# Compress binary files to zip format

> Скачивает картинки, упаковывает в ZIP и загружает в Dropbox.

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Dropbox |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | `dropboxApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automates the process of downloading images, compressing them into a ZIP file, and uploading the compressed file to Dropbox, providing a convenient way to backup and share visual assets.

Example: A marketing team could use this workflow to regularly backup their product images and graphics to Dropbox, ensuring the files are securely stored and easily accessible for future use in campaigns or presentations.

## What You Can Do
- Automated image download and compression
- Seamless integration with Dropbox for file storage
- Triggered manually, allowing users to run the workflow on-demand

</details>
