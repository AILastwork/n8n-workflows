# Docsify example

> Автоматически генерирует документацию для воркфлоу n8n через GPT и показывает её в Docsify.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | OpenAI, n8n API |
| **Узлов в схеме** | 48 |
| **Нужные учётные данные** | `n8nApi`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Main Docsify webhook
In response, n8n serves the main html page with the [Docsify JS library](https://docsify.js.org/)

## Single page requests
* Docsify may request default pages (i.e. `readme.md` or a `summary.md`)
* GET request for the workflow documentation pages
* POST request for saving manually edited doc page

## EDIT THIS!
* `project_path` to link to a writable directory that is accessible to n8n
* update `instance_url` when running in the cloud version. If using in self-hosted mode, make sure N8N_PROTOCOL and N8N_HOST .env variables are correct

## Construct main HTML page and send it back to the user
* `HTML_headers` and `HTML_docsify_include` are stored in the CONFIG node for the page simplicity

## Serve main Markdown table with the workflow overview
*NOTE! Here we don't reply with HTML content. Only Markdown elements are sent back and processed by the JS library*
* Create an overall table when `README.md` (the home page) is requested
* Create a table with a subset of workflows when a tag from a navigation pane is selected

## Serve left pane content
* Here all workflows are fetched again when `summary.md` file is requested.

It contains Markdown for the left navigation pane: a list of all tags

## Handle missing pages
Serve the Markdown content with the requested file name for edge cases, i.e. any unexpected files

# Main functionality here

## * View existing documentation
## * Auto-generate doc page if no file available
## * Re-created autodoc page
## * Edit doc page: LIVE Markdown editor included!
## * Save edited file. WARNING! No authentication

## Custom markdown editor
This is another HTML page for the live Markdown editor
* `Mermaid.js` is supported
* Docsify preview on edit
* Save or Cancel buttons

## Save new file
Once the doc page is generated or edited manually, a Markdown files is saved in the directory

## Load existing doc file
Check the existing file when the View or Edit button is pressed

## If the file is not available, then:
* either auto-generate new doc
* prepare a basic template for editing

</details>
