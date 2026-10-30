# AI Agent to chat with Airtable and analyze data

> ИИ-агент для чата с базой Airtable и анализа данных, включая графики и карты.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вызов из другого воркфлоу, чат |
| **Сервисы** | Airtable, OpenAI |
| **Узлов в схеме** | 30 |
| **Нужные учётные данные** | `airtableTokenApi`, `httpQueryAuth`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### Replace Mapbox public key - <your_public_key> in code

### Replace OpenAI connection

### Replace Airtable connection

### Replace OpenAI connection

### Replace Airtable connection

### Replace OpenAI connection

### Workflow 1

### Workflow 2

### ... or watch set up video [20 min]
[![Youtube Thumbnail](https://cflobdhpqwnoisuctsoc.supabase.co/storage/v1/object/public/my_storage/Video%2012%20-%20Chat%20with%20Airtable%20Blur.png)](https://youtu.be/SotqsAZEhdc)

![5min Logo](https://cflobdhpqwnoisuctsoc.supabase.co/storage/v1/object/public/my_storage/banner.png)
## AI Agent to chat with Airtable and analyze data
**Made by [Mark Shcherbakov](https://www.linkedin.com/in/marklowcoding/) from community [5minAI](https://www.skool.com/5minai)**

Engaging with data stored in Airtable often requires manual navigation and time-consuming searches. This workflow allows users to interact conversationally with their datasets, retrieving essential information quickly while minimizing the need for complex queries.

This workflow enables an AI agent to facilitate chat interactions over Airtable data. The agent can:
- Retrieve order records, product details, and other relevant data.
- Execute mathematical functions to analyze data such as calculating averages and totals.
- Optionally generate maps for geographic data visualization.

1. **Dynamic Data Retrieval**: The agent uses user prompts to dynamically query the dataset.
2. **Memory Management**: It retains context during conversations, allowing users to engage in a more natural dialogue.
3. **Search and Filter Capabilities**: Users can perform tailored searches with specific parameters or filters to refine their results.

### Set up steps

1. **Separate workflows**:
	- Create additional workflow and move there Workflow 2.

2. **Replace credentials**:
	- Replace connections and credentials in all nodes.

3. **Start chat**:
	- Ask questions and don't forget to mention required base name.

</details>
