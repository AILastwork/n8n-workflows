# Learn Anything from HN - Get Top Resource Recommendations from Hacker News

> Подбирает лучшие материалы для изучения темы по обсуждениям Hacker News (Gemini) и присылает на почту.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | форма n8n |
| **Сервисы** | Google Gemini, Hacker News |
| **Узлов в схеме** | 10 |
| **Нужные учётные данные** | `googlePalmApi`, `smtp` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.
