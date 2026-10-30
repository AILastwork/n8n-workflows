# 🤖🧑‍💻 AI Agent for Top n8n Creators Leaderboard Reporting

> ИИ-агент для отчётов по рейтингу авторов n8n: собирает статистику, отправляет отчёт по Gmail и в Telegram.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вызов из другого воркфлоу, по расписанию |
| **Сервисы** | Gmail, Google Drive, Google Gemini, OpenAI, Telegram |
| **Узлов в схеме** | 31 |
| **Нужные учётные данные** | `gmailOAuth2`, `googleDriveOAuth2Api`, `googlePalmApi`, `openAiApi`, `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## AI Agent for n8n Creator Leaderboard Stats
https://github.com/teds-tech-talks/n8n-community-leaderboard

## Tool Call for n8n Creators Stats
https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow/

## OpenAI LLM
https://platform.openai.com/api-keys

## Save n8n Creators & Workflows Report Locally
(optional for local install)

## Global Workflow Variables

## Daily n8n Leaderboard Stats
https://github.com/teds-tech-talks/n8n-community-leaderboard

### n8n Leaderboard
https://teds-tech-talks.github.io/n8n-community-leaderboard/

## n8n Creators Stats

## n8n Workflow Stats

## Workflow for n8n Creators Stats

## GET n8n Stats from GitHub repo
https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/

## Settings
Change these settings to suit your needs

## Save n8n Creator & Workflows Report to Google Drive
https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/

## Email n8n Creators & Workflows Report
https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/

## Telegram 
(Optional)
https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegram/

## Create Top 10 Workflows List

## Google Gemini LLM
https://aistudio.google.com/apikey

## Email Top 10 Workflows List
https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/

# n8n Top Creators Leaderboard Reporting Workflow

## Why This Workflow is Important
This workflow is a powerful tool for reporting on the n8n community's creators and workflows. It provides valuable insights into the most popular workflows, top contributors, and community trends. By automating data aggregation, processing, and report generation, it saves time and effort while fostering collaboration and inspiration within the n8n ecosystem.

### Key Benefits:
- **Discover Trends**: Identify top workflows based on unique visitors and inserters.
- **Recognize Contributors**: Highlight impactful creators driving community engagement.
- **Save Time**: Automates the entire reporting process, from data retrieval to report creation.

## How to Use It
1. **Set Up Prerequisites**: Ensure your n8n instance is running, GitHub data files are accessible, Google Gmail/Drive and OpenAI credentials are configured and Google Gemini credentials are configured.

2. **Trigger the Workflow**:
 - Schedule the workflow to run daily or as needed.

3. **Review Reports**:
 - The workflow generates a detailed Markdown report with summaries, tables, and insights.
 - Reports are saved locally or shared via email, Google Drive, or Telegram.


This workflow is ideal for creators, community managers, and new users looking to explore or optimize workflows within the n8n platform.

</details>
