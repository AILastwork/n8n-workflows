# Microsoft Outlook AI Email Assistant

> ИИ-ассистент для почты Outlook: раскладывает письма по категориям с учётом данных клиентов (Airtable, Monday.com).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, по расписанию |
| **Сервисы** | Airtable, Monday.com, OpenAI, Outlook |
| **Узлов в схеме** | 20 |
| **Нужные учётные данные** | `airtableTokenApi`, `microsoftOutlookOAuth2Api`, `mondayComApi`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# Microsoft Outlook AI Email Assistant

## Outlook Business with filters
Filters:
```
flag/flagStatus eq 'notFlagged' and not categories/any()
```

These filters ensure we do not process flagged emails or email that already have a category set.

## Sanitise Email 
Removes HTML and useless information in preparation for the AI Agent

## Get Rules & Categories
Edit the airtables to set your own categories, rules, contacts and/or delete rules.

## CRM Contact List Integration 
For this workflow I am retrieving supplier & client contacts from Monday.com the email assistant has better context to categorise, prioritise and reply to emails.
The list is updated daily or you can change the scheduler trigger to update more or less frequently.
You could replace this with your own CRM.

## Categorise & Prioritise Emails Agent

## Set the category & importance using the output from the agent

## Match Contact
Check if the sender is an existing contact. Note in this workflow the contacts are dynamically loaded from Monday.com

</details>
