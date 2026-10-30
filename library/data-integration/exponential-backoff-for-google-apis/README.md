# Exponential backoff for google apis

> Экспоненциальная задержка при повторах для Google API (обход лимитов Google Sheets).

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Google Sheets |
| **Узлов в схеме** | 7 |
| **Нужные учётные данные** | `googleApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow implements an exponential backoff mechanism to handle rate limiting issues when interacting with the Google Sheets API, ensuring reliable and resilient data processing.

Example: A user might use this workflow to regularly fetch and process data from a Google Sheet, automatically retrying failed requests with an exponential delay to avoid triggering the API's rate limits and ensuring the successful completion of the data processing task.

## What You Can Do
- Exponential backoff algorithm to handle rate limiting issues with Google APIs
- Automatic retries with increasing delay between attempts
- Configurable maximum number of retries before triggering an error
- Seamless integration with Google Sheets API node for data processing tasks

</details>
