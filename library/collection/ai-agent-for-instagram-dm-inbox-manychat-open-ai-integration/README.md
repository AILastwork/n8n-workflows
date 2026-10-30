# InstaTest

> Бот для Instagram Direct через ManyChat: получает сообщения и отвечает с помощью OpenAI.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Easy Instagram(via ManyChat) bot
---
### Description:
This template is a main part of Entire solution. It's getting new message from Instagram via ManyChat(Extra No-Code tool for getting and sending message in Instagram). Generating message using ChatGPT and send back to ManyChat that sends it to Instagrtam.

### Logic:
1. Getting message from Instagram(from ManyChat)
2. Set you system prompt for AI
3. Create simple answer for message in AI block
4. Send answer to Instagram(to ManyChat)

---
*Helpful links:*
- [Guide in Notion how to create full bot](https://shadowed-pound-d6e.notion.site/Instagram-GPT-light-version-Manychat-X-N8N-176293bddff880899a9ac255585d29f7?pvs=4)
- [ManyChat](https://manychat.partnerlinks.io/vm4wkw8j81tc)

## 3) AI block
---
There is 3 nodes:
- AI Agent
- Chat GPT model
- Memory for history messages

### To do:
- in ChatGPT node you can choose the best model for you
- in Memory Block you can change number of messages in history

## 1) HTTP Post webhook

**To do:**
Just copy production link from this node and insert to custom action in ManyChat

No edits needed

## 2) Edit prompt

**To do:**
Go inside and change input

## 4) Respond webhook

No edits needed

</details>
