# Convert baserow rich text markdown field to html

> Конвертирует поле Markdown (rich text) в Baserow в HTML.

| | |
|---|---|
| **Категория** | [🔄 Преобразование данных](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | Baserow |
| **Узлов в схеме** | 8 |
| **Нужные учётные данные** | `baserowApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically updates video descriptions in a Baserow database based on incoming webhook data, with the ability to handle both single record and bulk updates.

Example: A content creator could use this workflow to automatically update video descriptions in their Baserow database whenever a new video is published. The workflow would listen for a webhook trigger, fetch the relevant video description data, convert it from Markdown to HTML, and then update the corresponding record(s) in the Baserow database.

## What You Can Do
- Handles both single record and bulk updates to the Baserow database
- Automatically converts Markdown video descriptions to HTML for better formatting
- Utilizes a webhook trigger to listen for new video description data

</details>
