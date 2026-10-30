# Automate Image Validation Tasks using AI Vision

> Проверяет фото на соответствие требованиям к фото на паспорт с помощью ИИ-зрения Gemini.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Google Drive, Google Gemini |
| **Узлов в схеме** | 8 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `googlePalmApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## 1. Import Photos To Validate
[Read more about using Google Drive](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive)

In this demonstration, we'll import 5 different portraits to test our AI vision model. For convenience, we'll use Google Drive but feel free to swap this out for other sources such as other storage or by using webhooks.

## 2. Verify Passport Photo Validity Using AI Vision Model
[Learn more about Basic LLM Chain](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm)

Verifying if a photo is suitable for a passport photo is a great use-case for AI vision and to automate the process is an equally great use-case for using n8n. Here's we've pasted in the UK governments guidelines copied from gov.uk and have asked the AI to validate the incoming photos following those rules. A structured output parser is used to simplify the AI response which can be used to update a database or backend of your choosing.

## Try It Out!

### This workflow takes a portrait and verifies if it makes for a valid passport photo. It achieves this by using an AI vision model following the UK government guidance.

OpenAI's vision model was found to perform well for understanding photographs and so is recommended for this type of workflow. However, any capable vision model should work.

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

</details>
