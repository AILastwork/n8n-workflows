# Send specific PDF attachments from Gmail to Google Drive using OpenAI

> Отбирает нужные PDF-вложения Gmail через OpenAI и сохраняет их в Google Drive.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Gmail |
| **Сервисы** | Gmail, Google Drive, OpenAI |
| **Узлов в схеме** | 16 |
| **Нужные учётные данные** | `gmailOAuth2`, `googleDriveOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Send specific PDF attachments from Gmail to Google Drive using OpenAI

_**DISCLAIMER**: You may have varying success when using this workflow so be prepared to validate the correctness of OpenAI's results._

This workflow reads PDF textual content and sends the text to OpenAI. Attachments of interest will then be uploaded to a specified Google Drive folder. For example, you may wish to send invoices received from an email to an inbox folder in Google Drive for later processing. This workflow has been designed to easily change the search term to match your needs. See the workflow for more details.

### How it works
1. Triggers off on the `On email received` node.
2. Iterates over the attachments in the email.
3. Uses the `OpenAI` node to filter out the attachments that do not match the search term set in the `Configure` node. You could match on various PDF files (i.e. invoice, receipt, or contract).
4. If the PDF attachment matches the search term, the workflow uses the `Google Drive` node to upload the PDF attachment to a specific Google Drive folder.


Workflow written by [David Sha](https://davidsha.me).

### Configuration















__`Match on`(required)__: What should OpenAI's search term be? Examples: invoice, callsheet, receipt, contract, payslip.
__`Google Drive folder to upload matched PDFs`(required)__: Paste the link of the GDrive folder, an example has been provided but will need to change to a folder you own.
__`maxTokenSize`(required)__: The maximum token size for the model you choose. See possible models from OpenAI [here](https://platform.openai.com/docs/models/gpt-3).
__`replyTokenSize`(required)__: The reply's maximum token size. Default is 300. This determines how much text the AI will reply with.

</details>
