# Create Social Media Written Content

> Генерирует тексты для соцсетей (LinkedIn, Instagram, Facebook, X и др.) с одобрением перед публикацией.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | форма n8n |
| **Сервисы** | Facebook/Instagram, Gmail, Google Drive, Google Gemini, LinkedIn, OpenAI, SerpAPI, X (Twitter) |
| **Узлов в схеме** | 38 |
| **Нужные учётные данные** | `facebookGraphApi`, `gmailOAuth2`, `googleDriveOAuth2Api`, `linkedInOAuth2Api`, `openAiApi`, `serpApi`, `twitterOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# 🧑‍🦱 User Input for Social Media Posts 
💡 Unpin default data to get started

# 🛠️ Social Media Content Factory
- LinkedIn
- Instagram
- Facebook
- X
- TikTok
- Threads
- YouTube Shorts

# 👍 Approve Content Before Proceeding

# ✉️ Prepare & Format Approval Email

## Create Post Image
https://pollinations.ai/
https://image.pollinations.ai/prompt/[your image description]

(alternative)

## Publish to Social Media

## Format Results

# Step 4️⃣: Send Final Results of Social Media Factory

## Create Post Image

## Final Approval before Publishing to Social Feeds
(optional)

# Step 1️⃣: Create Social Media Written Content
Note:  
You could use the output of step 1 to create your written content and manually post if required.  
You so not have to implement step 2.

# Step 2️⃣: Create Image or Upload Image for Social Post

# Step 3️⃣: Publish Final Social Media Posts

## Alternative User Uploaded Image
(optional)

## Implement Additional Approval Here
(optional)

### 💡Notes

Adjust the Social Media Content Factory prompts to suit your personal or business requirements.

Update Credentials for:
- OpenAI API Key
https://auth.openai.com/log-in

- Google Studio API
https://aistudio.google.com/app/apikey

- SERP API Key
https://serpapi.com/

- Gmail OAuth
https://docs.n8n.io/integrations/builtin/credentials/google/

- Telegram Bot (Optional)
https://docs.n8n.io/integrations/builtin/credentials/telegram/

- imgbb
https://imgbb.com/

💡Notes

Update all Social Media Platform Credentials as required.

Adjust parameters and content for each platform to suit your needs.

</details>
