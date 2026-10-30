# Play with Spotify from Telegram

> Управляйте Spotify из Telegram: ИИ находит трек по описанию и включает его.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Telegram |
| **Сервисы** | OpenAI, Spotify, Telegram |
| **Узлов в схеме** | 13 |
| **Нужные учётные данные** | `openAiApi`, `spotifyOAuth2Api`, `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Telegram to Spotify 
Ask AI about a track with artist and song name or if you can't remember describe it and AI does it's thing.

</details>
