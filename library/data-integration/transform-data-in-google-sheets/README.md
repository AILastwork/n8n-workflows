# Transform data in google sheets

> Пример преобразования данных в Google Sheets (база объектов недвижимости).

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Google Sheets |
| **Узлов в схеме** | 7 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automates the process of managing rental property data in a Google Sheet, including adding new properties, updating existing ones, and generating reports.

Example: A property management company can use this workflow to streamline their rental data management. They can manually trigger the workflow to add a new property, update the rent for an existing property, and generate a report of all properties located in a specific city.

## What You Can Do
- Automatically generates a unique ID for new properties
- Allows updating existing property data, such as rent amount
- Provides a report of all properties located in a specific city

</details>
