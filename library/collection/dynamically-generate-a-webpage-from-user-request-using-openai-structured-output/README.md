# Dynamically generate HTML page from user request using OpenAI Structured Output

> Генерирует HTML-страницу по запросу пользователя через structured output OpenAI.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Generate HTML from user query

**HTTP Request node**
- Send the user query to OpenAI, with a defined JSON response format - *using HTTP Request node as it has not yet been implemented in the OpenAI nodes*
- The response format is inspired by the [Structured Output defined in OpenAI Introduction post](https://openai.com/index/introducing-structured-outputs-in-the-api)
- The output is a JSON containing HTML components and attributed


**OpenAI node**
- Format the response from the previous node from JSON format to HTML format

## Workflow: Dynamically generate an HTML page from a user request using OpenAI Structured Output

**Overview**
- This workflow is a experiment to build HTML pages from a user input using the new Structured Output from OpenAI.
- The Structured Output could be used in a variety of cases. Essentially, it guarantees the output from the GPT will follow a defined structure (JSON object).
- It uses Tailwind CSS to make it slightly nicer, but any

**How it works**
- Once active, go to the production URL and add what you'd like to build as the parameter "query"
- Example: https://production_url.com?query=a%20signup%20form
- OpenAI nodes will first output the UI as a JSON then convert it to HTML
- Finally, the response is integrated in a HTML container and rendered to the user

**Further thoughts**
- Results are not yet amazing, it is hard to see the direct value of such an experiment
- But it showcase the potential of the Structured Output. Being able to guarantee the output format is key to build robust AI applications.

</details>
