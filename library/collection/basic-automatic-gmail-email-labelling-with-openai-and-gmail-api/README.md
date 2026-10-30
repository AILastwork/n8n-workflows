# Basic Automatic Gmail Email Labelling with OpenAI and Gmail API

> Простая автоматическая расстановка меток в Gmail с помощью OpenAI (создаёт новые метки при необходимости).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Gmail |
| **Сервисы** | Gmail, OpenAI |
| **Узлов в схеме** | 9 |
| **Нужные учётные данные** | `gmailOAuth2`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Gmail trigger
Poll Gmail every x minutes, trigger when a new email is received.

- Gmail API

## Gmail labelling agent
- Read the message
- Read existing labels
- Create a new label if needed
- Assign label to message

----

Objective:
Automatically categorize incoming emails based on existing Gmail labels or create a new label if none match.

Tools:
- Get message
- Read all labels
- Create label
- Assign label to message

Instructions:

Label Matching:

Analyze the email's subject, sender, recipient, keywords, and content.
Compare with existing Gmail labels to find the most relevant match.
Label Assignment:

Assign the email to the most appropriate existing label.`
Remove the inbox label if the email is of less importance (like ads, promotions, aka "Reclame"), keep normal and important emails in the inbox.
If no suitable label exists, create a new label based on the existing labels. Try reusing existing labels as much as possible. Always create a label as a sublabel, if no label applies, if the main label already exists, create the new label under the existing label, if no main label exists, create the label AI and create the new label under this label.
Label Creation:

Ensure new labels align with the structure of existing ones, including capitalization, delimiters, and prefixes.
Examples:

If the email subject is "Project Alpha Update," assign to [Project Alpha] if it exists.
For "New Vendor Inquiry," create "Vendor Inquiry" if no relevant label exists.
Outcome:
Emails are consistently categorized under the appropriate or newly created labels, maintaining Gmail's organizational structure.

## Gmail API
- Add credentials

## OpenAI
- Add credentials

</details>
