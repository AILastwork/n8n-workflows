# Send google analytics data to a i to analyze then save results in baserow

> Анализирует данные Google Analytics с помощью ИИ, сравнивает с прошлой неделей и сохраняет SEO-рекомендации в Baserow.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную, по расписанию |
| **Сервисы** | Baserow, Google Analytics |
| **Узлов в схеме** | 18 |
| **Нужные учётные данные** | `googleAnalyticsOAuth2` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow analyzes Google Analytics data, compares it to the previous week, and sends the insights to an AI model to generate SEO recommendations, which are then saved to a Baserow database.

Example: A marketing manager wants to improve the SEO performance of their company's website. They set up this workflow to automatically fetch the latest Google Analytics data, including page engagement, search console metrics, and country-level views. The workflow then compares the current week's data to the previous week and sends the insights to an AI model, which provides tailored recommendations for improving SEO. The manager can then review the AI-generated report and implement the suggested changes to their website.

## What You Can Do
- Automatically fetches and compares Google Analytics data for the current and previous weeks
- Sends the data to an AI model to generate SEO recommendations
- Saves the AI-generated report to a Baserow database for easy access and tracking

</details>
