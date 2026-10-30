# AI-Driven Lead Management and Inquiry Automation with ERPNext & n8n

> ИИ-обработка лидов из ERPNext: проверяет обращения с сайта, отвечает через Outlook и ведёт учёт в Google Sheets/Docs.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | Google Docs, Google Sheets, OpenAI, Outlook |
| **Узлов в схеме** | 16 |
| **Нужные учётные данные** | `erpNextApi`, `googleDocsOAuth2Api`, `googleSheetsOAuth2Api`, `microsoftOutlookOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### Filter the Lead
I have done only for theose which are open and where the source is Website. You can remove this if you want to have all leads.

### Output from AI Agent
If the INquiry is invalid, not related to the products and services offered, it will invalidate that you can optionnally link the invalid output to email or anything. Options are limitless

### Customer Experience Agent (AI)
Now this Node is an AI Agent who is speicalized to understand the Lead Source and the Inquiry sent by Cusomter. The Agent will look at company information, which has detials of producuts and services defined in Google Docs, and the Contacts Sheet where a column must be added mentioning that who is the person dealing in which products, solutions and services. Once the inquiry is about speicifc product solution and service it will look from the sheet and then will decide to whom the email has to be sent. Details is defined in the Agent.
Make sure to drag fields from http request node

### Once the Lead is generatd in ERP

Consider creating creating an inquiry web form in ERPNext and let the Website Visitor fill that Inquiry form, as soon as the iqnuiry form is filled this workflow will start.

Make sure to create a webhook in ERPNext. Follow Below steps in ERPNext.

Go to Wehbooks 
Doctype : Lead
Trigger : on_insert

Paste this webhook there, as test first and finally production

### Email Body
Get only Email body from Previous Node and then Convert this to HTML Format so that it looks professional.

### Get Details of Lead from ERPNext. For us most important is Notes

### Get Lead ID
This will extract the Lead Name in ERPNext. Ensure to send doc.name from the webhook in ERPnext

It will then send this to next node to get full details of this lead.

### Send Email

Now drag and drop the fields from Previous Nodes. Email Addresses Subject and Body.

Remember all fields are selected by AI Agent, whom to send email, what to send and so on. 

You can alternatively inform your employees by whatsapp for quick action.

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

### Inquiry with Notes
If inquiry is having notes then only it will forward to next node.

### Prepare for Email
This node will get approprate Fields for Email 
Email Addresses:
Subject : 
Email Body :

</details>
