# RAG Workflow For Company Documents stored in Google Drive

> RAG по документам компании в Google Drive (Gemini + Pinecone), обновляется при изменении файлов.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Google Drive, чат |
| **Сервисы** | Google Drive, Google Gemini, Pinecone |
| **Узлов в схеме** | 15 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `googlePalmApi`, `pineconeApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Chat with company documents

## Add docuemnts to vector store when updating or creating new documents in Google Drive

## Set up steps

1. Google Cloud Project and Vertex AI API:
* Create a Google Cloud project.
* Enable the Vertex AI API for your project.
2. Google AI API Key:
* Obtain a Google AI API key from Google AI Studio.
3. Pinecone Account:
* Create a free account on the Pinecone website.
Obtain your API key from your Pinecone dashboard.
* Create an index named company-files in your Pinecone project.
4. Google Drive:
* Create a dedicated folder in your Google Drive where company documents will be stored.
5. Credentials in n8n: Configure credentials in your n8n environment for:
* Google Drive OAuth2
* Google Gemini(PaLM) Api (using your Google AI API key)
* Pinecone API (using your Pinecone API key)
5. Import the Workflow:
* Import this workflow into your n8n instance.
6. Configure the Workflow:
* Update both Google Drive Trigger nodes to watch the specific folder you created in your Google Drive.
* Configure the Pinecone Vector Store nodes to use your company-files index.

</details>
