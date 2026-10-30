# Ai customer feedback sentiment analysis

> Собирает отзывы клиентов, определяет тональность через OpenAI и сохраняет в Google Sheets.

| | |
|---|---|
| **Категория** | [📊 Аналитика](../README.md) |
| **Запуск** | форма n8n |
| **Сервисы** | Google Sheets, OpenAI |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automates the process of collecting customer feedback, analyzing the sentiment using OpenAI, and then storing the feedback along with the sentiment analysis in a Google Sheets spreadsheet.

Example: A company that wants to gather customer feedback and analyze the sentiment can use this workflow. Customers can submit feedback through a form, which triggers the workflow to send the feedback to OpenAI for sentiment analysis. The analyzed feedback is then merged with the original form data and added to a Google Sheets spreadsheet for further review and analysis.

## What You Can Do
- Automated customer feedback collection and sentiment analysis using OpenAI
- Integration with Google Sheets to store and organize the feedback data
- Customizable form fields and options to capture relevant information

</details>
