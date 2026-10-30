# Ask a human

> ИИ-агент, который при необходимости зовёт человека: собирает e-mail клиента и пишет в канал поддержки Slack.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вызов из другого воркфлоу, чат |
| **Сервисы** | OpenAI, Slack |
| **Узлов в схеме** | 10 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### Sub-workflow: Custom tool
The agent above can call this workflow. It checks if the user has supplied an email address. If they haven't it prompts them to provide one. If they have, it messages a customer support channel for help.

### Main workflow: AI agent using custom tool

**This tool calls the sub-workflow below**

**Set your credentials**

**Set your credentials and Slack details**

## Try it out

Select **Chat** at the bottom and enter:

_Hi! Please respond to this as if you don't know the answer to my query._

## Next steps

Learn more about [Advanced AI in n8n](https://docs.n8n.io/advanced-ai/)

</details>
