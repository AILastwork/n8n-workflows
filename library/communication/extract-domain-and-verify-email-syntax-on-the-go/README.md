# Extract domain and verify email syntax on the go

> Проверяет синтаксис e-mail и извлекает из него домен.

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

This workflow validates email addresses and extracts the domain from the email, providing a simple way to process email data.

Example: A user might use this workflow to validate and extract the domain from a list of email addresses, which could be useful for tasks like email marketing, customer data management, or domain analysis.

## What You Can Do
- Validates email addresses using the built-in `isEmail()` function
- Extracts the domain from the email address using the `extractDomain()` function
- Provides a flexible and customizable way to process email data

</details>
