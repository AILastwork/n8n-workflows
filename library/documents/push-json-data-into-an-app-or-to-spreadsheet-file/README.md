# Push json data into an app or to spreadsheet file

> Отправляет JSON-данные в приложение (Google Sheets) или в файл таблицы.

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Google Sheets |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow fetches data from an API, maps it to a Google Sheets spreadsheet, and also exports it as a CSV file, providing a versatile way to integrate data from various sources.

Example: A marketing team could use this workflow to regularly fetch user data from an API, store it in a Google Sheets spreadsheet for analysis, and also generate a CSV file for further processing or sharing with other teams.

## What You Can Do
- Fetches data from an API and maps it to a Google Sheets spreadsheet
- Exports the data as a CSV file for additional processing or sharing
- Provides a flexible and customizable template that can be adapted to various use cases

</details>
