# Send a ChatGPT email reply and save responses to Google Sheets

> Отвечает на письма через ChatGPT и сохраняет ответы и оценки в Google Sheets.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук, событие в Gmail |
| **Сервисы** | Gmail, Google Sheets, OpenAI |
| **Узлов в схеме** | 40 |
| **Нужные учётные данные** | `gmailOAuth2`, `googleSheetsOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### Configuration
If you decide to use your own spreadsheet, it is up to you to ensure all columns are present before running this workflow. A good way to do this is to run this workflow once with **empty** `spreadsheetid` and `worksheetId` variables (see the `Configure` node). Then map the output from `Store spreadsheet ID` to this node.

It is recommended that you specify the `spreadsheetId` and `worksheetId`, since relying solely on a workflow's static data is considered bad practice.
















__`spreadsheetId`__: The ID of the spreadsheet where Pipedrive deals will be stored.
__`worksheetId`__: The ID of the worksheet where Pipedrive deals will be stored.
__`spreadsheetName`(required)__: The human readable name of the spreadsheet where Pipedrive deals will be stored.
__`worksheetName`(required)__: The human readable name of the worksheet in the spreadsheet where Pipedrive deals will be stored.
__`recipients`(required)__: Comma-separated list of email recipients to send ChatGPT emails to. Use `*` to send ChatGPT response to every email address.
__`maxTokenSize`(required)__: The maximum token size for the model you choose. See possible models from OpenAI [here](https://platform.openai.com/docs/models/gpt-3).
__`replyTokenSize`(required)__: The reply's maximum token size. Default is 300. This determines how much text the AI will reply with.

### Create spreadsheet and populate with headers and deal information
A spreadsheet is created if the spreadsheet does not exist. The spreadsheet ID is stored in the `$getWorkflowStaticData('global')` variable. Using `Extract current deal` node, the deal information is formatted for the sending to the new spreadsheet.

### Tip: Deleting old spreadsheets
If you ever want to start over, delete the old spreadsheet, __making sure that it is also deleted from Google Drive's trash__.

### `Get spreadsheet ID`













The spreadsheet ID is stored in this workflow's static data. If you want to refresh the static data you will need to copy this entire workflow into a new workflow.

### `Get spreadsheet ID`













The spreadsheet ID is stored in this workflow's static data. If you want to refresh the static data you will need to copy this entire workflow into a new workflow.

If your workflow reaches this stage, you will need to consider increasing the tokens in `Generate reply` node.

## Send a ChatGPT email reply when email received and save responses to Google Sheets
This workflow sends a OpenAI GPT reply when an email is received from specific email recipients. It then saves the initial email and the GPT response to an automatically generated Google spreadsheet. Subsequent GPT responses will be added to the same spreadsheet. Additionally, when feedback is given for any of the GPT responses, it will be recorded to the spreasheet, which can then be used later to fine-tune the GPT model.

### How it works
This workflow is essentially a two-in-one workflow. It triggers off from two different nodes and have very different functionality from each trigger.

**`On email received`**:
1. Triggers off on the `On email received` node.
2. Extract the email body from the email.
3. Generate a response from the email body using the `OpenAI` node.
4. Reply to the email sender using the `Send reply to recipient` node. A feedback link is also included in the email body which will trigger the `On feedback given` node. This is used to fine-tune the GPT model.
5. Save the email body and OpenAI response to a Google Sheet. If a sheet does not exist, it will be created.


**`On feedback given`**:
1. Triggers off when a feedback link is clicked in the emailed GPT response.
2. The feedback, either positive or negative, for that specific GPT response is then recorded to the Google Sheet.

This workflow should never reach this node. It is only here for extending the functionality of this workflow if needed.

The email that was received is too large to process, as it exceeds token limit. See more on [token limits](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them).

</details>
