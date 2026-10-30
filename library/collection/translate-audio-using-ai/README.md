# Translate audio using AI

> Переводит аудио на другой язык с озвучкой через ElevenLabs.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 7 |
| **Нужные учётные данные** | `httpHeaderAuth`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

1] In ElevenLabs, add a voice to your [voice lab](https://elevenlabs.io/voice-lab) and copy its ID. Open this node and add the ID there

2] Get your ElevenLabs API key (click your name in the bottom-left of [ElevenLabs](https://elevenlabs.io/voice-lab) and choose ‘profile’)

In this node, create a new header auth cred. Set the name to `xi-api-key` and the value to your API key

3] In the 'credential' field of this node, create a new OpenAI cred with your [OpenAI API key](https://platform.openai.com/api-keys)

### About
This workflow takes some French text, and translates it into spoken audio.

It then transcribes that audio back into text, translates it into English and generates an audio file of the English text

### Setup steps

</details>
