# ⚙️ Автоматизация

Общие автоматизации, ИИ-агенты, служебные сценарии n8n и учебные примеры. Воркфлоу в разделе: **249**.

[← ко всем категориям](../README.md)

| # | Воркфлоу | Что делает | Сервисы |
|---|---|---|---|
| 1 | [Access data from bubble application](access-data-from-bubble-application/) | Пример запроса к данным приложения Bubble через HTTP-запрос. |  |
| 2 | [Add a bug to linear via slack command](add-a-bug-to-linear-via-slack-command/) | Slash-команда в Slack, которая создаёт баг в Linear из сообщения пользователя. |  |
| 3 | [Add a check condition for a loop in n8n](add-a-check-condition-for-a-loop-in-n8n/) | Показывает, как сделать условие выхода из цикла в n8n на примере публикации твита. | X (Twitter) |
| 4 | [Add a datapoint to beeminder on strava activity update](add-a-datapoint-to-beeminder-on-strava-activity-update/) | При новой активности в Strava добавляет точку данных в цель Beeminder. | Beeminder, Strava |
| 5 | [Add articles to a notion list by accessing a discord slash command](add-articles-to-a-notion-list-by-accessing-a-discord-slash-command/) | Slash-команда в Discord: берёт ссылку, достаёт заголовок страницы и добавляет статью в список Notion. | Notion |
| 6 | [Add liked songs to a spotify monthly playlist](add-liked-songs-to-a-spotify-monthly-playlist/) | Каждый месяц собирает ваши лайкнутые треки Spotify в отдельный плейлист месяца (состояние хранит в NocoDB). | NocoDB, Spotify |
| 7 | [Add new clients from notion to clockify](add-new-clients-from-notion-to-clockify/) | Переносит новых клиентов из базы Notion в Clockify. | Clockify, Notion |
| 8 | [Add product ideas to notion via a slack command](add-product-ideas-to-notion-via-a-slack-command/) | Slash-команда в Slack для добавления продуктовых идей в базу Notion. | Notion |
| 9 | [Advanced ai demo presented at ai developers 14 meetup](advanced-ai-demo-presented-at-ai-developers-14-meetup/) | Демо с митапа AI Developers: классифицирует входящие письма Gmail, загружает PDF в векторное хранилище и даёт чат с документами (OpenAI/Anthropic). | Anthropic Claude, Gmail, OpenAI, Pinecone, Slack |
| 10 | [Advanced slackbot with n8n](advanced-slackbot-with-n8n/) | Продвинутый Slack-бот: проверяет подпись запроса, маршрутизирует команды в под-воркфлоу и пишет отладку в Postgres. | PostgreSQL, Slack |
| 11 | [Ai agent to chat with supabase postgresql db](ai-agent-to-chat-with-supabase-postgresql-db/) | ИИ-агент, с которым можно общаться на естественном языке о данных в Supabase/PostgreSQL — он сам пишет SQL-запросы. | OpenAI, PostgreSQL |
| 12 | [Ai agent with charts capabilities using openai structured output and quickchart](ai-agent-with-charts-capabilities-using-openai-structured-output-and-quickchart/) | ИИ-агент, который по запросу строит графики через QuickChart, используя structured output OpenAI. | OpenAI |
| 13 | [Ai data analyst agent for spreadsheets with nocodb](ai-data-analyst-agent-for-spreadsheets-with-nocodb/) | ИИ-аналитик для таблиц NocoDB: изучает структуру таблицы и отвечает на вопросы по данным. | NocoDB, OpenAI |
| 14 | [Ai summarize podcast episode and enhance using wikipedia](ai-summarize-podcast-episode-and-enhance-using-wikipedia/) | Делает саммари выпуска подкаста, выделяет темы и вопросы, объясняет их с помощью Википедии и отправляет дайджест на почту. | Gmail, OpenAI, Wikipedia |
| 15 | [Airtable automate recurring tasks](airtable-automate-recurring-tasks/) | Автоматически создаёт повторяющиеся задачи в Airtable и уведомляет команду в Slack. | Airtable, Slack |
| 16 | [Analyze feedback using aws comprehend and send it to a mattermost channel](analyze-feedback-using-aws-comprehend-and-send-it-to-a-mattermost-channel/) | Анализирует тональность отзывов из Typeform через AWS Comprehend и отправляет негативные в канал Mattermost. | AWS Comprehend, Mattermost, Typeform |
| 17 | [Archive spotify s discover weekly playlist](archive-spotify-s-discover-weekly-playlist/) | Каждую неделю сохраняет треки плейлиста Spotify Discover Weekly в архивный плейлист. | Spotify |
| 18 | [Assign issues to interested contributors](assign-issues-to-interested-contributors/) | Назначает GitHub-issue на автора или на того, кто в комментарии вызвался его сделать. | GitHub |
| 19 | [Assign values to variables using the set node](assign-values-to-variables-using-the-set-node/) | Учебный пример: присвоение значений переменным через узел Set. |  |
| 20 | [Attach a default error handler to all active workflows](attach-a-default-error-handler-to-all-active-workflows/) | По расписанию находит активные воркфлоу n8n без обработчика ошибок и подключает им обработчик по умолчанию (уведомление в Gmail). | Gmail, n8n API |
| 21 | [Authenticate a user in a workflow with openid connect](authenticate-a-user-in-a-workflow-with-openid-connect/) | Реализует вход пользователя через OpenID Connect (OAuth 2.0) прямо в воркфлоу n8n. |  |
| 22 | [Automate assigning github issues](automate-assigning-github-issues/) | Автоматически назначает GitHub-issue на автора или на вызвавшегося комментатора. | GitHub |
| 23 | [Automate droplet snapshots on digitalocean](automate-droplet-snapshots-on-digitalocean/) | Автоматически создаёт снапшоты дроплетов DigitalOcean и удаляет самые старые, держа их число в пределах лимита. |  |
| 24 | [Automate image validation tasks using ai vision](automate-image-validation-tasks-using-ai-vision/) | Проверяет фото на соответствие требованиям к фото на паспорт (Великобритания) с помощью ИИ-зрения Gemini. | Google Drive, Google Gemini |
| 25 | [Avoid rate limiting by batching http requests](avoid-rate-limiting-by-batching-http-requests/) | Обходит лимиты API: делит данные на пачки и отправляет их с паузами. |  |
| 26 | [Back up your n8n workflows to github](back-up-your-n8n-workflows-to-github/) | Ежедневно бэкапит все воркфлоу n8n в GitHub-репозиторий, отслеживая новые и изменённые, и пишет отчёт в Slack. | GitHub, Slack, n8n API |
| 27 | [Backup workflows to github](backup-workflows-to-github/) | Бэкапит и обновляет воркфлоу n8n в GitHub-репозитории. | GitHub |
| 28 | [Bookmarking urls in your browser and save them to notion](bookmarking-urls-in-your-browser-and-save-them-to-notion/) | Букмарклет для браузера: сохраняет текущую страницу в базу Notion через вебхук. | Notion |
| 29 | [Build a self hosted url shortener with a dashboard](build-a-self-hosted-url-shortener-with-a-dashboard/) | Собственный сокращатель ссылок с дашбордом статистики переходов (данные в Airtable). | Airtable |
| 30 | [Build an endpoint to perform crud operations with multiple http methods](build-an-endpoint-to-perform-crud-operations-with-multiple-http-methods/) | Один эндпоинт с CRUD-операциями (GET/POST/PUT/DELETE) над клиентами в Airtable. | Airtable |
| 31 | [Chatgpt automatic code review in gitlab mr](chatgpt-automatic-code-review-in-gitlab-mr/) | Автоматическое код-ревью merge request'ов в GitLab с помощью ChatGPT: комментарии пишутся прямо в обсуждение MR. | OpenAI |
| 32 | [Check for preview for a link](check-for-preview-for-a-link/) | Проверяет, есть ли превью у ссылки, через Peekalink и ветвит логику по результату. | Peekalink |
| 33 | [Classify new bugs in linear with openai s gpt 4 and move them to the right team](classify-new-bugs-in-linear-with-openai-s-gpt-4-and-move-them-to-the-right-team/) | Классифицирует новые баги в Linear через GPT-4 и переводит их в нужную команду; уведомляет в Slack. | Linear, OpenAI, Slack |
| 34 | [Compare sql datasets](compare-sql-datasets/) | Сравнивает два набора данных из MySQL (продажи за разные периоды) узлом Compare Datasets. | Compare Datasets, MySQL |
| 35 | [Comparing data with the compare datasets node](comparing-data-with-the-compare-datasets-node/) | Учебный пример узла Compare Datasets: находит различия между двумя наборами данных. | Compare Datasets |
| 36 | [Conversational interviews with ai agents and n8n forms](conversational-interviews-with-ai-agents-and-n8n-forms/) | ИИ-интервьюер на формах n8n: ведёт диалог с пользователем (Groq), хранит память в Redis и записывает вопросы и ответы в Google Sheets. | Google Sheets, Groq, Redis |
| 37 | [Count the items returned by a node](count-the-items-returned-by-a-node/) | Учебный пример: как посчитать количество элементов, которые вернул узел. |  |
| 38 | [Create a board lists and a card in wekan](create-a-board-lists-and-a-card-in-wekan/) | Создаёт в Wekan доску, списки и карточку. | Wekan |
| 39 | [Create a collection and create update and get a bookmark in raindrop](create-a-collection-and-create-update-and-get-a-bookmark-in-raindrop/) | Создаёт коллекцию и закладку в Raindrop.io, обновляет и читает её. | Raindrop |
| 40 | [Create a folder in onedrive](create-a-folder-in-onedrive/) | Создаёт папку в Microsoft OneDrive. | OneDrive |
| 41 | [Create a new card in trello](create-a-new-card-in-trello/) | Создаёт новую карточку в Trello. | Trello |
| 42 | [Create a new folder in box](create-a-new-folder-in-box/) | Создаёт новую папку в Box. | Box |
| 43 | [Create a new issue in jira](create-a-new-issue-in-jira/) | Создаёт новую задачу в Jira. | Jira |
| 44 | [Create a new member update the infromation create a note and post in orbit](create-a-new-member-update-the-infromation-create-a-note-and-post-in-orbit/) | Создаёт участника в Orbit, обновляет данные, добавляет заметку и пост. | Orbit |
| 45 | [Create a new team for a project in notion](create-a-new-team-for-a-project-in-notion/) | Создаёт в Notion новую команду для проекта и связывает участников. | Notion |
| 46 | [Create a new user in notion based on the signup form submission](create-a-new-user-in-notion-based-on-the-signup-form-submission/) | По заявке из формы регистрации создаёт или обновляет пользователя в базе Notion. | Notion |
| 47 | [Create a table and insert and update data in the table in snowflake](create-a-table-and-insert-and-update-data-in-the-table-in-snowflake/) | Создаёт таблицу в Snowflake, вставляет и обновляет данные. | Snowflake |
| 48 | [Create a table in cratedb and insert data](create-a-table-in-cratedb-and-insert-data/) | Создаёт таблицу в CrateDB и вставляет данные. | Crate Db |
| 49 | [Create a table in mysql and insert data](create-a-table-in-mysql-and-insert-data/) | Создаёт таблицу в MySQL и вставляет данные. | MySQL |
| 50 | [Create a table in postgres and insert data](create-a-table-in-postgres-and-insert-data/) | Создаёт таблицу в Postgres и вставляет данные. | PostgreSQL |
| 51 | [Create a table in quest db and insert data](create-a-table-in-quest-db-and-insert-data/) | Создаёт таблицу в QuestDB и вставляет данные. | Quest Db |
| 52 | [Create a task in clickup](create-a-task-in-clickup/) | Создаёт задачу в ClickUp. | ClickUp |
| 53 | [Create a url on bitly](create-a-url-on-bitly/) | Сокращает ссылку через Bitly. | Bitly |
| 54 | [Create a website screenshot and send via telegram channel](create-a-website-screenshot-and-send-via-telegram-channel/) | Делает скриншот сайта через uProc и отправляет его в Telegram-канал. | Telegram, uProc |
| 55 | [Create add an attachment and send a draft using microsoft outlook](create-add-an-attachment-and-send-a-draft-using-microsoft-outlook/) | Создаёт черновик письма в Outlook, прикрепляет файл и отправляет. | Outlook |
| 56 | [Create an array of objects](create-an-array-of-objects/) | Учебный пример: собирает несколько элементов в один массив объектов. |  |
| 57 | [Create an image procedurally using bannerbear](create-an-image-procedurally-using-bannerbear/) | Генерирует изображение по шаблону через Bannerbear. | Bannerbear |
| 58 | [Create an issue on gitlab on every github release](create-an-issue-on-gitlab-on-every-github-release/) | При новом релизе в GitHub создаёт issue в GitLab. | GitHub, GitLab |
| 59 | [Create an rss feed based on a website s content](create-an-rss-feed-based-on-a-website-s-content/) | Создаёт RSS-ленту из содержимого сайта, у которого нет своего RSS (парсинг HTML). |  |
| 60 | [Create asana ticket from terminal bash dash](create-asana-ticket-from-terminal-bash-dash/) | Создаёт задачу в Asana из терминала (Bash Dash) через вебхук. | Asana |
| 61 | [Create linear tickets from notion content](create-linear-tickets-from-notion-content/) | Создаёт задачи в Linear из блоков страницы Notion, при необходимости дорабатывая текст через OpenAI. | GraphQL, Linear, Notion, OpenAI |
| 62 | [Create multiple json items from an array](create-multiple-json-items-from-an-array/) | Учебный пример: превращает массив в отдельные JSON-элементы. |  |
| 63 | [Create or update a post in wordpress](create-or-update-a-post-in-wordpress/) | Создаёт пост в WordPress и обновляет его. | WordPress |
| 64 | [Create transcription jobs using aws transcribe](create-transcription-jobs-using-aws-transcribe/) | Запускает задания транскрибации аудио из AWS S3 в AWS Transcribe. | AWS S3, AWS Transcribe |
| 65 | [Create update and get a post in ghost](create-update-and-get-a-post-in-ghost/) | Создаёт, обновляет и получает пост в Ghost. | Ghost |
| 66 | [Create update and get a post via discourse](create-update-and-get-a-post-via-discourse/) | Создаёт, обновляет и получает пост в Discourse. | Discourse |
| 67 | [Create update and get a product from woocommerce](create-update-and-get-a-product-from-woocommerce/) | Создаёт товар в WooCommerce, обновляет остаток и читает его. | WooCommerce |
| 68 | [Create update and get a task in microsoft to do](create-update-and-get-a-task-in-microsoft-to-do/) | Создаёт, обновляет и получает задачу в Microsoft To Do. | Microsoft To Do |
| 69 | [Create update and get activity in strava](create-update-and-get-activity-in-strava/) | Создаёт, обновляет и получает активность в Strava. | Strava |
| 70 | [Create update and get an issue on taiga](create-update-and-get-an-issue-on-taiga/) | Создаёт, обновляет и получает задачу в Taiga. | Taiga |
| 71 | [Create update and get an item from webflow](create-update-and-get-an-item-from-webflow/) | Создаёт, обновляет и получает элемент коллекции Webflow. | Webflow |
| 72 | [Create update and get an object from bubble](create-update-and-get-an-object-from-bubble/) | Создаёт, обновляет и получает объект в Bubble. | Bubble |
| 73 | [Create update and get records in quick base](create-update-and-get-records-in-quick-base/) | Создаёт, обновляет и получает записи в Quick Base. | Quickbase |
| 74 | [Cron routines with telegram](cron-routines-with-telegram/) | Плановые задачи с уведомлениями в Telegram: чистит старые записи в MySQL и сообщает об этом. | MySQL, Telegram |
| 75 | [Custom langchain agent written in javascript](custom-langchain-agent-written-in-javascript/) | Собственный LangChain-агент, написанный на JavaScript (узлы Code), с моделями OpenAI. | OpenAI |
| 76 | [De activate n8n workflows using telegram commands](de-activate-n8n-workflows-using-telegram-commands/) | Включает и выключает воркфлоу n8n командами в Telegram. | Telegram, n8n API |
| 77 | [Demo workflow how to use workflowstaticdata](demo-workflow-how-to-use-workflowstaticdata/) | Демо workflowStaticData: хранит токен доступа между запусками и обновляет его по истечении. |  |
| 78 | [Demonstrates the use of the item index method](demonstrates-the-use-of-the-item-index-method/) | Учебный пример метода $itemIndex: обработка элементов с учётом их индекса. |  |
| 79 | [Deploy site when new content gets added](deploy-site-when-new-content-gets-added/) | Запускает деплой сайта на Netlify при появлении нового контента (вебхук из CMS). | Netlify |
| 80 | [Detect and store the information about a purchase using the image of a receipt](detect-and-store-the-information-about-a-purchase-using-the-image-of-a-receipt/) | Распознаёт данные чека по фото через Mindee и сохраняет покупку в Airtable. | Airtable, Mindee |
| 81 | [Display project data on a smashing dashboard](display-project-data-on-a-smashing-dashboard/) | Собирает метрики проекта (Docker, npm, GitHub, Product Hunt) и выводит их на дашборд Smashing. | GitHub |
| 82 | [Domain extractor](domain-extractor/) | Извлекает домен из URL или e-mail и проверяет, является ли он бесплатным почтовым сервисом. |  |
| 83 | [Easy image captioning with gemini 1 5 pro](easy-image-captioning-with-gemini-1-5-pro/) | Генерирует подпись к картинке с помощью Gemini 1.5 Pro и накладывает её на изображение. | Google Gemini |
| 84 | [Encrypt some data using the crypto node](encrypt-some-data-using-the-crypto-node/) | Учебный пример: шифрование/хеширование данных узлом Crypto. |  |
| 85 | [Execute an sql query in microsoft sql](execute-an-sql-query-in-microsoft-sql/) | Выполняет SQL-запрос в Microsoft SQL Server. | MS SQL |
| 86 | [Execute another workflow](execute-another-workflow/) | Пример запуска другого воркфлоу узлом Execute Workflow. |  |
| 87 | [Execute set node based on function output](execute-set-node-based-on-function-output/) | Учебный пример: узел Set выполняется в зависимости от результата функции (IF). |  |
| 88 | [Export n8n cloud execution data to csv](export-n8n-cloud-execution-data-to-csv/) | Выгружает данные о выполнениях воркфлоу из n8n Cloud в CSV. | n8n API |
| 89 | [Export wordpress posts to spreadsheet](export-wordpress-posts-to-spreadsheet/) | Выгружает посты WordPress в таблицу (CSV-файл). | WordPress |
| 90 | [Extend n8n with additional tools](extend-n8n-with-additional-tools/) | Telegram-бот, который рисует погоду по столицам Европы с помощью R — пример расширения n8n внешними утилитами. | Telegram |
| 91 | [Extract and store text from chat images using aws s3](extract-and-store-text-from-chat-images-using-aws-s3/) | Распознаёт текст на картинках из Telegram через AWS Textract, хранит изображения в S3, а текст — в Airtable. | AWS S3, AWS Textract, Airtable, Telegram |
| 92 | [Extract information from an image of a receipt](extract-information-from-an-image-of-a-receipt/) | Извлекает данные из фото чека через Mindee. | Mindee |
| 93 | [Extract infromation from a receipt and store it in airtable](extract-infromation-from-a-receipt-and-store-it-in-airtable/) | Извлекает данные чека, загруженного через Typeform, с помощью Mindee и сохраняет в Airtable. | Airtable, Mindee, Typeform |
| 94 | [Extract post titles from a blog](extract-post-titles-from-a-blog/) | Собирает заголовки и ссылки статей с главной страницы блога (Hacker Noon). |  |
| 95 | [Filtering and branching data](filtering-and-branching-data/) | Учебный пример фильтрации и ветвления данных: IF, Switch, Filter. |  |
| 96 | [Find a new book recommendations](find-a-new-book-recommendations/) | Раз в неделю подбирает случайную книгу по теме из Open Library и присылает рекомендацию на почту. |  |
| 97 | [Flux ai image generator](flux-ai-image-generator/) | Генератор картинок на FLUX: веб-форма, выбор стиля, изображение сохраняется в S3 и показывается на странице. | S3 |
| 98 | [Force ai to use a specific output format](force-ai-to-use-a-specific-output-format/) | Заставляет ИИ отвечать строго в заданном формате (structured output parser) на примере списка штатов США. | OpenAI |
| 99 | [Generate seo seed keywords using ai](generate-seo-seed-keywords-using-ai/) | Генерирует 15–20 SEO-ключевых слов по профилю идеального клиента с помощью Claude. | Anthropic Claude |
| 100 | [Generate sql queries from schema only ai powered](generate-sql-queries-from-schema-only-ai-powered/) | ИИ-агент, который по одной только схеме MySQL пишет SQL-запросы и отвечает на вопросы в чате. | MySQL, OpenAI |
| 101 | [Get a board from monday com](get-a-board-from-monday-com/) | Получает доску из Monday.com. | Monday.com |
| 102 | [Get a pipeline in circleci](get-a-pipeline-in-circleci/) | Получает пайплайн в CircleCI. | Circle Ci |
| 103 | [Get all members of a discord server with a specific role](get-all-members-of-a-discord-server-with-a-specific-role/) | Собирает участников Discord-сервера с определённой ролью и сохраняет их в Google Sheets. | Discord, Google Sheets |
| 104 | [Get all orders in shopify](get-all-orders-in-shopify/) | Получает все заказы из Shopify. | Shopify |
| 105 | [Get all posts from wordpress](get-all-posts-from-wordpress/) | Получает все посты из WordPress. | WordPress |
| 106 | [Get all releases in sentry](get-all-releases-in-sentry/) | Создаёт релиз в Sentry и получает список всех релизов. | Sentry |
| 107 | [Get all the entries from contentful](get-all-the-entries-from-contentful/) | Получает все записи из Contentful. | Contentful |
| 108 | [Get all the stories and publish them in storyblok](get-all-the-stories-and-publish-them-in-storyblok/) | Получает все истории в Storyblok и публикует их. | Storyblok |
| 109 | [Get articles from hacker news](get-articles-from-hacker-news/) | Получает статьи с Hacker News. | Hacker News |
| 110 | [Get company data and store it in airtable](get-company-data-and-store-it-in-airtable/) | Получает данные о компании (логотип, цвета и т. п.) через Brandfetch и сохраняет в Airtable. | Airtable, Brandfetch |
| 111 | [Get contributors information from github in slack](get-contributors-information-from-github-in-slack/) | По команде показывает в Slack информацию о контрибьюторе GitHub (имя, e-mail, компания). | GraphQL, Slack |
| 112 | [Get data from hacker news and send to airtable or via sms](get-data-from-hacker-news-and-send-to-airtable-or-via-sms/) | Берёт топ статей Hacker News, переводит слова из заголовков на немецкий и сохраняет в Airtable или отправляет по SMS (Vonage). | Airtable, Hacker News, Lingva Nex, Vonage |
| 113 | [Get data from multiple rss feeds to telegram](get-data-from-multiple-rss-feeds-to-telegram/) | Читает несколько RSS-лент и рассылает подходящие новости в разные Telegram-каналы. | RSS, Telegram |
| 114 | [Get details of a gitlab repository](get-details-of-a-gitlab-repository/) | Получает информацию о репозитории GitLab. | GitLab |
| 115 | [Get entries from a cockpit collection](get-entries-from-a-cockpit-collection/) | Получает записи из коллекции Cockpit CMS. | Cockpit |
| 116 | [Get execute command data and transfer to json](get-execute-command-data-and-transfer-to-json/) | Выполняет команду в системе и превращает её JSON-вывод в данные n8n. |  |
| 117 | [Get information of an image](get-information-of-an-image/) | Скачивает картинку и получает о ней информацию (размер, формат) узлом Edit Image. |  |
| 118 | [Get local datetime into function node using moment js](get-local-datetime-into-function-node-using-moment-js/) | Пример получения локальной даты и времени в узле Function с помощью Moment.js. |  |
| 119 | [Get long lived facebook user or page access token](get-long-lived-facebook-user-or-page-access-token/) | Получает долгоживущий токен доступа пользователя или страницы Facebook. |  |
| 120 | [Get multiple attachments from gmail and upload them to gdrive](get-multiple-attachments-from-gmail-and-upload-them-to-gdrive/) | Сохраняет все вложения из писем Gmail в Google Drive. | Gmail, Google Drive |
| 121 | [Get only new rss with photo](get-only-new-rss-with-photo/) | Берёт из RSS только новые записи и вытаскивает к ним картинки. | RSS |
| 122 | [Get synonyms of a german word](get-synonyms-of-a-german-word/) | Ищет синонимы немецкого слова через OpenThesaurus. | Open Thesaurus |
| 123 | [Get the job details using the cortex node](get-the-job-details-using-the-cortex-node/) | Проверяет URL на угрозы через Cortex и получает детали задания. | Cortex |
| 124 | [Get the value of a key from redis](get-the-value-of-a-key-from-redis/) | Получает значение ключа из Redis. | Redis |
| 125 | [Get today s date and day using the function node](get-today-s-date-and-day-using-the-function-node/) | Получает сегодняшнюю дату и день недели в узле Function. |  |
| 126 | [Get top 5 products on product hunt every hour](get-top-5-products-on-product-hunt-every-hour/) | Каждый час отправляет в Discord топ-5 продуктов Product Hunt. | Discord, GraphQL |
| 127 | [Get workflows affected by 0 214 3 migration](get-workflows-affected-by-0-214-3-migration/) | Находит воркфлоу, которые могли пострадать от миграции в n8n 0.214.3. | n8n API |
| 128 | [Getting started](getting-started/) | Стартовый пример: каждые 2 часа обновляет переменную и хранит её в данных воркфлоу. |  |
| 129 | [Git backup of workflows and credentials](git-backup-of-workflows-and-credentials/) | Бэкапит воркфлоу и учётные данные n8n в Git-репозиторий через командную строку. |  |
| 130 | [Handle errors from a different workflow](handle-errors-from-a-different-workflow/) | Отправляет письмо через Mailgun, когда в другом воркфлоу происходит ошибка (Error Trigger). | Mailgun |
| 131 | [Import csv into mysql](import-csv-into-mysql/) | Импортирует CSV-файл в таблицу MySQL. | MySQL |
| 132 | [Import productboard notes companies and features into snowflake](import-productboard-notes-companies-and-features-into-snowflake/) | Еженедельно выгружает заметки, компании и фичи из Productboard в Snowflake и пишет сводку в Slack. | Slack, Snowflake |
| 133 | [Insert and retrieve data from a table in stackby](insert-and-retrieve-data-from-a-table-in-stackby/) | Добавляет и читает данные из таблицы Stackby. | Stackby |
| 134 | [Insert and update data in airtable](insert-and-update-data-in-airtable/) | Добавляет и обновляет записи в Airtable. | Airtable |
| 135 | [Insert data into a new row for a table in coda](insert-data-into-a-new-row-for-a-table-in-coda/) | Добавляет строку в таблицу Coda. | Coda |
| 136 | [Introduction to the http tool](introduction-to-the-http-tool/) | Знакомство с HTTP-инструментом ИИ-агента: агент читает веб-страницы и предлагает идеи по запросу. | OpenAI |
| 137 | [Invoke an aws lambda function](invoke-an-aws-lambda-function/) | Вызывает функцию AWS Lambda. | AWS Lambda |
| 138 | [Itemmatching usage example](itemmatching-usage-example/) | Учебный пример itemMatching: восстановление связи между элементами после преобразований. |  |
| 139 | [Join data from postgres and mysql](join-data-from-postgres-and-mysql/) | Объединяет данные из Postgres и MySQL по запросу на вебхук и формирует этикетку товара. | MySQL, PostgreSQL |
| 140 | [Joining different datasets](joining-different-datasets/) | Учебный пример узла Merge: разные способы объединения наборов данных. |  |
| 141 | [Kb tool confluence knowledge base](kb-tool-confluence-knowledge-base/) | Инструмент базы знаний Confluence для ИИ-агента техподдержки: поиск ответов по базе и ответы в Slack. |  |
| 142 | [Load data into snowflake](load-data-into-snowflake/) | Загружает CSV-данные в Snowflake. | Snowflake |
| 143 | [Manage changes using the git node](manage-changes-using-the-git-node/) | Работа с Git из n8n: добавление файлов, коммит и пуш. | Git |
| 144 | [Manage projects in clockify](manage-projects-in-clockify/) | Создаёт проект, задачу и запись времени в Clockify. | Clockify |
| 145 | [Manage users automatically in reqres in](manage-users-automatically-in-reqres-in/) | Создаёт, получает и обновляет пользователей в тестовом API Reqres.in. |  |
| 146 | [Merge binary objects on multiple items into a single item](merge-binary-objects-on-multiple-items-into-a-single-item/) | Объединяет бинарные файлы из нескольких элементов в один элемент. |  |
| 147 | [Merge data for multiple executions](merge-data-for-multiple-executions/) | Объединяет данные из нескольких запусков (RSS-ленты, обработанные пачками). | RSS |
| 148 | [Merge greetings with the users based on the language](merge-greetings-with-the-users-based-on-the-language/) | Учебный пример Merge: подставляет приветствие каждому пользователю по его языку. |  |
| 149 | [Merge multiple runs into one](merge-multiple-runs-into-one/) | Учебный пример: объединяет результаты нескольких прогонов цикла в один набор. |  |
| 150 | [Monday com useful utilities](monday-com-useful-utilities/) | Полезные утилиты для Monday.com: чтение досок, связанные элементы, загрузка файлов. | Monday.com |
| 151 | [Move data between json and spreadsheets](move-data-between-json-and-spreadsheets/) | Конвертирует данные между JSON и таблицами: CSV во вложении Gmail и запись в Google Sheets. | Gmail, Google Sheets |
| 152 | [N8n nodemation basic creating your first simple workflow 2 3](n8n-nodemation-basic-creating-your-first-simple-workflow-2-3/) | Курс «Основы n8n», урок 2: первый простой воркфлоу на вебхуках. |  |
| 153 | [N8n workflow backup management with dropbox and airtable](n8n-workflow-backup-management-with-dropbox-and-airtable/) | Сохраняет описание воркфлоу n8n в Airtable и бэкапы в Dropbox по расписанию. | Airtable, Dropbox |
| 154 | [Narrating over a video using multimodal ai](narrating-over-a-video-using-multimodal-ai/) | Озвучивает видео: вытаскивает кадры, пишет сценарий мультимодальной моделью OpenAI, генерирует голос и сохраняет в Google Drive. | Google Drive, OpenAI |
| 155 | [Nathan your n8n personal assistant](nathan-your-n8n-personal-assistant/) | «Натан» — персональный ассистент: отвечает на письма вежливой отговоркой и предупреждает коллегу в Slack. | Slack |
| 156 | [Notify a team channel about new software releases via slack and github](notify-a-team-channel-about-new-software-releases-via-slack-and-github/) | Сообщает в Slack о новых релизах в GitHub-репозитории. | GitHub, Slack |
| 157 | [Openai assistant workflow upload file create an assistant chat with it](openai-assistant-workflow-upload-file-create-an-assistant-chat-with-it/) | Загружает файл из Google Drive в OpenAI, создаёт на его основе ассистента и даёт чат с ним. | Google Drive, OpenAI |
| 158 | [Openai examples chatgpt dalle 2 whisper 1 5 in 1](openai-examples-chatgpt-dalle-2-whisper-1-5-in-1/) | Пять примеров OpenAI в одном: транскрибация Whisper, саммари, перевод, генерация HTML и картинок DALL·E. | OpenAI |
| 159 | [Pattern for parallel sub workflow execution followed by wait for all loop](pattern-for-parallel-sub-workflow-execution-followed-by-wait-for-all-loop/) | Шаблон параллельного запуска под-воркфлоу с ожиданием завершения всех. |  |
| 160 | [Perform speech to text on recorded audio clips using wit ai](perform-speech-to-text-on-recorded-audio-clips-using-wit-ai/) | Распознаёт речь в аудиозаписи через Wit.ai. |  |
| 161 | [Plex automatic qbittorent throttler](plex-automatic-qbittorent-throttler/) | Автоматически ограничивает скорость qBittorrent, когда в Plex начинается воспроизведение, и снимает ограничение после остановки. |  |
| 162 | [Post rss feed items from yesterday to slack](post-rss-feed-items-from-yesterday-to-slack/) | Берёт посты из RSS-ленты за вчерашний день и публикует их в Slack. | RSS, Slack |
| 163 | [Preparing data to be sent to a service](preparing-data-to-be-sent-to-a-service/) | Учебный пример: готовит данные клиентов в нужном формате и делает upsert в Google Sheets. | Google Sheets |
| 164 | [Prompt based object detection with gemini 2 0](prompt-based-object-detection-with-gemini-2-0/) | Находит объекты на картинке по текстовому запросу с помощью Gemini 2.0 и рисует вокруг них рамки. |  |
| 165 | [Purge n8n execution history located in mysql](purge-n8n-execution-history-located-in-mysql/) | Ежедневно удаляет старую историю выполнений n8n из базы MySQL. | MySQL |
| 166 | [Push your public ip to namecheaps dynamic dns](push-your-public-ip-to-namecheaps-dynamic-dns/) | Обновляет ваш публичный IP-адрес для поддоменов в Dynamic DNS Namecheap. |  |
| 167 | [Rate limiting and waiting for external events](rate-limiting-and-waiting-for-external-events/) | Учебный пример: отправка сообщений с ограничением частоты и ожидание внешнего события (подтверждения) перед продолжением. |  |
| 168 | [Read an rss feed](read-an-rss-feed/) | Читает RSS-ленту. | RSS |
| 169 | [Read rss feed from two different sources](read-rss-feed-from-two-different-sources/) | Читает RSS из двух разных источников и обрабатывает их пачками. | RSS |
| 170 | [Receive server sent events](receive-server-sent-events/) | Получает события по технологии Server-Sent Events (SSE) с указанного URL. |  |
| 171 | [Receive updates for bitbucket events](receive-updates-for-bitbucket-events/) | Триггер на события Bitbucket (например, новые коммиты). | Bitbucket |
| 172 | [Receive updates for events in clickup](receive-updates-for-events-in-clickup/) | Триггер на события в ClickUp. | ClickUp |
| 173 | [Receive updates for github events](receive-updates-for-github-events/) | Триггер на события в GitHub-репозитории. | GitHub |
| 174 | [Receive updates for gitlab events](receive-updates-for-gitlab-events/) | Триггер на события в GitLab-репозитории. | GitLab |
| 175 | [Receive updates for the position of the iss and push it to a firbase](receive-updates-for-the-position-of-the-iss-and-push-it-to-a-firbase/) | Периодически получает позицию МКС и записывает её в Firebase Realtime Database. | Firebase |
| 176 | [Receive updates of the position of the iss every minute](receive-updates-of-the-position-of-the-iss-every-minute/) | Каждую минуту получает позицию МКС, отбрасывая дубликаты. |  |
| 177 | [Receive updates when an event occurs in taiga](receive-updates-when-an-event-occurs-in-taiga/) | Триггер на события в проекте Taiga. | Taiga |
| 178 | [Reddit ai digest](reddit-ai-digest/) | Ищет посты про n8n на Reddit, анализирует их через OpenAI и делает дайджест с категориями. | OpenAI, Reddit |
| 179 | [Rename a key in n8n](rename-a-key-in-n8n/) | Учебный пример: переименование ключа в данных (Rename Keys). |  |
| 180 | [Report n8n workflow errors directly to your email](report-n8n-workflow-errors-directly-to-your-email/) | Присылает письмо в Gmail при ошибке в любом воркфлоу n8n — с деталями и ссылкой на выполнение. | Gmail |
| 181 | [Report n8n workflow errors to slack](report-n8n-workflow-errors-to-slack/) | Отправляет уведомление в Slack при ошибке в воркфлоу n8n. | Slack |
| 182 | [Report n8n workflow errors to telegram](report-n8n-workflow-errors-to-telegram/) | Отправляет уведомление в Telegram при ошибке в воркфлоу n8n. | Telegram |
| 183 | [Restore backed up workflows from github to n8n](restore-backed-up-workflows-from-github-to-n8n/) | Восстанавливает воркфлоу из бэкапа в GitHub обратно в n8n, пропуская уже существующие. | GitHub, n8n API |
| 184 | [Retrieve a monday com row and all data in a single node](retrieve-a-monday-com-row-and-all-data-in-a-single-node/) | Получает строку Monday.com со всеми связанными элементами и подэлементами одним узлом. | Monday.com |
| 185 | [Rss feed for ard audiothek podcasts](rss-feed-for-ard-audiothek-podcasts/) | Делает RSS-ленту для подкастов ARD Audiothek, парся сайт. |  |
| 186 | [Run a sql query on postgres](run-a-sql-query-on-postgres/) | Выполняет SQL-запрос в Postgres. | PostgreSQL |
| 187 | [Sample error workflow](sample-error-workflow/) | Пример воркфлоу-обработчика ошибок: уведомляет в Mattermost и по SMS через Twilio. | Mattermost, Twilio |
| 188 | [Save your workflows into a github repository](save-your-workflows-into-a-github-repository/) | Сохраняет воркфлоу n8n в GitHub-репозиторий, отслеживая изменения. | GitHub |
| 189 | [Scrape and store data from multiple website pages](scrape-and-store-data-from-multiple-website-pages/) | Парсит SWIFT-коды с многостраничного сайта, нормализует названия стран и сохраняет в MongoDB. | MongoDB, uProc |
| 190 | [Search and download torrents using transmission daemon](search-and-download-torrents-using-transmission-daemon/) | Ищет и скачивает торрент по названию через Transmission и сообщает в Telegram. | Telegram |
| 191 | [Send a random recipe once a day to telegram](send-a-random-recipe-once-a-day-to-telegram/) | Каждый день присылает подписчикам Telegram-бота случайный веганский рецепт (подписчики хранятся в Airtable). | Airtable, Telegram |
| 192 | [Send a tweet to twitter](send-a-tweet-to-twitter/) | Публикует твит. | X (Twitter) |
| 193 | [Send airtable data as tasks to trello](send-airtable-data-as-tasks-to-trello/) | Для лучших докладчиков конференции из Airtable создаёт баннер в Bannerbear и карточку в Trello. | Airtable, Bannerbear, Trello |
| 194 | [Send an sms to a number whenever you go out](send-an-sms-to-a-number-whenever-you-go-out/) | Отправляет SMS через Twilio, когда вы уходите из дома (действие Pushcut). | Pushcut, Twilio |
| 195 | [Send an sms using the mocean node](send-an-sms-using-the-mocean-node/) | Отправляет SMS через Mocean. | Mocean |
| 196 | [Send automated daily reminders on telegram](send-automated-daily-reminders-on-telegram/) | Каждый день присылает в Telegram напоминание записать, что вы делали вчера. | Telegram |
| 197 | [Send http requests to a list of urls](send-http-requests-to-a-list-of-urls/) | По расписанию отправляет HTTP-запросы на список URL и обрабатывает ответы. |  |
| 198 | [Send location updates of the iss every minute to a queue in aws sqs](send-location-updates-of-the-iss-every-minute-to-a-queue-in-aws-sqs/) | Каждую минуту отправляет позицию МКС в очередь AWS SQS. | AWS SQS |
| 199 | [Send n8n automation errors to a monday com board](send-n8n-automation-errors-to-a-monday-com-board/) | Записывает ошибки воркфлоу n8n как элементы на доску Monday.com. | Monday.com |
| 200 | [Send new youtube channel videos to telegram](send-new-youtube-channel-videos-to-telegram/) | Присылает в Telegram новые видео с YouTube-канала, пропуская уже отправленные. | Telegram, YouTube |
| 201 | [Send selected github events to slack](send-selected-github-events-to-slack/) | Отправляет в Slack выбранные события GitHub (например, новые звёзды репозитория). | GitHub, Slack |
| 202 | [Send the astronomy picture of the day daily to a telegram channel](send-the-astronomy-picture-of-the-day-daily-to-a-telegram-channel/) | Каждый день публикует в Telegram-канал «Астрономическую картинку дня» NASA. | Nasa, Telegram |
| 203 | [Send tweets every minute to mattermost](send-tweets-every-minute-to-mattermost/) | Каждую минуту пересылает новые твиты по упоминанию в канал Mattermost. | Mattermost, X (Twitter) |
| 204 | [Send updates about the position of the iss every minute to a topic in activemq](send-updates-about-the-position-of-the-iss-every-minute-to-a-topic-in-activemq/) | Каждую минуту отправляет позицию МКС в топик ActiveMQ (AMQP). | ActiveMQ |
| 205 | [Send updates about the position of the iss every minute to a topic in kafka](send-updates-about-the-position-of-the-iss-every-minute-to-a-topic-in-kafka/) | Каждую минуту отправляет позицию МКС в топик Kafka. | Kafka |
| 206 | [Send updates about the position of the iss every minute to a topic in rabbitmq](send-updates-about-the-position-of-the-iss-every-minute-to-a-topic-in-rabbitmq/) | Каждую минуту отправляет позицию МКС в очередь RabbitMQ. | RabbitMQ |
| 207 | [Serve a static html page when a link is accessed](serve-a-static-html-page-when-a-link-is-accessed/) | Отдаёт статическую HTML-страницу при переходе по ссылке вебхука. |  |
| 208 | [Set credentials dynamically using expressions](set-credentials-dynamically-using-expressions/) | Подставляет учётные данные динамически через выражения: ключ NASA API вводится в форме. | Nasa |
| 209 | [Share jokes on twitter automatically](share-jokes-on-twitter-automatically/) | Каждый день публикует в Twitter случайную шутку-картинку. | X (Twitter) |
| 210 | [Sharepoint list fetch with oauth token](sharepoint-list-fetch-with-oauth-token/) | Получает OAuth-токен и читает список SharePoint по расписанию. |  |
| 211 | [Siri ai agent apple shortcuts powered voice template](siri-ai-agent-apple-shortcuts-powered-voice-template/) | Голосовой ИИ-ассистент для Siri через Apple Shortcuts: вопрос отправляется на вебхук, отвечает OpenAI. | OpenAI |
| 212 | [Slack chatbot powered by ai](slack-chatbot-powered-by-ai/) | ИИ-чат-бот для Slack с поиском в интернете (SerpAPI) и Википедии. | OpenAI, SerpAPI, Slack, Wikipedia |
| 213 | [Split in batches node currentrunindex example](split-in-batches-node-currentrunindex-example/) | Учебный пример Split In Batches: использование currentRunIndex для выхода из цикла. |  |
| 214 | [Split in batches node noitemsleft example](split-in-batches-node-noitemsleft-example/) | Учебный пример Split In Batches: проверка noItemsLeft для завершения цикла. |  |
| 215 | [Split out binary data](split-out-binary-data/) | Скачивает архив, распаковывает и разбивает бинарные файлы на отдельные элементы. |  |
| 216 | [Sql to xml export with xsl template formatting](sql-to-xml-export-with-xsl-template-formatting/) | Экспортирует данные из MySQL в XML с XSL-шаблоном и отдаёт как веб-страницу. | MySQL |
| 217 | [Standup bot 1 4 initialize](standup-bot-1-4-initialize/) | Стендап-бот для Mattermost, часть 1/4: инициализация — запись конфигурации в файл. |  |
| 218 | [Standup bot 2 4 read config](standup-bot-2-4-read-config/) | Стендап-бот, часть 2/4: чтение конфигурации из файла. |  |
| 219 | [Standup bot 3 4 override config](standup-bot-3-4-override-config/) | Стендап-бот, часть 3/4: перезапись конфигурации. |  |
| 220 | [Standup bot 4 4 worker](standup-bot-4-4-worker/) | Стендап-бот, часть 4/4: основной обработчик — напоминания, сбор ответов и отчёты в Mattermost. | Mattermost |
| 221 | [Store and send information about the weather for any city via sms](store-and-send-information-about-the-weather-for-any-city-via-sms/) | Принимает город от клиента, сохраняет в Airtable, получает погоду из OpenWeatherMap и отправляет её по SMS. | Airtable, OpenWeatherMap, Twilio |
| 222 | [Streamline your zoom meetings with secure automated stripe payments](streamline-your-zoom-meetings-with-secure-automated-stripe-payments/) | Создаёт встречу в Zoom, ссылку на оплату Stripe и таблицу участников в Google Sheets; уведомляет по почте об оплатах. | Gmail, Google Sheets, Stripe, Zoom |
| 223 | [Suggest meeting slots using ai](suggest-meeting-slots-using-ai/) | Читает письма с просьбами о встрече, проверяет свободное время в Google Calendar и предлагает слоты в ответе (OpenAI). | Gmail, Google Calendar, OpenAI |
| 224 | [Sum or aggregate a column of spreadsheet or table data](sum-or-aggregate-a-column-of-spreadsheet-or-table-data/) | Учебный пример: суммирование значений колонки таблицы. |  |
| 225 | [Supabase insertion upsertion retrieval](supabase-insertion-upsertion-retrieval/) | Загружает документы из Google Drive в векторную базу Supabase и даёт чат-бота с ответами по ним. | Google Drive, OpenAI, Supabase |
| 226 | [Telegram user registration workflow](telegram-user-registration-workflow/) | Регистрация пользователей Telegram-бота: сохраняет данные в Google Sheets и отправляет приветствие. | Google Sheets, Telegram |
| 227 | [Text automations using apple shortcuts](text-automations-using-apple-shortcuts/) | Текстовые автоматизации через Apple Shortcuts и OpenAI: перевод, исправление грамматики, сокращение или расширение текста. | OpenAI |
| 228 | [Time logging on clockify using slack](time-logging-on-clockify-using-slack/) | Slack-ассистент для учёта времени в Clockify: создание, изменение и удаление записей на естественном языке. | OpenAI, Slack |
| 229 | [Tiny tiny rss new stared article saved to wallabag](tiny-tiny-rss-new-stared-article-saved-to-wallabag/) | Сохраняет отмеченные статьи из Tiny Tiny RSS в Wallabag. |  |
| 230 | [Track an event in segment](track-an-event-in-segment/) | Отправляет событие в Segment. | Segment |
| 231 | [Track changes of product prices](track-changes-of-product-prices/) | Следит за ценами товаров на сайтах и присылает письмо, когда цена снизилась. |  |
| 232 | [Transf meeting booking into notion s task with verified information](transf-meeting-booking-into-notion-s-task-with-verified-information/) | Каждую новую запись на встречу из Calendly превращает в задачу Notion, обогащая данные о клиенте через Dropcontact. | Calendly, Dropcontact, Notion |
| 233 | [Translate instructions using lingvanex](translate-instructions-using-lingvanex/) | Переводит инструкцию к рецепту коктейля на итальянский через LingvaNex. | Lingva Nex |
| 234 | [Trigger a build in travis ci when code changes are push to a github repo](trigger-a-build-in-travis-ci-when-code-changes-are-push-to-a-github-repo/) | Запускает сборку в Travis CI при пуше или PR в GitHub-репозиторий. | GitHub, Travis Ci |
| 235 | [Trigger a build using the travisci node](trigger-a-build-using-the-travisci-node/) | Запускает сборку Travis CI вручную. | Travis Ci |
| 236 | [Turn on a light to a specific color on any update in github repository](turn-on-a-light-to-a-specific-color-on-any-update-in-github-repository/) | Включает лампу Home Assistant определённым цветом при любом обновлении GitHub-репозитория. | GitHub, Home Assistant |
| 237 | [Upload bulk records from csv airtable interfaces](upload-bulk-records-from-csv-airtable-interfaces/) | Массовая загрузка записей из CSV в Airtable через интерфейсы Airtable. | Airtable |
| 238 | [Use regex to select date](use-regex-to-select-date/) | Пример выбора даты с помощью регулярного выражения. |  |
| 239 | [User verification and login using auth0](user-verification-and-login-using-auth0/) | Проверка и вход пользователя через Auth0. |  |
| 240 | [Using the merge node merge by key](using-the-merge-node-merge-by-key/) | Учебный пример узла Merge: объединение по ключу. |  |
| 241 | [Validate totp token without creating a credential](validate-totp-token-without-creating-a-credential/) | Проверяет 6-значный TOTP-код без создания учётных данных в n8n. |  |
| 242 | [Very quick quickstart](very-quick-quickstart/) | Очень быстрый старт: генерирует тестовых клиентов и готовит данные. |  |
| 243 | [Visualize your sql agent queries with openai and quickchart io](visualize-your-sql-agent-queries-with-openai-and-quickchart-io/) | ИИ-агент для SQL, который визуализирует результаты запросов графиками QuickChart. | OpenAI |
| 244 | [Weekly coffee chat mattermost version](weekly-coffee-chat-mattermost-version/) | Еженедельный «кофе-чат»: случайно делит команду на группы, объявляет в Mattermost и создаёт встречи в Google Calendar. | Google Calendar, Mattermost |
| 245 | [Whatsapp starter workflow](whatsapp-starter-workflow/) | Стартовый WhatsApp-бот: отвечает эхом на входящие сообщения. | WhatsApp |
| 246 | [Wordpress ai chatbot to enhance user experience with supabase and openai](wordpress-ai-chatbot-to-enhance-user-experience-with-supabase-and-openai/) | ИИ-чат-бот для сайта на WordPress: индексирует контент в Supabase (векторы) и отвечает посетителям по нему, храня историю в Postgres. | Memory Postgres Chat, OpenAI, PostgreSQL, Supabase, WordPress |
| 247 | [Working with dates and times](working-with-dates-and-times/) | Учебный пример работы с датами и временем в n8n. |  |
| 248 | [Write http query string on image](write-http-query-string-on-image/) | Пишет текст из параметров запроса поверх картинки. |  |
| 249 | [Write json to disk binary](write-json-to-disk-binary/) | Записывает JSON на диск как бинарный файл. |  |
