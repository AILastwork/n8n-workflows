# Extract text from PDF and image using Vertex AI (Gemini) into CSV

> Извлекает текст из PDF и картинок через Gemini (Vertex AI) и сохраняет в CSV.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Google Drive |
| **Сервисы** | Google Drive, Google Gemini |
| **Узлов в схеме** | 12 |
| **Нужные учётные данные** | `googleApi`, `googlePalmApi`, `httpHeaderAuth` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## How to extract PDF and image text into CSV using n8n (without manual data entry)

This workflow will extract text data from PDF and images, then store it as CSV.

[💡 You can read more about this workflow here](https://rumjahn.com/how-to-create-an-a-i-agent-to-analyze-matomo-analytics-using-n8n-for-free/)

## Get PDF or image
You need to create a new folder inside Google Drive for uploading your PDF and images.

Once you create a folder, you need to add your Google cloud user by going to Share -> Add user. The user email should be like: n8n-server@n8n-server-435232.iam.gserviceaccount.com

## Send to Openrouter
You need to set up an Openrouter account to use this. It sends the data to openrouter to extract text.

Use Header Auth. Name is "Authorization" and value is "Bearer {API token}".

## Vertex AI for image recogniztion
We send the photo to Vertex AI to extract text. You'll need to activate Vertex AI and add the correct rights to your Google cloud credentials. 
- Enable Vertex API
- Add vertex to user account

</details>
