# Supabase Insertion & Upsertion & Retrieval

> Загрузка, обновление и поиск документов в векторной базе Supabase с чат-ботом.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | чат |
| **Сервисы** | Google Drive, OpenAI, Supabase |
| **Узлов в схеме** | 16 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# INSERTING

- it's important to use the same embedding model when for any interaction with your vector database (inserting, upserting and retrieval)

# UPSERTING

# PREPARATION (in Supabase)

- your database needs the extension 'pgvector' enabled -> select Database > Extension > Search for 'vector'
- make sure you have a table that has the following columns (if not, use the query below in the Supabase SQL Editor)

```
ALTER TABLE "YOUR TABLE NAME"
ADD COLUMN embedding VECTOR(1536), // check which number of dimensions you need (depends on the embed model)
ADD COLUMN metadata JSONB,
ADD COLUMN content TEXT;
```

- make sure you have the right policies set -> select Authentication > Policies
- make sure you have the custom function `match_documents` set up in Supabase -> This is needed for the Vector Store Node (as query name) 
(if not, use the query below in the Supabase SQL Editor to create that function)
- make sure you check the size of the AI model as it should be the same vector size for the table 
(e.g. OpenAI's Text-Embedding-3-Small uses 1536)

```
CREATE OR REPLACE FUNCTION public.match_documents(
 filter JSONB,
 match_count INT,
 query_embedding VECTOR(1536) // should match same dimensions as from insertion
)
RETURNS TABLE (
 id BIGINT,
 content TEXT,
 metadata JSONB,
 embedding VECTOR(1536), // should match same dimensions as from insertion
 similarity FLOAT
)
LANGUAGE plpgsql AS $$
BEGIN
 RETURN QUERY
 SELECT
 v.id,
 v.content,
 v.metadata,
 v.embedding,
 1 - (v.embedding <=> match_documents.query_embedding) AS similarity
 FROM "YOUR TABLE NAME" v
 WHERE v.metadata @> filter
 ORDER BY v.embedding <=> match_documents.query_embedding
 LIMIT match_count;
END;
$$
;
```

# RETRIEVAL

# DELETION

At the moment n8n does not have a built-in Supabase Node to delete records in a Vector Database. For this you would typically use the HTTP Request node to make an authorized API call to Supabase. 

## HTTP Request Node

Use this node to send a DELETE request to your Supabase instance.

- Supabase API Endpoint: Use the appropriate URL for your Supabase project. The endpoint will typically look like this: [https://<your-supabase-ref>.supabase.co/rest/v1/<your-vector-table>](https://supabase.com/docs/guides/api). Replace `<your-supabase-ref>` and `<your-vector-table>` with your details.
### HEADERS:
- apikey: Your Supabase API key.
- Authorization: Bearer token with your Supabase JWT.
- Query Parameters: Use query parameters to specify which record(s) to delete. For example, `?id=eq.<your-record-id>` where `<your-record-id>` is the specific record ID you want to delete 
(You can also reference back to the **Retrieve Rows From Table** Node to get the ID dynamically)

Ensure you have the necessary permissions set up in Supabase to delete records through the API.

Please refer to the official n8n documentation for more detailed information on using the [HTTP Request Node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/).

_Note:_ Deleting records is a sensitive operation, so make sure that your permissions are correctly configured and that you are targeting the correct records to avoid unwanted data loss.

</details>
