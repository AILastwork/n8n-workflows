# Automate Content Generator for WordPress with DeepSeek R1

> Генерирует SEO-статьи для WordPress через DeepSeek R1 по идеям из Google Sheets и добавляет обложку от OpenAI.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Google Sheets, OpenAI, WordPress |
| **Узлов в схеме** | 10 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `openAiApi`, `wooCommerceApi`, `wordpressApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Target
This workflow is designed to automatically generate seo-friendly content for wordpress through DeepSeek R1 by giving input ideas on how to structure the article. A cover image is also generated and uploaded with OpenAI DALL-E 3. This flow is designed to be executed automatically (ad "On a schedule" node) and thus have a complete editorial plan.

This process is useful for blog managers who want to automate content creation and publishing.

## Preliminary step
Create a google sheet with the following columns:
- Date
- Prompt
- Title
- Post ID

Fill in only the "Prompt" column with basic ideas that DeepSeek will work on to generate the content.

Connect with your Google Sheet. This node select only rows for which no content has been generated yet in WordPress

Add your DeepSeek API credential. If you want you can change the model with "deepseek-chat"

Add your WordPress API credential

Add your OpenAI API credential

Upload the image on your WordPress via APIs

Set the uploaded image with the newly created article

</details>
