# 🐋DeepSeek V3 Chat & R1 Reasoning Quick Start

> Быстрый старт с DeepSeek V3 (чат) и R1 (рассуждения): через API, OpenAI-совместимый узел и локально через Ollama.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | чат |
| **Сервисы** | Ollama, OpenAI |
| **Узлов в схеме** | 8 |
| **Нужные учётные данные** | `httpHeaderAuth`, `ollamaApi`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## DeepSeek using HTTP Request
### DeepSeek Reasoner R1
https://api-docs.deepseek.com/
Raw Body

## DeepSeek with Ollama Local Model

## DeepSeek Conversational Agent w/Memory

## DeepSeek using HTTP Request
### DeepSeek Chat V3
https://api-docs.deepseek.com/
JSON Body

# Your First DeepSeek API Call

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

## Four Examples for Connecting to DeepSeek
https://api-docs.deepseek.com/
https://platform.deepseek.com/api_keys

### Ollama Local
https://ollama.com/
https://ollama.com/library/deepseek-r1

</details>
