# OpenAI-model-examples

> Примеры моделей OpenAI: старые text completion/edit, Whisper и др.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 17 |
| **Нужные учётные данные** | `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## The old way of using text completion and text edit
### Davinci model is 10 times more expensive then ChatGPT, consider switching to the new API:
https://openai.com/blog/introducing-chatgpt-and-whisper-apis

## Whisper-1 example
### Prepare your audio file and send it to whisper-1 transcription model

## An example of transcribed text
### Please pause this node when using real audio files

## ChatGPT example 1.1 and 1.2 
### Write a Tl;dr of the text input
### Translate it to German
### only user content provided

## ChatGPT example 2 
### Use system content to provide general instruction
### Manual setup of system and user content

## ChatGPT example 3.1
### When using ChatGPT programmatically, create an array of system / user / assistant contents and append them one after another
### Call ChatGPT API via HTTP Request node to provide all messages at once

## ChatGPT example 3.2 & DALLE-2 example 3.3
### Use ChatGPT to create a prompt for a cover image of the Tl;dr message
### Use OpenAI node to generate 4 images using the auto-generated prompt

## ChatGPT example 4
### Generate HTML code that contains SVG image

## ChatGPT example 5
### Provide several outputs. Useful for quick replies (i.e. in Gmail / Outlook)

## Do not run the whole workflow, it's rather slow
### Better execute the last node of each branch or simply disconnect branches that are not needed

</details>
