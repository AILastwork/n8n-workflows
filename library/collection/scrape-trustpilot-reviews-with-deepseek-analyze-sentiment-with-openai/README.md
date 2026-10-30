# Scrape Trustpilot Reviews with DeepSeek, Analyze Sentiment with OpenAI

> Парсит отзывы с Trustpilot через DeepSeek, анализирует тональность через OpenAI и сохраняет в Google Sheets.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Google Sheets, OpenAI |
| **Узлов в схеме** | 16 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

Change to the name of the company registered on Trustpilot and the maximum number of pages to scrape

Extract all information with DeepSeek (remember to change base_url with https://api.deepseek.com/v1)

Check if the review has already been saved to Google Drive

Analyze review sentiment

</details>
