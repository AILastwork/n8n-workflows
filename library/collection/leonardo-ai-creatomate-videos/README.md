# Leonardo AI & Creatomate Videos

> Генерирует короткие видео: сценарий (OpenAI), картинки (Leonardo AI), сборка (Creatomate), публикация на YouTube и в соцсети.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Facebook/Instagram, OpenAI, Telegram, YouTube |
| **Узлов в схеме** | 35 |
| **Нужные учётные данные** | `facebookGraphApi`, `httpHeaderAuth`, `openAiApi`, `youTubeOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# Video Script
1. Please set the trigger frequency, by default it generates 1 short video per day
2. Fill in the system prompt in the AI agent about the video ideas you have and how many scenarios you would like to have in your video. Each scenario corresponds to a image. 
3. Choose the LLM models for video script generation. By default DeepSeek V3 is used.

# Image generation
1. Link your Leonardo AI credential
2. define the models you would like to use for image generation: https://docs.leonardo.ai/reference/listplatformmodels 
3. define the height-weight if your video. The default value is 720:1280 (short)
4. In the prompt, describe the image style that you would like in your video
5. [Automatic] once the image is generate, the image URL link is grabbed.

# Video Editing
1. Link your creatomate credentail
2. Add your Elevenlabs API to creatonate (inside project setting) 
3. Create a new empty AI generator story template in creatomate (change image source to URL)
4. In the template, click ''use template'' and copy all the CURL inside "Cre-generate video 1" node
5. Just drag and drop the image URL and scenario text to the json body in 'Cre-generate video 1" node
6. And now you are ready to go!

## Optional: send video link to telegram and upload to youtube

</details>
