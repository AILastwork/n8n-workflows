# Summarize Google Sheets form feedback via OpenAI's GPT-4

> Делает сводку отзывов из Google Sheets (Google Forms) через GPT-4 и отправляет по почте.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Gmail, Google Sheets, OpenAI |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `gmailOAuth2`, `googleSheetsOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### 1. Create a Google Sheet document
* This tutorial uses Google Sheet document connected to Google Forms, but a standalone Sheet document will work too
* Adapt initial trigger to your needs: run manually or at some time intervals

[Link to the Google Sheets template](https://docs.google.com/spreadsheets/d/1Kcr1oF_RrfNQJczmJDpwClOSYpvSnwbeX-_pdUo91-I/edit?usp=sharing)

### 2. Combine all answers into an array
* Since the main goal is to provide an overall summary, we need to combine all answers for each Google Form question
* Aggregate Node takes multiple incoming items and produces just a single item which contains arrays of user feedback

### 3. Generate a summary report
* Enter a __system message__ with a overall instructions on how to analyze the feedback form
* Provide a __user message__ with JSON arrays.

__NB! Consider splitting the form questions for a very long forms or when the number of responses is too high__

### 4. Convert to HTML and send an email
* GPT is configured to reply in Markdown format. Markdown Node converts such text into HTML
* Finally, the Gmail node sends a message with HTML report

</details>
