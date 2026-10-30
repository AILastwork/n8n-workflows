# My workflow 6

> Slack slash-команды с ответами ИИ (комментарии на корейском).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | OpenAI, Slack |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Command Trigger

Copy the webhook URL, paste it into the Request URL of the Slack slash command, and complete the creation.


웹훅 URL을 복사하여 슬랙 슬래시 커맨드의 Request URL에 붙이고 생성을 완료하세요.

## Command Switch

Switch each slash command.

각 슬래시 커맨드를 분기하세요.

## Create AI Messages

## Send a Slack Message

## 슬랙 Slash Command와 채널 메시지로 챗봇 만들기 🤖

이 튜토리얼에서는 n8n을 활용해 슬랙에서 동작하는 AI 챗봇을 만드는 방법을 알려드립니다. 슬래시 커맨드를 통한 개인 메시지부터 공개 채널에서의 자동 응답까지, 실용적인 챗봇 구현 방법을 단계별로 설명합니다. 슬랙 앱 설정부터 n8n 노드 구성, 웹훅 트리거 설정, AI 봇 연동까지 하나하나 자세히 다룹니다.

유튜브 링크:
https://www.youtube.com/watch?v=UpudYFCWaIM

## Create an AI chatbot with Slack slash commands! 🤖

In this tutorial, we'll show you how to create an AI chatbot that works in Slack using n8n. We'll explain step by step how to implement a practical chatbot, from personal messages through slash commands to automatic responses in public channels. We'll cover everything in detail, from Slack app configuration to n8n node setup, webhook trigger configuration, and AI bot integration.

The YouTube video is provided in Korean.

Youtube Link:
https://www.youtube.com/watch?v=UpudYFCWaIM

</details>
