# Send specific pdf attachments from gmail to google drive using openai

> Анализирует PDF-вложения Gmail через OpenAI и загружает нужные (например, счета) в Google Drive.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | событие в Gmail |
| **Сервисы** | Gmail, Google Drive, OpenAI |
| **Узлов в схеме** | 16 |
| **Нужные учётные данные** | `gmailOAuth2`, `googleDriveOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically processes email attachments, analyzes their content using OpenAI, and uploads relevant PDFs to a specified Google Drive folder.

Example: A small business owner receives invoices and other financial documents via email. This workflow can be set up to automatically detect and upload relevant PDF attachments (e.g., invoices) to a designated Google Drive folder for easy organization and access.

## What You Can Do
- Automatically processes email attachments and filters out non-PDF files
- Uses OpenAI to analyze the textual content of PDF attachments and determine if they match a specified search term (e.g., "invoice")
- Uploads matched PDF attachments to a designated Google Drive folder for easy access and organization

</details>
