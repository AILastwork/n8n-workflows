# Contact Form Text Classifier for eCommerce

> Классифицирует сообщения из формы обратной связи интернет-магазина и направляет в нужный отдел.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | форма n8n |
| **Сервисы** | Google Sheets, OpenAI |
| **Узлов в схеме** | 13 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `openAiApi`, `smtp` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Important notes

This very simple workflow is ideal for eCommerce businesses or customer support teams looking to automate and streamline the handling of contact form submissions.

- It is possible to hook any external form such as CF7 for Wordpress through a webhook
- It is possible to send the email through other providers by replacing them with the relative nodes (Gmail, Outlook....)
- It is possible to change the collection database with other tools

</details>
