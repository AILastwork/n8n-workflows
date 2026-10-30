# Send a message to telegram on a new item saved to reader

> Присылает в Telegram сообщение о каждой новой статье, сохранённой в Readwise Reader.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | вручную, по расписанию |
| **Сервисы** | Telegram |
| **Узлов в схеме** | 11 |
| **Нужные учётные данные** | `httpHeaderAuth`, `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically fetches new articles from the Readwise API, writes them to a binary file, and sends a Telegram message for each new article.

Example: A user who wants to stay up-to-date with their Readwise reading activity can use this workflow to automatically receive Telegram notifications whenever new articles are added to their Readwise account.

## What You Can Do
- Periodically checks for new articles in the Readwise API and filters out articles that have already been processed
- Writes the latest article data to a binary file for persistent storage
- Sends a Telegram message for each new article, including the title, author, summary, and URL

</details>
