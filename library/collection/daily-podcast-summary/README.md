# Daily Podcast Summary

> Ежедневно делает саммари топовых подкастов выбранного жанра (Taddy API + OpenAI) и присылает на почту.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Gmail, OpenAI |
| **Узлов в схеме** | 16 |
| **Нужные учётные данные** | `gmailOAuth2`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Daily Podcast Summary
### This workflow will summarize the content in the day's top podcasts for a certain genre, then send you the podcasts with summaries by email

## Setup:
 1. Create a free API key on Taddy here: https://taddy.org/signup/developers
 2. Input your user number and API key into the `TaddyTopDaily` node in the header parameters X-USER-ID and X-API-KEY respectively.
 3. Create access credentials for your Gmail as described here: https://developers.google.com/workspace/guides/create-credentials. Use the credentials from your *client_secret.json* in the `Gmail` node.
 4. In the `Genre` node, set the genre of podcasts you want a summary for. Valid values are: TECHNOLOGY, NEWS, ARTS, COMEDY, SPORTS, FICTION, etc. Look at api.taddy.org for the full list (they will be displayed in the help docs as PODCASTSERIES_TECHNOLOGY, PODCASTSERIES_NEWS, etc.)
 5. Enter your email address in the `Gmail` node.
 6. Change the schedule time for sending email from `Schedule` to whichever time you want to receive the email.
 

## Test:
- Link a `Test Workflow` node in place of the `Schedule` node.
- Hit Test Workflow.
- Check your email for the results.

### Whisper transcribes and Open AI summarizes the podcast

### Get daily list of top podcasts (according to Apple charts) and download audio, then crop for OpenAI

### Finally, send the email!

### Crop the podcast down before analysis

</details>
