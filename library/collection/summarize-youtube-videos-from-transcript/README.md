# Summarize YouTube Videos from Transcript

> Делает саммари YouTube-видео по расшифровке.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | форма n8n |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

**Summarize YouTube videos**

This project automates the summarization of YouTube videos, transforming lengthy content into concise, actionable insights. By leveraging AI and workflow automation, it extracts video transcripts, analyzes key points, and generates summaries, saving time for content creators, researchers, and professionals. Perfect for staying informed, conducting research, or repurposing video content efficiently.

Add the full YouTube URL. ☝️
You can change this input to a webhook or anything else.

Once you follow the Setup Instructions (mentioned in the template page description), you can insert the full URL endpoint, which includes both the POST Endpoint and API Key. 👇

☝️ Optional
If the workflow ends here, Consider checking with another enrichment service.

The summarization node works automatically and professionally, recognizing the input text and processing it directly without requiring any enhancements from your side👇

</details>
