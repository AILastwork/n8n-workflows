# Analyze & Sort Suspicious Email Contents with ChatGPT

> Анализирует подозрительные письма: делает скриншот письма, ChatGPT оценивает признаки фишинга, создаётся задача в Jira.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Gmail, событие в Outlook |
| **Сервисы** | Gmail, Jira, OpenAI, Outlook |
| **Узлов в схеме** | 19 |
| **Нужные учётные данные** | `gmailOAuth2`, `httpBasicAuth`, `jiraSoftwareCloudApi`, `microsoftOutlookOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

![hctiapi](https://uploads.n8n.io/templates/hctiapi2.png)
## Email Body Screenshot Creation

The **Screenshot HTML** node sends the email's HTML body to the **hcti.io** API, generating a screenshot that visually represents the email's layout. The **Retrieve Screenshot** node then fetches this image, making it available for attachment or review in subsequent steps. This dual-format processing ensures both clarity and flexibility in email analysis workflows.

![Gmail](https://uploads.n8n.io/templates/gmail.png)
## Gmail Integration and Data Extraction

This section of the workflow connects to a Gmail account using the **Gmail Trigger** node, capturing incoming emails in real-time, with checks performed every minute. Once an email is detected, its key components—such as the subject, recipient, body, and headers—are extracted and assigned to variables using the **Set Gmail Variables** node. These variables are structured for subsequent analysis and processing in later steps.

![Gmail](https://uploads.n8n.io/templates/outlook.png)
## Microsoft Outlook Integration and Email Header Processing

This section enables the integration of Microsoft Outlook to monitor and capture incoming emails. The Microsoft Outlook Trigger node checks for new messages every minute. Once an email is detected, the Retrieve Headers of Email node fetches detailed header and body content via the Microsoft Graph API. The Format Headers node organizes the email headers into a structured format using a JavaScript function, ensuring clarity and readiness for further processing. Finally, the Set Outlook Variables node extracts and assigns key details—such as the email subject, recipient, body, and formatted headers—to variables for use in subsequent workflow steps. This section is essential for processing Outlook emails and preparing them for analysis and reporting.

![hctiapi](https://uploads.n8n.io/templates/openai.png)
## AI-Powered Email Analysis and Threat Detection

This section leverages ChatGPT for advanced email content and header analysis to determine potential phishing threats. The **Analyze Email with ChatGPT** node processes the email's HTML body and headers, generating a detailed JSON response that categorizes the email as malicious or benign. The response includes a verbose explanation, formatted for Jira, outlining the reasons for the classification. The **Check if Malicious** node evaluates the AI output to determine the next steps based on the email's threat status. If flagged as malicious, subsequent actions like reporting and ticket creation are triggered. This section ensures precise, AI-driven analysis to enhance email security workflows.

![hctiapi](https://uploads.n8n.io/templates/jira.png)
## Automated Jira Ticket Creation and Email Attachment

This section streamlines the process of logging phishing email reports in Jira, complete with detailed analysis and attachments. The workflow creates two distinct Jira tickets depending on the AI classification of the email:

1. **Potentially Malicious**: The **Create Potentially Malicious Ticket** node generates a ticket if the email is flagged as a phishing attempt, including a summary of ChatGPT's analysis and the email’s details.
2. **Potentially Benign**: If the email is classified as safe, the **Create Potentially Benign Ticket** node logs a ticket with similar details but under a non-malicious category.


The **Set Jira ID** node ensures the generated ticket's ID is tracked for subsequent operations. Attachments are handled efficiently:

- **Rename Screenshot** prepares the email screenshot for upload.
- **Upload Screenshot of Email to Jira** adds the screenshot to the Jira ticket for visual context.
- **Rename Email Body Screenshot** and **Upload Email Body to Jira** manage the attachment of the email's text body as a `.txt` file.


This section enhances reporting by automating ticket creation, ensuring all relevant email data is readily available for review by security teams.

![n8n](https://uploads.n8n.io/templates/n8n.png)
## Email Body Conversion

This section processes the email body into both text and visual formats for detailed analysis and reporting. The **Set Email Variables** node organizes the email's data, including its HTML body and text content, to prepare it for further steps. The **Convert Email Body to File** node creates a `.txt` file containing the plain text version of the email body, useful for documentation or further analysis.

</details>
