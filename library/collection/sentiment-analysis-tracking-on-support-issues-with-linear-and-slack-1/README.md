# Sentiment Analysis Tracking on Support Issues with Linear and Slack (1)

> Отслеживает тональность обращений в Linear через ИИ, ведёт историю в Airtable и предупреждает в Slack.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | по расписанию, событие в Airtable |
| **Сервисы** | Airtable, GraphQL, OpenAI, Slack |
| **Узлов в схеме** | 14 |
| **Нужные учётные данные** | `airtableTokenApi`, `httpHeaderAuth`, `openAiApi`, `slackApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## 1. Continuously Monitor Active Linear Issues
[Learn more about the GraphQL node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.graphql)

To keep up with the latest changes in our active Linear tickets, we'll need to use Linear's GraphQL endpoint because filtering is currently unavailable in the official Linear.app node.

For this demonstration, we'll check for updated tickets every 30mins.

## 2. Sentiment Analysis on Current Issue Activity
[Learn more about the Information Extractor node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.information-extractor)

With our recently updated posts, we can use our AI to perform a quick sentiment analysis on the ongoing conversation to check the overall mood of the support issue. This is a great way to check how things are generally going in the support queue; positive should be normal but negative could indicate some uncomfortableness or even frustration.

## 3. Capture and Track Results in Airtable
[Learn more about the Airtable node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.airtable)

Next, we can capture this analysis in our insights database as means for human review. When the issue is new, we can create a new row but if the issue exists, we will update it's existing row instead.

When updating an existing row, we move its previous "current sentiment" value into the "previous sentiment" column and replace with our new current sentiment. This gives us a "sentiment transition" which will be useful in the next step.

Check out the Airtable here: https://airtable.com/appViDaeaFw4qv9La/shrq6HgeYzpW6uwXL

## 4. Get Notified when Sentiment becomes Negative
[Learn more about the Slack node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.slack/)

A good use-case for tracking sentiment transitions could be to be alerted if ever an issue moves from a non-negative sentiment to a negative one. This could be a signal of issue handling troubles which may require attention before it escalates.

In this demonstration, we use the Airtable trigger to catch rows which have their sentiment column updated and check for the non-negative-to-negative sentiment transition using the switch node. For those matching rows, we combine add send a notification via slack. A cool trick is to use the "remove duplication" node to prevent repeat notifications for the same updates - here we combine the Linear issue key and the row's last modified date.

## Try It Out!
### This n8n template performs continous monitoring on Linear Issue conversations performing sentiment analysis and alerting when the sentiment becomes negative.
This is helpful to quickly identify difficult customer support situations early and prioritising them before they get out of hand.

## How it works
* A scheduled trigger is used to fetch recently updated issues in Linear using the GraphQL node.
* Each issue's comments thread is passed into a simple Information Extractor node to identify the overall sentiment.
* The resulting sentiment analysis combined with the some issue details are uploaded to Airtable for review.
* When the template is re-run at a later date, each issue is re-analysed for sentiment
* Each issue's new sentiment state is saved to the airtable whilst its previous state is moved to the "previous sentiment" column.
* An Airtable trigger is used to watch for recently updated rows
* Each matching Airtable row is filtered to check if it has a previous non-negative state but now has a negative state in its current sentiment.
* The results are sent via notification to a team slack channel for priority.

**Check out the sample Airtable here**: https://airtable.com/appViDaeaFw4qv9La/shrq6HgeYzpW6uwXL

## How to use
* Modify the GraphQL filter to fetch issues to a relevant issue type, team or person.
* Update the Slack channel to ensure messages are sent to the correct location.

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

</details>
