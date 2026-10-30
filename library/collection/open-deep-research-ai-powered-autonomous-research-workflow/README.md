# Open Deep Research - AI-Powered Autonomous Research Workflow

> Open Deep Research: автономный ИИ-исследователь (OpenRouter, SerpAPI, Jina) — ищет, читает и пишет отчёт.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | чат |
| **Сервисы** | OpenRouter, Wikipedia |
| **Узлов в схеме** | 14 |
| **Нужные учётные данные** | `httpHeaderAuth`, `openRouterApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## SerpAPI Setup Instructions
1. Obtain your API key from https://serpapi.com/manage-api-key.
2. Save your API key securely in n8n credentials (do not use plain text).

## Jina AI Setup Instructions
1. Obtain your API key from https://jina.ai/api-dashboard/key-manager.
2. Configure your Jina AI credential in n8n to ensure secure API access.

## OpenRouter API Setup Instructions
1. Obtain your API key from https://openrouter.ai/settings/keys.
2. Set up your OpenRouter credential in n8n for secure integration.

</details>
