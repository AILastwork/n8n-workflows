# Kv cloudflare key value database full api integration workflow

> Полная интеграция с Cloudflare KV: создание, удаление и переименование пространств имён и ключей.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 31 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow provides a comprehensive solution for managing Key-Value (KV) pairs in Cloudflare's KV storage, allowing users to perform various actions such as creating, deleting, renaming, and managing KV namespaces and their contents.

Example: A web developer or DevOps engineer could use this workflow to efficiently manage their application's data storage on Cloudflare's KV platform, without the need for self-hosting a database or other storage solutions.

## What You Can Do
- Seamless integration with Cloudflare's KV API, allowing users to perform a wide range of actions without the need for complex API calls.
- Intuitive and user-friendly interface, with sticky notes providing clear instructions and documentation for each action.
- Bulk actions, such as deleting or writing multiple KV pairs at once, improving efficiency and productivity.
- Ability to manage KV namespaces, including creating, renaming, and deleting them.

</details>
