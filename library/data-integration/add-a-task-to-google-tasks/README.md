# Add a task to google tasks

> Добавляет задачу в Google Tasks.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Google Tasks |
| **Узлов в схеме** | 2 |
| **Нужные учётные данные** | `googleTasksOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow allows users to create a new task in Google Tasks with a single click.

Example: A busy professional can use this workflow to quickly add a new task to their Google Tasks list, such as a meeting reminder or a to-do item, without having to navigate to the Google Tasks interface.

## What You Can Do
- Triggered by a manual click, making it easy to use on-demand
- Integrates with Google Tasks, allowing users to create new tasks directly from the workflow
- Requires minimal setup, as it uses pre-configured Google Tasks credentials

</details>
