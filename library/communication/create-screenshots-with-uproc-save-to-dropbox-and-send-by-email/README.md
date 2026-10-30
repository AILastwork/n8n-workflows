# Create screenshots with uproc save to dropbox and send by email

> Делает скриншоты сайтов через uProc, сохраняет в Dropbox и отправляет на почту (AWS SES).

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | AWS SES, Dropbox, uProc |
| **Узлов в схеме** | 10 |
| **Нужные учётные данные** | `aws`, `dropboxApi`, `uprocApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow generates website screenshots, uploads them to Dropbox, and sends an email with the screenshots to a specified email address.

Example: A marketing team could use this workflow to quickly capture screenshots of a client's website and send them to the client for review, without the need for manual screenshot capture and email sending.

## What You Can Do
- Automatically captures a full-page screenshot and a standard screenshot of a website
- Uploads the screenshots to a Dropbox folder
- Sends an email with the screenshots to a specified email address

</details>
