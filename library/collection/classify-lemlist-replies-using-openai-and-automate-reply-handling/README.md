# Classify lemlist replies using OpenAI and automate reply handling

> Классифицирует ответы в lemlist через OpenAI и обрабатывает их (отписка, интерес и т. п.), уведомляя в Slack.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в lemlist |
| **Сервисы** | OpenAI, Slack, lemlist |
| **Узлов в схеме** | 10 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### Get your lemlist API key

1. Go to your lemlist account or create one [HERE](https://app.lemlist.com/create-account)

2. Go to Settings -> Integrations

3. Generate your API Key and copy it

4. On this node, click on create new credential and paste your API key

# Read me

This workflow send email replies of your lemlist campaigns to the Slack channel of your choice.

The OpenAI node will classify the reply status. 

The Slack alert is structured in a way that make it easy to read for the user.

### Create a Slack notification for each new replies

1. Connect your Slack account by clicking to add Credentials

2. Write the name of the channel where you want to send the Slack alert

### Save time by automatically unsubscribing leads that don't want to receive emails from you

### Mark interested leads as interested in lemlist

### Categorize the reply with OpenAI

### This node will clean the text and make sure it looks pretty on Slack

### Trigger a different scenario according to the category of the reply

</details>
