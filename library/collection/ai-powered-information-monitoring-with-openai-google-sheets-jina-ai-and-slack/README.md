# AI-Powered Information Monitoring with OpenAI, Google Sheets, Jina AI and Slack

> ИИ-мониторинг информации: отбирает релевантные статьи из RSS, делает выжимку через Jina и OpenAI, отправляет в Slack, ведёт список в Google Sheets.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | Google Sheets, OpenAI, RSS, Slack |
| **Узлов в схеме** | 18 |
| **Нужные учётные данные** | `googleApi`, `openAiApi`, `slackOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## LLM Call 1 - Article Topic Relevance Classification 

This **LLM call** is used to **classify** whether the articles published on the website are **relevant** to the **topics and interests** you want to monitor. 
It analyzes the **title** and the **content snippet** retrieved from the **RSS Read** node. 

In this template, the monitored articles are related to **data and AI.** 
The classification is done into **two categories**, which you should modify in the `Description` field under the **Categories** section of the node:

### Relevant 
`Description`: Articles related to **[The topics you want to monitor]**. 

### Not Relevant 
`Description`: Articles that are not directly related to **[The topics you want to monitor]**.

By default, this template monitors topics related to artificial intelligence (AI), data science, machine learning, algorithms, big data, and innovations in these fields.

## LLM Call 2 - Summarize and Format in Slack Markdown 

This node **uses OpenAI's GPT-4o-mini model** to **summarize the article content**, which is provided as **Markdown text** from Jina AI, and formats it in **Slack Markdown** to enhance readability within Slack. 

### Customize to fit your needs 

Here are two examples of how you can modify the **System Prompt** of this node to better suit your requirements: 

- **Language customization:** 
 You can modify the **System Prompt** to instruct the LLM to generate the summary in a specific language (e.g., French or Italian). 
 However, consider the option of adding a separate LLM node **dedicated to translation** if the model cannot handle **summarization, formatting, and translation** simultaneously while maintaining high output quality.

- **Changing the summary structure:** 
 You can adjust the prompt to modify how the summary is structured to better match your preferred format and style.

## Google Sheets - Get RSS Feed URLs Followed 
This node **retrieves rows** from the Google Sheet that contains the **RSS feed URLs** you follow. 
It is configured to run only once per execution, meaning that even if the previous node outputs many items, this node will execute only once. 

You can **add more URLs** to your sheet, but keep in mind that following **more RSS feeds** will increase the **cost of LLM API usage** (e.g., OpenAI). 

You can access the **Google Sheet template** to copy and use in this workflow [here](https://docs.google.com/spreadsheets/d/1F2FzWt9FMkA5V5i9d_hBJRahLDvxs3DQBOLkLYowXbY/). 
(*This is the same template used in the previous node.*)

In this node, make sure to select the **"rss_feed"** sheet from your **copied version of the Google Sheet template**. 
This sheet contains the list of RSS feed URLs that the workflow will process.

## RSS Read 
This node **reads** the RSS feed. 
The RSS URL is **retrieved** from the data you have entered in **Google Sheets**, so make sure the URL provided is indeed a **valid RSS feed**. 

### What is an RSS feed? 
An **RSS feed** is a **web feed** that allows users to **automatically receive updates** from websites, such as **news sites** or **blogs**, in a **standardized format**.

## Jina AI - Read URL

This node **uses the Jina AI API** to **retrieve the content** of articles that were classified as **"relevant"** in the previous step. 
Since this process **involves web scraping**, ensure that it complies with the **scraping regulations** in your country. 

### What is Jina AI? 
**Jina AI** is an API that allows you to **extract webpage content** and convert it into a format that is **ready for LLM processing**, such as **Markdown**. 

You can create an account [here](https://jina.ai/) and receive **1,000,000 free tokens** for testing. 
However, the service can also be used **without an API key** (without an account), though with **reduced RPM (requests per minute)**. 
For this workflow, the default RPM limits should generally be sufficient.

## Google Sheets - Get Article Monitored Database 
This node **retrieves rows** from the Google Sheet that contains articles **already monitored and summarized** by the workflow. 
Depending on the RSS feed you monitor, **URLs may remain in the feed for a long time**, and you don't want to monitor the same URL **twice**. 
You can find the **Google Sheet template** that you can copy and use in this workflow [here](https://docs.google.com/spreadsheets/d/1F2FzWt9FMkA5V5i9d_hBJRahLDvxs3DQBOLkLYowXbY/edit?gid=1966921272#gid=1966921272).

In this node, make sure to select the **"article_database"** sheet from your **copied version of the Google Sheet template**. 
This sheet is used to store and manage the articles processed by the workflow.


---

## Set Field - existing_url 

This node sets the **"existing_url"** field with the value from **"article_url"** in the Google Sheets database. 
During the **first execution** of the workflow, this field will be **empty**, as no articles are present in Google Sheets yet. 
An error may occur in this case; however, the workflow will **continue running** without interruption.

## Code Node to Filter Existing URLs

This code node filters URLs that have **not yet been summarized by AI.** 
It outputs:

- A **list of URLs** following the RSS Read schema if new URLs are found.
- An item called **"message"** with the value **"No new articles found"** if no new articles are available in your RSS feed.

---

## IF Node

The condition for this node is: `{{ $json.message }}` *not equal to* **"No new articles found"**.

- **False** → The workflow executes the "No Operation, do nothing" node.
- **True** → The workflow proceeds to process the new articles for your web development industry monitoring.

## Set Fields - Not Relevant Articles 

This node prepares the data to be added to the Google Sheet by defining the following fields: 

- **`article_url`** – The article's URL.
- **`summarized`** – Always set to `"NO (not relevant)"`, as it belongs to the **"not_relevant"** path. 
- **`website`** – The website where the article URL was pu

…

</details>
