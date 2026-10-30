# HR Job Posting and Evaluation with AI

> Найм с ИИ: принимает резюме, ChatGPT оценивает кандидата, результат в Airtable, приглашение на собеседование в календарь.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | форма n8n |
| **Сервисы** | Airtable, Google Calendar, Google Drive, OpenAI |
| **Узлов в схеме** | 30 |
| **Нужные учётные данные** | `airtableTokenApi`, `googleCalendarOAuth2Api`, `googleDriveOAuth2Api`, `openAiApi`, `smtp` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Grab User Details and Update in Airtable

## Download the CV and get the job description and requirements.
- ### Send the details to ChatGPT to score the viability of the candidate

## Update Airtable with score and reason for the score

- ### if score is above 0.7, shortlist and continue flow.

## Get questionnaires based on the JD and CV

- ### Update the responses in Airtable

## Personalize email and send

## Schedule Meeting and update meeting time in AIrtable

## Generate Screening Questions and post to Airtable

## Actions
- ### Change the `Form Description` with the job description you are hiring for.
- ### Make sure to check and change the prompts if need be to suit your use case.
- ### Use the Simple Applicant Tracker template on Airtable to set up the tables required.

</details>
