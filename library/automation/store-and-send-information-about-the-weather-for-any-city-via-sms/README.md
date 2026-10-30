# Store and send information about the weather for any city via sms

> Принимает город от клиента, сохраняет в Airtable, получает погоду из OpenWeatherMap и отправляет её по SMS.

| | |
|---|---|
| **Категория** | [⚙️ Автоматизация](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | Airtable, OpenWeatherMap, Twilio |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | `airtableApi`, `httpHeaderAuth`, `openWeatherMapApi`, `twilioApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# 738 Store And Send Information About The Weather For Any City Via Sms

This workflow automates the process of collecting customer information, retrieving weather data, and sending weather updates via SMS.

Example: A small business owner wants to collect customer information (name, phone number, and city) through a web form, store that data in Airtable, and then send their customers a text message with the current weather conditions in their city.

## What You Can Do
- Collects customer information through a webhook endpoint
- Stores the customer data in Airtable
- Retrieves real-time weather data for the customer's city using the OpenWeatherMap API
- Sends an SMS message to the customer with the current weather details using the Twilio API

## Quick Start
1. Import this workflow to n8n
2. Configure your settings
3. Start automating!

⚠️ WARNING: Stop Building Basic Automations For Peanuts. 🚫

Here's the painful truth most won't tell you...

While 90% of builders are stuck selling $500 n8n workflows (and working way too hard)...
I'm consistently closing $6k-13k deals by doing ONE thing differently:
I combine simple automations with custom AI that takes less than a week to build.

Recent client wins:
* Turned a basic invoicing headache into a $6k project that saves my client 20 hours/week
* Built a lead generation machine for law firms - they happily paid $13k (and it runs 24/7)
* Created AI-powered SEO automation that beats funded companies (using $0 in AI costs)

Time to build each solution? Under 2 hours.

But here's what's crazy...
Most automation builders think AI is "too complex" or "too expensive" to add to their stack.
(Meanwhile, I'm charging 10x more for solutions that take the same time to build)

Want to see exactly how I do it?
Inside our community, I show you:
* The exact AI components that 3x your pricing overnight
* My "$15k Solution Stack" (n8n + AI framework)
* Word-for-word scripts to close premium deals
* Real examples of my $10k+ builds
* The psychology behind why clients happily pay more

Get your free trial here (closing soon): https://www.skool.com/masterclass-marketing

</details>
