# Handling Job Application Submissions with AI and n8n Forms

> Приём откликов на вакансии через форму n8n: классифицирует CV, извлекает данные и сохраняет в Airtable.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | форма n8n |
| **Сервисы** | Airtable, OpenAI |
| **Узлов в схеме** | 15 |
| **Нужные учётные данные** | `airtableTokenApi`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## 1. Application Form To Upload CV
[Learn more the Form Trigger node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.formtrigger/)

Our application process starts with a simple file upload to get the applicant's CV for processing.

## 2. Document Classifier and ReUpload Form
[Read more about the Text Classifier](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.text-classifier/)

Form validation remains a critical step and before the introduction of LLMs, classifying document types was a relatively troublesome process. Today, n8n's text classifier node does an excellent job at this task.

Contextual validation powered by AI means invalid, incomplete or poorly created applicant CVs can be rejected as a quality check. When this happens in our workflow, we present the user again with the file upload form to retry.

## 3. Smarter Application Pre-fill with Job Role Context
[Read more about the Basic LLM node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm)

Information extraction is a logical next step once we have our PDF contents but we can extend further by only extracting data which is relevant to our job post. This ensure the information we extract is always relevant which saves time for the hiring team.

To achieve this for this demo, I've included the job post in the prompt for the LLM to compare the CV against. The provides the AI enough context to complete the task successfully.

## 4. Save to Applicant Tracking System
[Read more about the Airtable node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.airtable/)

Next, we can complete our simple data capture by integrating and pushing data to our Applicant Tracking System.

Here, we're using Airtable because we can also store PDF files in our rows.

See our example Airtable here: [https://airtable.com/appQ6mE9KSzlvaGDT/shrIivfe9qH6YEYAs](https://airtable.com/appQ6mE9KSzlvaGDT/shrIivfe9qH6YEYAs)

## 5. Redirect to Application Form
[Learn more about Form Ending](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.form/#form-ending)

Finally to complete the form flow for step 1 of 2, we'll use a form ending node to redirect the user to step 2 of 2.

Here, we using query params as part of our redirect as this will pre-fill the form fields in step 2 of 2.

## 6. Application Form to Amend Details
[Learn more about Forms](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.form)

In the second part of the application process, applicants are presented with a form containing multiple fields to complete. This step has often been a source of frustration for many, as they end up duplicating information that’s already in their CV.

If our redirection with prefilled data works as intended, this issue will be resolved, as the fields will be automatically populated by our LLM during step 1 of 2. This also allows candidates the opportunity to review and refine the application fields before submitting.

## Try It Out!

### This n8n template combines form file uploads with AI components to create a simple but effective job application submission flow.
It's a perfect low-cost solution without the bells and whistles of the surface yet is highly advanced with its use of AI.

### How it works
* The application submission process starts with an n8n form trigger to accept CV files in the form of PDFs.
* The PDF is validated using the text classifier node to determine if it is a valid CV.
* A basic LLM node is used to extract relevant information from the CV as data capture. A copy of the original job post is included to ensure relevancy.
* Applicant's data is then sent to an ATS for processing. For our demo, we used airtable because we could attach PDFs to rows.
* Finally, a second form trigger is used to allow the applicant to amend any of the generated application fields.


### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

### 🚨 Change Base URL here!
This redirect requires the full base URL, change it to the host of your n8n instance.

</details>
