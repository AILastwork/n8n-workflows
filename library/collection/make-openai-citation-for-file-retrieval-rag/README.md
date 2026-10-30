# Make OpenAI Citation for File Retrieval RAG

> Добавляет ссылки на источники (цитаты) в ответы ассистента OpenAI при поиске по файлам.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | чат |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 12 |
| **Нужные учётные данные** | `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Within N8N, there will be a chat button to test

## Make OpenAI Citation for File Retrieval RAG

## Use case

In this example, we will ensure that all texts from the OpenAI assistant search for citations and sources in the vector store files. We can also format the output for Markdown or HTML tags.

This is necessary because the assistant sometimes generates strange characters, and we can also use dynamic references such as citations 1, 2, 3, for example.

## What this workflow does

In this workflow, we will use an OpenAI assistant created within their interface, equipped with a vector store containing some files for file retrieval.

The assistant will perform the file search within the OpenAI infrastructure and will return the content with citations.

- We will make an HTTP request to retrieve all the details we need to format the text output.

## Setup

Insert an OpenAI Key

## How to adjust it to your needs

At the end of the workflow, we have a block of code that will format the output, and there we can add Markdown tags to create links. Optionally, we can transform the Markdown formatting into HTML.


by Davi Saranszky Mesquita
https://www.linkedin.com/in/mesquitadavi/

## Setup

- Configure OpenAI Key

### In this step, we will use an assistant created within the OpenAI platform that contains a vector store a.k.a file retrieval

### Retrieving all thread content is necessary because the OpenAI tool does not retrieve all citations upon request.

### A file retrieval request contains a lot of information, and we want only the text that will be substituted and the file name.

- id
- filename
- text

### With the last three splits, we may have many citations and texts to substitute. By doing an aggregation, it will be possible to handle everything as a single request.

### This simple code will take all the previous files and citations and alter the original text, formatting the output. In this way, we can use Markdown tags to create links, or if you prefer, we can add an HTML transformation node.

</details>
