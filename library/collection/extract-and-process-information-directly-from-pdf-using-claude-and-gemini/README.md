# Extract and process information directly from PDF using Claude and Gemini

> Извлекает данные из PDF напрямую моделями Claude 3.5 Sonnet и Gemini 2.0 Flash — для сравнения.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Google Drive |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `anthropicApi`, `googleDriveOAuth2Api`, `googlePalmApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Workflow: Extract data from PDF with Claude 3.5 Sonnet or Gemini 2.0 Flash

**Overview**
- This workflow helps you compare Claude 3.5 Sonnet and Gemini 2.0 Flash when extracting data from a PDF
- This workflow extracts and processes the data within a PDF in **one single step**, **instead of calling an OCR and then an LLM”**


**How it works**
- The initial 2 steps download the PDF and convert it to base64.
- This base64 string is then sent to both Claude 3.5 Sonnet and Gemini 2.0 Flash to extract information.
- This workflow is made to let you compare results, latency, and cost (in their dedicated dashboard).


**How to use it**
- Set up your Google Drive if not already done
- Select a document on your Google Drive
- Modify the prompt in "Define Prompt" to extract the information you need and transform it as wanted.
- Get a [Claude API key](https://console.anthropic.com/settings/keys) and/or [Gemini API key](https://aistudio.google.com/app/apikey)
- Note that you can deactivate one of the 2 API calls if you don't want to try both
- Test the Workflow

You can output the result as JSON by adding the following:
```
"generationConfig": {
 "responseMimeType": "application/json"
```
or even use a structured output.
[Check the documentation](https://ai.google.dev/gemini-api/docs/structured-output?lang=rest)

You can force Claude to output JSON with [Prefill response format](https://docs.anthropic.com/en/docs/test-and-evaluate/strengthen-guardrails/increase-consistency#prefill-claudes-response)

These 2 steps first download the PDF file, and then convert it to base64.
This is required by both APIs to process the file.

This prompt is used in both Gemini’s and Claude’s calls to define what information should be extracted and processed.

</details>
