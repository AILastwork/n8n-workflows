# Telegram ai bot assistant ready made template for voice text messages

> Готовый Telegram-бот с ИИ (OpenAI): отвечает на текстовые и голосовые сообщения.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
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

This workflow is a Telegram chatbot that uses OpenAI's language model to engage in natural language conversations with users, providing helpful responses to both text and voice messages.

Example: A user could use this workflow to have a conversational experience with an AI assistant on Telegram, asking questions, getting information, or even just chatting. The AI agent can understand and respond to both text and voice messages, making it a versatile tool for users.

## What You Can Do
- Supports both text and voice input from users, with automatic transcription of voice messages
- Leverages OpenAI's powerful language model to provide intelligent and contextual responses
- Maintains a conversation history to ensure the AI agent's responses are coherent and relevant
- Provides a user-friendly Telegram interface for easy interaction

</details>
