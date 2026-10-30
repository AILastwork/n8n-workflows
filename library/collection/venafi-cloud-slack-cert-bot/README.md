# Venafi Cloud Slack Cert Bot

> Slack-бот для Venafi Cloud: проверка и выпуск сертификатов с помощью ИИ.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | OpenAI, Slack, Venafi Tls Protect Cloud |
| **Узлов в схеме** | 26 |
| **Нужные учётные данные** | `openAiApi`, `slackApi`, `venafiTlsProtectCloudApi`, `virusTotalApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

![Imgur](https://i.imgur.com/iKyMV0N.png)
## Events Webhook Trigger
The first node receives all messages from Slack API via Subscription Events API. You can find more information about setting up the subscription events API by [clicking here](https://api.slack.com/apis/connections/events-api). 

The second node extracts the payload from slack into an object that n8n can understand.

![n8n](https://i.imgur.com/lKnBNnH.png)
## Efficient Slack Interaction Handling with n8n

This section of the workflow is designed to efficiently manage and route messages and submissions from Slack based on specific triggers and conditions. When a Slack interaction occurs—such as a user triggering a vulnerability scan or generating a report through a modal—the workflow intelligently routes the message to the appropriate action:

- **Dynamic Routing**: Uses conditions to determine the nature of the Slack interaction, whether it's a direct command to initiate a scan or a request to generate a report.
- **Modal Management**: Differentiates actions based on modal titles and `callback_id`s, ensuring that each type of submission is processed according to its context.
- **Streamlined Responses**: After routing, the workflow promptly handles the necessary responses or actions, including closing modal popups and responding to Slack with appropriate confirmation or data.

**Purpose**: This mechanism ensures that all interactions within Slack are handled quickly and accurately, automating responses and actions in real-time to enhance user experience and workflow efficiency.

![Imgur](https://i.imgur.com/iKyMV0N.png)
## Display Modal Popup
This section pops open a modal window that is later used to send data into Virustotal, then depending on those results, to Venafi or Slack for manual approval. 

Modals can be customized to perform all sorts of actions. And they are natively mobile! Additionally, messages themselves can perform actions if you include inputs like buttons or field inputs. 

Learn more about them by [clicking here](https://api.slack.com/surfaces/modals)

![n8n](https://i.imgur.com/lKnBNnH.png)
## Enhance Security Operations with the Venafi Slack CertBot!

Our **Venafi Slack CertBot** is strategically designed to facilitate immediate security operations directly from Slack. This tool allows end users to request Certificate Signing Requests that are automatically approved or passed to the Secops team for manual approval depending on the Virustotal analysis of the requested domain. Not only does this help centralize requests, but it helps an organization maintain the security certifications by allowing automated processes to log and analyze requests in real time. 

**Workflow Highlights:**
- **Interactive Modals**: Utilizes Slack modals to gather user inputs for scan configurations and report generation, providing a user-friendly interface for complex operations.
- **Dynamic Workflow Execution**: Integrates seamlessly with Venafi to execute CSR generation and if any issues are found, AI can generate a custom report that is then passed to a slack teams channel for manual approval with the press of a single button.

**Operational Flow:**
- **Parse Webhook Data**: Captures and parses incoming data from Slack to understand user commands accurately.
- **Execute Actions**: Depending on the user's selection, the workflow triggers other actions within the flow like automatic Virustotal Scanning.
- **Respond to Slack**: Ensures that every interaction is acknowledged, maintaining a smooth user experience by managing modal popups and sending appropriate responses.


**Setup Instructions:**
- Verify that Slack and Qualys API integrations are correctly configured for seamless interaction.
- Customize the modal interfaces to align with your organization's operational protocols and security policies.
- Test the workflow to ensure that it responds accurately to Slack commands and that the integration with Qualys is functioning as expected.


**Need Assistance?**
- Explore Venafi's [Documentation](https://docs.venafi.com/) or get help from the [n8n Community](https://community.n8n.io) for more detailed guidance on setup and customization.

Deploy this bot within your Slack environment to significantly enhance the efficiency and responsiveness of your security operations, enabling proactive management of CSR's.

### 🙋 Don't forget your slack credentials!
Thankfully n8n makes it easy, as long as you've added credentials to a normal slack node, these http nodes are a snap to change via the drop down.

![n8n](https://i.imgur.com/qXWqiOd.png)
## Run Workflows within other Workflows like Functions

This section of the workflow contains 2 subworkflows that translate the Slack User ID to an email and name, and the Slack Team ID into the team name and Avatar of the team to make the slack messages more visual. This allows you to reuse these flows like you would use a function in code. 

These nodes run parallel to each other so they will not override the data generated by each thread, and then are joined using the Merge nodes.

![VirusTotal](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/VirusTotal_logo.svg/320px-VirusTotal_logo.svg.png)
## URL Analysis with VirusTotal
The first node receives all messages from Slack API via Subscription Events API. You can find more information about setting up the subscription events API by [clicking here](https://api.slack.com/apis/connections/events-api). 

The second node extracts the payload from slack into an object that n8n can understand.

![VirusTotal](https://img.securityinfowatch.com/files/base/cygnus/siw/image/2022/10/Venafi_logo.63459e2b03b7b.png?auto=format%2Ccompress&w=250&width=250)
## Automatic CSR Generation via Venafi
Contextual data from the Slack user's webhook is used to gather the needed contextual data, such as the name of the Slack team/group the user is in and their email and name if needed. 

For automatic CSR Generation to work, ensure you have a Vsatelite deplo

…

</details>
