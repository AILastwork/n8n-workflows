# Send instagram statistics to mattermost

> Ежедневно отправляет статистику Instagram-аккаунта в Mattermost.

| | |
|---|---|
| **Категория** | [📊 Аналитика](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Google Sheets, Mattermost |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `mattermostApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically retrieves Instagram account statistics, formats the data, and sends a daily update message to a Mattermost channel.

Example: A social media manager could use this workflow to monitor their company's Instagram account and receive a daily summary of the number of followers and posts. This allows them to stay informed on the account's performance and share the updates with the team.

## What You Can Do
- Scheduled daily execution using a Cron trigger
- Retrieval of Instagram account data from a Google Sheet
- Dynamic formatting of the message content using the retrieved data
- Automatic posting of the update to a Mattermost channel

</details>
