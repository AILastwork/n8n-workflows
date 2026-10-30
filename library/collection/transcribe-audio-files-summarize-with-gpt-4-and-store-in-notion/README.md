# Whisper Transkription copy

> Транскрибирует аудио из Google Drive через Whisper, делает саммари и сохраняет в Notion.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Google Drive |
| **Сервисы** | Google Drive, Notion, OpenAI |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `notionApi`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Trigger and Download of audio file

In this example I'm using Google Drive. 
As soon as a audio file is uploaded the trigger will start and download the audio file.

## Send to OpenAI for Transcription and Summary

After we have the file, we send it to OpenAI for transciption and sending that transcipt to OpenAI to get a summary and some additional information

## Sending to Notion

We now send the summary to a new Notion page.

</details>
