# AI Customer feedback sentiment analysis

> Анализирует тональность отзывов клиентов через OpenAI и записывает в Google Sheets.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
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

## Send customer feedback to OpenAI for sentiment analysis

## Add new feedback to google sheets

## Instructions
1. Connect Google sheets
2. Connect your OpenAi account (api key + org Id)
3. Create a customer feedback form, use an existing one or use the one below as example. 
All set!


- Here is the example google sheet being used in this workflow: https://docs.google.com/spreadsheets/d/1omWdRbiT6z6GNZ6JClu9gEsRhPQ6J0EJ2yXyFH9Zng4/edit?usp=sharing. You can download it to your account.

## Feedback form is submitted

## Merge form data and OpenAI result

</details>
