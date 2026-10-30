# SERPBear analytics template

> Анализирует позиции сайта из SerpBear через ИИ и сохраняет рекомендации в Baserow.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, по расписанию |
| **Сервисы** | Baserow |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `baserowApi`, `httpHeaderAuth` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Send Matomo analytics to A.I. and save results to baserow

This workflow will check the Google keywords for your site and it's rank.

[💡 You can read more about this workflow here](https://rumjahn.com/how-to-create-an-a-i-agent-to-analyze-serpbear-keyword-rankings-using-n8n-for-free-without-any-coding-skills-required/)

## Get SERPBear Data
 
1. Enter your SerpBear API keys and URL. You need to find your website ID which is probably 1.
2. Navigate to Administration > Personal > Security > Auth tokens within your Matomo dashboard. Click on Create new token and provide a purpose for reference.

## Send data to A.I.

Fill in your Openrouter A.I. credentials. Use Header Auth.
- Username: Authorization
- Password: Bearer {insert your API key}

Remember to add a space after bearer. Also, feel free to modify the prompt to A.1.

## Send data to Baserow

Create a table first with the following columns:
- Date
- Note
- Blog

Enter the name of your website under "Blog" field.

</details>
