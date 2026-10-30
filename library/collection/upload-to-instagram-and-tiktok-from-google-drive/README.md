# Template in store

> Загружаете видео в папку Google Drive — ИИ пишет описание и публикует в Instagram и TikTok.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | ошибка в другом воркфлоу, событие в Google Drive |
| **Сервисы** | Google Drive, OpenAI, Telegram |
| **Узлов в схеме** | 12 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `httpHeaderAuth`, `openAiApi`, `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Description
This automation allows you to upload a video to a configured Google Drive folder, and it will automatically create descriptions and upload it to Instagram and TikTok.

## How to Use
1. Generate an API token at upload-post.com and add to Upload to Tiktok and Upload to Instagram nodes
2. Configure your Google Drive folder
3. Customize the OpenAI prompt for your specific use case
4. Optional: Configure Telegram for error notifications

## Requirements
- upload-post.com account
- Google Drive account
- OpenAI API key

</details>
