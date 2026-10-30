# Podcast Digest

> Дайджест подкаста: саммари расшифровки, темы и вопросы, пояснения из Википедии, отправка по Gmail.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Gmail, OpenAI, Wikipedia |
| **Узлов в схеме** | 15 |
| **Нужные учётные данные** | `gmailOAuth2`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Chunk the transcript into several parts, and refine-summarize it

## Generate Questions and Topics from the summary and make sure the response follows required schema.

## Ask Agent to research and explain each topic using Wikipedia

## Format as HTML and send via Gmail

</details>
