# Introduction to the HTTP Tool

> Знакомство с HTTP-инструментом ИИ-агента: агент сам вызывает API и читает страницы.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 9 |
| **Нужные учётные данные** | `httpHeaderAuth`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### AI agent that can scrape webpages
Remake of https://n8n.io/workflows/2006-ai-agent-that-can-scrape-webpages/

**Changes**:
* Replaces Execute Workflow Tool and Subworkflow
* Replaces Response Formatting

### Allow your AI to call an API to fetch data
Remake of https://n8n.io/workflows/2094-allow-your-ai-to-call-an-api-to-fetch-data/

**Changes**:
* Replaces Execute Workflow Tool and Subworkflow
* Replaces Manual Query Params Definitions
* Replaces Response Formatting

## Try It Out!

### The HTTP tool is drastically simplifies API-enabled AI agents cutting down the number of workflow nodes by as much as 10!

* Available since v1.47.0
* Recommended for single purpose APIs which don't require much post-fetch formatting.
* If you require a chain of API calls, you may need to implement a subworkflow instead.

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

</details>
