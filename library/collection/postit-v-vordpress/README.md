# ✍️🌄 Your First Wordpress Content Creator - Quick Start

> Быстрый старт ИИ-копирайтера для WordPress: пишет статью, упрощает язык, сохраняет черновик в Google Drive и публикует; управление через Telegram.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Google Drive, OpenAI, Telegram, WordPress |
| **Узлов в схеме** | 28 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `openAiApi`, `telegramApi`, `wordpressApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Create Blog Post
Refer to this workflow for help getting setup with DeepSeek
https://n8n.io/workflows/2777-deepseek-v3-chat-and-r1-reasoning-quick-start/

## Save Draft Blog Post to Google Drive

## Rewrite for Grade 9 Reading Level 
Update Agent prompt as required

## Rewrite for Grade 5 Reading Level 
Update Agent prompt as required

## Rewrite for Grade 2 Reading Level 
Update Agent prompt as required

## Create Wordpress Post and Add New Image
https://docs.n8n.io/integrations/builtin/credentials/wordpress/

## Create Post Image
https://pollinations.ai/
https://image.pollinations.ai/prompt/[your image description]

## Alternative Workflows for Various Reading Levels

## 🌟 Set Blog Topic

## 👍 Start Here

# ✍️🌄 WordPress + AI Content Creator

This workflow automates the creation and publishing of multi-reading-level content for WordPress blogs. It leverages AI to generate optimized articles, automatically creates featured images, and provides versions of the content at different reading levels (Grade 2, 5, and 9).

## How It Works

### Content Generation & Processing 🎯
- Starts with a manual trigger and a user-defined blog topic
- Uses AI to create a structured blog post with proper HTML formatting
- Separates and validates the title and content components
- Saves a draft version to Google Drive for backup

### Multi-Reading Level Versions 📚
Automatically rewrites the content for different reading levels:
- Grade 9: Sophisticated language with appropriate metaphors
- Grade 5: Simplified with light humor and age-appropriate examples
- Grade 2: Basic language with simple metaphors and child-friendly explanations

### WordPress Integration 🌐
- Creates a draft post in WordPress with the Grade 9 version
- Generates a relevant featured image using Pollinations.ai
- Automatically uploads and sets the featured image
- Sends success/error notifications via Telegram

## Setup Steps

### Configure API Credentials 🔑
- Set up WordPress API connection
- Configure OpenAI API access
- Set up Google Drive integration
- Add Telegram bot credentials for notifications

### Customize Content Parameters ⚙️
- Adjust reading level prompts as needed
- Modify image generation settings
- Set WordPress post parameters

### Test and Deploy 🚀
- Run a test with a sample topic
- Verify all reading level versions
- Check WordPress draft creation
- Confirm notification system


This workflow is perfect for content creators who need to maintain a consistent blog presence while catering to different audience reading levels. It's especially useful for educational content, news sites, or any platform that needs to communicate complex topics to diverse audiences.

</details>
