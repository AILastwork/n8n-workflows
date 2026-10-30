# Summarize emails with A.I. then send to messenger

> Делает саммари писем через ИИ и отправляет в мессенджер (LINE).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | новое письмо (IMAP) |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | `httpHeaderAuth`, `imap` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Summarize emails with A.I.
You can find out more about the [use case](https://rumjahn.com/how-a-i-saved-my-kids-school-life-and-my-marriage/)

Find your email server's IMAP Settings. 
- Link for [gmail](https://www.getmailspring.com/setup/access-gmail-via-imap-smtp)

For the A.I. you can use Openrouter.ai. 
- Set up a free account
- The A.I. model selected is FREE to use.
## Credentials
- Use header auth
- Username: Authorization
- Password: Bearer {insert your API key}.
- The password is "Bearer" space plus your API key.

Don't use the official Line node. It's outdated.
## Credentials
- Use header auth
- Username: Authorization
- Password: Bearer {channel access token}

You can find your channel access token at the [Line API console](https://developers.line.biz/console/). Go to Messaging API and scroll to the bottom.

</details>
