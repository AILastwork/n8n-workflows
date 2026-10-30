# Analyze Screenshots with AI

> Делает скриншот сайта через URLbox и анализирует его с помощью OpenAI.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Setup 
**For Testing use the Setup node to put in test name & url.**

If you want to use this workflow in production, you can expand it to load data from other sources like a DB or Google Sheet

## URLbox API call 
[URLbox](https://urlbox.com/) is a Screenshot API. With this API you can automate making screenshots based on website url's.

You have to replace the Placeholder with your API Key

## Analyze the Screenshot 
Analyze the screenshot using OpenAI.

Add your OpenAI Credentials on the top of the node.

The prompt is an example. Change it based on what you want to extract from the screenshot.

## Merge
Merge the description with the name of the website & the url.

</details>
