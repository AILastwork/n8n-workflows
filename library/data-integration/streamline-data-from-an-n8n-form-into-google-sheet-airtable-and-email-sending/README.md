# Streamline data from an n8n form into google sheet airtable and email sending

> Данные из формы n8n сохраняет в Google Sheets и Airtable и отправляет письмо пользователю.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | форма n8n |
| **Сервисы** | Airtable, Gmail, Google Sheets |
| **Узлов в схеме** | 7 |
| **Нужные учётные данные** | `airtableTokenApi`, `gmailOAuth2`, `googleSheetsOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow collects data from a form, processes it, and saves the formatted data to Google Sheets and Airtable while also sending customized emails to the submitter.

Example: A small business owner wants to collect customer information through a form on their website. This workflow would allow them to automatically save the form data to a Google Sheet and an Airtable base, while also sending a personalized email to the customer confirming their submission.

## What You Can Do
- Collects form data, including name, city, and email, and processes it to extract date and time information.
- Saves the formatted data to both Google Sheets and Airtable, making it accessible in multiple platforms.
- Sends customized email notifications to the form submitter, with the option to include dynamic content like the submitter's name and submission date.
- Provides a clear, documented workflow that can be easily maintained and updated as the business needs change.

</details>
