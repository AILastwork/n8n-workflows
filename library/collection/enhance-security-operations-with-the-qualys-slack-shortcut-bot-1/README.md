# Enhance Security Operations with the Qualys Slack Shortcut Bot! (1)

> Slack-бот с шорткатами для Qualys: запуск сканирований и отчётов по безопасности.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 13 |
| **Нужные учётные данные** | `slackApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

![Imgur](https://uploads.n8n.io/templates/slack.png)
## Events Webhook Trigger
The first node receives all messages from Slack API via Subscription Events API. You can find more information about setting up the subscription events API by [clicking here](https://api.slack.com/apis/connections/events-api). 

The second node extracts the payload from slack into an object that n8n can understand.

![n8n](https://uploads.n8n.io/templates/n8n.png)
## Efficient Slack Interaction Handling with n8n

This section of the workflow is designed to efficiently manage and route messages and submissions from Slack based on specific triggers and conditions. When a Slack interaction occurs—such as a user triggering a vulnerability scan or generating a report through a modal—the workflow intelligently routes the message to the appropriate action:

- **Dynamic Routing**: Uses conditions to determine the nature of the Slack interaction, whether it's a direct command to initiate a scan or a request to generate a report.
- **Modal Management**: Differentiates actions based on modal titles and `callback_id`s, ensuring that each type of submission is processed according to its context.
- **Streamlined Responses**: After routing, the workflow promptly handles the necessary responses or actions, including closing modal popups and responding to Slack with appropriate confirmation or data.

**Purpose**: This mechanism ensures that all interactions within Slack are handled quickly and accurately, automating responses and actions in real-time to enhance user experience and workflow efficiency.

![Imgur](https://uploads.n8n.io/templates/slack.png)
## Display Modal Popup
This section pops open a modal window that is later used to send data into TheHive. 

Modals can be customized to perform all sorts of actions. And they are natively mobile! You can see a screenshot of the Slack Modals on the right. 

Learn more about them by [clicking here](https://api.slack.com/surfaces/modals)

![Imgur](https://i.imgur.com/abGF8EO.png)
## Modal Submission Payload
The data input into the Slack Modal makes its way into these set nodes that then pass that data into the Qualys Sub workflows that handle the heavy lifting. 

### Two Trigger Options
- **Trigger a Vulnerability Scan** in the Slack UI which then sends a slack message to a channel of your choice summarizing and linking to the scan in slack
- **Trigger report creation** in the Slack UI from the previously generated Vulnerability scan and upload a PDF copy of the report directly in a slack channel of your choice

![n8n](https://uploads.n8n.io/templates/n8n.png)
## Enhance Security Operations with the Qualys Slack Shortcut Bot!

Our **Qualys Slack Shortcut Bot** is strategically designed to facilitate immediate security operations directly from Slack. This powerful tool allows users to initiate vulnerability scans and generate detailed reports through simple Slack interactions, streamlining the process of managing security assessments.

**Workflow Highlights:**
- **Interactive Modals**: Utilizes Slack modals to gather user inputs for scan configurations and report generation, providing a user-friendly interface for complex operations.
- **Dynamic Workflow Execution**: Integrates seamlessly with Qualys to execute vulnerability scans and create reports based on user-specified parameters.
- **Real-Time Feedback**: Offers instant feedback within Slack, updating users about the status of their requests and delivering reports directly through Slack channels.


**Operational Flow:**
- **Parse Webhook Data**: Captures and parses incoming data from Slack to understand user commands accurately.
- **Execute Actions**: Depending on the user's selection, the workflow triggers other sub-workflows like 'Qualys Start Vulnerability Scan' or 'Qualys Create Report' for detailed processing.
- **Respond to Slack**: Ensures that every interaction is acknowledged, maintaining a smooth user experience by managing modal popups and sending appropriate responses.


**Setup Instructions:**
- Verify that Slack and Qualys API integrations are correctly configured for seamless interaction.
- Customize the modal interfaces to align with your organization's operational protocols and security policies.
- Test the workflow to ensure that it responds accurately to Slack commands and that the integration with Qualys is functioning as expected.


**Need Assistance?**
- Explore our [Documentation](https://docs.qualys.com) or get help from the [n8n Community](https://community.n8n.io) for more detailed guidance on setup and customization.

Deploy this bot within your Slack environment to significantly enhance the efficiency and responsiveness of your security operations, enabling proactive management of vulnerabilities and streamlined reporting.

### 🙋 Remember to update your Slack Channels
Don't forget to update the Slack Channels in the Slack nodes in these two subworkflows.

### 🙋 Don't forget your slack credentials!
Thankfully n8n makes it easy, as long as you've added credentials to a normal slack node, these http nodes are a snap to change via the drop down.

![Imgur](https://uploads.n8n.io/templates/qualysscanreport.png)

![Imgur](https://uploads.n8n.io/templates/qualysmodalscan.png)

![Imgur](https://uploads.n8n.io/templates/qualysscanshortcut.png)
### 🤖 Triggering this workflow is as easy as typing a backslash in Slack

</details>
