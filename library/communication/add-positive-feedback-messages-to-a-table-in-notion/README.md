# Add positive feedback messages to a table in notion

> Анализирует отзывы из Typeform: положительные добавляет в Notion, отрицательные — карточкой в Trello, уведомляет в Slack.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | событие в Typeform |
| **Сервисы** | Google Natural Language, Notion, Slack, Trello, Typeform |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `googleCloudNaturalLanguageOAuth2Api`, `notionApi`, `slackApi`, `trelloApi`, `typeformApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automates the process of analyzing customer feedback from a Typeform survey, categorizing it based on sentiment, and then taking appropriate actions such as creating a Notion page or a Trello card.

Example: A company that collects customer feedback through a Typeform survey can use this workflow to automatically process the feedback. When a customer submits the survey, the workflow will analyze the sentiment of their comments using Google Cloud Natural Language, and then take different actions based on the sentiment score. If the sentiment is positive, it will create a Notion page with the feedback. If the sentiment is negative, it will create a Trello card to track the issue.

## What You Can Do
- Automatically processes customer feedback from a Typeform survey
- Analyzes the sentiment of the feedback using Google Cloud Natural Language
- Takes different actions based on the sentiment score, such as creating a Notion page or a Trello card
- Sends a summary of the feedback to a Slack channel

</details>
