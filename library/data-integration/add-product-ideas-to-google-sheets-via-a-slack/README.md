# Add product ideas to google sheets via a slack

> Slash-команда Slack для добавления идей в Google Sheets.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | Google Sheets |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow allows Slack users to submit new ideas, which are then automatically added to a Google Sheets document, and a follow-up message is sent to the user requesting more details.

Example: A team using this workflow can enable their Slack users to submit new product ideas by typing the `/idea` command in Slack. The workflow will capture the idea and the user's name, add it to a Google Sheets document, and send a message back to the user asking them to provide more details about the idea.

## What You Can Do
- Captures new ideas submitted via a Slack slash command and stores them in a Google Sheets document
- Sends a follow-up message to the user who submitted the idea, requesting more details
- Easily extensible to support additional Slack commands (e.g., `/bug`, `/pain`) to capture different types of feedback

</details>
