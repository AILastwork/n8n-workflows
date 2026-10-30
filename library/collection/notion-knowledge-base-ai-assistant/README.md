# Notion knowledge base AI assistant

> ИИ-ассистент по базе знаний Notion.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | чат |
| **Сервисы** | Notion, OpenAI |
| **Узлов в схеме** | 8 |
| **Нужные учётные данные** | `notionApi`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Notion knowledge base assistant [v1]
Built as part of the [30 Day AI Sprint](https://30dayaisprint.notion.site/) by [@maxtkacz](https://x.com/maxtkacz)

### FAQ
- In `Get database details` if you see a `The resource you are requesting could not be found` error, you need to add your connection to the database (in the Notion app).
- The `Get database details` pulls most recent `Tags` and informs AI Agent of them. However this step adds ~250-800ms per run. Watch detailed video to see how to remove this step.

### Template set up quickstart video 👇
[![Video Thumbnail](https://uploads.n8n.io/maxt/notion-db-assistant-embedded-thumb.png#full-width)](https://www.youtube.com/watch?v=ynLZwS2Nhnc)

### Written set up steps
1. Add a Notion credential to your n8n workspace (follow [this Notion guide](https://developers.notion.com/docs/create-a-notion-integration))
2. [Duplicate Company knowledge base Notion template](https://www.notion.so/templates/knowledge-base-ai-assistant-with-n8n) to your Notion workspace, then make sure to share the new knowledge base with connection you created in Step 1. 
3. Add Notion cred to `Get database details`:`Credential to connect with` parameter, then to `Search notion database`:`Notion API` parameter (same for `Search inside database record`)
4. Add OpenAI credential to `Open AI Chat Model` node (tested and working with Anthropic Claude 3.5 too)
5. In `Get database details`, select the db you created from Step 2 in `Database` dropdown.
6. Click `Chat` button to test the workflow. Then Activate it and copy the `Chat URL` from `When chat message received`.

</details>
