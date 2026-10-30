# Testing Mulitple Local LLM with LM Studio

> Тестирует несколько локальных моделей в LM Studio и записывает метрики (читаемость, скорость) в Google Sheets.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | чат |
| **Сервисы** | Google Sheets, OpenAI |
| **Узлов в схеме** | 12 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## 🧠Text Analysis
### Readability Score Ranges:
When testing model responses, readability scores can range across different levels. Here’s a breakdown:

- **90–100**: Very easy to read (5th grade or below)
- **80–89**: Easy to read (6th grade)
- **70–79**: Fairly easy to read (7th grade)
- **60–69**: Standard (8th to 9th grade)
- **50–59**: Fairly difficult (10th to 12th grade)
- **30–49**: Difficult (College)
- **0–29**: Very difficult (College graduate)
- **Below 0**: Extremely difficult (Post-graduate level)

## ⚙️ 2. Update Local IP
Update the **'Base URL'** `http://<LAN_IP>:1234/v1/models` in the workflow to match the IP of your LM Studio server. (Running LM Server)[https://lmstudio.ai/docs/basics/server]

This node will query the LM Studio server to retrieve a list of all loaded model IDs at the time of the query. If you change or add models to LM Studio, you’ll need to rerun this node to get an updated list of active LLMs.

## 🛠️1. Setup - LM Studio
First, download and install [LM Studio](https://lmstudio.ai/). Identify which LLM models you want to use for testing.

Next, the selected models are loaded into the server capabilities to prepare them for testing. For a detailed guide on how to set up multiple models, refer to the [LM Studio Basics](https://lmstudio.ai/docs/basics) documentation.

## 3. 💡Update the LM Settings

From here, you can modify the following
 parameters to fine-tune model behavior:

- **Temperature**: Controls randomness. Higher values (e.g., 1.0) produce more diverse results, while lower values (e.g., 0.2) make responses more focused and deterministic.
- **Top P**: Adjusts nucleus sampling, where the model considers only a subset of probable tokens. A lower value (e.g., 0.5) narrows the response range.
- **Presence Penalty**: Penalizes new tokens based on their presence in the input, encouraging the model to generate more varied responses.

## 📊4. Create Google Sheet (Optional)
1. First, create a Google Sheet with the following headers:
 - Prompt
 - Time Sent
 - Time Received
 - Total Time Spent
 - Model
 - Response
 - Readability Score
 - Average Word Length
 - Word Count
 - Sentence Count
 - Average Sentence Length
2. After creating the sheet, update the corresponding Google Sheets node in the workflow to map the data fields correctly.

## 🏗️Setup Steps
1. **Download and Install LM Studio**: Ensure LM Studio is correctly installed on your machine.
2. **Update the Base URL**: Replace the base URL with the IP address of your LLM instance. Ensure the connection is established.
3. **Configure LLM Settings**: Verify that your LLM models are properly set up and configured in LM Studio.
4. **Create a Google Sheet**: Set up a Google Sheet with the necessary headers (Prompt, Time Sent, Time Received, etc.) to track your testing results.

## 📖Prompting Multiple LLMs

When testing for specific outcomes (such as conciseness or readability), you can add a **System Prompt** in the LLM Chain to guide the models' responses.

**System Prompt Suggestion**:
- Focus on ensuring that responses are concise, clear, and easily understandable by a 5th-grade reading level. 
- This prompt will help you compare models based on how well they meet readability standards and stay on point.
 
Adjust the prompt to fit your desired testing criteria.

### Optional
You can just delete the google sheet node, and review the results by hand. 

Utilizing the google sheet, allows you to provide mulitple prompts and review the analysis against all of those runs.

## 🚀Pro Tip 

If you are getting strange results, ensure that you are Deleting the previous chat (next to the Chat Button) to ensure you aren't bleeding responses into the next chat.

</details>
