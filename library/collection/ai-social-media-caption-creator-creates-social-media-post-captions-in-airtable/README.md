# AI Social Media Caption Creator

> Генерирует подписи для постов в соцсетях в контент-плане Airtable с учётом аудитории и тона.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Airtable |
| **Сервисы** | Airtable, OpenAI |
| **Узлов в схеме** | 9 |
| **Нужные учётные данные** | `airtableTokenApi`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# Welcome to my AI Social Media Caption Creator Workflow!

This workflow automatically creates a social media post caption in an editorial plan in Airtable. It also uses background information on the target group, tonality, etc. stored in Airtable.

## This workflow has the following sequence:

1. Airtable trigger (scan for new records every minute)
2. Wait 1 Minute so the Airtable record creator has time to write the Briefing field
3. retrieval of Airtable record data
4. AI Agent to write a caption for a social media post. The agent is instructed to use background information stored in Airtable (such as target group, tonality, etc.) to create the post.
5. Format the output and assign it to the correct field in Airtable.
6. Post the caption into Airtable record.

## The following accesses are required for the workflow:
- Airtable Database: [Documentation](https://docs.n8n.io/integrations/builtin/credentials/airtable)
- AI API access (e.g. via OpenAI, Anthropic, Google or Ollama)

### Example of an editorial plan in Airtable: https://airtable.com/appIXeIkDPjQefHXN/shrwcY45g48RpcvvC
For this workflow you need the Airtable fields "created_at", "Briefing" and "SoMe_Text_AI"

You can contact me via LinkedIn, if you have any questions: https://www.linkedin.com/in/friedemann-schuetz

</details>
