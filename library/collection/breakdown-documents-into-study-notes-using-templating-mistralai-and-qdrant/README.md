# Breakdown Documents into Study Notes using Templating MistralAI and Qdrant

> Делает конспекты для учёбы из документов по шаблонам (Mistral AI + Qdrant); следит за папкой на диске.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | изменение файла |
| **Сервисы** | Mistral AI, Qdrant |
| **Узлов в схеме** | 35 |
| **Нужные учётные данные** | `mistralCloudApi`, `qdrantApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Step 1. Watch Folder and Import New Documents
[Read more about Local File Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.localfiletrigger)

With n8n's local file trigger, we're able to trigger the workflow when files are created in our target folder. We still have to import them however as the trigger will only give the file's path. The "Extract From" node is used to get at the file's contents.

## Step 2. Summarise and Vectorise Document Contents
[Learn more about using the Qdrant VectorStore](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreqdrant)

Capturing the document into our vector store is intended for a technique we'll use later known as Retrieval Augumented Generation or "RAG" for short. For our scenario, this allows our LLM to retrieve context more efficiently which produces better respsonses.

## Step 3. Loop through Templates

We'll ask the LLM to help us generate 3 types of notes from the imported source document. These notes are intended to breakdown the content for faster study. Our templates for this demo are:
(1) **Study guide**
(2) **Briefing document**
(3) **Timeline**

## Step 4. Use AI Agents to Query and Generate Template Documents
[Read more about using the Question & Answer Retrieval Chain](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainretrievalqa)

n8n allows us to easily use a chain of LLMs as agents which can work together to handle any task!
Here the agents generate questions to explore the content of the source document and use the answers to generate the template.

## Step 5. Export Generated Templates To Folder
[Learn more about writing to the local filesystem](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.filesreadwrite)

Finally, the AI generated documents can now be exported to disk. This workflow makes it easy to generate any kind of document from various source material and can be used for training and sales.

## Try It Out! 

### This workflow automates generating notes from a source document.
* It watches a target folder to pick up new files.
* When a new file is detected, it saves the contents of the file in a vectorstore.
* multiple AI agents guided by a templates list, generate the predetermined notes.
* These notes are then export alongside the original source file for the user.


### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

### 💡Add your own templates here!

</details>
