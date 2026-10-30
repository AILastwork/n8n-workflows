# Receive Daily Market News from FT.com to your Microsoft outlook inbox

> Каждое утро присылает на почту Outlook дайджест финансовых новостей FT.com (Gemini).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Google Gemini, Outlook |
| **Узлов в схеме** | 7 |
| **Нужные учётные данные** | `googlePalmApi`, `microsoftOutlookOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# Financial News Recap Workflow

This workflow automates the daily email delivery of curated financial news to a designated recipient at 7:00 AM. It extracts relevant financial news articles, structures the content, and sends it in a concise summary format via Microsoft Outlook.

### Workflow Steps
1. **Schedule Trigger** 
 Sets the workflow to activate daily at 7:00 AM.
2. **Fetch Financial News** 
 Retrieves financial news content from [ft.com](https://www.ft.com/) using an HTTP Request node.
3. **Extract News Headlines and Sections** 
 Using CSS selectors, this node parses specific sections of the HTML page to gather key headlines and sections:
 - Headline #1, Headline #2
 - Editor's Picks
 - etc.
4. **Aggregate News Content** 
 Combines all extracted news sections into a single data set, organizing content under relevant categories.
5. **AI Agent for Summarization** 
 A Google Gemini Chat Model generates a structured summary in HTML format, optimized to provide investors with a clear market overview.
6. **Email Dispatch** 
 Sends the summarized content via Microsoft Outlook with a subject "Financial news from today," formatted in HTML for clarity and readability.

</details>
