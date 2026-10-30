# Chat with local LLMs using n8n and Ollama

> Чат с локальными моделями через Ollama.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | чат |
| **Сервисы** | Ollama |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | `ollamaApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Chat with local LLMs using n8n and Ollama
This n8n workflow allows you to seamlessly interact with your self-hosted Large Language Models (LLMs) through a user-friendly chat interface. By connecting to Ollama, a powerful tool for managing local LLMs, you can send prompts and receive AI-generated responses directly within n8n.

### How it works
1. When chat message received: Captures the user's input from the chat interface.
2. Chat LLM Chain: Sends the input to the Ollama server and receives the AI-generated response.
3. Delivers the LLM's response back to the chat interface.

### Set up steps
* Make sure Ollama is installed and running on your machine before executing this workflow.
* Edit the Ollama address if different from the default.

## Ollama setup
* Connect to your local Ollama, usually on http://localhost:11434
* If running in Docker, make sure that the n8n container has access to the host's network in order to connect to Ollama. You can do this by passing `--net=host` option when starting the n8n Docker container

</details>
