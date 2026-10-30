# Extract url from an email address

> Извлекает домен из адреса e-mail.

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

This workflow extracts the domain name from a given email address, providing a simple way to parse and analyze email data.

Example: A user might use this workflow to quickly extract the domain name from a list of email addresses, which could be useful for tasks like email marketing, customer segmentation, or domain analysis.

## What You Can Do
- Accepts a sample email address as input
- Extracts the domain name from the email address using a custom JavaScript function
- Displays the extracted domain name as the output

</details>
