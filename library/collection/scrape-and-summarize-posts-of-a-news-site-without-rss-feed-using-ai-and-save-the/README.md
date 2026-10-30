# News Extraction

> Собирает свежие пресс-релизы с сайта, делает выжимку через OpenAI и сохраняет в NocoDB.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | NocoDB, OpenAI |
| **Узлов в схеме** | 18 |
| **Нужные учётные данные** | `nocoDbApiToken`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

Select only the newest news: todays date going back xy days

Extracting the individual links of the press release page in order to retrieve the individual posts on their respective **url**

Extracting the dates of the posts of the press release page.
The right CSS selector has to be chosen.
[More info on datagrab.io](https://datagrab.io/blog/guide-to-css-selectors-for-web-scraping/)

# Scraping posts of a news site without RSS feed


The [News Site](https://www.colt.net/resources/type/news/) from Colt, a telecom company, does not offer an RSS feed, therefore web scraping is the 
choice to extract and process the news.

The goal is to get only the newest posts, a summary of each post and their respective (technical) keywords.

Note that the news site offers the links to each news post, but not the individual news. We collect first the links and dates of each post before extracting the newest ones.

The result is sent to a SQL database, in this case a NocoDB database.

This process happens each week thru a cron job.

**Requirements**:
- Basic understanding of CSS selectors and how to get them via browser (usually: right click &rarr; inspect)
- ChatGPT API account - normal account is not sufficient
- A NocoDB database - of course you may choose any type of output target

**Assumptions**:
- CSS selectors work on the news site
- The post has a date with own CSS selector - meaning date is not part of the news content

**"Warnings"**
- Not every site likes to be scraped, especially not in high frequency
- Each website is structured in different ways, the workflow may then need several adaptations.


Happy about any suggestion to improve. You may contact me on **Mastodon**: https://bonn.social/@askans

Weekly cron job

The html of the news site is being retrieved: https://www.colt.net/resources/type/news/

As the extraction are returned as arrays, they transformed into individual JSON items to enable looping with other nodes

The links of the individual posts and the dates of the posts

Get the html of each individual **newest** post

Extracting the title & content (text) of each individual news post with the right CSS selector

Merge link to url, date with content (text) and title of each news psot

Create a summary of each news post with ChatGPT. You need a ChatGPT API account for this

Get the 3 keywords of each news post

Just a renaming of data fields and eliminating unnecessary ones

Merge summary and keywords of each news post

Add title, link and date to summary and keywords of each news post

## News summaries and keywords &rarr; database

[NocoDB](https://nocodb.com/) is an SQL database, here we store the news summaries and keywords for further processing. Any other output target can be chosen here, e.g. e-mail, Excel etc.

You need first have that database structured before appending the news summaries and additional fields. The you can shape this node.

Some fields may be edited in the database itself (e.g. relevance of the news to you) and may be filled therefore with a default value or not at all

</details>
