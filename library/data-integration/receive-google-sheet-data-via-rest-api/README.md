# Receive google sheet data via rest api

> Принимает данные через REST API (вебхук) и записывает в Google Sheets.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | Google Sheets |
| **Узлов в схеме** | 2 |
| **Нужные учётные данные** | `googleApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow allows users to capture and store data from a webhook in a Google Sheets spreadsheet, providing a simple way to collect and organize information.

Example: A customer service team could use this workflow to automatically log customer inquiries or complaints received through a web form, making it easier to track and respond to customer issues.

## What You Can Do
- Captures data from a webhook and stores it in a Google Sheets spreadsheet
- Provides a centralized location to view and manage the collected data
- Offers a flexible and customizable solution for various data collection needs

</details>
