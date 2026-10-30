# Protect pdf with the password using convertapi

> Ставит пароль на PDF через ConvertAPI и сохраняет на диск и в Google Drive.

| | |
|---|---|
| **Категория** | [🔄 Преобразование данных](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Google Drive |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `httpQueryAuth` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow allows users to download a PDF file, protect it with a password, and save the protected file to their local disk and Google Drive.

Example: A user might use this workflow to securely share a sensitive PDF document with colleagues or clients. They can download the file, add a password to protect it, and then save the protected file to their Google Drive for easy sharing.

## What You Can Do
- Automatically downloads a PDF file from a specified URL
- Adds a password protection to the PDF file using the ConvertAPI service
- Saves the protected PDF file to the user's local disk and Google Drive for easy access and sharing

</details>
