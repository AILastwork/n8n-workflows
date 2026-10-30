# Telegram AI Langchain bot

> Telegram-бот на LangChain: чат и генерация картинок DALL·E 3.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вызов из другого воркфлоу, событие в Telegram |
| **Сервисы** | OpenAI, Telegram |
| **Узлов в схеме** | 11 |
| **Нужные учётные данные** | `openAiApi`, `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Generate an image with Dall-E 3 and send it via Telegram

</details>
