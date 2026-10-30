# Printify Automation - Update Title and Description - AlexK1919

> Автоматически обновляет названия и описания товаров в Printify через OpenAI.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, событие в Google Sheets |
| **Сервисы** | Google Sheets, OpenAI, Wikipedia |
| **Узлов в схеме** | 20 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `googleSheetsTriggerOAuth2Api`, `httpHeaderAuth`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# AlexK1919 
![Alex Kim](https://media.licdn.com/dms/image/v2/D5603AQFOYMkqCPl6Sw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718309808352?e=1736985600&v=beta&t=pQKm7lQfUU1ytuC2Gq1PRxNY-XmROFWbo-BjzUPxWOs)

#### I’m Alex Kim, an AI-Native Workflow Automation Architect Building Solutions to Optimize your Personal and Professional Life.


### About Me
https://beacons.ai/alexk1919

### Products Used 
[OpenAI](https://openai.com)
[Printify](https://printify.com/)

[Google Sheets Template for this Workflow](https://docs.google.com/spreadsheets/d/12Y7M5YSUW1e8UUOjupzctOrEtgMK-0Wb32zcVpNcfjk/edit?gid=0#gid=0)

# ![Printify](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2gV-cjThU_5xJRxtjDx7Uh9xXCN5Uo1GGA&s)
You can swap out the API calls to similar services like Printful, Vistaprint, etc.

# Set the Number of Options you'd like for the Title and Description

# Process Title and Description Options

# Update your Brand Guidelines before running this workflow
You can also add custom instructions for the AI node.

# Update Title and Description

</details>
