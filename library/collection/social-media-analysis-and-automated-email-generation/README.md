# Social Media Analysis and Automated Email Generation

> Анализирует соцсети лидов из Google Sheets и пишет персональные письма с ИИ.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Google Sheets |
| **Сервисы** | Google Sheets, OpenAI |
| **Узлов в схеме** | 13 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `googleSheetsTriggerOAuth2Api`, `httpHeaderAuth`, `openAiApi`, `smtp` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Personalize here

### Set: 
- your name
- your company name
- your company activity, used to find a match with your leads
- your email, used as the sender

## Create a Gooogle sheet with the following columns:
- linkedin_url
- name
- twitter_handler 
- email
- done

And put some data in it except in "done" that should remain empty.

## Here you can modify the prompt
- make it better by adding some examples
- Follow a known framework
etc.

## Call RapidAPI Twitter API Profile Data
You have to create an account in [RapidAPI](https://rapidapi.com/restocked-gAGxip8a_/api/twitter-api47) and subscribe to Twiiter API. With a free account you will be able to scrape 500 tweets / month.
After your subscription you will have to choose as Generic Auth Type: Header Auth and then put as header name: "x-rapidapi-key" and the value given in the RapidAPI interface

## Call RapidAPI Fresh Linkedin Profile Data
You have to create an account in [RapidAPI](https://rapidapi.com) and subscribe to Fresh LinkedIn Profile Data. With a free account you will be able to scrape 100 profile / month.
After your subscription you will have to choose as Generic Auth Type: Header Auth and then put as header name: "x-rapidapi-key" and the value given in the RapidAPI interface

## Social Media Analysis and Automated Email Generation

> by Thomas Vie [Thomas@pollup.net](mailto:thomas@pollup.net)

### **Who is this for?**
This template is ideal for marketers, lead generation specialists, and business professionals seeking to analyze social media profiles of potential leads and automate personalized email outreach efficiently.


### **What problem is this workflow solving?**
Manually analyzing social media profiles and crafting personalized emails can be time-consuming and prone to errors. This workflow streamlines the process by integrating social media APIs with AI to generate tailored communication, saving time and increasing outreach effectiveness.

### **What this workflow does:**
1. **Google Sheets Integration:** Start with a Google Sheet containing lead information such as LinkedIn URL, Twitter handle, name, and email.
2. **Social Media Data Extraction:** Automatically fetch profile and activity data from Twitter and LinkedIn using RapidAPI integrations.
3. **AI-Powered Content Generation:** Use OpenAI's Chat Model to analyze the extracted data and generate personalized email subject lines and cover letters.
4. **Automated Email Dispatch:** Send the generated email directly to the lead, with a copy sent to yourself for tracking purposes.
5. **Progress Tracking:** Update the Google Sheet to indicate completed actions.

#### **Setup:**
1. **Google Sheets:**
 - Create a sheet with the columns: LinkedIn URL, name, Twitter handle, email, and a "done" column for tracking.
 - Populate the sheet with your leads.

2. **RapidAPI Accounts:**
 - Sign up for RapidAPI and subscribe to the Twitter and LinkedIn API plans.
 - Configure API authentication keys in the workflow.

3. **AI Configuration:**
 - Connect OpenAI Chat Model with your API key for text generation.

4. **Email Integration:**
 - Add your email credentials or service (SMTP or third-party service like Gmail) for sending automated emails.

#### **How to customize this workflow to your needs:**
- **Modify the AI Prompt:** Adapt the prompt in the AI node to better align with your tone, style, or specific messaging framework.
- **Expand Data Fields:** Add additional data fields in Google Sheets if you require further personalization.
- **API Limits:** Adjust API configurations to fit your usage limits or upgrade to higher tiers for increased data scraping capabilities.
- **Personalize Email Templates:** Tweak email formats to suit different audiences or use cases.
- **Extend Functionality:** Integrate additional social media platforms or CRM tools as needed.

By implementing this workflow, you’ll save time on repetitive tasks and create more effective lead generation strategies.

</details>
