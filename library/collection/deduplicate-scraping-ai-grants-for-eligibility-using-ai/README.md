# Deduplicate Scraping AI Grants for Eligibility using AI

> Собирает новые гранты на ИИ, убирает уже виденные, ИИ проверяет соответствие критериям, сохраняет в Airtable и отправляет дайджест.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Airtable, Gmail, OpenAI |
| **Узлов в схеме** | 16 |
| **Нужные учётные данные** | `airtableTokenApi`, `gmailOAuth2`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## 1. Fetch Latest AI Grants, Ignore Those Already Seen
[Learn more about the Remove Duplicates node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.removeduplicates/)

A cool feature of n8n's remove duplicates node is that it works across executions. What this means for this template is that the node will help us keep track of grant IDs to know if we've already processed them and if so, filter them out so we won't have duplicate alerts.

## 2. Quickly Determine Eligibility Using AI
[Learn more about the Information Extractor node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.information-extractor/)

Qualifying Leads requires a lot of contextual reasoning taking into account many factors such as commercials, location and eligibility criteria. Whilst it's not guaranteed AI can or will solve this for your particular requirements, it can however get you a good distance of the way there!

AI in this template intends to reduce time (and therefore cost) for a team member needs to spend per grant listing or increase their coverage of grants which they would otherwise miss due to capacity.

## 3. Save Results to Grant Tracker
[Learn more about the Airtable Node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.airtable/)

In n8n, it's easy to send your data anywhere to manage yourself, share with your team or reuse with other workflows. Here for demonstration purposes, we'll just store each grant as a row in our Airtable database.

Check out the sample Airtable here: https://airtable.com/appiNoPRvhJxz9crl/shrRdP6zstgsxjDKL

## 4. Generate Latest AI Grants Alert Email
[Learn more about the HTML Template node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.html/)

Using our freshly collected AI grants, it would be nice if we can share them with our team members via email. A nicely formatted email digest can be generated using the HTML template node, with added links for greater impact.

Here in this demonstration, we will loop through all eligible new grants and compile them into a newsletter format using the HTML node.

## 5. Send to a list of Subscribers
[Learn more about the Gmail node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/)

Finally, we can source a list of subscribers to send our generated email newsletter.

Here, our subscriber list is another table alongside our grants table that we can import that list using the Airtable node. You can use any email provider that supports HTML but for this demonstration, we're using Gmail for simplicity sake.

## Scheduled Triggers
[Learn more about Scheduled Triggers](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger)

Scheduled triggers are a great way to run this template automatically in the morning ready for your team before they start their working day.

Feel free to adjust the interval to a time which suits you!

## Try It Out!

### This n8n templates demonstrates how to automatically ingest a source of leads at regular intervals and take advantage of n8n's remove duplicates node to simplify duplicate detection.
Additionally after the leads are captured, a simple alerts notification can be generated and shared with team members.

### How it works
* A scheduled trigger is set to fetch a list of AI grants listed on the grants.gov website in the past day.
* A Remove Duplicates node is used to track Grant IDs to filter out those already processed by the workflow.
* New grants are summarized and analysed by AI nodes to determine eligibility and interest which is then saved to an Airtable database.
* Another scheduled trigger starts a little later than the first to collect and summarize the new grants
* The results are then compiled into an email template using the HTML node, in the form of a newsletter designed to alert and brief team members of new AI grants.
* This email is then sent to a list of subscribers using the gmail node.

## How to use
* Make a copy of sample Airtable here: https://airtable.com/appiNoPRvhJxz9crl/shrRdP6zstgsxjDKL
* The filters for fetching the grants is currently set to the "AI" category. Feel free to change this to include more categories.
* Not interested in grants, this template can works for other sources of leads just change the endpoint and how you're defining the item ID to track.


### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

### Add your company details here!
Company details are added in the system prompt to help the AI determine eligibility. The more details the better!

</details>
