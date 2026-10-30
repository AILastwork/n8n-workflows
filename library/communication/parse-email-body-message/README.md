# Parse email body message

> Разбирает текст письма по заданным меткам и вытаскивает нужные поля (имя, телефон и т. п.).

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
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

This workflow allows users to extract key information from an email body by parsing it based on predefined labels.

Example: A customer service team could use this workflow to quickly extract relevant details (e.g., name, email, subject, message) from customer emails, streamlining their response process.

## What You Can Do
- Automated email parsing based on custom labels
- Flexible configuration to adapt to different email formats
- Seamless integration with other n8n workflows for further processing

</details>
