# Update time tracking projects based on syncro status changes

> Архивирует или обновляет проекты Clockify при смене статуса тикетов в Syncro.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | Clockify |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `clockifyApi`, `httpHeaderAuth` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically manages Clockify projects based on incoming webhook data, archiving resolved tickets and updating unresolved tickets.

Example: A customer service team uses this workflow to automatically update their Clockify project management system whenever a new customer ticket is created or updated. The workflow ensures that resolved tickets are archived, while unresolved tickets are updated with the latest information.

## What You Can Do
- Automatically creates or updates Clockify projects based on incoming webhook data
- Differentiates between resolved and unresolved tickets, taking appropriate action for each
- Provides a centralized view of all customer tickets and their status within the Clockify project management system

</details>
