# Lemlist GPT-3 Supercharge your sales workflows

> Улучшает работу продаж в lemlist с GPT-3: обработка ответов, HubSpot и уведомления в Slack.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в lemlist |
| **Сервисы** | HubSpot, OpenAI, Slack, lemlist |
| **Узлов в схеме** | 12 |
| **Нужные учётные данные** | `hubspotOAuth2Api`, `lemlistApi`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.
