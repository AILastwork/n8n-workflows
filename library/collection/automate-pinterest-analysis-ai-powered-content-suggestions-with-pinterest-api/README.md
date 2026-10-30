# Automate Pinterest Analysis & AI-Powered Content Suggestions With Pinterest API

> Анализирует ваши пины в Pinterest, ИИ предлагает идеи контента и отправляет их по почте (данные в Airtable).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Airtable, Gmail, OpenAI |
| **Узлов в схеме** | 10 |
| **Нужные учётные данные** | `airtableTokenApi`, `gmailOAuth2`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

Scheduled trigger at 8:00am to start the workflow. 

This can be updated to your schedule preference as an email with marketing trends can be sent to best fit one's schedule.

Scheduled trigger begin process to gather Pinterest Pin data and store them within Airtable. This data can be referenced or analyzed accordingly. 

*If you would like to bring in Pinterest Ads data, the data is already labeled as Organic.

This is perfect for those who are creating content calendars to understand content scheduling.

AI Agent will go through Pinterest Pins and analyze any data and trends to be able to reach target audience. The data is then summarized within the Summary LLM.

The summarized results are then sent to the Marketing Manager within an email to help lead content creation efforts.

</details>
