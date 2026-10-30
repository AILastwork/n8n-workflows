# Создавайте контент для социальных сетей из Telegram с помощью искусственного интеллекта

> Telegram-бот для контента в соцсети: расшифровывает голосовые (Whisper), ищет информацию (SerpAPI) и пишет пост.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Telegram |
| **Сервисы** | OpenAI, SerpAPI, Telegram |
| **Узлов в схеме** | 12 |
| **Нужные учётные данные** | `httpHeaderAuth`, `huggingFaceApi`, `openAiApi`, `serpApi`, `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

**This workflow listens for incoming voice or text messages from Telegram users.**

**Voice messages are fetched from Telegram and transcribed into text using OpenAI's Whisper API.**

**The AI agent uses the OpenAI Chat Model and SerpAPI tool to conduct research and generate social media content and an image prompt based on the user request.**

**An image is generated using the image prompt**

</details>
