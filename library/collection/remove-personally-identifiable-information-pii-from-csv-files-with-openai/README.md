# Remove Personally Identifiable Information (PII) from CSV Files with OpenAI

> Удаляет персональные данные (PII) из CSV-файлов в Google Drive с помощью OpenAI.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Google Drive |
| **Сервисы** | Google Drive, OpenAI |
| **Узлов в схеме** | 9 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Remove PII from CSV Files
This workflow monitors a Google Drive folder for new CSV files, identifies and removes PII columns using OpenAI, and uploads the sanitized file back to the drive. It requires Google Drive and OpenAI integrations with API access enabled.

</details>
