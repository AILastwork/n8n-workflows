# AI-Powered Candidate Shortlisting Automation for ERPNext

> Автоматический отбор кандидатов в ERPNext: Gemini оценивает резюме и уведомляет кандидатов через Outlook или WhatsApp.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | ERPNext, Google Gemini, Outlook, WhatsApp |
| **Узлов в схеме** | 23 |
| **Нужные учётные данные** | `erpNextApi`, `googlePalmApi`, `microsoftOutlookOAuth2Api`, `whatsAppApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### Get Apprropraite Data
These Nodes are to extract only the Required Data from the Webhook Node

### N8N has the Node to convert PDF to Text, but PDF should be converted from Text. Scanned Image PDF will not be converted. 

You can use ohter nodes here to convert word file to text or JPG to Text, possiblities are limitless.

### Download the File.
If you are using S3 to Upload attachments you can use S3 node here to download the attachment

### Applicant Applied for Job in ERPNext

You need to go to Webhooks in ERPNext and Create a Webhook on Job Applicant Doc Type and trigger should be on insert.

First do the Test Wehbook and Pin the Webhook.

Follow the Tutorial

### Get Job Opening Data
From ERPNext

As Job is applied against a specific Job, you can now get the Job Opening Data which must be having the Job Description.

### AI Agent to do its Job
OpenAI

See full prompt which tells this AI Agent that you are a recruitment sepcialist and all the roles are defined in this node.

It will shortlist the candidate and will give the descriptive output with candidate fitlevel, score, rating and justification.

### Update data in ERPNext
Here First node will do the formatting of the data and will convert output from AI Agent to Appropriate Fields which are defined in ERPNext and then will Send to Next Node

### ERPNext (HTTP Node)
This node will take the Data from Previouis Node and will update the Applicant Data in ERPNext

### Selected or Rejected

The criteia for score is that if Score is 80 or above Candidate will be selected Else Rejected.

## Resume Available?
First Node : If Resume is not attached or Then Job Applicant will be Rejected
Second Node : If job is not applied against opening then the Applicant will be kept on hold.

## Developed by Amjid Ali

Thank you for using this workflow template. It has taken me countless hours of hard work, research, and dedication to develop, and I sincerely hope it adds value to your work.

If you find this template helpful, I kindly ask you to consider supporting my efforts. Your support will help me continue improving and creating more valuable resources.

You can contribute via PayPal here:

http://paypal.me/pmptraining

For Full Course about ERPNext or Automation using AI follow below link

http://lms.syncbricks.com

Additionally, when sharing this template, I would greatly appreciate it if you include my original information to ensure proper credit is given.

Thank you for your generosity and support!
Email : amjid@amjidali.com
https://linkedin.com/in/amjidali
https://syncbricks.com
https://youtube.com/@syncbricks

### Get file of Resume Detail from ERPNext Applicant
Extract the Resume Download Link and Decide which Attachment type it is as every attachment will be treated differently.
Currently I provided only for PDF Version but you can add seperate flow for other versions

### Validate if the Resume is Available and It is against a specific Job
These Nodes are to extract only the Required Data from the Webhook Node

### Create Fields

This Java Script will convert the extracted fieldws from AI Agent and will create fields which are already created in ERPNext.

Ensure to create below fields in ERPNext : 

justification_by_ai
fit_level
score

applicant_rating field is already there, which will be updated with 1 to 5 star

### Update data in ERPNext
API Call
Candidate Rejected

### Update data in ERPNext
API Call
Candidate Rejected

### Notifiy Applicant either by Email or Whatsapp or SMS, Options are Limitless

</details>
