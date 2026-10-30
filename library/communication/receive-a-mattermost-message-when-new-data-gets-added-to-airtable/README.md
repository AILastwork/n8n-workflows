# Receive a mattermost message when new data gets added to airtable

> Отправляет сообщение в Mattermost, когда в Airtable появляется новая запись.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | событие в Airtable |
| **Сервисы** | Airtable, Mattermost |
| **Узлов в схеме** | 2 |
| **Нужные учётные данные** | `airtableApi`, `mattermostApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically triggers a Mattermost message whenever new data is added to an Airtable table, providing real-time updates and visibility into the Airtable data.

Example: A team managing a project in Airtable could use this workflow to instantly notify the entire team on Mattermost whenever a new task or update is added to the Airtable database, keeping everyone informed and aligned.

## What You Can Do
- Automatic trigger: The workflow is triggered whenever new data is added to the specified Airtable table, eliminating the need for manual monitoring.
- Customizable message: The message sent to Mattermost can be customized to include relevant details from the Airtable record, such as the record ID and name.
- Seamless integration: The workflow connects Airtable and Mattermost, allowing for efficient communication and collaboration between these two platforms.

</details>
