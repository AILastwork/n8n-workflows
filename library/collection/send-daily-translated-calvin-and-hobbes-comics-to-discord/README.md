# Send daily translated Calvin and Hobbes Comics to Discord

> Каждый день отправляет в Discord комикс Calvin and Hobbes с переводом через ИИ.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Discord, OpenAI |
| **Узлов в схеме** | 7 |
| **Нужные учётные данные** | `discordWebhookApi`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

![](https://raw.githubusercontent.com/2innnnn0/30-Days-of-ChatGPT/refs/heads/main/datapopcorn_logo_50px.png)
# Daily Cartoon (w/ AI Translate)

### How it works
- Automates the retrieval of Calvin and Hobbes daily comics.
- Extracts the comic image URL from the website.
- Translates comic dialogues to English and Korean(Other Language)
- Posts the comic and translations to Discord daily.

### Set up steps
- Estimated setup time: ~10-15 minutes.
- Use a **Schedule Trigger** to automate the workflow at 9 AM daily.
- Add nodes for parameter setup, HTTP request, data extraction, and integration with Discord.
- Add detailed notes to each node in the workflow for easy understanding.

</details>
