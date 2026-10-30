# Standup bot 4 4 worker

> Стендап-бот, часть 4/4: основной обработчик — напоминания, сбор ответов и отчёты в Mattermost.

| | |
|---|---|
| **Категория** | [⚙️ Автоматизация](../README.md) |
| **Запуск** | вебхук, по расписанию |
| **Сервисы** | Mattermost |
| **Узлов в схеме** | 29 |
| **Нужные учётные данные** | `mattermostApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# 1475 Standup Bot 4 4 Worker

This workflow manages a Mattermost-based standup process, allowing users to configure and update their standup settings, and providing reminders and reporting capabilities.

Example: A team using Mattermost for their daily standups can use this workflow to set up and customize their standup process. Users can use a slash command to open a configuration dialog, where they can specify the standup title, time, days, questions, and participants. The workflow then sends reminders to the relevant users and collects their responses, which are then posted in a summary report to the team's Mattermost channel.

## What You Can Do
- Configurable standup settings (title, time, days, questions, participants)
- Automated standup reminders and response collection
- Standup report generation and posting to Mattermost
- Ability to update standup configuration through a dialog

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
