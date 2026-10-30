# Extract insights & analyse YouTube comments via AI Agent chat

> ИИ-агент для анализа комментариев YouTube в чате: инсайты, расшифровки, анализ превью.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вызов из другого воркфлоу, чат |
| **Сервисы** | Memory Postgres Chat, OpenAI |
| **Узлов в схеме** | 22 |
| **Нужные учётные данные** | `httpQueryAuth`, `openAiApi`, `postgres` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### ... or watch set up video [13 min]
[![Youtube Thumbnail](https://cflobdhpqwnoisuctsoc.supabase.co/storage/v1/object/public/my_storage/Youtube%20AI%20Agent%20Blur.png)](https://youtu.be/6RmLZS8Yl4E)

![5min Logo](https://cflobdhpqwnoisuctsoc.supabase.co/storage/v1/object/public/my_storage/banner.png)
## AI Agent To Chat With Youtube
**Made by [Mark Shcherbakov](https://www.linkedin.com/in/marklowcoding/) from community [5minAI](https://www.skool.com/5minai)**

Navigating the content generation and optimization process can be complex, especially without significant audience insight. This workflow automates insights extraction from YouTube videos and comments, empowering users to create more engaging and relevant content effectively.

The workflow integrates various APIs to gather insights from YouTube videos, enabling automated commentary analysis, video transcription, and thumbnail evaluation. The main functionalities include:
- Extracting user preferences from comments.
- Transcribing video content for enhanced understanding.
- Analyzing thumbnails via AI for maximum viewer engagement insights.

### Set up steps

1. **API Setup**:
 - Create a [Google Cloud](https://console.cloud.google.com/apis/dashboard) project and enable the YouTube Data API.
 - Generate an API key for [Apify](https://www.apify.com?fpr=ujogj).
 - Generate API key for [OpenAI](https://platform.openai.com)
 - Create all credentials in N8N - OpenAI, Apify, Google Cloud.

2. **YouTube Creator and Video Selection**:
 - Start by defining a request to identify top creators based on their video views.
 - Capture the YouTube video IDs for further analysis of comments and other video metrics.

3. **Comment Analysis**:
 - Gather comments associated with the selected videos and analyze them for user insights.
 - Implement pagination to handle the maximum comment retrieval limits in API requests.

4. **Video Transcription**:
 - Request transcriptions for videos of interest, ensuring to manage potential costs associated with longer video processing.
 - Utilize the insights from transcriptions to formulate content plans.

5. **Thumbnail Analysis**:
 - Evaluate your video thumbnails by submitting the URL through the OpenAI API to gain insights into their effectiveness.

6. **Data Management**:
 - Incorporate a database agent to organize video data and metrics, allowing efficient record management and future content planning.

## Scenario 1: AI agent

## Scenario 2: Agent tools

### Replace credentials

### Replace credentials in all nodes - Apify, OpenAI, Google

</details>
