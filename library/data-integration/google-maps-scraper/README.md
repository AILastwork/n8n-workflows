# Google maps scraper

> Парсер Google Maps через SerpAPI: собирает данные о компаниях в Google Sheets.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную, по расписанию |
| **Сервисы** | Google Sheets |
| **Узлов в схеме** | 15 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `serpApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow scrapes Google Maps data efficiently using the SerpAPI service and saves the results to a Google Sheet.

Example: A business owner wants to gather detailed information about local competitors, including their contact details, ratings, reviews, and more. They can use this workflow to automatically scrape this data from Google Maps and have it organized in a Google Sheet for easy analysis.

## What You Can Do
- Retrieves Google Maps search results using the SerpAPI service, which is more cost-effective than the Google Maps API
- Automatically handles pagination to collect all available data for a given search
- Transforms the data into a consistent format and removes duplicates before saving to a Google Sheet
- Updates the status of each search in the Google Sheet to indicate success or failure

</details>
