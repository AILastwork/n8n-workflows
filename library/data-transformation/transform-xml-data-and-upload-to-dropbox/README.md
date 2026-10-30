# Transform xml data and upload to dropbox

> Преобразует XML (меняет данные) и загружает результат в Dropbox.

| | |
|---|---|
| **Категория** | [🔄 Преобразование данных](../README.md) |
| **Запуск** | — |
| **Сервисы** | Dropbox |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | `dropboxApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow retrieves an XML file, converts it to JSON, modifies the title, converts it back to XML, and saves the updated file to Dropbox.

Example: A marketing team might use this workflow to automatically update the title of a product catalog XML file, convert it to the desired format, and save it to their Dropbox storage for easy access and sharing with their sales team.

## What You Can Do
- Retrieves XML data from a web endpoint
- Converts XML data to JSON format for easy manipulation
- Allows modification of the XML data (in this case, changing the title)
- Converts the modified JSON data back to XML format
- Saves the updated XML file to Dropbox for storage and sharing

</details>
