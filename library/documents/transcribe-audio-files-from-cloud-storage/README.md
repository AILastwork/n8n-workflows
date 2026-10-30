# Transcribe audio files from cloud storage

> Транскрибирует аудио из Google Drive через AWS Transcribe, сохраняет текст в S3 и записывает данные в Google Sheets.

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
| **Запуск** | событие в Google Drive |
| **Сервисы** | AWS S3, AWS Transcribe, Google Drive, Google Sheets |
| **Узлов в схеме** | 8 |
| **Нужные учётные данные** | `aws`, `googleDriveOAuth2Api`, `googleSheetsOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically transcribes audio files uploaded to a Google Drive folder, stores the transcripts in an AWS S3 bucket, and appends the transcription details to a Google Sheet.

Example: A marketing team could use this workflow to automatically transcribe audio recordings of customer interviews, store the transcripts securely, and track the transcription details in a centralized spreadsheet for analysis.

## What You Can Do
- Automatically triggers on new file creation in a specified Google Drive folder
- Uploads the audio files to an AWS S3 bucket and triggers AWS Transcribe to generate transcripts
- Stores the transcription details (date, file name, transcript) in a Google Sheet
- Provides a centralized repository for audio transcripts and associated metadata

</details>
