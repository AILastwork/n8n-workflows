# Transfer google analytics data to airtable database

> Переносит данные Google Analytics в Airtable.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Airtable, Google Analytics |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | `airtableApi`, `googleAnalyticsOAuth2` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow retrieves Google Analytics data, processes it, and appends the results to an Airtable database, providing valuable insights for business decision-making.

Example: A marketing manager could use this workflow to automatically track website traffic and country-specific metrics, then store the data in an Airtable database for further analysis and reporting. This helps the manager understand their audience and make data-driven decisions to improve marketing strategies.

## What You Can Do
- Retrieves Google Analytics data, including sessions and country information, for a specified date range
- Processes the data by extracting relevant metrics and dimensions
- Appends the processed data to an Airtable database for easy access and analysis

</details>
