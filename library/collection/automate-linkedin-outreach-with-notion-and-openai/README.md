# Automate LinkedIn Posts with AI

> Публикует в LinkedIn пост дня из базы Notion, улучшая текст через OpenAI.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | LinkedIn, Notion, OpenAI |
| **Узлов в схеме** | 9 |
| **Нужные учётные данные** | `linkedInOAuth2Api`, `notionApi`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Fetch the day's post from my Notion database
A Notion _"database"_ is just a table on a Notion Page.
This table will have various rows, for which a minimum of three columns are required:
- Name
- Status
- Date

The Date column is the most important, which will dictate when that row from your Notion table containing the text should be posted.

NOTE: each post is required to have a copy and pasted image!

## Format Post
Send the post to OpenAI, where it will attempt to ask your assistant how to take the incoming blob of text, and soup it up into something more palpable for LinkedIn engagement.

</details>
