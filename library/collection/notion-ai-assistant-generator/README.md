# Notion AI Assistant Generator

> Генерирует воркфлоу ИИ-ассистента под схему конкретной базы Notion.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | чат |
| **Сервисы** | Anthropic Claude, Notion |
| **Узлов в схеме** | 18 |
| **Нужные учётные данные** | `notionApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# Generate new workflow version for specific notion db schema
Input a Notion database URL and get an AI Assistant chatbot workflow for it based on this template: https://n8n.io/workflows/2413-notion-knowledge-base-ai-assistant/

Project in notion: https://www.notion.so/n8n/Chat-with-notion-database-84eec91b74dd4e36ba97edda17c2c306

## #1 Serve chat, get URL from user, pull new notion DB schema
Uses n8n Chat trigger. Notion node will fail if an invalid URL is used, or if n8n doesn't have access to it. Also attempts to strip non URL text input. Simplifies notion DB outputs for more efficient token usage in AI Agent.

## #2 GenAI step
Takes 2 inputs: [original workflow template](https://n8n.io/workflows/2413-notion-knowledge-base-ai-assistant/) and new Notion database details from #1

## #3 Does the new workflow look right?
Checks for previously identified cases (e.g. LLM outputs placeholder for certain values) then does general LLM check on whether it looks like valid n8n workflow JSON.

## #4 Respond to Chat trigger
Each response to the chat trigger is one run. Data of the last node that runs in the workflow is sent to chat trigger, like `Return success to chat`

## Watch a quick set up video 👇
[![Notion AI Assistant Generator](https://uploads.n8n.io/devrel/notion-db-assistant-thumb#full-width)](https://youtu.be/iK87ppcaNgM)

</details>
