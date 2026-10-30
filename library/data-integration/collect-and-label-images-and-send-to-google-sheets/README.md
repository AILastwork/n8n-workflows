# Collect and label images and send to google sheets

> Ищет картинки, распознаёт на них объекты через AWS Rekognition и записывает метки в Google Sheets.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | — |
| **Сервисы** | AWS Rekognition, Google Sheets |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | `aws`, `googleSheetsOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automates the process of searching for images, analyzing them using AWS Rekognition, and then appending the image details and labels to a Google Sheet.

Example: A marketing team could use this workflow to quickly gather and analyze images of a product or location, then store the relevant details in a centralized Google Sheet for further analysis or reporting.

## What You Can Do
- Automated image search and retrieval from Google Custom Search API
- Image analysis using AWS Rekognition to identify labels and attributes
- Seamless integration with Google Sheets for easy data storage and collaboration

</details>
