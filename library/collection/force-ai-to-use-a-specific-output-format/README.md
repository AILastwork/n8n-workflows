# [AI/LangChain] Output Parser 4

> Пример LangChain: парсер вывода с автоисправлением, если ответ модели не соответствует формату.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 7 |
| **Нужные учётные данные** | `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### Parser which defines the output format and which gets used to validate the output

### The LLM which gets used to try to autofix the output in case it was not valid

### The LLM to process the original prompt

### Autofixing parser which tries to fix invalid outputs with the help of an LLM

</details>
