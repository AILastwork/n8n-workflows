# Generate Text-to-Speech Using Elevenlabs via API

> API-эндпоинт для озвучки текста через ElevenLabs.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | `httpCustomAuth` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Generate Text-to-Speech Using Elevenlabs via API
This workflow provides an API endpoint to generate speech from text using [Elevenlabs.io](https://elevenlabs.io/), a popular text-to-speech service.

### Step 1: Configure Custom Credentials in n8n
To set up your credentials in n8n, create a new custom authentication entry with the following JSON structure:
```json
{
 "headers": {
 "xi-api-key": "your-elevenlabs-api-key"
 }
}
```
Replace `"your-elevenlabs-api-key"` with your actual Elevenlabs API key.

### Step 2: Send a POST Request to the Webhook
Send a POST request to the workflow's webhook endpoint with these two parameters:
- `voice_id`: The ID of the voice from Elevenlabs that you want to use.
- `text`: The text you want to convert to speech.

This workflow has been a significant time-saver in my video production tasks. I hope it proves just as useful to you!

Happy automating! 
The n8Ninja

</details>
