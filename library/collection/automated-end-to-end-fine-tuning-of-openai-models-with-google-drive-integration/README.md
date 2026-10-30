# Fine-tuning with OpenAI models

> Дообучение (fine-tuning) моделей OpenAI на файле .jsonl из Google Drive и чат с новой моделью.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, чат |
| **Сервисы** | Google Drive, OpenAI |
| **Узлов в схеме** | 7 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `httpHeaderAuth`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# Step 2

Once the .jsonl file for training is uploaded (See the entire process here.: https://platform.openai.com/finetune/), a "new model" will be created and made available via your API. OpenAI will automatically train it based on the uploaded .jsonl file. If the training is successful, the new model will be accessible via API.

eg. ft:gpt-4o-mini-2024-07-18:n3w-italia::XXXXX7B

# Step 1

Create the training file .jsonl with the following syntax and upload it to Drive.

{"messages": [{"role": "system", "content": "You are an experienced and helpful travel assistant."}, {"role": "user", "content": "What documents are needed to travel to the United States?"}, {"role": "assistant", "content": "To travel to the United States, you will need a valid passport and an ESTA authorization, which you can apply for online. Make sure to check the specific requirements based on your nationality."}]}
....

The file will be uploaded here: https://platform.openai.com/storage/files

</details>
