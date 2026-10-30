# Webhook returning xml

> Вебхук, который принимает JSON, конвертирует его в XML и возвращает XML в ответе.

| | |
|---|---|
| **Категория** | [🌐 API и вебхуки](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow creates a webhook that accepts JSON data, converts it to XML, and responds with the XML data.

Example: A developer might use this workflow to build a simple API that accepts JSON data, processes it, and returns the data in XML format. This could be useful for integrating with systems that require XML input or for providing an XML-based API endpoint.

## What You Can Do
- Accepts JSON data via a webhook
- Converts the JSON data to XML using the XML node
- Responds with the XML data using the Respond to Webhook node
- Allows for customization of the response headers and body

</details>
