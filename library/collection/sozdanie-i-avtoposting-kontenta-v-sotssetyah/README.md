# Social Media AI Agent - Telegram

> ИИ-агент для соцсетей: находит обсуждения GitHub на Hacker News и публикует посты в X и LinkedIn с одобрением в Telegram.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Airtable, LinkedIn, OpenAI, Telegram, X (Twitter) |
| **Узлов в схеме** | 19 |
| **Нужные учётные данные** | `airtableTokenApi`, `linkedInOAuth2Api`, `openAiApi`, `telegramApi`, `twitterOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

Automate the curation and sharing of trending GitHub discussions from Hacker News to Twitter and LinkedIn. This workflow leverages AI to generate engaging posts, streamlining your social media content creation and distribution.

I crawl Hacker News and extract Github links.

This is where the magic happens. I use the Github url extracted earlier and visit Github page to get more insights in the project being shared. Then I ask Chat GPT very nicely to help me get a Tweet and a LinkedIn post

One last magic trick, Send the generated Tweet and the post to the respective platforms.

Just pinging the owner that something is about to be posted and wait for 5 mins before final posting.

CHORE

Make sure we don't post the same content again.

</details>
