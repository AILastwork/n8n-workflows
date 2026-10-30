# Extract data from resume and create PDF with Gotenberg

> Извлекает данные из резюме, присланного в Telegram, и делает новый PDF через Gotenberg.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Telegram |
| **Сервисы** | OpenAI, Telegram |
| **Узлов в схеме** | 33 |
| **Нужные учётные данные** | `openAiApi`, `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### Add chat ID
Remember to set your actual ID to trigger automation from Telegram.

### Ignore start message
Workflow ignores initial`/start` message sent to the bot.

### Download resume file
Based on file ID, node performs downloading of the file uploaded by user.

### Extract text from PDF
Node extracts readable text form PDF.

### Parse resume data
Create structured data from text extracted from resume. Chain uses OpenAI `gpt-4-turbo-preview` model and JSON response mode. **Adjust JSON schema in output parser to your needs.**

### Format HTML
Format HTML for each resume section (employment history, projects etc.).

### Create HTML file
From formatted output create `index.html` file in order to run PDF conversion.

### Convert file to PDF
Form `index.html` create PDF using [Gotenberg](https://gotenberg.dev/). If you're not familiar with this software, feel free to check out [my tutorial on YouTube](https://youtu.be/bo15xdjXf1Y?si=hFZMTfjzfSOLOLPK).

### Send PDF file to user
Deliver converted PDF to Telegram user (based on chat ID).

## ⚠️ Note

This is *resume extractor* workflow that I had a pleasure to present during [n8n community hangout](https://youtu.be/eZacuxrhCuo?si=KkJQrgQuvLxj-6FM&t=1701
) on March 7, 2024.

1. Remember to add your credentials and configure nodes.
2. This node requires installed [Gotenberg](https://gotenberg.dev/) for PDF generation. If you're not familiar with this software, feel free to check out [my tutorial on YouTube](https://youtu.be/bo15xdjXf1Y?si=hFZMTfjzfSOLOLPK). If you don't want to self-host Gotenberg, you use other PDF generation provider (PDFMonkey, ApiTemplate or similar).
3. If you like this workflow, please subscribe to [my YouTube channel](https://www.youtube.com/@workfloows) and/or [my newsletter](https://workfloows.com/).

**Thank you for your support!**

</details>
