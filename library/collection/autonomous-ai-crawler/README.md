# Autonomous AI crawler

> Автономный ИИ-краулер: обходит сайт, собирает текст и ссылки, сохраняет данные в Supabase.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | OpenAI, Supabase |
| **Узлов в схеме** | 28 |
| **Нужные учётные данные** | `openAiApi`, `supabaseApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### Text scraper tool
This tool is designed to return all text from the given webpage.

💡 **Consider adding proxy for better crawling accuracy.**

### URL scraper tool
This tool is designed to return all links (URLs) from the given webpage.

💡 **Consider adding proxy for better crawling accuracy.**

### Get companies from database
Retrieve names and websites of companies from Supabase table to process crawling.

💡 **You can replace Supabase with other database of your choice.**

### Set parameters for execution
Pass only `name` and `website` values from database. 

⚠️ **If you use other field namings, update this node.**

### Crawling agent (retrieve social media profile links)
Crawl website to extract social media profile links and return them in unified JSON format.

💡 **You can change type of retrieved data by editing prompt and parser schema.**

### Insert data to database
Add new rows in database table with extracted data.

💡 **You can replace Supabase with other database of your choice.**

## ⚠️ Note

1. Complete video guide for this workflow is available [on my YouTube](https://youtu.be/2W09puFZwtY). 
2. Remember to add your credentials and configure nodes.
3. If you like this workflow, please subscribe to [my YouTube channel](https://www.youtube.com/@workfloows) and/or [my newsletter](https://workfloows.com/).

**Thank you for your support!**

## Autonomous AI crawler
This workflow autonomously navigates through given websites and retrieves social media profile links. 

💡 **You can modify this workflow to retrieve other type of data (e.g. contact details or company profile summary).**

</details>
