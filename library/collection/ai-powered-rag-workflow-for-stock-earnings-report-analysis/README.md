# RAG Workflow For Stock Earnings Report Analysis

> RAG-анализ отчётов компаний о прибыли: индексирует PDF в Pinecone (Gemini-эмбеддинги) и пишет отчёт в Google Docs.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Google Docs, Google Drive, Google Gemini, Google Sheets, OpenAI, Pinecone |
| **Узлов в схеме** | 15 |
| **Нужные учётные данные** | `googleDocsOAuth2Api`, `googleDriveOAuth2Api`, `googlePalmApi`, `googleSheetsOAuth2Api`, `openAiApi`, `pineconeApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Set up steps
1. Google Cloud Project & Vertex AI API:
	* Create a Google Cloud project.
	* Enable the Vertex AI API for your project.
2. Google AI API key:
	* Obtain a Google AI API key from Google AI Studio.
3. Pinecone account and API key:
	* Create a free account on the Pinecone website.
	* Obtain your API key from your Pinecone dashboard.
	* Create an index named company-earnings in your Pinecone project.
4. Google Drive - download and save financial documents:
	* Go to a company you want to analize and download their quarterly earnings PDFs
	* Save the PDFs in Google Drive
	* Create a Google Sheet that stores a list of file URLs pointing to the PDFs you downloaded and saved to Google Drive
5. Configure credentials in your n8n environment for:
	* Google Sheets OAuth2
	* Google Drive OAuth2
	* Google Docs OAuth2
	* Google Gemini(PaLM) Api (using your Google AI API key)
	* Pinecone API (using your Pinecone API key)
6. Import and configure the workflow:
	* Import this workflow into your n8n instance.
	* Update the List Of Files To Load (Google Sheets) node to point to your Google Sheet.
	* Update the Download File From Google Drive to point to the column where the file URLs are
	* Update the Save Report to Google Docs node to point to your Google Doc where you want the report saved.

## Loading data to Pinecone vector store

## AI Agent Report Generation using RAG

</details>
