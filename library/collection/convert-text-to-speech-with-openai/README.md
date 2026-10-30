# Text to Speech (OpenAI)

> Озвучивает текст через OpenAI TTS.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Workflow Trigger
You can replace this manual trigger with another trigger type as required by your use case.

## Manually Set OpenAI TTS Configuration

## Send Request to OpenAI TTS API

### Configuration Options
- "input_text" is the text you would like to be turned into speech, and can be replaced with a programmatic value for your use case. Bear in mind that the maximum number of tokens per API call is 4,000.

- "voice" is the voice used by the TTS model. The default is alloy, other options can be found here: [OpenAI TTS Docs](https://platform.openai.com/docs/guides/text-to-speech)

### Output
The output returned by OpenAI's TTS endpoint is a .mp3 audio file (binary).


### Credentials
To use this workflow, you'll have to configure and provide a valid OpenAI credential.

</details>
