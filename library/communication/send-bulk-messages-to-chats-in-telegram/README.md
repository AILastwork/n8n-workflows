# Send bulk messages to chats in telegram

> Массовая рассылка сообщений по чатам Telegram из списка в Google Sheets с паузами между пачками.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Google Sheets, Telegram |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow retrieves data from a Google Sheet, splits it into batches, and sends each batch as a Telegram message with a 30-second delay between batches.

Example: A business owner wants to send a daily update to their Telegram group with the latest sales data from their Google Sheet. This workflow automates the process, ensuring the data is sent in manageable batches with a delay to avoid overwhelming the group.

## What You Can Do
- Retrieves data from a Google Sheet
- Splits the data into batches to avoid overwhelming the Telegram group
- Sends each batch as a Telegram message with a 30-second delay between batches

</details>
