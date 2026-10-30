# HN Who is Hiring Scrape

> Парсит ветку «Ask HN: Who is hiring?», извлекает вакансии через OpenAI и сохраняет в Airtable.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Airtable, OpenAI |
| **Узлов в схеме** | 15 |
| **Нужные учётные данные** | `airtableTokenApi`, `httpHeaderAuth`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Go to https://hn.algolia.com
- filter by "Ask HN: Who is hiring?" (important with quotes for full match)
- sort by date
- Chrome Network Tab > find API call > click "Copy as cURL"
- n8n HTTP node -> import cURL and paste 
- I've set the API key as Header Auth so you will have to do the above yourself to make this work

## Go to HN API 
https://github.com/HackerNews/API

We'll need following endpoints: 
- For example, a story: https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty
- comment: https://hacker-news.firebaseio.com/v0/item/2921983.json?print=pretty

## Data Structure

We use Openai GPT-4o-mini to transform the raw data in a unified data structure. Feel free to change this.

```json
{
 "company": "Name of the hiring company",
 "title": "Job title/role being advertised",
 "location": "Work location including remote/hybrid status",
 "type": "Employment type (Full-time, Contract, etc)",
 "salary": "Compensation details if provided",
 "description": "Main job description text including requirements and team info",
 "apply_url": "Direct application/job posting URL",
 "company_url": "Company website or careers page"
}
```

## Clean the result 

```json
{
"title": "Ask HN: Who is hiring? (February 2025)",
"createdAt": "2025-02-03T16:00:43Z",
"updatedAt": "2025-02-17T08:35:44Z",
"storyId": "42919502"
},
{
"title": "Ask HN: Who is hiring? (January 2025)",
"createdAt": "2025-01-02T16:00:09Z",
"updatedAt": "2025-02-13T00:03:24Z",
"storyId": "42575537"
},
```

## Hacker News - Who is Hiring Scrape

In this template we setup a scraper for the monthly HN Who is Hiring post. This way we can scrape the data and transform it to a common data strcutre.

First we use the [Algolia Search](https://hn.algolia.com/) provided by hackernews to drill down the results.

We can use the official [Hacker News API](https://github.com/HackerNews/API
) to get the post data and also all the replies!

This will obviously work for any kind of post on hacker news! Get creative 😃

All you need is an Openai Account to structure the text data and an Airtable Account (or similar) to write the results to a list.

Copy my base https://airtable.com/appM2JWvA5AstsGdn/shrAuo78cJt5C2laR

</details>
