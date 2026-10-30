# Xml to sql database import

> Импортирует товары из XML-файла в MySQL.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | MySQL |
| **Узлов в схеме** | 7 |
| **Нужные учётные данные** | `mySql` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow extracts product data from an XML file, transforms it into a JSON format, and then inserts the data into a MySQL database.

Example: A company that sells various products may use this workflow to automate the process of importing new product information into their database. By providing an XML file with the necessary product details, the workflow can handle the extraction, transformation, and insertion of the data into a MySQL database, streamlining the data management process.

## What You Can Do
- Reads binary data from a specified XML file
- Converts the XML data into a JSON format using the XML node
- Splits the JSON data into individual product items using the Item Lists node
- Inserts the product data into a MySQL database table using the MySQL node
- Includes a sticky note with a SQL query to create and truncate the target table, which can be executed as needed

</details>
