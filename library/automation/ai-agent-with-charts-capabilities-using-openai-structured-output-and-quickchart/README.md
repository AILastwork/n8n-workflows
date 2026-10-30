# Ai agent with charts capabilities using openai structured output and quickchart

> ИИ-агент, который по запросу строит графики через QuickChart, используя structured output OpenAI.

| | |
|---|---|
| **Категория** | [⚙️ Автоматизация](../README.md) |
| **Запуск** | вызов из другого воркфлоу, чат |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 8 |
| **Нужные учётные данные** | `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# 2400 Ai Agent With Charts Capabilities Using Openai Structured Output And Quickchart

This workflow integrates an AI agent with the ability to generate charts using OpenAI's structured output capabilities, providing a seamless way to incorporate data visualizations into conversational AI applications.

Example: A user could engage with the AI agent and request a chart related to a specific topic, such as "Can you show me a chart of the top 5 movies at the box office?" The agent would then call a tool that triggers a sub-workflow to generate a chart definition using OpenAI's structured output, which is then converted into a Quickchart.io URL and returned to the agent to display the chart in the conversation.

## What You Can Do
- Integrates an AI agent with the ability to generate charts on-demand
- Leverages OpenAI's structured output capabilities to generate chart definitions that adhere to Quickchart.io specifications
- Provides a seamless user experience by embedding the chart directly into the conversational interface

## Quick Start
1. Import this workflow to n8n
2. Configure your settings
3. Start automating!

⚠️ WARNING: Stop Building Basic Automations For Peanuts. 🚫

Here's the painful truth most won't tell you...

While 90% of builders are stuck selling $500 n8n workflows (and working way too hard)...
I'm consistently closing $6k-13k deals by doing ONE thing differently:
I combine simple automations with custom AI that takes less than a week to build.

Recent client wins:
* Turned a basic invoicing headache into a $6k project that saves my client 20 hours/week
* Built a lead generation machine for law firms - they happily paid $13k (and it runs 24/7)
* Created AI-powered SEO automation that beats funded companies (using $0 in AI costs)

Time to build each solution? Under 2 hours.

But here's what's crazy...
Most automation builders think AI is "too complex" or "too expensive" to add to their stack.
(Meanwhile, I'm charging 10x more for solutions that take the same time to build)

Want to see exactly how I do it?
Inside our community, I show you:
* The exact AI components that 3x your pricing overnight
* My "$15k Solution Stack" (n8n + AI framework)
* Word-for-word scripts to close premium deals
* Real examples of my $10k+ builds
* The psychology behind why clients happily pay more

Get your free trial here (closing soon): https://www.skool.com/masterclass-marketing

</details>
