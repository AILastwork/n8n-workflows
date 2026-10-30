# Hacker News Throwback Machine - See What Was Hot on This Day, Every Year!

> Каждый день присылает в Telegram, что было популярно на Hacker News в этот день в прошлые годы (Gemini).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Google Gemini, Telegram |
| **Узлов в схеме** | 13 |
| **Нужные учётные данные** | `googlePalmApi`, `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.
