# Advanced AI Demo (Presented at AI Developers #14 meetup)

> Демо продвинутых ИИ-сценариев: классификация писем, RAG по PDF в Pinecone, чат с документами.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
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

![h](https://i.postimg.cc/9XLvL5dL/slide-sf-talk.png#full-width)

# What is n8n?
### Low-code Automation Platform for technical teams

# Example #2
### RAG with PDF as source

## A. Load PDF into Pinecone
Download the PDF, then text embeddings into Pincecone

## B. Chat with PDF
Use GPT4o to chat with Pinecone index

# Example #3
### AI Assistant that knows how to use predefined API endpoints

# Example #1
### Categorize incoming emails with AI

![h](https://i.imghippo.com/files/d9Bgv1721858679.png#full-width)
[Open Calendar](https://calendar.google.com/calendar/u/0/r/day/2024/7/26)

![h](https://i.postimg.cc/kXW9XrZt/Screenshot-2024-07-24-at-15-18-27.png#full-width)
BTC Whitepaper references

### Connect with me or explore this demo 👇
![QR](https://i.postimg.cc/VNkdCLQh/frame.png#full-width)

# Thank you and happy flowgramming 🤘

### Max Tkacz | Senior Developer Advocate @ n8n

### Explore 100+ AI Workflow templates on n8n.io
[Open Templates Library](https://n8n.io/workflows)

### Ask a question in our community (13k+ members)
[Explore n8n community](https://community.n8n.io/)

</details>
