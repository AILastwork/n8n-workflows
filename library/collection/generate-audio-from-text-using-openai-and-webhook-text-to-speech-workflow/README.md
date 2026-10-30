# Generate audio from text using OpenAI - text-to-speech Workflow

> Озвучивает текст через OpenAI TTS по запросу на вебхук.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This `Webhook` node triggers the workflow when it receives a POST request.

### 1. Test Mode:
* Use the test webhook URL
* Click the `Test workflow` button on the canvas. (In test mode, the webhook only works for one call after you click this button)

### 1. Production Mode:
* The workflow must be active for a **Production URL** to run successfully.
* You can activate the workflow using the toggle in the top-right of the editor.
* Note that unlike test URL calls, production URL calls aren't shown on the canvas (only in the executions list).

### Configure the OpenAI node with your API key:
If you haven't connected your OpenAI credentials in n8n yet, log in to your OpenAI account to get your API Key. Then, open the OpenAI node, click `Create New Credentials` and connect with the **OpenAI API**.

</details>
