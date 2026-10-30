# Convert image urls to an uploaded attachment in airtable

> Загружает картинки по ссылкам как вложения в Airtable.

| | |
|---|---|
| **Категория** | [🔄 Преобразование данных](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Airtable |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically uploads image URLs as attachments in an Airtable database.

Example: A marketing team managing a product catalog in Airtable could use this workflow to easily add product images to their database by simply entering the image URLs in a designated field.

## What You Can Do
- Automatically retrieves all records with a non-empty image URL field
- Updates the attachment field in Airtable with the corresponding image for each record
- Provides a step-by-step guide and example Airtable database to help users set up the workflow

</details>
