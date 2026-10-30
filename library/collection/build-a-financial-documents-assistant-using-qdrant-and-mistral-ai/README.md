# Build a Financial Documents Assistant using Qdrant and Mistral.ai

> Ассистент по финансовым документам: следит за папкой, индексирует файлы в Qdrant и отвечает на вопросы (Mistral AI).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, изменение файла, чат |
| **Сервисы** | Mistral AI, Qdrant |
| **Узлов в схеме** | 23 |
| **Нужные учётные данные** | `mistralCloudApi`, `qdrantApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Step 1. Select the target folder
[Read more about local file trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.localfiletrigger)

In this workflow, we'll monitor a specific folder on disk that n8n has access to. Since we're using docker, we can either use the n8n volume or mount a folder from the host machine.

The local file trigger is useful to execute the workflow whenever changes are made to our target folder.

## Try It Out!
### This workflow does the following:
* Monitors a target folder for changes using the local file trigger
* Synchronises files in the target folder with their vectors in Qdrant
* Mistral AI is used to create a Q&A AI agent on all files in the target folder

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

## Step 2. When files are removed, the vector point is cleared.
[Learn how to delete points using the Qdrant API](https://qdrant.tech/documentation/concepts/points/#delete-points)

To keep our vectorstore relevant, we'll implement a simple synchronisation system whereby documents deleted from the local file folder are also purged from Qdrant. This can be simply achieved using Qdrant APIs.

## Step 3. When files are updated, the vector point is updated.
[Learn how to delete points using the Qdrant API](https://qdrant.tech/documentation/concepts/points/#delete-points)

Similarly to the files deleted branch, when we encounter a change in a file we'll update the matching vector point in Qdrant to ensure our vector store stays relevant. Here, we can achieve this my deleting the existing vector point and creating it anew with the updated bank statement.

## Step 4. When new files are added, add them to Qdrant Vectorstore.
[Read more about the Qdrant node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreqdrant)

Using Qdrant, we'll able to create a simple yet powerful RAG based application for our bank statements. One of Qdrant's most powerful features is its filtering system, we'll use it to manage the synchronisation of our local file system and Qdrant.

## Step 5. Create AI Agent expert on historic bank statements 
[Read more about the Question & Answer Chain](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainretrievalqa)

Finally, let's use a Question & Answer AI node to combine the Mistral AI model and Qdrant as the vector store retriever to create a local expert for all our bank statements questions.

</details>
