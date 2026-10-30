# Extract personal data with a self-hosted LLM Mistral NeMo

> Извлекает персональные данные из текста локальной моделью Mistral NeMo (Ollama).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | чат |
| **Сервисы** | Ollama |
| **Узлов в схеме** | 7 |
| **Нужные учётные данные** | `ollamaApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Update data source
When you change the data source, remember to update the `Prompt Source (User Message)` setting in the **Basic LLM Chain node**.

## Configure local LLM
Ollama offers additional settings 
to optimize model performance
or memory usage.

## Define JSON Schema

If the LLM response does not pass 
the **Structured Output Parser** checks,
**Auto-Fixer** will call the model again with a different 
prompt to correct the original response.

The same LLM connects to both **Basic LLM Chain** and to the **Auto-fixing Output Parser**.

When the LLM model responds, the output is checked in the **Structured Output Parser**

</details>
