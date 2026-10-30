# AI Agent for realtime insights on meetings

> ИИ-агент, который в реальном времени расшифровывает встречу и даёт по ней подсказки (данные в Supabase/Postgres).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | OpenAI, PostgreSQL, Supabase |
| **Узлов в схеме** | 9 |
| **Нужные учётные данные** | `httpHeaderAuth`, `openAiApi`, `postgres`, `supabaseApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### ... or watch set up video [10 min]
[![Youtube Thumbnail](https://res.cloudinary.com/de9jgixzm/image/upload/v1739773273/Youtube%20Thumbs/Realtim%20AI%20Agent.png)](https://www.youtube.com/watch?v=rtaX6BMiTeo)

![5min Logo](https://res.cloudinary.com/de9jgixzm/image/upload/v1739773200/Skool%20Assets/ejm3hqnvhgwpnu2fv92s.png)
## AI Agent for realtime insights on meetings
**Made by [Mark Shcherbakov](https://www.linkedin.com/in/marklowcoding/) from community [5minAI](https://www.skool.com/5minai)**

Transcribing meetings manually can be tedious and prone to error. This workflow automates the transcription process in real-time, ensuring that key discussions and decisions are accurately captured and easily accessible for later review, thus enhancing productivity and clarity in communications.

The workflow employs an AI-powered assistant to join virtual meetings and capture discussions through real-time transcription. Key functionalities include:
- Automatic joining of meetings on platforms like Zoom, Google Meet, and others with the ability to provide real-time transcription.
- Integration with transcription APIs (e.g., AssemblyAI) to deliver seamless and accurate capture of dialogue.
- Structuring and storing transcriptions efficiently in a database for easy retrieval and analysis.

1. **Real-Time Transcription**: The assistant captures audio during meetings and transcribes it in real-time, allowing participants to focus on discussions.
2. **Keyword Recognition**: Key phrases can trigger specific actions, such as noting important points or making prompts to the assistant.
3. **Structured Data Management**: The assistant maintains a database of transcriptions linked to meeting details for organized storage and quick access later.

### Set up steps

#### Preparation

1. **Create Recall.ai API key**
2. **Setup Supabase account and table**
```
create table
 public.data (
 id uuid not null default gen_random_uuid (),
 date_created timestamp with time zone not null default (now() at time zone 'utc'::text),
 input jsonb null,
 output jsonb null,
 constraint data_pkey primary key (id),
 ) tablespace pg_default;

```
3. **Create OpenAI API key**

#### Development

1. **Bot Creation**: 
 - Use a node to create the bot that will join meetings. Provide the meeting URL and set transcription options within the API request.

2. **Authentication**: 
 - Configure authentication settings via a Bearer token for interacting with your transcription service.

3. **Webhook Setup**: 
 - Create a webhook to receive real-time transcription updates, ensuring timely data capture during meetings.

4. **Join Meeting**: 
 - Set the bot to join the specified meeting and actively listen to capture conversations.

5. **Transcription Handling**: 
 - Combine transcription fragments into cohesive sentences and manage dialog arrays for coherence.

6. **Trigger Actions on Keywords**: 
 - Set up keyword recognition that can initiate requests to the OpenAI API for additional interactions based on captured dialogue.

7. **Output and Summary Generation**: 
 - Produce insights and summary notes from the transcriptions that can be stored back into the database for future reference.

## Scenario 1

## Scenario 2

### Replace Supabase credentials

### Replace server location

### Replace OpenAI credentials

### Replace credentials

### Replace meeting url

</details>
