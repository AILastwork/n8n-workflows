# Write a file to the host machine

> Скачивает файл и сохраняет его на машину, где запущен n8n.

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow allows users to download an image file from a specified URL and save it to a local file on their desktop.

Example: A user might use this workflow to download the n8n logo image from the n8n documentation website and save it to their desktop for use in a presentation or other project.

## What You Can Do
- Triggered manually by the user clicking an "execute" button
- Fetches an image file from a specified URL using an HTTP request
- Writes the downloaded image file to a specified location on the user's local file system

</details>
