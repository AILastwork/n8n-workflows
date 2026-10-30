# Mails2notion V2

> Создаёт задачи в Notion или Airtable из писем Gmail по меткам, с обработкой ИИ.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, событие в Gmail |
| **Сервисы** | Airtable, Gmail, OpenAI |
| **Узлов в схеме** | 25 |
| **Нужные учётные данные** | `airtableTokenApi`, `gmailOAuth2`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Setup
- Disable the Gmail Trigger and enable the manual trigger here
- Execute the workflow once
- Copy the Gmail Label IDs from the output of the "Required labels" node to the "Globals" node
- Disable the manual trigger here and and enable the Gmail Trigger again
- Activate the workflow, so it runs automatically in the background

## Set Globals
Use the setup instructions below to retrieve the values for both `errorLabelID` and `processedLabelID`

## Select Base
Select the database and the table where the "Routes" are defined

The Gmail inbox is checked every minute for new entries

Extract the Airtable Row ID from the Email address

Filter by labels to prohibit double-processing

Dynamically build request body for Notion, since dynamic auth, and content with optional fields require a custom request

The custom built request including the user specific authentication is sent to Notion to create a new Page inside of a database

The Email is processed in multiple ways:
- An actionable task is being generated based on the content, consisting of a short title, a short description and optionally a few details as bullet points
- A detailed Email summary is being generated
- Meta data is being extracted - so the user has a reference to find the original Email again
- To get more stable results, the tasks are devided between two Agents

Skip disabled routes (determined by a checkbox attribute in Airtable)

Send custom Email notifications back to sender, containing an error message and suggestions to fix it

Add labels which prevent from double-processing

Disable a checkbox attribute in Airtable which determines if a route is active

</details>
