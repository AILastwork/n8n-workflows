# Low code api for flutterflow apps

> Low-code API для приложений FlutterFlow: эндпоинт отдаёт данные клиентов из хранилища.

| | |
|---|---|
| **Категория** | [🌐 API и вебхуки](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow sets up a low-code API endpoint that can be used to fetch data from a customer datastore and return it to a Flutterflow app.

Example: A Flutterflow app developer could use this workflow to quickly create an API endpoint that retrieves customer data from a database, transforms it into a format suitable for their app, and responds to a GET request from the Flutterflow app.

## What You Can Do
- Provides a pre-built webhook endpoint that can be easily integrated into a Flutterflow app
- Allows for customization of the data source and transformation steps to fit the specific needs of the app
- Simplifies the process of setting up a backend API for a Flutterflow app, enabling faster development and deployment

</details>
