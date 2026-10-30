# Build a Tax Code Assistant with Qdrant, Mistral.ai and OpenAI

> Ассистент по налоговому кодексу: скачивает PDF, индексирует их в Qdrant (Mistral) и отвечает на вопросы через OpenAI.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, вызов из другого воркфлоу, чат |
| **Сервисы** | Mistral AI, OpenAI, Qdrant |
| **Узлов в схеме** | 31 |
| **Нужные учётные данные** | `mistralCloudApi`, `openAiApi`, `qdrantApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Step 1. Download the Tax Code PDF
[Read more about handling Zip Files](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.compression/)

Let's begin by pulling a zip file containing all the tax codes as separate PDF files. We can unzip on the fly with n8n's compression node.

## Step 2. Extract and Partition Into Chapters & Sections
[Learn more about reading PDF Files](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.extractfromfile)

Rather than ingest the raw text of the PDF, we'll be a little more strategic and extract the tax code sections separately instead. Not only will this provide cleaner results, we'll also be able to fetch sections in isolation if required.

## Step 3. Save into Qdrant VectorStore
[Read more about using the Qdrant Vectorstore](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreqdrant)

We'll save our data into a Qdrant collection being mindful to use metadata to take full advantage of Qdrant's filtering capabilities later.
Though not always required, since the tax code documents can be quite large we'll implement a loop here to throttle the number of tokens being processed as to not trip the Mistral.ai rate limits for embeddings.

## Step 4. Build a Tax Code Assistant ChatBot
[Learn more about using AI Agents in n8n](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent)

For our chatbot, we'll use an AI agent node because we want to achieve more than one functionality. The first will be querying to relevant texts to answer a user's question and secondly, a direct search feature to pull full section text when requested.

## Step 5. Use Qdrant API as Tools
[Learn more about using AI Agents in n8n](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent)

Our Ask Tool will generate embeddings using Mistral.ai and query our Qdrant collection using the Qdrant Search API.
Our Search Tool will use filter our Qdrant collection using the Qdrant Scroll API, matching on each doc's section metadata key.

## Try Me Out!
### This workflow builds an AI powered Legal assistant who answers questions about tax codes.
* Download publically available tax code PDFs from the relevant government website.
* Strategically exact tax code sections and store these in our Qdrant Vectorstore using Mistral.ai embeddings.
* Use an AI Agent to answer user's tax questions by attaching tools which query our Qdrant vectorstore.

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

### 🙋‍♀️What's the difference?
With raw PDF data, we may blur the boundaries between chapters and sections making later results hard to find, incoherent or misleading.
Depending on your use-case, store your data in a way you intend to retrieve it!

</details>
