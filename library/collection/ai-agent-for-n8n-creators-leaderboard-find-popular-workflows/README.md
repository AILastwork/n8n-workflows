# 🔥📈🤖 AI Agent for n8n Creators Leaderboard - Find Popular Workflows

> ИИ-агент для рейтинга авторов n8n: находит популярные воркфлоу (локальная или облачная модель).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вызов из другого воркфлоу, чат |
| **Сервисы** | Ollama, OpenAI |
| **Узлов в схеме** | 27 |
| **Нужные учётные данные** | `ollamaApi`, `openAiApi` |

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

## Local or Cloud LLM

## Save n8n Creator Report Locally
(optional for local install)

## Summary Report Response

## Global Workflow Variables

## Daily n8n Leaderboard Stats
https://github.com/teds-tech-talks/n8n-community-leaderboard

### n8n Leaderboard
https://teds-tech-talks.github.io/n8n-community-leaderboard/

## n8n Creators Stats

## n8n Workflow Stats

## Filter by n8n Creator Username

## Workflow for n8n Creators Stats

## GET n8n Stats from GitHub repo

# n8n Creators Leaderboard Stats Workflow

## Overview
This workflow aggregates and processes data from the n8n community to generate detailed statistics about creators and their workflows. It fetches information from JSON files stored on GitHub, merges creator and workflow data, filters the results based on a specified username, and uses an AI agent to output a comprehensive Markdown report.

## Data Retrieval
- **Creators Data**: 
 - An HTTP Request node ("stats_aggregate_creators") retrieves a JSON file containing aggregated statistics for workflow creators. 
- **Workflows Data**: 
 - A separate HTTP Request node ("stats_aggregate_workflows") pulls a JSON file with detailed workflow metrics such as visitor counts and inserter statistics. 
- **Global Variables**: 
 - A global variable is set with the GitHub repository base URL housing these JSON files, ensuring that the correct data source is used.

## Data Processing and Merging
- **Parsing the Data**: 
 - The "Parse Creators Data" and "Parse Workflow Data" nodes extract JSON arrays from the retrieved files for further processing. 
- **Limiting and Sorting**: 
 - Nodes like "Take Top 25 Creators" and "Take Top 300 Workflows" limit the result sets, while nodes such as "Sort By Top Weekly Creator Inserts" and "Sort By Top Weekly Workflow Inserts" sort the data based on performance metrics. 
- **Merging Records**: 
 - Data from creators and workflows is merged by matching the username, enriching the dataset with combined statistics for each creator.

## Filtering and Report Generation
- **Username Filtering**: 
 - A filter node ("Filter By Creator Username") allows the workflow to focus on a single creator based on the input username (e.g., "joe"). 
- **Generating the Markdown Report**: 
 - An AI agent node ("gpt-4o-mini") processes the filtered data using a predefined prompt. This prompt instructs the agent to produce a detailed Markdown report that includes: 
 - An overall summary of the creator’s workflows 
 - A Markdown table listing each workflow along with key metrics (unique weekly/monthly visitors and inserters) and a brief explanation of its popularity 
 - Insights into trends or community feedback related to the workflows 
- **Output Conversion and Saving**: 
 - The resulting text is converted into a file (using the "creator-summary" node) and then saved locally with a filename that includes a timestamp, ensuring easy tracking and retrieval

## Chat History Memory

# Quick Start Guide for the n8n Creators Leaderboard Workflow

## Prerequisites
- Ensure your n8n instance is running.
- Verify that the GitHub base URL and file variables (for creators and workflows) are correctly set in the Global Variables node.
- Confirm that your OpenAI credentials are configured for the AI Agent node.

## How to Start the Workflow
- **Activate the Workflow:** 
 Ensure the workflow is active in your n8n environment.

- **Trigger via Chat:** 
 The workflow is initiated by the Chat Trigger node. Send a chat message such as: 
 `show me stats for username [desired_username]` 
 This input provides the required username for filtering.

- **Processing & Report Generation:** 
 Once triggered, the workflow fetches aggregated creator and workflow data from GitHub, processes and merges the information, and then uses the AI Agent to generate a Markdown report.

- **Output:** 
 The final Markdown report is saved locally as a file (with a timestamp), which you can review to see detailed leaderboard statistics and insights for the specified creator.

## Summary
By sending a chat message with the appropriate username command, you can quickly trigger this workflow, which will then fetch, process, and generate dynamic statistics about n8n community creators. Enjoy exploring your community’s leaderboard data!

# Why Use the n8n Creators Leaderboard Workflow?

## Benefits
This workflow provides valuable insights into the n8n community by analyzing and presenting detailed statistics about workflow creators and their contributions. It helps users to:

- **Discover Popular Workflows**: Identify the most widely used workflows based on unique visitors and inserters, both weekly and monthly.
- **Understand Community Trends**: Gain insights into what types of workflows are resonating with the community, enabling better decision-making for creating or improving workflows.
- **Recognize Top Contributors**: Highlight the most active and impactful creators, fostering collaboration and inspiration within the community.
- **Save Time with Automation**: Automates data retrieval, processing, and report generation, eliminating manual effort.

## Key Features
- **Data Aggregation**: Fetches creator and workflow statistics from GitHub repositories.
- **Custom Filtering**: Allows filtering by specific usernames to focus on individual contributors.
- **AI-Powered Reports**: Generates comprehensive Markdown reports with detailed summaries, tables, and community analysis.
- **Output Flexibility**: Saves reports locally for easy access and future reference.

## Use Cases
- **For Workflow Creators**: Monitor performance metrics of your workflows to understand their impact and optimize them for better engagement.
- **For Community Managers**: Recognize top contributors and trends to encourage participation and improve community resources.
- **For New Users**: Explore popular workflow

…

</details>
