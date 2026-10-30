# Very simple Human in the loop system email with AI e IMAP

> Простая система «человек в цикле» для почты: ИИ готовит ответ на письмо IMAP по базе знаний, человек подтверждает перед отправкой.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | новое письмо (IMAP) |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 10 |
| **Нужные учётные данные** | `imap`, `openAiApi`, `smtp` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

Chain that summarizes the received email

Agent that retrieves business information from a vector database and processes the response

Convert email to Markdown format for better understanding of LLM models

If the feedback is OK send email

Human in the loop

# How it works
This workflow automates the handling of incoming emails, summarizes their content, generates appropriate responses and validate it through send IMAP email with "Human in the loop" system. 

You can quickly integrate Gmail and Outlook via the appropriate nodes

</details>
