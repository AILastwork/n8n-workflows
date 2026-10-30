# 🐋🤖 DeepSeek AI Agent + Telegram + LONG TERM Memory 🧠

> ИИ-агент на DeepSeek в Telegram с долговременной памятью в Google Docs.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук, чат |
| **Сервисы** | Google Docs, OpenAI, Telegram |
| **Узлов в схеме** | 15 |
| **Нужные учётные данные** | `googleDocsOAuth2Api`, `openAiApi`, `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# Receive Telegram Message with Webhook

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

## Validate Telegram User

# Process Text Message

## Retrieve Long Term Memories
Google Docs

## Save To Current Chat Memory (Optional)

## Save Long Term Memories
Google Docs

# DeepSeek API Call

The DeepSeek API uses an API format compatible with OpenAI. By modifying the configuration, you can use the OpenAI SDK or softwares compatible with the OpenAI API to access the DeepSeek API.

https://api-docs.deepseek.com/

## Configuration Parameters

| Parameter | Value |
|-----------|--------|
| base_url | https://api.deepseek.com |
| api_key | https://platform.deepseek.com/api_keys |



## Important Notes

- To be compatible with OpenAI, you can also use `https://api.deepseek.com/v1` as the base_url. Note that the v1 here has NO relationship with the model's version.

- The deepseek-chat model has been upgraded to DeepSeek-V3. The API remains unchanged. You can invoke DeepSeek-V3 by specifying `model='deepseek-chat'`.

- deepseek-reasoner is the latest reasoning model, DeepSeek-R1, released by DeepSeek. You can invoke DeepSeek-R1 by specifying `model='deepseek-reasoner'`.

</details>
