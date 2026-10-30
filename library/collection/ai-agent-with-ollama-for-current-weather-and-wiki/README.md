# AI Agent with Ollama for current weather and wiki

> Локальный ИИ-агент на Ollama, который умеет узнавать текущую погоду и искать в Википедии.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | чат |
| **Сервисы** | Ollama, Wikipedia |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `ollamaApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### The conversation history(last 20 messages) is stored in a buffer memory

### Tools which agent can use to accomplish the task

### Conversational agent will utilise available tools to answer the prompt.

### In System Message, add the following.

"You are a helpful assistant, with weather tool and wiki tool. find out the latitude and longitude information of a location then use the weather tool for current weather and weather forecast. For general info, use the wiki tool."

</details>
