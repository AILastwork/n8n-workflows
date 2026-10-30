# Visual regression testing with apify and ai vision model

> Визуальное регрессионное тестирование сайтов: по расписанию делает скриншоты, сравнивает их с эталоном через Gemini и заводит задачи в Linear при изменениях.

| | |
|---|---|
| **Категория** | [🌐 API и вебхуки](../README.md) |
| **Запуск** | вручную, по расписанию |
| **Сервисы** | Google Drive, Google Gemini, Google Sheets, Linear |
| **Узлов в схеме** | 24 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `googlePalmApi`, `googleSheetsOAuth2Api`, `httpQueryAuth`, `linearApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automates a visual regression testing process for websites, using AI-powered image comparison to detect and report changes.

Example: A marketing team responsible for maintaining a company's website could use this workflow to regularly check for unintended changes to their webpages. The workflow generates baseline screenshots, compares them to new screenshots, and creates a report in a project management tool like Linear to track and address any visual regressions.

## What You Can Do
- Automated screenshot generation and storage in Google Drive
- AI-powered visual regression testing using Google's Gemini model
- Structured output parsing and reporting of detected changes
- Scheduled execution and integration with project management tools

</details>
