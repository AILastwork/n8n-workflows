# Poll emails using jmap

> Получает непрочитанные письма из Fastmail по протоколу JMAP.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | `httpHeaderAuth` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow fetches the user's Fastmail account and mailbox details, then retrieves the 3 most recent unread emails from the user's inbox.

Example: A user could use this workflow to quickly check their Fastmail inbox for any new unread messages without having to log in to the Fastmail web interface. The workflow could be triggered manually or scheduled to run periodically to keep the user informed of their inbox status.

## What You Can Do
- Fetches the user's Fastmail account and mailbox details using the JMAP API
- Retrieves the 3 most recent unread emails from the user's inbox
- Displays the email details (sender, subject, received date) in the workflow output

</details>
