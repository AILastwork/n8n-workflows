# OpenAI Personal Shopper with RAG and WooCommerce

> ИИ-консультант для магазина WooCommerce: RAG по документам (Qdrant) и поиск товаров.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, чат |
| **Сервисы** | Google Drive, OpenAI, Qdrant, WooCommerce |
| **Узлов в схеме** | 21 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `httpHeaderAuth`, `openAiApi`, `qdrantApi`, `wooCommerceApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

Replace the URL and Collection name with your own

## Step 1 
Create a collectiopn on your Qdrant instance. Then create a basic RAG system with documents uploaded to Google Drive and embedded in the Qdrant vector database

## Step 1 
Create a basic RAG system with documents uploaded to Google Drive and embedded in the Qdrant vector database

## Step 2 
The Information Extractor tries to understand if the request is related to products and if so, it extracts the useful information to filter the products available on WooCommerce by calling the "personal_shopper". If it is a general question, the RAG system is called

</details>
