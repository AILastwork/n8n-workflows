# Translate Telegram audio messages with AI (55 supported languages) v1

> Переводит голосовые сообщения в Telegram на нужный язык (55 языков) и отвечает текстом и голосом.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Telegram |
| **Сервисы** | OpenAI, Telegram |
| **Узлов в схеме** | 10 |
| **Нужные учётные данные** | `openAiApi`, `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Translation

- Converts from speech to text.

- Translates the language from the native language to translated language (as specified in settings node)

## Telegram output

- Provide the output in both text as well as speech. 

- Many languages are supported including English,French, German, Spanish, Chinese, Japanese.

Full list here:
https://platform.openai.com/docs/guides/speech-to-text/supported-languages

## Multi-lingual AI Powered Universal Translator with Speech ⭐

### Key capabilities
This flow enables a Telegram bot that can 
- accept speech in one of 55 languages 
- translates to another language and returns result in speech

### Use case:
- Learning a new language
- Communicate with others while traveling to another country

### Setup
- Open the Settings node and specify the languages you would like to work with

</details>
