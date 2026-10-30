# Generate Instagram Content from Top Trends with AI Image Generation

> Генерирует контент для Instagram по трендам: ИИ создаёт картинку и подпись, одобрение в Telegram, публикация.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Facebook/Instagram, OpenAI, PostgreSQL, Telegram |
| **Узлов в схеме** | 27 |
| **Нужные учётные данные** | `facebookGraphApi`, `openAiApi`, `postgres`, `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## All Credentials You Need
** Instagram Business Account Id
** Telegram Chat Id
** Rapid Api Key
** Replicate Token

## Schedule Your Time To Post

## Guide 
** [Guide](https://docs.matillion.com/metl/docs/6957316//) of getting of Instagram Business Account Id

## Guide 
** [Guide](https://rapidapi.com/i-yqerddkq0t/api/telegram92/tutorials/how-to-get-the-id-of-a-telegram-channel,-chat,-user-or-bot%3F) of Getting of Telegram Chat Id

## Guide 
** [Guide](https://docs.rapidapi.com/docs/keys-and-key-rotation) of Getting of Rapid Api Key

## Warning
**Don't forgot the create bot and send a message to bot first

## Getting Top Trend Posts On Instagram
** Change the topic you want to get on http request

## Looping Data And Checking For Is Exist On Database
**We are checking until find a data we did not insert because we don't want to create content about in same content

## Analyze Post Content
** We are analyzing the image
** We are generating a instagram caption by content
** Then we are generating the image

## Publish On Instagram And Send Message When Published via Telegram

## For More About Api
** [Facebook Scraper Api Guide](https://rapidapi.com/social-api1-instagram/api/instagram-scraper-api2/playground/apiendpoint_a45552b2-9850-4da9-b5cb-bbdd3ac2199d)

## Guide 
** [Guide](https://replicate.com) of getting of Replicate Token

## For top_trends Table
```
CREATE TABLE top_trends (
 id SERIAL PRIMARY KEY,
 isposted BOOLEAN DEFAULT false,
 createdat TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
 updatedat TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
 deletedat TIMESTAMP WITHOUT TIME ZONE,
 prompt TEXT NOT NULL,
 thumbnail_url TEXT,
 code TEXT,
 tag TEXT
);
```

## Warning
** Don't forgot the create top_trends table

## Automated Instagram Content Creation from Trending Posts

This workflow automates the process of discovering and recreating trending content on Instagram:

1. Content Discovery:
 - Scrapes top trending posts from specific hashtags (#blender3d, #isometric)
 - Filters for image-only content (excludes videos)
 - Checks database to avoid duplicate content

2. AI-Powered Content Generation:
 - Analyzes trending images using GPT-4 Vision
 - Generates detailed descriptions of visual elements
 - Creates engaging Instagram captions with relevant hashtags
 - Uses Flux AI to generate similar but unique images

3. Publishing & Monitoring:
 - Automatically posts content to Instagram Business Account
 - Monitors post status and publishing process
 - Sends status updates via Telegram

Perfect for content creators and businesses looking to maintain an active Instagram presence with AI-generated content inspired by current trends. The workflow runs on schedule and handles everything from content discovery to publication automatically.

Note: Requires Instagram Business Account, Telegram Bot, OpenAI, and Replicate API credentials.

##Warning
** Dont forgot the subscribe [Instagram Scraper Api](https://rapidapi.com/social-api1-instagram/api/instagram-scraper-api2/playground/apiendpoint_a45552b2-9850-4da9-b5cb-bbdd3ac2199d)

## Warning
** You can check the [rate limit](https://rapidapi.com/social-api1-instagram/api/instagram-scraper-api2) of the Instagram Scraper Api on Rapid Api
** Free version is monthly 500 request

</details>
