# Webhooks with mattermost

> По вебхуку из Mattermost получает случайный рецепт коктейля и публикует его в канал.

| | |
|---|---|
| **Категория** | [🌐 API и вебхуки](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | Mattermost |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | `mattermostApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow generates a random cocktail recipe and posts it to a Mattermost channel when a webhook is triggered.

Example: A company's social media team could use this workflow to automatically post a new cocktail recipe to their Mattermost channel every time a customer submits a request for a cocktail recommendation through a web form or messaging app.

## What You Can Do
- Triggers a workflow when a webhook is received, allowing for easy integration with external systems
- Retrieves a random cocktail recipe from an external API and extracts relevant information
- Formats the cocktail details into a formatted message and posts it to a Mattermost channel, including an image of the drink

</details>
