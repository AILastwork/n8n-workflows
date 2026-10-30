# AI Data Extraction with Dynamic Prompts and Baserow

> Извлекает данные ИИ с динамическими промптами, которые задаются в описаниях полей таблицы Baserow.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 30 |
| **Нужные учётные данные** | `httpHeaderAuth`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### 1. Get Table Schema
[Learn more about the HTTP node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest)

For this operation, we'll have to use the Baserow API rather than the built-in node. However, this way does allow for more flexibility with query parameters.

### 2a. Updates Minimal Number of Rows
This branch updates only the rows impacted.

### 2b. Update Every Row under the Field
This branch updates all applicable rows under field when the field/column is created or changed. Watch out - if you have 1000s of rows, this could take a while!

## Try It Out!
### This n8n template powers a "dynamic" or "user-defined" prompts with PDF workflow pattern for a [Baserow](https://baserow.io) table. Simply put, it allows users to populate a spreadsheet using prompts without touching the underlying template.

**Check out the video demo I did for n8n Studio**: https://www.youtube.com/watch?v=_fNAD1u8BZw

This template is intended to be used as a webhook source for Baserow. **Looking for a Airtable version? [Click here](https://n8n.io/workflows/2771-ai-data-extraction-with-dynamic-prompts-and-airtable/)**

## How it works
* Each Baserow.io tables offers integration feature whereby changes to the table can be sent as events to any accessible webhook. This allows for a reactive trigger pattern which makes this type of workflow possible. For our usecase, we capture the vents of `row_updated`, `field_created` and `field_updated`.
* Next, we'll need an "input" column in our Baserow.io table. This column will be where our context lives for evaluating the prompts against. In this example, our "input" column name is "file" and it's where we'll upload our PDFs. Note, this "input" field is human-controlled and never updated from this template.
* Now for the columns (aka "fields" in Baserow). Each field allows us to define a name, type and description and together form the schema. The first 2 are self-explaintory but the "description" will be for users to provide their prompts ie. what data should the field to contain.
* In this template, a webhook trigger waits for when a row or column is updated. The incoming event comes with lots of details such as the table, row and/or column Ids that were impacted.
* We use this information to fetch the table's schema in order to get the column's descriptions (aka dynamic prompts).
* For each triggered event, we download our input ie. the PDF and ready it for our AI/LLM. By iterating through the available columns and feeding the dynamic prompts, our LLM can run those prompts against the PDF and thus generating a value response for each cell.
* These values are then collected and used to update the Baserow Table.

## How to use
* You'll need to publish this workflow and make it accessible to our Baserow instance. Good to note, you only really need to do this once and can reuse for many Baserow Tables.
* Configure your Baserow Table to send `row_updated`, `field_created` and `field_updated` events to this n8n workflow.
* This workflow should work with both cloud-hosted and self-hosted versions of Baserow.


### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Flowgramming!

### 2. Event Router Pattern
[Learn more about the Switch node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.switch/)

A simple switch node can be used to determine which event to handle. The difference between our row and field events is that row event affect a single row whereas field events affect all rows.

### 3. Filter Only Rows with Valid Input
[Learn more about the Split Out node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.splitout/)

This step handles one or more updated rows where "updated" means the "input" column (ie. "file" in our example) for these rows were changed. For each affected row, we'll get the full row to figure out only the columns we need to update - this is an optimisation to avoid redundant work ie. generating values for columns which already have a value.

### 6. Update the Baserow Table Row
[Learn more about the Edit Fields node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.set/)

Finally, we can collect the LLM responses and combine them to build an API request to update our Baserow Table row - the Id of which we got from initial webhook. After this is done, we can move onto the next row and repeat the process.

### 5. PDFs, LLMs and Dynamic Prompts? Oh My!
[Learn more about the Basic LLM node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm/)

This step is where it all comes together! In short, we give our LLM the PDF contents as the context and loop through our dynamic prompts (from the schema we pulled earlier) for our row. At the end, our LLM should have produced a value for each column requested.

**Note**: There's definitely a optimisation which could be done for caching PDFs but it beyond the scope of this demonstration.

### 4. Using an Items Loop
[Learn more about the Split in Batches node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.splitinbatches/)

A split in batches node is used here to update a row at a time however, this is a preference for user experience - changes are seen in the Baserow quicker.

### 7. Listing All Rows Under The Column
[Learn more about the Code node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code)

We can use Baserow's List API and the HTTP node's pagination feature to fetch all applicable rows under the affected field - the filter query on the API is helpful here.

### 9. Generating Value using LLM
[Learn more about the Extract From File node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.extractfromfile/)

Pretty much identical to Step 5 but instead of updating every field/column, we only need to generate a value for one.

### 8. Using an Items L

…

</details>
