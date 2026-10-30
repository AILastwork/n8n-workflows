# Reddit AI digest

> Собирает свежие посты про n8n на Reddit, проверяет релевантность и делает ИИ-дайджест.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | OpenAI, Reddit |
| **Узлов в схеме** | 11 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## What this workflow does
✔︎ 1) Get posts from reddit that might be about n8n
 - Filter for the most relevant posts (posted in last 7 days and more than 5 upvotes and is original content)

✔︎ 2) Check if the post is actually about n8n

✔︎ 3) if it is, categorise with OpenAi.

## Drawbacks
🤔 Workflow only considers first 500 characters of each reddit post. So if n8n is mentioned after this amount, it won't register as being a post about n8n.io.

## Next steps
* Improve OpenAI Summary node prompt to return cleaner summaries.
* Extend to **more platforms/sources** - e.g. it would be really cool to monitor larger slack communities in this way. 
* Do some classification on type of user to highlight users likely to be in our **ICP**.
* Separate a list of data sources (reddit, twitter, slack, discord etc.), extract messages from there and have them go to a **sub workflow for classification and summarisation.**

## What we learned
- 🪶 **Writing prompts**: small changes in the type of prompt result in very different results. e.g. for Summarising OpenAI would use multiple sentences even if we asked it to use only 1. We got better results by following OpenAI's documentation.
 - We could make OpenAI node easier to work with for new users by the node inputs being oriented not to sending parameters to api but by following [their suggestions](https://platform.openai.com/docs/guides/completion/prompt-design) - e.g. have a field for expected output format rather than just for prompt.
- ↕️ **Changing the max_tokens parameter** drastically changes results - sometimes making it smaller even improves results (e.g. when you want a yes/no response in the OpenAI Classify node). In their [docs](https://platform.openai.com/docs/guides/completion/inserting-text) they recommend using max_tokens>256 but [n8n by default](https://community.n8n.io/t/openai-result-not-complete/21533) uses max_tokens=16. We should probably update this.

</details>
