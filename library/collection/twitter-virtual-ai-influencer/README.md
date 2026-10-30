# Twitter Virtual AI Influencer

> Виртуальный ИИ-инфлюенсер для Twitter: пишет и публикует твиты по расписанию в заданном стиле.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, по расписанию |
| **Сервисы** | OpenAI, X (Twitter) |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `openAiApi`, `twitterOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Scheduled posting 
Write a tweet every 6 hours and randomize the minutes that it's posted at to make it seem natural.

## Configure influencer profile 
Set your target niche, writing style, and inspiration.

## Generate tweet
Generate a potentially viral tweet based on your configuration.

## Validate tweet
If the generated tweet does not meet length constraints, regenerate it.

## Post the tweet
Post the tweet to your X account.

## On-demand posting 
Write a tweet on demand, when you manually run your workflow.

</details>
