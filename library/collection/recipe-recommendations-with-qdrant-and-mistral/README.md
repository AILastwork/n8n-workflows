# Recipe Recommendations with Qdrant and Mistral

> Рекомендации рецептов: меню HelloFresh в Qdrant и чат-агент на Mistral.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, вызов из другого воркфлоу, чат |
| **Сервисы** | Mistral AI, Qdrant |
| **Узлов в схеме** | 24 |
| **Нужные учётные данные** | `mistralCloudApi`, `qdrantApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Step 1. Fetch Available Courses For the Current Week

To populate our vectorstore, we'll scrape the weekly menu off the HelloFresh Website. The pages are quite large so may take a while so please be patient.

## Step 2. Create Recipe Documents For VectorStore

To populate our vectorstore, we'll scrape the weekly menu off the HelloFresh Website. The pages are quite large so may take a while so please be patient.

## Step 3. Vectorise Recipes For Recommendation Engine
[Read more about Qdrant node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreqdrant)

We'll store our documents in our Qdrant vectorstore by converting to vectors using Mistral Embed. Our goal is to a build a recommendation engine for meals of the week which Qdrant is a perfect solution.

## Step 4. Save Original Document to Database
[Read more about Code Node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code)

Finally, let's have the original document stored in a more traditional datastore. USually our vectorsearch will return partial docs and those are enough for many use-cases, however in this instance we'll pull the full docs for the Agent get the info required to make the recommendation.

## 5. Chat with Our HelloFresh Recommendation AI Agent
[Read more about AI Agents](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent)

This agent is designed to recommend HelloFresh recipes based on your current taste preferences. Need something hot and spicy, warm and comforting or fast and chilled? This agent will capture what you would like and not like and queries our Recipe Recommendation engine powered by Qdrant Vectorstore.

## 5. Using Qdrant's Recommend API & Grouping Functionality
[Read more about Qdrant's Recommend API](https://qdrant.tech/documentation/concepts/explore/?q=recommend)

Unlike basic similarity search, Qdrant's Recommend API takes a positive query to match against (eg. Roast Dinner) and a negative query to avoid (eg. Roast Chicken). This feature significantly improves results for a recommendation engine. Additionally, by utilising Qdrant's Grouping feature, we're able to group similar matches from the same recipe - meaning we can ensure unique recipes everytime.

## Try it out!
### This workflow does the following:
* Fetches and stores this week's HelloFresh's menu
* Builds the foundation of a recommendation engine by storing the recipes in a Qdrant Vectorstore and SQLite database.
* Builds an AI Agent that allows for a chat interface to query for a the week's recipe recommendations.
* AI agent uses the Qdrant Recommend API, providing what the user likes/dislikes as the query.
* Qdrant returns the results which enable the AI Agent to make the recommendation to the user.

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

### 🚨Ensure Qdrant collection exists!
You'll need to run the following command in Qdrant:
```
PUT collections/hello_fresh
{
 "vectors": {
 "distance": "Cosine",
 "size": 1024
 }
}
```

### 🚨Configure Your Qdrant Connection
* Be sure to enter your endpoint address

</details>
