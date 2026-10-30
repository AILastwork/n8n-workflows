# Auto-Tag Blog Posts in WordPress with AI

> Автоматически проставляет теги постам WordPress с помощью ИИ.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вызов из другого воркфлоу, событие в RSS |
| **Сервисы** | OpenAI, RSS, WordPress |
| **Узлов в схеме** | 22 |
| **Нужные учётные данные** | `openAiApi`, `wordpressApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Demo Usage in Another Workflow (Tagging an article discovered with an RSS feed)

## Auto-Tag Posts in WordPress

This workflow allows you to hand off the responsibility of tagging content for WordPress to an AI Agent in n8n with no data entry required.

## Copy this workflow

You can use it inline by removing the Called by Another Workflow trigger, or as-is as a subworkflow

Handing off tagging and categorization fully to AI lets you **put your WordPress account on autopilot** without a human-in-the-loop.

In this example the application is use-case agnostic, but with this workflow you can:
1. Use AI to rewrite content with original thoughts and tags
2. Ensure healthy information architecture on your site
3. Quickly generate multivariate tag and category combinations for optimal SEO

### To ensure data can be passed to subsequent nodes, make sure to select "Run Once for Each Item" if executing a subworkflow

## What's this? 
If there are missing tags we create them in WP, otherwise we keep get them all from WP and keep the relevant ones.

## What's this? 
One of the few potential failure points in this workflow, when checking for missing tags it's important that both the generated tags and the existing tags are in the same case (snake, dash, title).

## ! A note about cases !
If you want your tags to follow a different case than I am using (dash case for slug, title case for name), then you will need to update a few nodes in this workflow.

## Ready for a challenge?

Make this subworkflow executable for both categories and tags, accounting for different API calls to different endpoints.

## About the maker
**[Find Ludwig Gerdes on LinkedIn](https://www.linkedin.com/in/ludwiggerdes)**

</details>
