# Qualify new leads in Google Sheets via OpenAI's GPT-4

> Квалифицирует новые лиды в Google Sheets через GPT-4.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Google Sheets |
| **Сервисы** | Google Sheets, OpenAI |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `googleSheetsTriggerOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### 1. Create a Google Sheet document
* This template uses Google Sheet document connected to Google Forms, but a standalone Sheet document will work too
* Adapt initial trigger to your needs: check for new entries periodically or add a manual trigger

[Link to the Google Sheet template](https://docs.google.com/spreadsheets/d/1jk8ZbfOMObvHGGImc0sBJTZB_hracO4jRqfbryMgzEs)

### 2. Provide lead qualification instructions
* Create a __system message__ with overall instructions
* Add a __user message__ with the JSON variables
* Set node parses the resulting JSON object, but you can also request a plain string response in the system message

### 3. Combine the initial data with GPT response
* This Merge node puts together original records from the google sheet and responses from the OpenAI

### 4. Update the Google Sheet document
* Provide __Column to Match On__ (usually a timestamp in case of Google Forms)
* Enter the result from GPT into a separate column

</details>
