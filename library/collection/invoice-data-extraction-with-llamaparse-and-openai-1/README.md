# Invoice data extraction with LlamaParse and OpenAI (1)

> Извлекает данные из счетов-фактур в PDF через LlamaParse и OpenAI и записывает в Google Sheets.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Gmail |
| **Сервисы** | Gmail, Google Sheets, OpenAI |
| **Узлов в схеме** | 17 |
| **Нужные учётные данные** | `gmailOAuth2`, `googleSheetsOAuth2Api`, `httpHeaderAuth`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## 2. Advanced PDF Processing with LlamaParse
[Read more about using HTTP Requests](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/)

LlamaIndex's LlamaCloud is a cloud-based service that allows you to upload,
parse, and index document. LlamaParse is a tool offered by LlamaCloud
to parse for complex PDFs with embedded objects ie PDF Tables and figures.

At time of writing, you can parse 1000 pdfs/day with LlamaCloud's free plan
by signing up at [https://cloud.llamaindex.ai/](https://cloud.llamaindex.ai/?ref=n8n.io).

## 1. Watch for Invoice Emails
[Read more about Gmail Triggers](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.gmailtrigger)

The Gmail node can watch for all incoming messages and filter based on a condition. We'll set our Gmail node to wait for:
* a message from particular email address.
* having an attachment which should be the invoice PDF
* not having a label "invoice synced", which is what we use to avoid duplicate processing.

## 3. Use LLMs to Extract Values from Data
[Read more about Basic LLM Chain](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm/)

Large language models are perfect for data extraction tasks as they can work across a range of document layouts without human intervention. The extracted data can then be sent to a variety of datastores such as spreadsheets, accounting systems and/or CRMs.

**Tip:** The "Structured Output Parser" ensures the AI output can be
inserted to our spreadsheet without additional clean up and/or formatting.

### 🙋‍♂️ Why not just use the built-in PDF convertor?
A common issue with PDF-to-text convertors are that they ignore important data structures like tables. These structures can be important for data extraction. For example, being able to distinguish between seperate line items in an invoice.

## 4. Add Label to Avoid Duplication
[Read more about working with Gmail](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/)

To finish off the workflow, we'll add the "invoice synced" label to the original invoice email to flag that the extraction was successful. This can be useful if working with a shared inbox and for quality control purposes later.

## Try Me Out!

**This workflow does the following:**
* Waits for email invoices with PDF attachments.
* Uses the LlamaParse service to convert the invoice PDF into a markdown file.
* Uses a LLM to extract invoice data from the Markdown file.
* Exports the extracted data to a Google Sheet.

### Follow along with the blog here
https://blog.n8n.io/how-to-extract-data-from-pdf-to-excel-spreadsheet-advance-parsing-with-n8n-io-and-llamaparse/

### Good to know
* You'll need to create the label "invoice synced" in gmail before using this workflow.

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

**Need more attributes?**
Change it here!

🚨**Required**
* Set Your Google Sheet URL here
* Set the Name of your Sheet


**Don't use GSheets?**
Swap this for Excel, Airtable or a Database!

🚨**Required**
* Change the email filters here!

</details>
