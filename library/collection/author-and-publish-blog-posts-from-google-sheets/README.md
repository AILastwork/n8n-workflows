# Blog Automation TEMPLATE

> Шаблон автоматизации блога: пишет статьи поэтапно через OpenRouter, заменяет плейсхолдеры, публикует и ведёт лог в Google Sheets.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, по расписанию |
| **Сервисы** | Google Sheets, OpenAI |
| **Узлов в схеме** | 22 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Settings

## Author Blog-Post
Using OpenRouter to make model fully configurable for each authoring stage

## Post-process Data
{{ Placehoder }} replacement

## Log to Sheet

## Save Result To Sheet

## Publish Blog-Post
Use a generic XMLHttpRequest with subsequent response handling, since the Wordpress node did not work at all.

## Post-process Data
Normalize and re-merge output data structure.

## Post-process Data
Extract post id or error message from response.

## Log to Sheet

## Save Status To Sheet

## Authoring
## Stage

## Publishing
## Stage

## Config & Data

</details>
