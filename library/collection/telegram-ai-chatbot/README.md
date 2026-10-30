# Telegram AI-bot

> Telegram-бот с ИИ: чат и генерация картинок по команде /image.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Telegram |
| **Сервисы** | OpenAI, Telegram |
| **Узлов в схеме** | 12 |
| **Нужные учётные данные** | `openAiApi`, `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Error fallback for unsupported commands

## Chatbot mode by default
### (when no command is provided)

## Welcome message
### /start

## Create an image
### /image + request

</details>
