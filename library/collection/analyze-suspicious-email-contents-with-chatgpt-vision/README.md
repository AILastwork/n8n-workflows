# Analyze Suspicious Email Contents with ChatGPT Vision

> Анализирует подозрительные письма из Gmail/Outlook с помощью ChatGPT Vision по скриншоту и заводит тикет в Jira.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Gmail, событие в Outlook |
| **Сервисы** | Gmail, Jira, OpenAI, Outlook |
| **Узлов в схеме** | 13 |
| **Нужные учётные данные** | `gmailOAuth2`, `httpBasicAuth`, `jiraSoftwareCloudApi`, `microsoftOutlookOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

![Gmail](https://uploads.n8n.io/templates/gmail.png)
## Gmail Integration and Data Extraction

This section of the workflow connects to a Gmail account using the **Gmail Trigger** node, capturing incoming emails in real-time, with checks performed every minute. Once an email is detected, its key components—such as the subject, recipient, body, and headers—are extracted and assigned to variables using the **Set Gmail Variables** node. These variables are structured for subsequent analysis and processing in later steps.

![Gmail](https://uploads.n8n.io/templates/outlook.png)
## Microsoft Outlook Integration and Email Header Processing

This section connects to a Microsoft Outlook account to monitor incoming emails using the **Microsoft Outlook Trigger** node, which checks for new messages every minute. Emails are then processed to retrieve detailed headers and body content via the **Retrieve Headers of Email** node. The headers are structured into a user-friendly format using the **Format Headers** code node, ensuring clarity for further analysis. Key details, including the email's subject, recipient, and body content, are assigned to variables with the **Set Outlook Variables** node for streamlined integration into subsequent workflow steps.

![hctiapi](https://uploads.n8n.io/templates/hctiapi.png)
## HTML Screenshot Generation and Email Visualization

This section processes an email’s HTML content to create a visual representation, useful for documentation or phishing detection workflows. The **Set Email Variables** node organizes the email's HTML body into a format ready for processing. The **Screenshot HTML** node sends this HTML content to the **hcti.io** API, which generates a screenshot of the email's layout. The **Retrieve Screenshot** node then fetches the image URL for further use in the workflow. This setup ensures that the email's appearance is preserved in a visually accessible format, simplifying review and reporting. Keep in mind however that this exposes the email content to a third party. If you self host n8n, you can deploy a cli tool to rasterize locally instead.

![hctiapi](https://uploads.n8n.io/templates/openai.png)
## AI-Powered Email Analysis with ChatGPT

This section leverages AI to analyze email content and headers for phishing indicators. The **ChatGPT Analysis** node utilizes the ChatGPT-4 model to review the email screenshot and associated metadata, including message headers. It generates a detailed report indicating whether the email might be a phishing attempt. The output is formatted specifically for Jira’s wiki-style renderer, making it ready for seamless integration into ticketing workflows. This ensures thorough and automated email threat assessments.

![hctiapi](https://uploads.n8n.io/templates/jira.png)
## Automated Jira Ticket Creation for Phishing Reports

This section streamlines the process of reporting phishing emails by automatically creating detailed Jira tickets. The **Create Jira Ticket** node compiles email information, including the subject, recipient, body text, and ChatGPT's phishing analysis, into a structured ticket. The **Rename Screenshot** node ensures that the email screenshot file is appropriately labeled for attachment. Finally, the **Upload Screenshot of Email to Jira** node attaches the email’s visual representation to the ticket, providing additional context for the security team. This integration ensures that phishing reports are logged with all necessary details, enabling efficient tracking and resolution.

</details>
