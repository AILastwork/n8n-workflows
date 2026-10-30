# Advanced ai demo presented at ai developers 14 meetup

> Демо с митапа AI Developers: классифицирует входящие письма Gmail, загружает PDF в векторное хранилище и даёт чат с документами (OpenAI/Anthropic).

| | |
|---|---|
| **Категория** | [⚙️ Автоматизация](../README.md) |
| **Запуск** | вебхук, событие в Gmail, чат |
| **Сервисы** | Anthropic Claude, Gmail, OpenAI, Pinecone, Slack |
| **Узлов в схеме** | 26 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# 2358 Advanced Ai Demo Presented At Ai Developers 14 Meetup

This workflow uses AI and automation to categorize incoming emails, load PDF documents into a vector store, and provide a conversational interface to interact with the PDF content.

Example: A marketing team could use this workflow to automatically categorize and organize incoming emails related to their marketing campaigns. They could then load relevant whitepapers or industry reports into the system, allowing their sales team to quickly find and reference key information when chatting with prospects.

## What You Can Do
- Automatic email categorization using natural language processing
- PDF document ingestion and storage in a vector database for efficient retrieval
- Conversational interface to query the PDF content using natural language
- Calendar integration to schedule meetings based on availability

## Quick Start
1. Import this workflow to n8n
2. Configure your settings
3. Start automating!

⚠️ WARNING: Stop Building Basic Automations For Peanuts. 🚫

Here's the painful truth most won't tell you...

While 90% of builders are stuck selling $500 n8n workflows (and working way too hard)...
I'm consistently closing $6k-13k deals by doing ONE thing differently:
I combine simple automations with custom AI that takes less than a week to build.

Recent client wins:
* Turned a basic invoicing headache into a $6k project that saves my client 20 hours/week
* Built a lead generation machine for law firms - they happily paid $13k (and it runs 24/7)
* Created AI-powered SEO automation that beats funded companies (using $0 in AI costs)

Time to build each solution? Under 2 hours.

But here's what's crazy...
Most automation builders think AI is "too complex" or "too expensive" to add to their stack.
(Meanwhile, I'm charging 10x more for solutions that take the same time to build)

Want to see exactly how I do it?
Inside our community, I show you:
* The exact AI components that 3x your pricing overnight
* My "$15k Solution Stack" (n8n + AI framework)
* Word-for-word scripts to close premium deals
* Real examples of my $10k+ builds
* The psychology behind why clients happily pay more

Get your free trial here (closing soon): https://www.skool.com/masterclass-marketing

</details>
