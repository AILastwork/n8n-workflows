# Text automations using Apple Shortcuts (1)

> Текстовые автоматизации через Apple Shortcuts и OpenAI: перевод, грамматика, сокращение текста.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 8 |
| **Нужные учётные данные** | `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Workflow: Text automations using Apple Shortcuts

**Overview**
- This workflow answers user requests sent via Apple Shortcuts
- Several Shortcuts call the same webhook, with a query and a type of query
- Types of query are:
 - translate to english
 - translate to spanish
 - correct grammar (without changing the actual content)
 - make content shorter
 - make content longer


**How it works**
- Select a text you are writing
- Launch the shortcut
- The text is sent to the webhook
- Depending on the type of request, a different prompt is used
- Each request is sent to an OpenAI node
- The workflow responds to the request with the response from GPT
- Shortcut replace the selected text with the new one

**How to use it**
- Activate the workflow
- Download [this Shortcut template](https://drive.usercontent.google.com/u/0/uc?id=16zs5iJX7KeX_4e0SoV49_KfbU7-EF0NE&export=download)
- Install the shortcut
- In step 2 of the shortcut, change the url of the Webhook
- In Shortcut details, "add Keyboard Shortcut" with the key you want to use to launch the shortcut
- Go to settings, advanced, check "Allow running scripts"
- You are ready to use the shortcut. Select a text and hit the keyboard shortcut you just defined


**Notes**
- If you use rich formatting, you'll have to test multiple ways to replace characters in the output. For example, you might use `{{ $json.message.content.output.replaceAll('\n', "<br/>") }}` in the "Respond to Shortcut" node depending on the app you use most.
- This is a basic example that you can extend and modify at your will
- You can duplicate and modify the example shortcut based on your need, as well as making new automations in this workflow.

### Check these explanations [< 3 min]

[![Check the explanations](https://cdn.loom.com/sessions/thumbnails/c5b657568af64bb1b50fa8e8a91c45d1-1db3990a618986c9-full-play.gif)](https://www.loom.com/share/c5b657568af64bb1b50fa8e8a91c45d1?sid=a406be73-55eb-4754-9f51-9ddf49b22d69)

</details>
