# NeurochainAI Basic API Integration

> Базовая интеграция NeurochainAI с Telegram-ботом.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Telegram |
| **Сервисы** | Telegram |
| **Узлов в схеме** | 20 |
| **Нужные учётные данные** | `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## ERROR

## SUCCESS
This node will send the AI ​​response directly to the Telegram chat.

## HTTP REQUEST

Replace **MODEL** with the desired AI model from the NeurochainAI dashboard.

Replace YOUR-API-KEY-HERE with your actual NeurochainAI API key.

**Models:**
Meta-Llama-3.1-8B-Instruct-Q8_0.gguf
Meta-Llama-3.1-8B-Instruct-Q6_K.gguf
Mistral-7B-Instruct-v0.2-GPTQ-Neurochain-custom-io
Mistral-7B-Instruct-v0.2-GPTQ-Neurochain-custom
Mistral-7B-OpenOrca-GPTQ
Mistral-7B-Instruct-v0.1-gguf-q8_0.gguf
Mistral-7B-Instruct-v0.2-GPTQ
ingredient-extractor-mistral-7b-instruct-v0.1-gguf-q8_0.gguf

## This node removes the /flux prefix.

## ERROR

## HTTP REQUEST

Replace **MODEL** with the desired AI model from the NeurochainAI dashboard.

Replace YOUR-API-KEY-HERE with your actual NeurochainAI API key.

**Models:**
super-flux1-schnell-gguf
flux1-schnell-gguf

## This node sends an emoji to indicate that the prompt is being processed.

## SUCCESS
This node will send the AI ​​response directly to the Telegram chat.

## Instructions for Using the Template
Follow these steps to set up and use this template:

**Create a Telegram Bot**:
- Open Telegram and search for BotFather.
- Use the ``/newbot`` command to create your bot.
- Follow the prompts and copy the Token provided at the end.
-------------
**Obtain a NeurochainAI API Key:**

- Log in to the NeurochainAI Dashboard.
- Generate an **API Key** under the Inference As Service section.
- Ensure your account has sufficient credits for usage.
-------------
 **Configure Telegram Nodes:**
- Locate all Telegram nodes in the workflow and add your Telegram Bot Token to each node's credentials.
-------------
**Configure HTTP Request Nodes:**

- Identify the NeurochainAI - Rest API and NeurochainAI - Flux nodes in the workflow.
In each node:
- Enter your desired model in the Model field.
- Replace ``YOUR-API-KEY-HERE`` with your API Key in the headers or configuration section.
-------------
**Save and Test:**
- Save the workflow in N8N.
- Test the workflow by interacting with your Telegram bot to trigger text and image generation tasks.

</details>
