# Collects images from web search results and send to google sheets

> Собирает картинки из поиска, распознаёт текст на них через AWS Rekognition и сохраняет в Google Sheets.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | — |
| **Сервисы** | AWS Rekognition, Google Sheets |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `aws`, `googleSheetsOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automates the process of extracting text from images, storing the extracted text and image metadata in a Google Sheet, providing a convenient way to organize and analyze visual data.

Example: A marketing team could use this workflow to automatically capture and analyze the text content of promotional images, allowing them to quickly identify key messaging and trends across their visual assets.

## What You Can Do
- Integrates with AWS Rekognition to extract text from images
- Stores the extracted text, image name, and image URL in a Google Sheet for easy access and analysis
- Converts the extracted text to lowercase for further processing or analysis

</details>
