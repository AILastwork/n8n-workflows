# Google analytics template

> Анализирует данные Google Analytics и Search Console через ИИ, сравнивает недели и сохраняет выводы в Baserow.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, по расписанию |
| **Сервисы** | Baserow, Google Analytics |
| **Узлов в схеме** | 18 |
| **Нужные учётные данные** | `googleAnalyticsOAuth2` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Send Google analytics to A.I. and save results to baserow

This workflow will check for country views, page engagement and google search console results. It will take this week's data and compare it to last week's data.

[You can read more about this workflow here](https://rumjahn.com/how-i-used-a-i-to-be-an-seo-expert-and-analyzed-my-google-analytics-data-in-n8n-and-make-com/)

## Property ID

1. Create your [Google Analytics Credentials](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal)
2. Enter your [property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id).

## Send data to A.I.

Fill in your Openrouter A.I. credentials. Use Header Auth.
- Username: Authorization
- Password: Bearer {insert your API key}

Remember to add a space after bearer. Also, feel free to modify the prompt to A.1.

## Send data to Baserow

Create a table first with the following columns:
- Name
- Country Views
- Page Views
- Search Report
- Blog 

Enter the name of your website under "Blog" field.

</details>
