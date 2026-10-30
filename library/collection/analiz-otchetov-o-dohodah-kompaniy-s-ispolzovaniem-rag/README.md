# Email AI Auto-responder. Summerize and send email

> ИИ-автоответчик почты: делает саммари письма и отвечает по базе знаний (Qdrant).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, новое письмо (IMAP) |
| **Сервисы** | Google Drive, OpenAI, Qdrant |
| **Узлов в схеме** | 23 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `httpHeaderAuth`, `imap`, `openAiApi`, `qdrantApi`, `smtp` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# STEP 1

## Create Qdrant Collection
Change:
- QDRANTURL
- COLLECTION

# STEP 2












## Documents vectorization with Qdrant and Google Drive
Change:
- QDRANTURL
- COLLECTION

# STEP 3 - MAIN FLOW

- Transform the email into Markdown format for optimal reading by the LLM model
- Email Summarization through DeepSeek R1 (any model can be used)
- I classify the email in such a way as to continue only with emails regarding general information about the company. In this way I can respond independently through the information obtained from the vector database
- I create a chain where I entrust the review of the email to a high-performance model designed for this purpose
- I send the response email

</details>
