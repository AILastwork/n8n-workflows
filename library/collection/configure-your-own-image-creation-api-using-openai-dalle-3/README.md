# Image Generation API

> API генерации картинок: промпт передаётся в URL вебхука, картинку создаёт OpenAI.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Webhook Trigger 
**This Node starts listening to requests to the Webhook URL**

## Creating your Prompt-URL 
**To use this Workflow you need to append your prompt to your Webhook URL in the following way**

1. Take your Webhook URL
2. Ideate a Prompt and Replace every Space (" ") by %20 (Url Encoding)
3. Append "?input=" and right after that your encoded prompt to your url
4. Copy paste this into a webbrowser as soon as you run the Webhook

## Starting the Workflow
**To start the workflow paste the encoded URL into your webbrowser**

## Response
**Watch the image being rendered in your webbrowser**

</details>
