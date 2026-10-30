# AI CV Screening Workflow

> ИИ-скрининг резюме из Gmail через Gemini с записью в Google Sheets.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | форма n8n |
| **Сервисы** | Gmail, Google Gemini, Google Sheets |
| **Узлов в схеме** | 7 |
| **Нужные учётные данные** | `gmailOAuth2`, `googlePalmApi`, `googleSheetsOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.
