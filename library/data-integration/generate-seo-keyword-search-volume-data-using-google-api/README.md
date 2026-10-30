# Generate seo keyword search volume data using google api

> Получает объём поиска по ключевым словам из Google Ads API для SEO.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | `googleAdsOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automates the process of retrieving keyword search volume data from the Google Ads API, enabling users to conduct data-driven SEO research and planning.

Example: A digital marketing agency needs to gather accurate search volume data for a client's target keywords to inform their content strategy and SEO campaigns. This workflow allows the agency to quickly fetch the necessary data from the Google Ads API, analyze the results, and update the client's database with the insights.

## What You Can Do
- Connects to the Google Ads API to retrieve monthly search volume, historical trends, and keyword difficulty metrics for a set of user-defined keywords
- Allows users to easily update the list of keywords to be analyzed
- Provides a flexible output option, enabling users to connect the workflow to their own database or spreadsheet for further analysis and reporting

</details>
