# Enrich FAQ sections on your website pages at scale with AI

> Массово добавляет или дополняет FAQ на страницах сайта с помощью ИИ (WordPress, Webflow, Strapi).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, вызов из другого воркфлоу |
| **Сервисы** | Google Drive, Google Sheets, OpenAI, Strapi, Webflow, WordPress |
| **Узлов в схеме** | 29 |
| **Нужные учётные данные** | `wordpressApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### 🚨 Set Destination Folders Here

## Trigger event
This could be changed to whatever trigger event you need: an app event, a schedule, a webhook call, another workflow or an AI chat. Sometimes, the HTTP Request node might already serve as your starting point.

## Prepare data in Google Sheets
This part of the workflow prepares the data for reading from a Google Sheets document containing information about different services or categories. Here's an example of Google Sheet: https://docs.google.com/spreadsheets/d/1DCf-phfLWvuTwu02bumx-qykVQeFANnacTTAkRj5tZk/edit?usp=sharing

## Create your Q&A templates
For each service or category, this part of the workflow generates a set of standard questions and answers covering setup, permissions, integrations, use cases, and pricing benefits. You can modify here the input that you will feed to AI.

## Complete your Q&A templates with AI
* An AI model (OpenAI's GPT) is used to enhance or complete some of the answers, making the content more comprehensive and natural-sounding.
* The workflow formats the Q&A pairs, combining AI-generated content with predefined answers where applicable.

## Generate JSON schemas and upload to Google Drive
* The generated files are saved to specific folders in Google Drive, organized by the type of integration (native, credential-only, non-native) or category.
* After processing each service or category, it updates the status in the original Google Sheets document to mark it as completed.

## Send the JSON schemas to your CMS
This step is up to you to finish: you can choose either pre-built n8n nodes to connect with your CMS or use the HTTP Request node if you CMS is not supported directly in n8n.

</details>
