# Hacker News to Video Template - AlexK1919

> Делает короткие видео из новостей Hacker News: ИИ-сценарий, картинки, видео и публикация в соцсети.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Dropbox, Google Drive, Hacker News, LinkedIn, OneDrive, OpenAI, S3, X (Twitter), YouTube |
| **Узлов в схеме** | 39 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `httpCustomAuth`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# Choose your data source 
## This can be swapped for any other data source of your choosing.

# Upload Assets
You can extend this workflow further by uploading the generated assets to your storage option of choice.

# Post to Social Media
You can extend this workflow further by posting the generated assets to social media.

# Generate Images and Videos

# Stitch it all together

# Article Analysis - Is it the right topic?

# Prepare the article for content generation

# AlexK1919 
![Alex Kim](https://media.licdn.com/dms/image/v2/D5603AQFOYMkqCPl6Sw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718309808352?e=1736985600&v=beta&t=pQKm7lQfUU1ytuC2Gq1PRxNY-XmROFWbo-BjzUPxWOs)

#### I’m Alex Kim, an AI-Native Workflow Automation Architect Building Solutions to Optimize your Personal and Professional Life.

### Workflow Overview Video
https://youtu.be/XaKybLDUlLk

### About Me
https://beacons.ai/alexk1919

### Product Used 
[Leonardo.ai](https://leonardo.ai)
[RunwayML](https://runwayml.com/)
[Creatomate](https://creatomate.com/)

Don't forget to connect this last node to the loop to process additional items

</details>
