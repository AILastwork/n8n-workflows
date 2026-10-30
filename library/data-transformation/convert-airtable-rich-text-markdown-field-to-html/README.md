# Convert airtable rich text markdown field to html

> Конвертирует поле Markdown (rich text) в Airtable в HTML.

| | |
|---|---|
| **Категория** | [🔄 Преобразование данных](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | Airtable |
| **Узлов в схеме** | 8 |
| **Нужные учётные данные** | `airtableTokenApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically updates the HTML version of video descriptions in an Airtable base, either for a single record or for all records, based on the incoming webhook request.

Example: This workflow could be used by a content team that manages a library of video tutorials in Airtable. Whenever a new video is published or an existing video description is updated, the team can trigger the workflow via a webhook, and it will automatically convert the Markdown-formatted video description to HTML and update the corresponding Airtable record(s).

## What You Can Do
- Supports updating a single record or all records in the Airtable base
- Automatically converts Markdown-formatted video descriptions to HTML
- Provides a sticky note with a tutorial video link for reference

</details>
