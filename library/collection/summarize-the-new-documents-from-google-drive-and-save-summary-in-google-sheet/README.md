# Google Doc Summarizer to Google Sheets

> Делает саммари документов Google Docs через OpenAI и записывает в Google Sheets.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Google Drive |
| **Сервисы** | Google Docs, Google Drive, Google Sheets, OpenAI, Wikipedia |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `googleApi`, `googleSheetsOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Get Latest File

## Get Document Content

## AI Summarization

## Store Summary in Sheet

# Google Doc Summarizer to Google Sheets

## Description
This workflow is created by WeblineIndia, it streamlines and automates the end-to-end process of managing recently added document files in Google Drive. It begins by identifying the most recently uploaded .doc file in a designated folder within Google Drive. The document's content is then directly retrieved and passed through an AI-powered summarization model that condenses the content into a concise and meaningful summary. Finally, the summarized content, along with relevant metadata such as the document's name, upload date, and other details, is systematically stored in a Google Sheet. This ensures easy reference, enhanced organization, and quick access to key information, making it an ideal solution for managing and summarizing large volumes of document data efficiently.

</details>
