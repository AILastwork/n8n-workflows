# HR-focused automation pipeline with AI

> HR-конвейер с ИИ: извлекает данные из резюме, сравнивает с профилем вакансии и сохраняет оценку в Google Sheets.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | форма n8n |
| **Сервисы** | Google Drive, Google Sheets, OpenAI |
| **Узлов в схеме** | 12 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `googleSheetsOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## HR Expert 
This workflow automates the process of handling job applications by extracting relevant information from submitted CVs, analyzing the candidate's qualifications against a predefined profile, and storing the results in a Google Sheet

The CV is uploaded to Google Drive and converted so that it can be processed

The essential information for evaluating the candidate is collected in two different chains

Summary of relevant information useful for classifying the candidate

Characteristics of the profile sought by the company that intends to hire the candidate

Candidate evaluation with vote and considerations of the HR agent relating the profile sought with the candidate's skills

</details>
