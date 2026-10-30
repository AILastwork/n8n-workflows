# Save n8n cloud invoices received in gmail in google drive

> Сохраняет счета n8n Cloud (Paddle) из Gmail в Google Drive.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | событие в Gmail |
| **Сервисы** | Gmail, Google Drive |
| **Узлов в схеме** | 11 |
| **Нужные учётные данные** | `gmailOAuth2`, `googleDriveOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically downloads and saves Paddle invoice PDFs to a specified Google Drive folder, helping users efficiently manage their invoices.

Example: A small business owner who uses Paddle for their online payments can set up this workflow to automatically download and save their Paddle invoices to a designated Google Drive folder, making it easy to access and organize their financial records.

## What You Can Do
- Automatically triggers on new emails from the "help@paddle.com" address that contain the phrase "Your invoice"
- Extracts the invoice PDF download link from the email and uses it to download the PDF
- Renames the downloaded PDF file and moves it to a specified Google Drive folder for easy access and organization

</details>
