# AI Fitness Coach Strava Data Analysis and Personalized Training Insights

> ИИ-тренер по триатлону: анализирует тренировки из Strava (Gemini) и присылает персональные советы по почте или в WhatsApp.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Strava |
| **Сервисы** | Gmail, Google Gemini, Strava, WhatsApp |
| **Узлов в схеме** | 10 |
| **Нужные учётные данные** | `gmailOAuth2`, `googlePalmApi`, `smtp`, `stravaOAuth2Api`, `whatsAppApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### Customer Experience Agent (AI)
The AI Triathlon Coach is an intelligent, data-driven virtual assistant designed to help triathletes optimize their training and performance across swimming, cycling, and running. Using advanced algorithms, it analyzes activity data from platforms like Strava and provides actionable insights tailored to the athlete’s goals, experience level, and specific disciplines.
This is connected to Gemini 2.0 Flash

### Convert to HTML
Now the data will be structured and covnerted to HTML

### Get Strava Trigger
If you are using Strava, you can create API Key by logging in to : https://developers.strava.com/

Once data is capture you can then structure it, i am commbining all the activity data and sending to next node

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

### Send Personalized Response
Activity is analized you can either get the response by Whatsapp , emal, a blog or anything

</details>
