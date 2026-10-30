# Automated congratulations with google sheets twilio and n8n

> Автоматически поздравляет сотрудников по SMS (Twilio) с днём рождения и годовщинами из Google Sheets.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Google Sheets, Twilio |
| **Узлов в схеме** | 8 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `twilioApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically sends personalized congratulatory messages to employees on their special occasions, enhancing employee engagement and morale.

Example: A company uses this workflow to send personalized SMS messages to employees on their birthdays, work anniversaries, or other important events. The workflow retrieves the relevant information from a Google Sheet, personalizes the message, and sends it to the employee's phone number.

## What You Can Do
- Automated daily trigger to check for any events on the current date
- Integration with Google Sheets to retrieve employee information and congratulatory messages
- Personalization of messages by combining employee names and pre-written congratulatory messages
- Sending of personalized SMS messages using the Twilio API

</details>
