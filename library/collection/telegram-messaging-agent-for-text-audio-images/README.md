# 🤖 Telegram Messaging Agent for Text/Audio/Images

> Telegram-агент для текста, голосовых и картинок (OpenAI).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | OpenAI, Telegram |
| **Узлов в схеме** | 29 |
| **Нужные учётные данные** | `openAiApi`, `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# Receive Telegram Message with Webhook

# Telegram Webhook Tools

## Setting your Telegram Bot WebHook the Easy Way

# Process Audio

# Process Image

# How to set up a Telegram Bot WebHook

## WebHook Setup Process

**Basic Concept**
A WebHook allows your Telegram bot to automatically receive updates instead of manually polling the Bot API.

**Setup Method**
To set a WebHook, make a GET request using this URL format:
```
https://api.telegram.org/bot{my_bot_token}/setWebhook?url={url_to_send_updates_to}
```
Where:
- `my_bot_token`: Your bot token from BotFather
- `url_to_send_updates_to`: Your HTTPS endpoint that handles bot updates


**Verification**
To verify the WebHook setup, use:
```
https://api.telegram.org/bot{my_bot_token}/getWebhookInfo
```

A successful response looks like:
```json
{
 "ok": true,
 "result": {
 "url": "https://www.example.com/my-telegram-bot/",
 "has_custom_certificate": false,
 "pending_update_count": 0,
 "max_connections": 40
 }
}
```


This method provides a simple and efficient way to handle Telegram bot updates automatically through webhooks rather than manual polling.

# Process Text

## Validate Telegram User

## Webhook Status

## Set Webhook for Testing

## Set Webhook for Production

</details>
