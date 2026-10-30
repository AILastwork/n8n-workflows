# Create 2 xml files with and without xml attributes

> Создаёт два XML-файла из данных MySQL — с атрибутами и без.

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | MySQL |
| **Узлов в схеме** | 11 |
| **Нужные учётные данные** | `mySql` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow retrieves a set of random products from a MySQL database, formats the product data into XML files, and saves them to the local file system.

Example: A business that sells various products could use this workflow to generate XML files containing details about a set of randomly selected products. These XML files could then be used for further processing, such as integrating with a third-party system or generating reports.

## What You Can Do
- Retrieves a set of random products from a MySQL database
- Formats the product data into two different XML structures (simple and with attributes)
- Saves the generated XML files to the local file system

</details>
