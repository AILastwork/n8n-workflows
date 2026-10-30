# Waitlist form stored in googlesheet with email verification step

> Форма листа ожидания с подтверждением e-mail кодом; данные хранятся в Google Sheets.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | форма n8n |
| **Сервисы** | Google Sheets |
| **Узлов в схеме** | 14 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `smtp` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automates the process of collecting user information for a waitlist, generating a verification code, and storing the data in a Google Sheet.

Example: A company wants to build a waitlist for their upcoming software product. They can use this workflow to collect user information, send a verification email, and store the verified user data in a Google Sheet. This allows them to manage the waitlist efficiently and ensure that only valid users are added.

## What You Can Do
- Collects user information (name, email, company website) through a form
- Generates a unique verification code and sends it to the user via email
- Validates the entered verification code and updates the user's status in the Google Sheet
- Allows users to provide additional details about their intended use of the software
- Securely stores all user data and verification status in a Google Sheet

</details>
