# YouTube Videos with AI Summaries on Discord

> Публикует новые YouTube-видео в Discord с ИИ-саммари.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в RSS |
| **Сервисы** | Discord, OpenAI, RSS |
| **Узлов в схеме** | 7 |
| **Нужные учётные данные** | `discordWebhookApi`, `openAiApi`, `youTubeOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### Summarise Your YouTube Videos with AI for Discord

📽️ [Watch the Video Tutorial](https://mrc.fm/ai2d)

* Add your [YouTube channel ID](https://www.youtube.com/account_advanced) to the URL in the first node: `https://www.youtube.com/feeds/videos.xml?channel_id=YOUR_CHANNEL_ID`.

* Ensure authorization with the YouTube channel that you want to download captions from.

</details>
