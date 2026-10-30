# Qualifying Appointment Requests with AI & n8n Forms

> Квалифицирует заявки на встречу через ИИ на многошаговых формах n8n и предлагает время из календаря.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вызов из другого воркфлоу, форма n8n |
| **Сервисы** | Gmail, Google Calendar, OpenAI |
| **Узлов в схеме** | 19 |
| **Нужные учётные данные** | `gmailOAuth2`, `googleCalendarOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## 1. Qualify Enquiries Using AI
[Learn more about the text classifier](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.text-classifier/)

With n8n's multi-forms, you’re no longer stuck creating long, overwhelming forms. Instead, you have more flexibility and control to design smarter, more engaging form experiences.

In this demo, we’ll explore an appointment request scenario where a user wants to schedule a call to discuss their inquiry. However, not all inquiries require a meeting, making it a perfect use case for AI to pre-qualify the request. We can handle this validation using the text classifier node.

## 2. Split Form For Better User Experience
[Learn more about the forms](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.form)

Onboarding is a great reason to split your big form into smaller ones. Taking the user through a step by step process ensures a smooth experience and keeps them engaged throughout.

Here, we take the opportunity of the extra context space to display a terms and conditions which the user must agree to making their request. The next form then asks for desired date and time of the event.

## 3. Send Acknowledgement to User and Start Approval Process
[Learn more about the Gmail node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/)

Once all form steps are concluded, we can send a notification to the requester via email and in the background, trigger another email to the admin to initiate the approval process. The approval process works in a separate execution so doesn't interrupt the user's form experience.

## 4. Approve or Decline Appointment
[Learn more about the Waiting for Approval](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/message-operations/#send-a-message-and-wait-for-approval)

The Wait for Approval feature for Gmail is a special operation which allows for human-in-the-loop interaction in n8n workflows. In this example, the human interaction is the approval of the appointment request. The feature will put the workflow in a waiting state where a message is sent to the admin with 2 buttons: confirm and decline.

When the admin clicks on the confirm button, the workflow resumes from the Gmail node and a meeting event is created for the requesting user in Google Calendar.

When declined, a rejection email is sent to the requester instead.

## Try it out!

### This n8n template is a simple appointment scheduling workflow using n8n forms with AI thrown in the mix for good measure. It also uses n8n's wait for approval feature which allows the ability to confirm appointment requests and create events in Google Calendar.

### How it works
* We start with a form trigger which asks for the purpose of the appointment.
* Instantly, we can qualify this by using a text classifier node which uses AI's contextual understanding to ensure the appointment is worthwhile. If not, an alternative is suggested instead.
* Multi-page forms are then used to set the terms of the appointment and ask the user for a desired date and time.
* An acknowledgement is sent to the user while an approval by email process is triggered in the background.
* In a subworkflow, we use Gmail with the wait for approval operation to send an approval form to the admin user who can either confirm or decline the appointment request.
* When approved, a Google Calendar event is created. When declined, the user is notified via email that the appointment request was declined.

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

### 🚨 Set your admin email here!

</details>
