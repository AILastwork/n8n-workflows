# Analyze the sentiment of feedback and send a message on Mattermost

> Анализирует тональность отзывов из Typeform (Google NL) и отправляет сообщение в Mattermost.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Typeform |
| **Сервисы** | Google Natural Language, Mattermost, Typeform |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | `googleCloudNaturalLanguageOAuth2Api`, `mattermostApi`, `typeformApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.
