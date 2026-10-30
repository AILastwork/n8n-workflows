# Store Notion's Pages as Vector Documents into Supabase with OpenAI

> Загружает страницы Notion как векторные документы в Supabase (OpenAI).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Notion |
| **Сервисы** | Notion, OpenAI, Supabase |
| **Узлов в схеме** | 8 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Store Notion's Pages as Vector Documents into Supabase

**This workflow assumes you have a Supabase project with a table that has a vector column. If you don't have it, follow the instructions here:** [Supabase Vector Columns Guide](https://supabase.com/docs/guides/ai/vector-columns)

## Workflow Description

This workflow automates the process of storing Notion pages as vector documents in a Supabase database with a vector column. The steps are as follows:

1. **Notion Page Added Trigger**:
 - Monitors a specified Notion database for newly added pages. You can create a specific Notion database where you copy the pages you want to store in Supabase.
 - Node: `Page Added in Notion Database`

2. **Retrieve Page Content**:
 - Fetches all block content from the newly added Notion page.
 - Node: `Get Blocks Content`

3. **Filter Non-Text Content**:
 - Excludes blocks of type "image" and "video" to focus on textual content.
 - Node: `Filter - Exclude Media Content`

4. **Summarize Content**:
 - Concatenates the Notion blocks content to create a single text for embedding.
 - Node: `Summarize - Concatenate Notion's blocks content`

5. **Store in Supabase**:
 - Stores the processed documents and their embeddings into a Supabase table with a vector column.
 - Node: `Store Documents in Supabase`

6. **Generate Embeddings**:
 - Utilizes OpenAI's API to generate embeddings for the textual content.
 - Node: `Generate Text Embeddings`


7. **Create Metadata and Load Content**:
 - Loads the block content and creates associated metadata, such as page ID and block ID.
 - Node: `Load Block Content & Create Metadata`

8. **Split Content into Chunks**:
 - Divides the text into smaller chunks for easier processing and embedding generation.
 - Node: `Token Splitter`

</details>
