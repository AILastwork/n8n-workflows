# Automate Customer Support Issue Resolution using AI Text Classifier

> Решение старых тикетов поддержки с ИИ: находит нерешённые задачи Jira, классифицирует, оценивает тональность и предлагает решения.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вызов из другого воркфлоу, по расписанию |
| **Сервисы** | Jira, Notion, OpenAI, Slack |
| **Узлов в схеме** | 29 |
| **Нужные учётные данные** | `jiraSoftwareCloudApi`, `notionApi`, `openAiApi`, `slackApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## 1. Search For Unresolved Long-lived JIRA Issues
[Learn more about the JIRA node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.jira)

In this demonstration, we'll define "long-lived" as any issue which is unresolved after 7 days. Adjust to fit your own criteria.

We'll also use the Execute Workflow node to run the issues separate in parallel. This is a performance optimisation and if not required, the alternative is to use a loop node instead.

## 2. Retrieves and Combine JIRA Issue Comments
[Learn more about the JIRA node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.jira)

To provide the necessary information for our AI agents, we'll fetch and combine all the issue's comments along with our issue. This gives a accurate history of the the issues progress (or lack thereof!).

## 3. Classify the Current State of the Issue
[Learn more about the Text Classifier node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.text-classifier)

Today's AI/LLMs are well suited for solving contextual problems like determining issue state. Here, we can use the text classifier node to analyse the issue as a whole to determine our next move. Almost like a really, really smart Switch node!

There are 3 branches we want to take: Check if a resolution was reached, blocked issues and auto-resolving when no team member has yet to respond.

## 4. Sentiment Analysis on Issue Resolution
[Read more about the Sentiment Analysis node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.sentimentanalysis)

The Sentiment Analysis node is a convenient method of assessing
customer satisfaction from resolved issues. Here, when resolution
is detected as positive, we can ask use the opportunity to
capitalise of the favourable experience which in this example,
is to ask for a review. In the opposite vein, if the exchange has
been negative, we can escalate in an attempt to improve
the situation before closing the ticket.

AI can equip teams to provide unrivalled customer support
which can differentiate themselves significantly against
the competition.

## 5. Attempt to Resolve The Issue With KnowledgeBase
[Read more about the AI Agent node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/)

When the issue is unaddressed, we can attempt to resolve the issue automatically using AI. Here an AI agent can easily be deployed with
access to knowledge tools to research and generate solutions for the user. Since n8n v1.62.1, AI Tools Agents can attach nodes directly as
tools providing a very easy way to linking documents to the LLM.

Here, we use both the JIRA tool to search for similar issues and the notion tool to query for product pages. If a solution can be generated,
we create a new comment with the solution and attach it to the issue. If not, then we can leave a simple message notifying the user that we could not do so. Finally, we close the issue as no further action can likely be taken in this case.

## 6. Notify for Unanswered Questions or Response Waiting
[Read more about the Basic LLM Chain node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm/)

In this step, where signals indicate that the issue is not yet ready to be close, we can try to re-engage issue participants by summarize the conversation so far and sending a reminder comment for any pending actions that were requested. This action can help reduce the number of issues which linger for too long.

## Try It Out!

### This n8n template is designed to assist and improve customer support team member capacity by automating the resolution of long-lived and forgotten JIRA issues.

* Schedule Trigger runs daily to check for long-lived unresolved issues and imports them into the workflow.
* Each Issue is handled as a separate subworkflow by using an execute workflow node. This allows parallel processing.
* A report is generated from the issue using its comment history allowing the issue to be classified by AI - determining the state and progress of the issue.
* If determined to be resolved, sentiment analysis is performed to track customer satisfaction. If negative, a slack message is sent to escalate, otherwise the issue is closed automatically.
* If no response has been initiated, an AI agent will attempt to search and resolve the issue itself using similar resolved issues or from the notion database. If a solution is found, it is posted to the issue and closed.
* If the issue is blocked and waiting for responses, then a reminder message is added.

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

</details>
