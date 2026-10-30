# AI-Powered Children s English Storytelling on Telegram with OpenAI

> Каждый день публикует в Telegram детскую сказку на английском с иллюстрацией и озвучкой (OpenAI).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | OpenAI, Telegram |
| **Узлов в схеме** | 12 |
| **Нужные учётные данные** | `openAiApi`, `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### Setting Up a Workflow for "AI-Powered Children's English Storytelling on Telegram"

In this guide, we will walk you through the process of setting up a workflow to create and share captivating children's stories using the provided configuration. Let's dive into the steps required to bring these imaginative tales to life on your Telegram channel:

#### Steps to Setup the Workflow:
1. **Import the Workflow:**
 - Copy the provided workflow JSON configuration.
 - In your n8n instance, go to Workflows and select "Import from JSON."
 - Paste the configuration and import the workflow.

2. **Configure Node Credentials:**
 - For nodes requiring API credentials (OpenAI and Telegram), create credentials with the appropriate API keys or tokens.

3. **Set Node Parameters:**
 - Modify node parameters as needed, such as chat IDs, prompts, and intervals.
 - Change the chatId in Config node to the ID of the chat you want the story to be posted.

4. **Ensure Data Flow:**
 - Check the connections between nodes to ensure a smooth flow of data and actions.

5. **Execute Once:**
 - Activate the "executeOnce" option in nodes where necessary to trigger actions only once during setup.

6. **Test the Workflow:**
 - Run the workflow to verify that each node functions correctly and data is processed as expected.

7. **Enable Recurring Triggers:**
 - Confirm that the Schedule Trigger node is set to trigger the workflow at the desired interval (every 12 hours).

8. **Initiate Workflow:**
 - Once everything is configured correctly, activate the workflow to start generating and sharing children's stories on Telegram.

By following these steps meticulously, you can seamlessly establish and operate the workflow designed to create captivating children's stories for your audience. Embrace the power of automation to inspire young minds and foster a love for storytelling through engaging narratives shared on Telegram.

### Use Case for Setting Up a Workflow for Children's Stories

Check this example: [https://t.me/st0ries95](https://t.me/st0ries95)


The workflow for children's stories serves as a valuable tool for content creators, educators, and parents looking to engage children with imaginative and educational storytelling. Here are some key use cases for this workflow:

1. **Content Creation:** The workflow streamlines the process of creating captivating children's stories by providing a structured framework and automation for story generation, audio creation, and image production.

2. **Educational Resources:** Teachers can use this workflow to develop educational materials that incorporate storytelling to make learning more engaging and interactive for students.

3. **Parental Engagement:** Parents can utilize the workflow to share personalized stories with their children, fostering a love for reading and creativity while bonding over shared storytelling experiences.

4. **Community Building:** Organizations and community groups can leverage the workflow to create and share children's stories as a way to connect with their audience and promote literacy and creativity.

5. **Inspiring Young Minds:** By automating the process of creating and sharing enchanting children's stories, this workflow aims to inspire young minds, spark imagination, and instill a passion for storytelling in children.

Overall, the use case for this workflow extends to various settings where storytelling plays a significant role in engaging, educating, and entertaining children, making it a versatile tool for enhancing the storytelling experience.

</details>
