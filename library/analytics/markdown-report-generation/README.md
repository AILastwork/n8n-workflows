# Markdown report generation

> Генерирует отчёт по учёту времени в Markdown/HTML с аватарами сотрудников и отправляет его по почте.

| | |
|---|---|
| **Категория** | [📊 Аналитика](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 10 |
| **Нужные учётные данные** | `smtp` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow generates a formatted HTML timesheet report, including user avatars, and allows the report to be emailed.

Example: A team lead or manager can use this workflow to automatically generate a monthly timesheet report for their team, which includes details on the hours worked by each team member on different tasks. The report can then be emailed to the team or other stakeholders.

## What You Can Do
- Automatically generates a formatted Markdown report with user avatars, task details, and total hours worked
- Converts the Markdown report to HTML for easy viewing and sharing
- Allows the report to be emailed as an attachment

</details>
