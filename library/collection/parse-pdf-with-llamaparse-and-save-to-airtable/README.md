# Parse PDF with LlamaParse and save to Airtable

> Разбирает PDF через LlamaParse и сохраняет результат в Airtable.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук, событие в Google Drive |
| **Сервисы** | Airtable, Google Drive |
| **Узлов в схеме** | 9 |
| **Нужные учётные данные** | `airtableTokenApi`, `googleDriveOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Scenario 1

## Scenario 2

### Replace Google Drive connection

### Replace API key in header

### Replace OpenAI connection

### Replace Airtable connection

### ... or watch set up video [7 min]
[![Youtube Thumbnail](https://cflobdhpqwnoisuctsoc.supabase.co/storage/v1/object/public/my_storage/Video%2010%20-%20Parser%20invoices%20Blur.png)](https://youtu.be/E4I0nru-fa8)

![5min Logo](https://cflobdhpqwnoisuctsoc.supabase.co/storage/v1/object/public/my_storage/banner.png)
## AI Agent for realtime insights on meetings
**Made by [Mark Shcherbakov](https://www.linkedin.com/in/marklowcoding/) from community [5minAI](https://www.skool.com/5minai)**

Transcribing meetings manually can be tedious and prone to error. This workflow automates the transcription process in real-time, ensuring that key discussions and decisions are accurately captured and easily accessible for later review, thus enhancing productivity and clarity in communications.

The workflow leverages n8n and LlamaParse to automatically detect new invoices in a designated Google Drive folder, parse essential billing details, and store the extracted data in a structured format. The key functionalities include:
- Real-time detection of new invoices via Google Drive triggers.
- Automated HTTP requests to initiate parsing through Lama Cloud.
- Structured storage of invoice details and line items in a database for future reference.

1. **Google Drive Integration**: Monitors a specific folder in Google Drive for new invoice uploads.
2. **Parsing with LlamaParse**: Automatically sends invoices for parsing and processes results through webhooks.
3. **Data Storage in Airtable**: Creates records for invoices and their associated line items, allowing for detailed tracking.

### Set up steps

1. **Google Drive Trigger**: 
 - Set up a trigger to detect new files in a specified folder dedicated to invoices.

2. **File Upload to LlamaParse**: 
 - Create an HTTP request that sends the invoice file to LlamaParse for parsing, including relevant header settings and webhook URL.

3. **Webhook Processing**: 
 - Establish a webhook node to handle parsed results from LlamaParse, extracting needed invoice details effectively.

4. **Invoice Record Creation**: 
 - Create initial records for invoices in your database using the parsed details received from the webhook.

5. **Line Item Processing**: 
 - Transform string data into structured line item arrays and create individual records for each item linked to the main invoice.

</details>
