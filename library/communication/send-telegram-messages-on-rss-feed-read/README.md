# Send telegram messages on rss feed read

> Отправляет в Telegram новые записи из RSS-ленты.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | RSS, Telegram |
| **Узлов в схеме** | 7 |
| **Нужные учётные данные** | `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow monitors an RSS feed, checks for new articles, and sends a Telegram message with the latest article's title and link.

Example: A user who wants to stay up-to-date on the latest currency exchange rates could use this workflow to monitor an RSS feed for a financial news site and receive a Telegram message whenever a new article is published.

## What You Can Do
- Automatically checks an RSS feed on a regular schedule using a Cron trigger
- Compares the latest article's publication date to the last read article to determine if it's new
- Sends a Telegram message with the title and link of the latest article
- Stores the date of the last read article to avoid duplicates

</details>
