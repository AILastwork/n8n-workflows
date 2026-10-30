# AI Logo Sheet Extractor to Airtable

> Извлекает из картинки с логотипами список инструментов и их атрибуты и сохраняет в Airtable.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | форма n8n |
| **Сервисы** | Airtable, OpenAI |
| **Узлов в схеме** | 33 |
| **Нужные учётные данные** | `airtableTokenApi`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Attribute Creation and Mapping those created or existing Ids

## Eat the provided Images, Extract the Information out of them as "Tool -> Attributes" list.

## Create the Tools (if not exists)

## Map Competitors

## Instructions

This automation enables you to just upload any Image (via Form) of a Logo Sheet, containing multiple Images of Products, most likely and bringing them in some context to one another. 

After submitting an AI-Agent eats **that Logo Sheet**, turning it into an List of "Productname" and "Attributes", also checks if Tools are kind of similar to another, given the Context of the Image.

We utilize AI Vision capabilities for that. **NOTE:** It might not be able to extract all informations. For a "upload and forget it" Workflow it works for me. You can even run it multiple times, to be sure. 

But if you need to make sure it extracts **everything** you might need to think about an Multi-Agent Setup with Validation-Agent Steps.

Once the Agent finishes the extraction, it will traditionally and deterministicly add those Attributes to Airtable (**Creates** those, if not already existing.) and also **Upserts** the Tool Informations.

It uses MD5 **Hashes** for turning Product Names into.. something fancy really, you could also use it without that, but I wanted to have something that looks atleast like an ID. 

### Setup

1. Set Up the Airtable like shown below.
2. Update and set Credentials for all Airtable Nodes.
3. Check or Adjust the Prompt of the Agent matching your use-case.
4. Activate the Workflow. 
5. Open the Form (default: https://your-n8n.io/form/logo-sheet-feeder)
6. Enjoy growing your Airtable.

![Image](https://cloud.let-the-work-flow.com/logo-64.png) 
Enjoy the workflow! ❤️ 
[let the workf low](https://let-the-work-flow.com) — Workflow Automation & Development

## Airtable Structure

### Tools Table Fields

**Required:**
Name (singleLineText) 
Attributes (multipleRecordLinks=Link to Attributes Table) 
Hash (singleLineText) 
Similar (multipleRecordLinks=Link to the Same Table:"Tools") 

_Description (multilineText)_ 
_Website (url)_
_Category (multipleSelects)_

## Helper for Documentation (ignore or enjoy it)

### Attributes Table Fields

**Required:**
Name (singleLineText)
Tools (multipleRecordLinks=Link to Tools Table)

### Might want to Adjust Prompt to your "Use-Case" 🤖

## Example Logo Sheet
### For these kind of sheets the Prompt is designed per default

![Image](https://cloud.let-the-work-flow.com/workflow-data/example-ai-logo-sheet.jpg)

</details>
