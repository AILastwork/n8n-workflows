# Complete Youtube

> ИИ-агент для YouTube: поиск видео, анализ каналов и комментариев в чате.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | чат |
| **Сервисы** | OpenAI, YouTube |
| **Узлов в схеме** | 13 |
| **Нужные учётные данные** | `youTubeOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

Main Workflow

This part should be abstracted to another workflow and called inside the "youtube_search" tool of the main AI Agent.

</details>
