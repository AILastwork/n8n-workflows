# Send dingtalk message on new azure devops pull request

> Отправляет сообщение в DingTalk нужным людям при новом pull request в Azure DevOps (сопоставление пользователей в MySQL).

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | MySQL |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | `mySql` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automates the process of sending a DingTalk message to the appropriate team members whenever a new pull request is created in Azure DevOps, ensuring timely notification and collaboration.

Example: A software development team using Azure DevOps for their project management and source control needs to ensure that the relevant team members are notified whenever a new pull request is created. This workflow can be set up to automatically send a DingTalk message to the appropriate team members, including the pull request details and a list of reviewers, based on the mapping between Azure DevOps user accounts and their corresponding DingTalk contact information.

## What You Can Do
- Integrates with Azure DevOps to capture new pull request creation events
- Leverages a MySQL database to map Azure DevOps user accounts to their DingTalk contact information
- Customizes the DingTalk message content, including the ability to mention specific team members or the entire team
- Sends the DingTalk message using the DingTalk group chat robot webhook

</details>
