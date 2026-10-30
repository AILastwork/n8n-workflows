# Proxmox AI Agent with n8n and Generative AI Integration

> ИИ-агент для управления Proxmox через чат, Telegram или Gmail (Gemini).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук, событие в Gmail, событие в Telegram, чат |
| **Сервисы** | Gmail, Google Gemini, Telegram |
| **Узлов в схеме** | 27 |
| **Нужные учётные данные** | `gmailOAuth2`, `googlePalmApi`, `httpHeaderAuth`, `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## API Key for Proxmox
** Create Credentails *** ensure to create credentials in Proxmox Data Center as API Key and then create credentails. 
** Add Credentials to n8n ** Click on Credentails, add new Credentails and Chose Header Auth
** In Header Auth Below will be used 
Name : Authorization
Value : PVEAPIToken=<user>@<realm>!<token-id>=<token-value>

Suppose my token id is n8n and key is 1234 so value will be as below

Value : PVEAPIToken=root@pam!n8n=1234

## Trigger
You can use any trigger as input, a chat, telegram, email etc

## Porxmox Custom AI Agent 
It uses the intelligence provided to it including the Proxmox API Wiki, Proxmox Cluster Linked and Proxmox API Documentation.

The AI Model connected with this is Gemini, you can connect any AI Model by Ollama, OpenAI, Claude etc.

Output Parser is used to ensure the fixed output structure that can be used for API URL

## HTTP methods
GET	Retrieve resources	Fetch VM status, list nodes, get logs.

POST	Create or trigger actions	Start/stop VMs, create backups.

PUT	Update/replace entire resource configuration	Modify VM configurations.

DELETE	Delete resources	Remove VMs, delete users, remove files.

OPTIONS	Fetch supported methods for an endpoint	Check available operations for an API.

PATCH	Apply partial updates	Update specific fields in VM settings.

## Porxmox Custom AI Agent (Get)
This agent will convert the response from proxmox to meaningful explanation

## Created or triggered an action on the server.
Response will come back here

## Trigger
You can use any trigger as input, a chat, telegram, email etc

You can think of any input, even it could be from your cloud platform, your own Web Applicaiton, etc. 

Possibilities are limitless.

Chat is shown just as example.

## Developed by Amjid Ali

Thank you for using this workflow template. It has taken me countless hours of hard work, research, and dedication to develop, and I sincerely hope it adds value to your work.

If you find this template helpful, I kindly ask you to consider supporting my efforts. Your support will help me continue improving and creating more valuable resources.

You can contribute via PayPal here:

http://paypal.me/pmptraining

Additionally, when sharing this template, I would greatly appreciate it if you include my original information to ensure proper credit is given.

Thank you for your generosity and support!
Email : amjid@amjidali.com
https://linkedin.com/in/amjidali
https://syncbricks.com
https://youtube.com/@syncbricks

</details>
