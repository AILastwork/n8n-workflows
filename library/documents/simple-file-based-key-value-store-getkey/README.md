# Simple file based key value store getkey

> Простое хранилище «ключ-значение» на файлах: чтение ключа.

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
| **Запуск** | вручную |
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

This workflow allows users to read a binary file, convert it to JSON, and return a specific value from the JSON data.

Example: A user might use this workflow to read a configuration file stored in a binary format, extract a specific setting from the file, and return that setting to be used in other parts of their application.

## What You Can Do
- Reads a binary file from a specified location
- Converts the binary data to JSON format
- Extracts a specific value from the JSON data based on a configured key

</details>
