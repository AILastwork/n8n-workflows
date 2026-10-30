# Automate Sales Meeting Prep with AI & APIFY Sent To WhatsApp

> Готовит к встречам с клиентами: находит встречи в календаре, собирает данные о людях через Apify и отправляет сводку в WhatsApp.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вызов из другого воркфлоу, по расписанию |
| **Сервисы** | Gmail, Google Calendar, OpenAI, WhatsApp |
| **Узлов в схеме** | 47 |
| **Нужные учётные данные** | `gmailOAuth2`, `googleCalendarOAuth2Api`, `httpQueryAuth`, `openAiApi`, `whatsAppApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## 1. Periodically Search For Upcoming Meetings
[Read about the Scheduled Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger)

Let's use the Scheduled Trigger node to trigger our Assistant to notify about upcoming meetings. Here, we'll set it for 1 hour intervals to check for meetings scheduled in our Google Calendar. You may need to play with the intervals and frequency depending on how many meetings you typically have.

## 2. Extract Attendee Details From Invite
[Learn more about the Information Extractor node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.information-extractor/)

Once we have our upcoming meeting, it'll be nice to prepare for it by reminding the user what the meeting is about and some context with the attendees. This will be the goal this template and of our assistant! However, first we'll need to extract some contact information of the attendees to do so.

For this demonstration, we'll assume that attendee's email and LinkedIn profile URLs are included in the meeting invite. We'll extract this information for each attendee using the Information Extractor node. This convenient node uses AI to parse and extract which saves us from writing complex pattern matching code otherwise.

In your own scenario, feel free to use your CRM to get this information instead.

## 3. Fetch Recent Correspondance & LinkedIn Activity
[Learn more about the Execute Workflow node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executeworkflow)

As both email fetching and LinkedIn scraping actions are quite complex, we'll split them out as subworkflow executions. Doing so (in my honest opinion), helps with development and maintainability of the template. Here, we'll make perform the research for all applicable attendees by making 2 calls to the subworkflow and merging them back into a single node at the end.

Head over to the subworkflow (see below - step 3a) to see how we pull the summaries from Gmail and LinkedIn.

## 4. Generate Pre-Meeting Notification
[Read more about the Basic LLM node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm)

Now that we have (1) our upcoming meeting details and (2) recent email and/or Linkedin summaries about our attendee, let's feed them into our LLM node to generate the best pre-meeting notification ever seen! Of course, we'll need to keep it short as we intend to send this notification via WhatsApp message but should you choose to use another channel such as email, feel free to adjust the length of the message which suits.

## 5. Send Notification via WhatsApp
[Learn more about the WhatsApp node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.whatsapp)

The WhatsApp node is a super convenient way to send messages to WhatsApp which is one of the many messaging apps supported by n8n out of the box. Not using WhatsApp? Simply swap this our for Twilio, Telegram, Slack and others.

## 3.2: Fetch Last Email Correspondance
[Learn more about Gmail node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail)

Fetching our attendee's last email will definitely help the user "pick up" from when they last last off. To do this, we'll assume a Gmail user and use the Gmail node to filter messages by the attendee's email address.

## 3.4 Scraping LinkedIn With [Apify.com](https://www.apify.com?fpr=414q6)
[Learn more about Apify.com for Web Scraping](https://www.apify.com?fpr=414q6)

To get the attendee's recent LinkedIn activity, we'll need a webscraper capable of rendering the user's LinkedIn profile. We'll use [Apify.com](https://www.apify.com?fpr=414q6) which is a commercial web scraping service but has a very generous monthly free tier ($5/mo).

While Apify offers a number of dedicated LinkedIn scrapers, we'll build our own which works by impersonating our own LinkedIn account using our login cookie - this can be obtained by inspecting network requests when logged into Linkedin. **Add your LinkedIn Cookie to the node below!**

## 3.1 Attendee Researcher SubWorkflow
[Learn more about using Execute Workflow Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executeworkflowtrigger/)

The Attendee Researcher SubWorkflow's aims to collect and summarize both an attendee's last correspondance with the user (if applicable) and the attendee's LinkedIn profile (if available). It uses the router pattern to handle both branches allowing for shorter execution chains. Using the Switch node, this subworkflow is either triggered to fetch emails or scrape LinkedIn but never both simultaneously.

## 3.5: Extract LinkedIn Profile & Recent Activity
[Learn more about the HTML node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.html)

Once we have our scraped LinkedIn profile, it's just a simple case of parsing and extracting the relevant sections from the page.
For the purpose of our workflow, we'll only need the "About" and "Activity" sections which we'll pull out of the page using a series of HTML nodes. Feel free to extract other sections to suit your needs! Once extracted, we'll combine the about and activities data in preparation of sending it to our LLM.

### Be aware of LinkedIn T&Cs!
For production, you may want to consider not using your main Linkedin account if you can help it!

### 🚨 Input Required!
You need to add your cuurent linkedIn Cookies here to continue.

## 3.6 Summarize LinkedIn For Attendee
[Read more about the Basic LLM node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm)

Finally, we'll use the Basic LLM node to summarize our attendee's LinkedIn profile and recent activity. Our goal here is to identify and send back interesting tidbits of information which may be relevant to the meeting as well as inform the user. Should you require different criteria, simply edit the summarizer to get the r

…

</details>
