# Automate google analytics reporting

> Собирает данные Google Analytics, сравнивает неделю с предыдущей и отправляет отчёт на почту.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную, по расписанию |
| **Сервисы** | Gmail, Google Analytics |
| **Узлов в схеме** | 19 |
| **Нужные учётные данные** | `gmailOAuth2`, `googleAnalyticsOAuth2` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow aggregates Google Analytics data, compares this week's performance to the prior week, and emails a detailed report.

Example: A marketing manager could use this workflow to regularly monitor their website's performance, including page engagement, search engine visibility, and country-level traffic. The automated report would provide insights to help them make data-driven decisions to optimize their marketing strategies.

## What You Can Do
- Retrieves and compares key Google Analytics metrics for the current week and prior week
- Generates an HTML report with tables and formatting for easy readability
- Automatically emails the report to a designated recipient

</details>
