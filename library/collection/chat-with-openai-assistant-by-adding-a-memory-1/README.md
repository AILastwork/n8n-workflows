# Chat with OpenAI Assistant (by adding a memory) (1)

> Чат с ассистентом OpenAI с добавлением памяти диалога.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | чат |
| **Сервисы** | OpenAI Assistant |
| **Узлов в схеме** | 9 |
| **Нужные учётные данные** | `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

Read contents of the chat from memory

Call the assistant, passing in the previous chat messages

Add the latest chat messages to the memory

Return the model output

## Try me out
1. In the OpenAI Assistant node, make sure your OpenAI credentials are set and choose an assistant to use (you'll need to create one if you don't have one already)
2. Click the 'Chat' button below

 - In the first message, tell the AI what your name is
 - In a second message, ask the AI what your name is

</details>
