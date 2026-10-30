# Google Analytics: Weekly Report

> Еженедельный отчёт Google Analytics: сравнивает метрики с прошлой неделей, ИИ пишет выводы и отправляет на почту или в Telegram.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Google Analytics, OpenAI, Telegram |
| **Узлов в схеме** | 13 |
| **Нужные учётные данные** | `googleAnalyticsOAuth2`, `openAiApi`, `smtp`, `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

Welcome to my Google Analytics Weekly Report Workflow!

This workflow has the following sequence:

1. time trigger (e.g. every Monday at 7 a.m.)
2. retrieval of Google Analytics data from the last 7 days
3. assignment and summary of the data
4. retrieval of Google Analytics data from the last 7 days of the previous year
5. allocation and summary of the data
6. preparation in tabular form and brief analysis by AI.
7. sending the report as an email
8. preparation in short form by AI for Telegram (optional)
9. sending as Telegram message.

The following accesses are required for the workflow:
- Google Analytics (via Google Analytics API): https://docs.n8n.io/integrations/builtin/credentials/google/
- AI API access (e.g. via OpenAI, Anthropic, Google or Ollama)
- SMTP access data (for sending the mail)
- Telegram access data (optional for sending as Telegram message): https://docs.n8n.io/integrations/builtin/credentials/telegram/

You can contact me via LinkedIn, if you have any questions: https://www.linkedin.com/in/friedemann-schuetz

</details>
