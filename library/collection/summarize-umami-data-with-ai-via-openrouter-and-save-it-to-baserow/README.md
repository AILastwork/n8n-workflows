# Umami analytics template

> Анализирует статистику Umami через ИИ и сохраняет SEO-рекомендации в Baserow.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, по расписанию |
| **Сервисы** | Baserow |
| **Узлов в схеме** | 11 |
| **Нужные учётные данные** | `baserowApi`, `httpHeaderAuth` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Send data from Umami to A.I. and then save to Baserow

You can find out more about the stats available in the [Umami API](https://umami.is/docs/api/website-stats-api)

Read the [case study here](https://rumjahn.com/how-to-analyze-umami-data-using-n8n-and-a-i-to-improve-seo-and-uncover-hidden-insights-for-better-content-optimization/).

## Get summary stats from Umami

It will get: Pageviews, Visitors, Visits, Bounces, Total Time

You need to change the URL to your website. https://{your website}/api/websites/{website ID}/

You can find your ID by going to your Umami account -> Settings -> Edit (next to domain)

## Send data to A.I.

To use Openrouter, you need to register for an account.
Then add header authorization credentials.
Username: Authroization
Password: Bearer {Your API Key}
*It's Bearer space {API key}.

## Get page specific stats for this week and last

Calls Umami to get this week and last week's data. It will get the views for each page visited on your website for comparison.

## Send data to A.I.

To use Openrouter, you need to register for an account.
Then add header authorization credentials.
Username: Authroization
Password: Bearer {Your API Key}
*It's Bearer space {API key}.

## Save analysis to baserow

You need to create a table in advance to save. 
- Date (date)
- Summary (Long text)
- Top pages (Long text)
- Blog name (Long text)

</details>
