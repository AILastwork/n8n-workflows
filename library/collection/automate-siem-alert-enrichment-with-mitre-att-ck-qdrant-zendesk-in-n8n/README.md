# Automate SIEM Alert Enrichment with MITRE ATT&CK, Qdrant & Zendesk in n8n

> Обогащает оповещения SIEM данными MITRE ATT&CK из векторной базы Qdrant и дополняет тикеты Zendesk.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, чат |
| **Сервисы** | Google Drive, OpenAI, Qdrant, Zendesk |
| **Узлов в схеме** | 23 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `openAiApi`, `qdrantApi`, `zendeskApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

![n8n](https://uploads.n8n.io/templates/qdrantlogo.png)
## Embed your Vector Store
To provide data for your Vector store, you need to pass it in as JSON, and ensure it's setup correctly. This flow pulls the JSON file from Google Drive and extracts the JSON data and then passes it into the qdrant collection.

![n8n](https://uploads.n8n.io/templates/n8n.png)
## Talk to your Vector Store
Now that your vector store has been updated with the embedded data, 
you can use the n8n chat interface to talk to your data using OpenAI, 
Ollama, or any of our supported LLMs.

![Servicenow](https://uploads.n8n.io/templates/zendesk.png)
## Deploy your Vector Store
This flow adds contextual information to your tickets using the Mitre Attack framework to help contextualize the ticket data.

</details>
