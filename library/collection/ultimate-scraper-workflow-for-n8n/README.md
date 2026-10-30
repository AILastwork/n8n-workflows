# Selenium Ultimate Scraper Workflow

> Универсальный парсер на Selenium: собирает данные с любых сайтов, включая требующие входа, с помощью ИИ.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 56 |
| **Нужные учётные данные** | `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## N8N Ultimate Scraper - Workflow

This workflow's objective is to collect data from any website page, whether it requires login or not.

For example, you can collect the number of stars of the n8n-ultimate-scraper project on GitHub.

## Requirements
**Selenium Container**: Selenium is an open-source automation framework for web applications, enabling browser control and interaction through scripts in various programming languages.
You can deploy the Docker Compose file from the associated GitHub project to set up your Selenium container and configuration: https://github.com/Touxan/n8n-ultimate-scraper

**Residential Proxy Server**: To scrape data at scale without being blocked, I personally recommend GeoNode. They offer affordable, high-quality residential proxies: https://geonode.com/invite/98895

**OpenAI API Key**: For using GPT-4.

## Optional
Session Cookies Collection: To use login functionality with the n8n Ultimate Scraper, you need to collect session cookies from the target website. You can do this using the extension created for this application in the GitHub project: https://github.com/Touxan/n8n-ultimate-scraper. Follow the installation procedure to use it.

## How to use 
Deploy the project with all the requiremnts and request your webhook.

**Example of request**:
curl -X POST http://localhost:5678/webhook-test/yourwebhookid \
-H "Content-Type: application/json" \
-d '{
 "subject": "Hugging Face",
 "Url": "github.com",
 "Target data": [
 {
 "DataName": "Followers",
 "description": "The number of followers of the GitHub page"
 },
 {
 "DataName": "Total Stars",
 "description": "The total numbers of stars on the different repos"
 }
 ],
 "cookies": []
}'

You can also scrape link like this : 
curl -X POST http://localhost:5678/webhook-test/67d77918-2d5b-48c1-ae73-2004b32125f0 \
-H "Content-Type: application/json" \
-d '{
 "Target Url": "https://github.com",
 "Target data": [
 {
 "DataName": "Followers",
 "description": "The number of followers of the GitHub page"
 },
 {
 "DataName": "Total Stars",
 "description": "The total numbers of stars on the different repo"
 }
]
}'

**Note**
The maximum nimber of Target data is 5.

## Debug IP

This small debug flow aims to check the IP you're requesting with, in case you're using a proxy

## Search

**Description** :
This part aims to search on Google for the subject and find the URL of the subject page based on the input URL.

## Selenium Session

**Description**:
Creation and configuration of the Selenium session.

## Scrape with cookies session

**Description**
This part goes to the extracted URL, injects the cookies passed into the webhook, takes a screenshot of the webpage, and analyzes the image with GPT to extract the targeted data.

## Scrape without cookies session

**Description**
Same as the 'Scrape with cookies session' flow, but without the cookie injection

## Proxy

**Configuration**

To configure your proxy with the project, follow the instructions on the GitHub project: https://github.com/Touxan/n8n-ultimate-scraper. To configure the docker-compose, you also need to add this argument to the 'Create Selenium Session' node : --proxy-server=address:port.

### ⚠️Warning⚠️
 Selenium does not support proxy authentication, so you need to add your server IP to the proxy whitelist. On GeoNode, it's here: https://app.geonode.com/whitelist-ip!

</details>
