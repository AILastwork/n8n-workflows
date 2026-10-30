# Get Airtable data in Obsidian Notes

> Получает данные из Airtable прямо в заметки Obsidian через ИИ-агента.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | Airtable, OpenAI |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | `airtableTokenApi`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

[![YouTube Video](https://img.youtube.com/vi/2PIdeTgsENo/0.jpg)](https://www.youtube.com/watch?v=2PIdeTgsENo)

## Get Airtable Data in Obsidian with AI Agent
<-- Watch the video to see it in action!

**How to Set Up:**
- Install the [Post Webhook Plugin](https://github.com/Masterb1234/obsidian-post-webhook/) in Obsidian.
- Insert the n8n Webhook URL into the Post Webhook plugin settings.
- Configure Your Airtable Node to match your workflow needs.


**How to Use:**
- Highlight text containing a question about your Airtable data.
- Open the Obsidian Command Palette (Ctrl+P) and choose 'Send Selection to [Your Webhook]'.
- Click, wait for the AI Agent to process your request, and see the result appear below your selected text.

</details>
