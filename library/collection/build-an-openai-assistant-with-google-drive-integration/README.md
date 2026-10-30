# Build an OpenAI Assistant with Google Drive Integration

> Создаёт ассистента OpenAI с файлом из Google Drive и даёт с ним чат.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, чат |
| **Сервисы** | Google Drive, OpenAI |
| **Узлов в схеме** | 8 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Step 1
Create an Assistent with OpenAI

## Step 2
Upload the file with the information

## Step 3
Update the assistant information with the newly uploaded file

## Step 4
Select the assistant and interact via chat

</details>
