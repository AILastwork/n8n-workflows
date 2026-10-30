# Execute multiple command lines based on text file inputs

> Выполняет несколько команд в системе по списку из текстового файла.

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 7 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow reads a binary file, processes its contents, and writes the file names to a log file.

Example: A user might use this workflow to process a list of file names stored in a text file, and generate a log of the processed files.

## What You Can Do
- Reads a binary file from a specified location
- Processes the file contents using a custom function
- Writes the file names to a log file, with a conditional check to ensure all files are processed

</details>
