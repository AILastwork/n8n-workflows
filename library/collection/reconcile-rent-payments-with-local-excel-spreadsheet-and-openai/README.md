# Reconcile Rent Payments with Local Excel Spreadsheet and OpenAI

> Сверяет банковские выписки с оплатами аренды в локальной Excel-таблице через OpenAI.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | изменение файла |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 11 |
| **Нужные учётные данные** | `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Step 1. Wait For Incoming Bank Statements
[Read more about the local file triggers](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.localfiletrigger)

For this demo, we'll show that n8n is more than capable working with the local filesystem. This gives great benefits in terms of privacy and data security.

For our datastore, we're using a locally hosted XLSX Excel file which we'll query and update throughout this workflow.

## Step 2. Delegate to AI Agent to Quickly Identify Issues with Rental Payments
[Read more about AI Agents](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/)

An AI agent can not only check against agreed amounts and compare due dates but also consider contract exceptions and tenant notes before deciding to take action. In a scenario of 10+ of tenants, this can save a lot of admin time.

For this demo, we're using a remote LLM Model but this can easily be swapped out for other self-hosted LLMS models that support function calling.

## Step 3. Generate a Report to Action any Issues
[Read more about using the Code Node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code)

After the AI Agent has helped identify issues to action, we can generate a report and update a locally hosted xlsx file. This again helps keep workflows private to nothing senstive goes over the wire.

Though n8n lacks a builtin node for editing local xlsx file, we can tap into the sheetJS library available to the "Code" node.

## Try It Out!
### This workflow ingests bank statements to analyses them against a list of tenants using an AI Agent. The agent then flags any issues such as missing payments or incorrect amounts which are exported to a XLSX spreadsheet.

### Note: This workflow is intended to work with a self-hosted version of n8n and has access to the local file system.

* Watches for CSV files (bank statements)
* Imports into AI agent for analysis.
* AI agent will query the Excel spreadsheet for tenant and property details.
* AI agent will generate report on discrepancies or issues and write them to the Excel file.


### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

### 🚨Warning! Potentially Destructive Operations!
With code comes great responsibility! There is a risk you may overwrite/delete data you didn't intend. Always makes backups and test on a copy of your spreadsheets!

### 💡I'm designed to work self-hosted!
Some nodes in this workflow are only available to the self-hosted version of n8n.

</details>
