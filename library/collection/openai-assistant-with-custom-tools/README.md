# OpenAI Assistant with custom n8n tools

> Ассистент OpenAI со своими инструментами на n8n (под-воркфлоу).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вызов из другого воркфлоу, чат |
| **Сервисы** | OpenAI Assistant |
| **Узлов в схеме** | 12 |
| **Нужные учётные данные** | `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Sub-workflow: Return the capitals of fictional countries
It can either list the countries it knows about or return the capital of a specific country

## Main workflow: Chat with OpenAI Assistant
Click the 'Chat' button at the bottom of the screen to try

</details>
