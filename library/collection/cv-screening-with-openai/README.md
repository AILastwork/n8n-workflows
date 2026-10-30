# CV Screening with OpenAI

> Скрининг резюме с OpenAI: сравнивает резюме с описанием вакансии.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

**Add direct link to CV and Job description**

### Setup

1. **Download File**: Fetch the CV using its direct URL.
2. **Extract Data**: Use N8N’s PDF or text extraction nodes to retrieve text from the CV.
3. **Send to OpenAI**:
 - **URL**: POST to OpenAI’s API for analysis.
 - **Parameters**:
 - Include the extracted CV data and job description.
 - Use JSON Schema to structure the response.
4. **Save Results**:
 - Store the extracted data and OpenAI's analysis in Supabase for further use.

![5min Logo](https://cflobdhpqwnoisuctsoc.supabase.co/storage/v1/object/public/my_storage/Untitled%20(1500%20x%20300%20px).png)
## CV Screening with OpenAI
**Made by [Mark Shcherbakov](https://www.linkedin.com/in/marklowcoding/) from community [5minAI](https://www.skool.com/5minai-2861)**

This workflow is ideal for recruitment agencies, HR professionals, and hiring managers looking to automate the initial screening of CVs. It is especially useful for organizations handling large volumes of applications and seeking to streamline their recruitment process.

This workflow automates the resume screening process using OpenAI for analysis and Supabase for structured data storage. It provides a matching score, a summary of candidate suitability, and key insights into why the candidate fits (or doesn’t fit) the job. 

1. **Retrieve Resume**: The workflow downloads CVs from a direct link (e.g., Supabase storage or Dropbox).
2. **Extract Data**: Extracts text data from PDF or DOC files for analysis.
3. **Analyze with OpenAI**: Sends the extracted data and job description to OpenAI to:
 - Generate a matching score.
 - Summarize candidate strengths and weaknesses.
 - Provide actionable insights into their suitability for the job.
4. **Store Results in Supabase**: Saves the analysis and raw data in a structured format for further processing or integration into other tools.

### ... or watch set up video [8 min]
[![Youtube Thumbnail](https://cflobdhpqwnoisuctsoc.supabase.co/storage/v1/object/public/my_storage/11.png)](https://youtu.be/TWuI3dOcn0E)

**Replace OpenAI connection**

</details>
