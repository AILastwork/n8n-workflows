# Prepare csv files with gpt 4

> Генерирует с помощью GPT-4 тестовые данные и сохраняет их в CSV-файлы.

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 9 |
| **Нужные учётные данные** | `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow generates a list of 10 random user profiles with fictional character names, saves them as CSV files, and stores them on the local disk.

Example: A marketing team might use this workflow to create a set of sample user profiles for testing or demonstration purposes, without having to manually create the data. The workflow can be easily customized to generate different types of data or save the files to a cloud storage service instead of the local disk.

## What You Can Do
- Generates a list of 10 random user profiles using the OpenAI API
- Splits the data into individual CSV files and saves them to the local disk
- Includes a feature to strip UTF-8 BOM bytes from the CSV files, ensuring compatibility with various data processing tools

</details>
