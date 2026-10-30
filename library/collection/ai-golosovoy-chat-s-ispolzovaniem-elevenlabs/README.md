# AI Voice Chat using Webhook, Memory Manager, OpenAI, Google Gemini & ElevenLabs

> Голосовой ИИ-чат: распознаёт речь (OpenAI), отвечает через Gemini с памятью и озвучивает ответ через ElevenLabs.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | Google Gemini, OpenAI |
| **Узлов в схеме** | 11 |
| **Нужные учётные данные** | `googlePalmApi`, `httpCustomAuth`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Get Context

## Save Context

* ### For the Text-to-Speech part, we'll use ElevenLabs.io, which is free and offers a variety of voices to choose from. However, you can also use the OpenAI `"Generate audio"` node instead.

















* ### Since there is no pre-built node for `"ElevenLabs"` in n8n, we'll connect to it through its API using the "HTTP Request" node.

## Prerequisites:
* ### `"ElevenLabs API Key"` (you can obtain it from their website).
* ### `"Voice ID"` (you can also get it from ElevenLabs' "Voice Library").
## Setup
* ### In the URL parameter, replace "{{voice id}}" at the end of the URL with the Voice ID you obtained from ElevenLabs.io.
* ### To set up your API Key, add custom authentication and include the following `JSON` with your acual ElevenLabs API Key:
```json
{
 "headers": {
 "xi-api-key": "put-your-API-Key-here"
 }
}
```

### The "Get Chat," "Insert Chat," and "Window Buffer Memory" nodes will help the LLM model maintain context throughout the conversation.

</details>
