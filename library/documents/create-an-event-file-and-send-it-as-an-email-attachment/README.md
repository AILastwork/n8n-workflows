# Create an event file and send it as an email attachment

> Создаёт файл события календаря (.ics) и отправляет его вложением в письме.

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | I Cal |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | `smtp` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow allows users to create and send an iCalendar event invitation for an n8n community meetup via email.

Example: A community manager for the n8n platform could use this workflow to easily schedule and invite attendees to an upcoming n8n community meetup. They can set the event details, such as the start and end times, and the workflow will automatically generate an iCalendar event and send it to the desired email recipients.

## What You Can Do
- Automated iCalendar event creation with customizable details
- Email integration to send the event invitation
- Manual trigger to initiate the workflow on-demand

</details>
