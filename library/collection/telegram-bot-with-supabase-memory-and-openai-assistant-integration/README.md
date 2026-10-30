# Telegram Bot with Supabase memory and OpenAI assistant integration

> Telegram-бот с ассистентом OpenAI и памятью пользователей в Supabase (есть SQL для создания таблицы).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Telegram |
| **Сервисы** | Supabase, Telegram |
| **Узлов в схеме** | 10 |
| **Нужные учётные данные** | `openAiApi`, `supabaseApi`, `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

SQL query to create table in Supabase:

```
create table
 public.telegram_users (
 id uuid not null default gen_random_uuid (),
 date_created timestamp with time zone not null default (now() at time zone 'utc'::text),
 telegram_id bigint null,
 openai_thread_id text null,
 constraint telegram_users_pkey primary key (id)
 ) tablespace pg_default;
```

Create assistant in [OpenAI](https://platform.openai.com/assistants).

**Specify own assistant id here**

Create own Telegram bot in [Botfather bot](https://t.me/botfather)

Create table in [Supabase](https://supabase.com) with SQL query

### Set up steps
1. **Create a Telegram Bot** using the [Botfather](https://t.me/botfather) and obtain the bot token.
2. **Set up Supabase:**
	1. Create a new project and generate a ```SUPABASE_URL``` and ```SUPABASE_KEY```.
	2. Create a new table named ```telegram_users``` with the following SQL query:
```
create table
 public.telegram_users (
 id uuid not null default gen_random_uuid (),
 date_created timestamp with time zone not null default (now() at time zone 'utc'::text),
 telegram_id bigint null,
 openai_thread_id text null,
 constraint telegram_users_pkey primary key (id)
 ) tablespace pg_default;
```
3. **OpenAI Setup:**
	1. Create an OpenAI assistant and obtain the ```OPENAI_API_KEY```.
	2. Customize your assistant’s personality or use cases according to your requirements.
4. **Environment Configuration in n8n:**
	1. Configure the Telegram, Supabase, and OpenAI nodes with the appropriate credentials.
	2. Set up triggers for receiving messages and handling conversation logic.
	3. Set up OpenAI assistant ID in "++OPENAI - Run assistant++" node.

![5min Logo](https://cflobdhpqwnoisuctsoc.supabase.co/storage/v1/object/public/my_storage/Untitled%20(1500%20x%20300%20px).png)
## AI Telegram Bot with Supabase memory
**Made by [Mark Shcherbakov](https://www.linkedin.com/in/marklowcoding/) from community [5minAI](https://www.skool.com/5minai-2861)**

Many simple chatbots lack context awareness and user memory. This workflow solves that by integrating Supabase to keep track of user sessions (via ```telegram_id``` and ```openai_thread_id```), allowing the bot to maintain continuity and context in conversations, leading to a more human-like and engaging experience.

This Telegram bot template connects with OpenAI to answer user queries while storing and retrieving user information from a Supabase database. The memory component ensures that the bot can reference past interactions, making it suitable for use cases such as customer support, virtual assistants, or any application where context retention is crucial.

### ... or watch set up video [5 min]
[![Youtube Thumbnail](https://cflobdhpqwnoisuctsoc.supabase.co/storage/v1/object/public/my_storage/Youtube%20thumb%20(3).png)](https://www.youtube.com/watch?v=kS41gut8l0g)

</details>
