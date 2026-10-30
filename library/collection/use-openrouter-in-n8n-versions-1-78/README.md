# Use any LLM-Model via OpenRouter

> Используйте любую модель через OpenRouter (OpenAI, Gemini, DeepSeek, Mistral и др.).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | чат |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Settings
Specify the model

## Run LLM
Using OpenRouter to make model fully configurable

## Model examples

* openai/o3-mini
* google/gemini-2.0-flash-001
* deepseek/deepseek-r1-distill-llama-8b
* mistralai/mistral-small-24b-instruct-2501:free
* qwen/qwen-turbo

For more see https://openrouter.ai/models

</details>
