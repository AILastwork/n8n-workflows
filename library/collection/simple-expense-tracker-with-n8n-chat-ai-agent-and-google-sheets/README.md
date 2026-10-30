# AI agent: expense tracker in Google Sheets and n8n chat

> ИИ-агент учёта расходов: пишешь трату в чат — он записывает её в Google Sheets.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вызов из другого воркфлоу, чат |
| **Сервисы** | Google Sheets, OpenAI |
| **Узлов в схеме** | 9 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Save your expenses via chat message. 

LLM will parse your message to structured JSON and save as a new row into Google Sheet.

## Installation
### 1. Set up Google Sheets:
Clone this Sheet:
https://docs.google.com/spreadsheets/d/1D0r3tun7LF7Ypb21CmbTKEtn76WE-kaHvBCM5NdgiPU/edit?gid=0#gid=0

(File -> Make a copy)

Choose this sheet into "Save expense into Google Sheets" node.


### 2. Fix sub-workflow dropdown: 
open "Parse msg and save to Sheets" node (which is an n8n sub-workflow executor tool) and choose the SAME workflow in the dropdown. it will allow n8n to call "Workflow Input Trigger" properly when needed.


### 3. Activate the workflow to make chat work properly.
Sent message to chat, something like "car wash; 59.3 usd; 25 jan 2024"

you should get a response:
Your expense saved, here is the output of save sub-workflow:{"cost":59.3,"descr":"car wash","date":"2024-01-25","msg":"car wash; 59.3 usd; 25 jan 2024"}

and new row in Google sheets should be inserted!

</details>
