# 📦 Библиотека воркфлоу n8n

**718 готовых шаблонов** n8n с описанием на русском: что делает каждый, чем запускается, какие сервисы и учётные данные нужны.

> Это коллекция сторонних шаблонов, в основном из публичной галереи [n8n.io/workflows](https://n8n.io/workflows) и сообщества [@n8node](https://t.me/n8node).
> Они **не связаны** с рабочими воркфлоу из папки [`workflows/`](../workflows/) и не запущены у нас — это база идей и заготовок.

## Категории

| Раздел | Что внутри | Шаблонов |
|---|---|---|
| 🤖 [Сборная 300+ (ИИ и контент)](collection/) | ИИ-агенты, RAG, чат-боты, генерация контента | 279 |
| ⚙️ [Автоматизация](automation/) | общие автоматизации, служебные сценарии n8n, учебные примеры | 249 |
| 🔗 [Интеграция данных](data-integration/) | перенос и синхронизация данных между сервисами | 73 |
| 💬 [Коммуникация](communication/) | почта, мессенджеры, уведомления | 41 |
| 📄 [Обработка документов](documents/) | файлы, PDF, распознавание текста | 28 |
| 🔄 [Преобразование данных](data-transformation/) | JSON, XML, CSV, Excel, PDF | 23 |
| 🌐 [API и вебхуки](api-webhooks/) | свои эндпоинты и работа с внешними API | 20 |
| 📊 [Аналитика](analytics/) | отчёты и статистика | 5 |

## Как пользоваться

1. Найдите шаблон: откройте раздел или воспользуйтесь поиском GitHub по репозиторию (клавиша `/`) — описания на русском, названия на английском.
2. В папке шаблона откройте `README.md`: там описание, способ запуска, список сервисов и нужных учётных данных.
3. Скачайте `workflow.json` и импортируйте в n8n: **Workflows → Import from File**.
4. Создайте в n8n свои учётные данные и выберите их в узлах — ключей в файлах нет.
5. Поправьте под себя id таблиц, чатов, адреса и включите воркфлоу.

Каждый шаблон лежит в своей папке:

```
library/<категория>/<название>/
├── README.md       ← описание на русском
└── workflow.json   ← файл для импорта в n8n
```

## Подборки по темам

<details>
<summary><b>🤖 Telegram-боты</b> — 57</summary>

| Воркфлоу | Что делает |
|---|---|
| [Agentic Telegram AI bot with LangChain nodes and new tools](collection/telegram-bot-na-baze-langchain-openai/) | Агентный Telegram-бот на LangChain с инструментами (генерация картинок DALL·E 3). |
| [AI-Powered Children s Arabic Storytelling on Telegram](collection/ai-powered-children-s-arabic-storytelling-on-telegram/) | Каждый день публикует в Telegram детскую сказку на арабском языке с иллюстрацией и озвучкой (OpenAI). |
| [AI-Powered Children s English Storytelling on Telegram with OpenAI](collection/ai-powered-children-s-english-storytelling-on-telegram-with-openai/) | Каждый день публикует в Telegram детскую сказку на английском с иллюстрацией и озвучкой (OpenAI). |
| [Angie, Personal AI Assistant with Telegram Voice and Text](collection/angie-personal-ai-assistant-with-telegram-voice-and-text/) | «Энджи» — личный ИИ-ассистент в Telegram (голос и текст): почта, календарь и задачи. |
| [Automated AI image analysis and response via Telegram](collection/automated-ai-image-analysis-and-response-via-telegram/) | Анализирует картинки, присланные в Telegram, через OpenAI и отвечает описанием. |
| [Chat with OpenAIs GPT via a simple Telegram Bot](collection/chat-with-openais-gpt-via-a-simple-telegram-bot/) | Простой Telegram-бот для общения с GPT от OpenAI. |
| [Create a website screenshot and send via telegram channel](automation/create-a-website-screenshot-and-send-via-telegram-channel/) | Делает скриншот сайта через uProc и отправляет его в Telegram-канал. |
| [Cron routines with telegram](automation/cron-routines-with-telegram/) | Плановые задачи с уведомлениями в Telegram: чистит старые записи в MySQL и сообщает об этом. |
| [De activate n8n workflows using telegram commands](automation/de-activate-n8n-workflows-using-telegram-commands/) | Включает и выключает воркфлоу n8n командами в Telegram. |
| [Detect toxic language in Telegram messages](collection/detect-toxic-language-in-telegram-messages/) | Определяет токсичные сообщения в Telegram через Google Perspective API и отвечает на них. |
| [Extend n8n with additional tools](automation/extend-n8n-with-additional-tools/) | Telegram-бот, который рисует погоду по столицам Европы с помощью R — пример расширения n8n внешними утилитами. |
| [Extract and store text from chat images using aws s3](automation/extract-and-store-text-from-chat-images-using-aws-s3/) | Распознаёт текст на картинках из Telegram через AWS Textract, хранит изображения в S3, а текст — в Airtable. |
| [Extract data from resume and create PDF with Gotenberg](collection/extract-data-from-resume-and-create-pdf-with-gotenberg/) | Извлекает данные из резюме, присланного в Telegram, и делает новый PDF через Gotenberg. |
| [Generate Instagram Content from Top Trends with AI Image Generation](collection/generate-instagram-content-from-top-trends-with-ai-image-generation/) | Генерирует контент для Instagram по трендам: ИИ создаёт картинку и подпись, одобрение в Telegram, публикация. |
| [Get data from multiple rss feeds to telegram](automation/get-data-from-multiple-rss-feeds-to-telegram/) | Читает несколько RSS-лент и рассылает подходящие новости в разные Telegram-каналы. |
| [Google Analytics: Weekly Report](collection/create-a-google-analytics-data-report-with-ai-and-sent-it-to-e-mail-and-telegram/) | Еженедельный отчёт Google Analytics: сравнивает метрики с прошлой неделей, ИИ пишет выводы и отправляет на почту или в Telegram. |
| [Hacker News Throwback Machine - See What Was Hot on This Day, Every Year!](collection/hacker-news-throwback-machine-see-what-was-hot-on-this-day-every-year/) | Каждый день присылает в Telegram, что было популярно на Hacker News в этот день в прошлые годы (Gemini). |
| [HR & IT Helpdesk Chatbot with Audio Transcription](collection/hr-it-helpdesk-chatbot-with-audio-transcription/) | Чат-бот HR и IT-поддержки в Telegram: отвечает по внутренним документам (RAG), понимает голосовые. |
| [Image Creation with OpenAI and Telegram](collection/image-creation-with-openai-and-telegram/) | Генерирует картинки через OpenAI по запросу в Telegram. |
| [Leonardo AI & Creatomate Videos](collection/leonardo-ai-creatomate-videos/) | Генерирует короткие видео: сценарий (OpenAI), картинки (Leonardo AI), сборка (Creatomate), публикация на YouTube и в соцсети. |
| [Local SEO Ranking](collection/local-seo-ranking/) | Проверяет позиции сайта в локальной выдаче и присылает отчёт на почту или в Telegram, сохраняя в Google Sheets. |
| [Message on website content changed in telegram](communication/message-on-website-content-changed-in-telegram/) | Следит за изменениями на сайте и сообщает о них в Telegram. |
| [Monitor multiple github repos via webhook](api-webhooks/monitor-multiple-github-repos-via-webhook/) | Следит за несколькими GitHub-репозиториями через вебхук и присылает уведомления о новых коммитах в Slack или Telegram. |
| [NeurochainAI Basic API Integration](collection/telegram-ai-bot-neurochainai-text-image-neurochainai-basic-api-integration/) | Базовая интеграция NeurochainAI с Telegram-ботом. |
| [Play with Spotify from Telegram](collection/telegram-to-spotify-with-openai/) | Управляйте Spotify из Telegram: ИИ находит трек по описанию и включает его. |
| [Proxmox AI Agent with n8n and Generative AI Integration](collection/proxmox-ai-agent-with-n8n-and-generative-ai-integration/) | ИИ-агент для управления Proxmox через чат, Telegram или Gmail (Gemini). |
| [Report n8n workflow errors to telegram](automation/report-n8n-workflow-errors-to-telegram/) | Отправляет уведомление в Telegram при ошибке в воркфлоу n8n. |
| [Save telegram daily messages to google sheets](data-integration/save-telegram-daily-messages-to-google-sheets/) | Сохраняет ежедневные сообщения-дневник из Telegram в Google Sheets. |
| [Search and download torrents using transmission daemon](automation/search-and-download-torrents-using-transmission-daemon/) | Ищет и скачивает торрент по названию через Transmission и сообщает в Telegram. |
| [Send a message to telegram on a new item saved to reader](communication/send-a-message-to-telegram-on-a-new-item-saved-to-reader/) | Присылает в Telegram сообщение о каждой новой статье, сохранённой в Readwise Reader. |
| [Send a random recipe once a day to telegram](automation/send-a-random-recipe-once-a-day-to-telegram/) | Каждый день присылает подписчикам Telegram-бота случайный веганский рецепт (подписчики хранятся в Airtable). |
| [Send automated daily reminders on telegram](automation/send-automated-daily-reminders-on-telegram/) | Каждый день присылает в Telegram напоминание записать, что вы делали вчера. |
| [Send bulk messages to chats in telegram](communication/send-bulk-messages-to-chats-in-telegram/) | Массовая рассылка сообщений по чатам Telegram из списка в Google Sheets с паузами между пачками. |
| [Send new youtube channel videos to telegram](automation/send-new-youtube-channel-videos-to-telegram/) | Присылает в Telegram новые видео с YouTube-канала, пропуская уже отправленные. |
| [Send telegram messages on rss feed read](communication/send-telegram-messages-on-rss-feed-read/) | Отправляет в Telegram новые записи из RSS-ленты. |
| [Send the astronomy picture of the day daily to a telegram channel](automation/send-the-astronomy-picture-of-the-day-daily-to-a-telegram-channel/) | Каждый день публикует в Telegram-канал «Астрономическую картинку дня» NASA. |
| [SEO Wordpress Perplexity Research v1.0](collection/avtonapolnyaemogo-bloga-na-wordpress-cherez-n8n/) | Пишет SEO-оптимизированную статью по исследованию Perplexity и публикует её в WordPress; запуск из Telegram. |
| [Social Media AI Agent - Telegram](collection/sozdanie-i-avtoposting-kontenta-v-sotssetyah/) | ИИ-агент для соцсетей: находит обсуждения GitHub на Hacker News и публикует посты в X и LinkedIn с одобрением в Telegram. |
| [Telegram ai bot assistant ready made template for voice text messages](communication/telegram-ai-bot-assistant-ready-made-template-for-voice-text-messages/) | Готовый Telegram-бот с ИИ (OpenAI): отвечает на текстовые и голосовые сообщения. |
| [Telegram AI Langchain bot](collection/telegram-ai-bot-with-langchain-nodes/) | Telegram-бот на LangChain: чат и генерация картинок DALL·E 3. |
| [Telegram AI-bot](collection/telegram-ai-chatbot/) | Telegram-бот с ИИ: чат и генерация картинок по команде /image. |
| [Telegram Bot with Supabase memory and OpenAI assistant integration](collection/telegram-bot-with-supabase-memory-and-openai-assistant-integration/) | Telegram-бот с ассистентом OpenAI и памятью пользователей в Supabase (есть SQL для создания таблицы). |
| [Telegram RAG pdf](collection/telegram-chat-with-pdf/) | RAG по PDF в Telegram: присланный файл загружается в Pinecone, бот отвечает на вопросы (Groq). |
| [Telegram user registration workflow](automation/telegram-user-registration-workflow/) | Регистрация пользователей Telegram-бота: сохраняет данные в Google Sheets и отправляет приветствие. |
| [Telegram-bot AI Da Nang](collection/chat-with-your-event-schedule-from-google-sheets-in-telegram/) | ИИ-бот для Telegram (OpenRouter) с базой знаний в Google Sheets — пример для туристического гида по Дананг. |
| [Template in store](collection/upload-to-instagram-and-tiktok-from-google-drive/) | Загружаете видео в папку Google Drive — ИИ пишет описание и публикует в Instagram и TikTok. |
| [Translate Telegram audio messages with AI (55 supported languages) v1](collection/translate-telegram-audio-messages-with-ai-55-supported-languages/) | Переводит голосовые сообщения в Telegram на нужный язык (55 языков) и отвечает текстом и голосом. |
| [Анализа и обобщения контента YouTube](collection/analiza-i-obobscheniya-kontenta-youtube/) | Анализ и саммари YouTube-видео по расшифровке, управление через Telegram. |
| [Создавайте контент для социальных сетей из Telegram с помощью искусственного интеллекта](collection/sozdavayte-kontent-dlya-sotsialnyh-setey-iz-telegram-s-pomoschyu-iskusstvennogo/) | Telegram-бот для контента в соцсети: расшифровывает голосовые (Whisper), ищет информацию (SerpAPI) и пишет пост. |
| [✍️🌄 Your First Wordpress Content Creator - Quick Start](collection/postit-v-vordpress/) | Быстрый старт ИИ-копирайтера для WordPress: пишет статью, упрощает язык, сохраняет черновик в Google Drive и публикует; управление через Telegram. |
| [✨🤖Automated AI Powered Social Media Content Factory for X + Facebook + Instagram + LinkedIn](collection/avtoposting-s-odobreniem-po-imeyl/) | «Фабрика контента»: генерирует посты для X, Facebook, Instagram, LinkedIn и др. (OpenAI/Gemini), отправляет на одобрение и публикует. |
| [✨🩷Automated Social Media Content Publishing Factory + System Prompt Composition](collection/avtomaticheskaya-fabrika-kontenta/) | Фабрика публикации в соцсети с ИИ-агентом: роутер по площадкам (X, Instagram, Facebook, LinkedIn, Threads, YouTube Shorts), промпты в Google Docs. |
| [🐋🤖 DeepSeek AI Agent + Telegram + LONG TERM Memory 🧠](collection/deepseek-ai-agent-telegram-long-term-memory/) | ИИ-агент на DeepSeek в Telegram с долговременной памятью в Google Docs. |
| [🔍🛠️Perplexity Researcher to HTML Web Page](collection/issledovanie-perplexity-dlya-html-sozdanie-kontenta-s-pomoschyu-ii/) | Исследует тему через Perplexity, пишет статью и делает из неё HTML-страницу с Tailwind CSS. |
| [🤖 Telegram Messaging Agent for Text/Audio/Images](collection/telegram-messaging-agent-for-text-audio-images/) | Telegram-агент для текста, голосовых и картинок (OpenAI). |
| [🤖🧑‍💻 AI Agent for Top n8n Creators Leaderboard Reporting](collection/ai-agent-for-top-n8n-creators-leaderboard-reporting/) | ИИ-агент для отчётов по рейтингу авторов n8n: собирает статистику, отправляет отчёт по Gmail и в Telegram. |
| [🤖🧠 AI Agent Chatbot + LONG TERM Memory + Note Storage + Telegram](collection/ai-agent-chatbot-long-term-memory-note-storage-telegram/) | ИИ-чат-бот в Telegram с долговременной памятью и хранилищем заметок в Google Docs. |

</details>

<details>
<summary><b>📚 RAG и чат с документами</b> — 40</summary>

| Воркфлоу | Что делает |
|---|---|
| [Advanced AI Demo (Presented at AI Developers #14 meetup)](collection/advanced-ai-demo-presented-at-ai-developers-14-meetup/) | Демо продвинутых ИИ-сценариев: классификация писем, RAG по PDF в Pinecone, чат с документами. |
| [Advanced ai demo presented at ai developers 14 meetup](automation/advanced-ai-demo-presented-at-ai-developers-14-meetup/) | Демо с митапа AI Developers: классифицирует входящие письма Gmail, загружает PDF в векторное хранилище и даёт чат с документами (OpenAI/Anthropic). |
| [AI Agent for realtime insights on meetings](collection/ai-agent-for-realtime-insights-on-meetings/) | ИИ-агент, который в реальном времени расшифровывает встречу и даёт по ней подсказки (данные в Supabase/Postgres). |
| [AI Agent To Chat With Files In Supabase Storage](collection/ai-agent-to-chat-with-files-in-supabase-storage/) | ИИ-агент для чата с файлами из хранилища Supabase (векторный поиск по документам). |
| [Ai agent to chat with files in supabase storage](documents/ai-agent-to-chat-with-files-in-supabase-storage/) | ИИ-агент для чата с файлами (текст, PDF) из хранилища Supabase: индексирует их в векторную базу и отвечает по ним. |
| [AI Email processing autoresponder with approval (Yes/No)](collection/ai-powered-email-processing-autoresponder-and-response-approval-yes-no/) | Автоответчик на письма с ИИ: делает саммари, готовит ответ по базе знаний в Qdrant и отправляет его после одобрения (Да/Нет). |
| [API Schema Extractor](collection/api-schema-extractor/) | Собирает документацию API для списка сервисов (Google + Apify), извлекает операции через Gemini и генерирует схемы. |
| [Api schema extractor](api-webhooks/api-schema-extractor/) | Обходит сайты с документацией API, с помощью ИИ (Gemini) находит описания операций и собирает для каждого сервиса JSON-схему; результаты складывает в Google Sheets и Google Drive. |
| [Ask questions about a PDF using AI](collection/ask-questions-about-a-pdf-using-ai/) | Задавайте вопросы по PDF с помощью ИИ: файл из Google Drive индексируется в Pinecone. |
| [Automate SIEM Alert Enrichment with MITRE ATT&CK, Qdrant & Zendesk in n8n](collection/automate-siem-alert-enrichment-with-mitre-att-ck-qdrant-zendesk-in-n8n/) | Обогащает оповещения SIEM данными MITRE ATT&CK из векторной базы Qdrant и дополняет тикеты Zendesk. |
| [Autonomous AI crawler](collection/autonomous-ai-crawler/) | Автономный ИИ-краулер: обходит сайт, собирает текст и ссылки, сохраняет данные в Supabase. |
| [BambooHR AI-Powered Company Policies and Benefits Chatbot](collection/bamboohr-ai-powered-company-policies-and-benefits-chatbot/) | ИИ-чат-бот по политикам и льготам компании из BambooHR, умеет искать сотрудников. |
| [Breakdown Documents into Study Notes using Templating MistralAI and Qdrant](collection/breakdown-documents-into-study-notes-using-templating-mistralai-and-qdrant/) | Делает конспекты для учёбы из документов по шаблонам (Mistral AI + Qdrant); следит за папкой на диске. |
| [Build a Financial Documents Assistant using Qdrant and Mistral.ai](collection/build-a-financial-documents-assistant-using-qdrant-and-mistral-ai/) | Ассистент по финансовым документам: следит за папкой, индексирует файлы в Qdrant и отвечает на вопросы (Mistral AI). |
| [Build a Tax Code Assistant with Qdrant, Mistral.ai and OpenAI](collection/build-a-tax-code-assistant-with-qdrant-mistral-ai-and-openai/) | Ассистент по налоговому кодексу: скачивает PDF, индексирует их в Qdrant (Mistral) и отвечает на вопросы через OpenAI. |
| [Building RAG Chatbot for Movie Recommendations with Qdrant and Open AI](collection/chat-bot-rekomenduet-filmy-s-pamyatyu-rag/) | RAG-чат-бот рекомендаций фильмов на Qdrant и OpenAI. |
| [Business WhatsApp AI RAG Chatbot](collection/complete-business-whatsapp-ai-powered-rag-chatbot-using-openai/) | ИИ-чат-бот для WhatsApp Business с RAG: документы из Google Drive в Qdrant. |
| [Chat with GitHub OpenAPI Specification using RAG (Pinecone and OpenAI)](collection/chat-with-github-api-documentation-rag-powered-chatbot-with-pinecone-openai/) | Чат с OpenAPI-спецификацией GitHub через RAG (Pinecone + OpenAI). |
| [Chat with PDF docs using AI (quoting sources)](collection/chat-with-pdf-docs-using-ai-quoting-sources/) | Чат с PDF-документами с указанием источников (Pinecone + OpenAI). |
| [Customer Insights with Qdrant, Python and Information Extractor](collection/customer-insights-with-qdrant-python-and-information-extractor/) | Собирает отзывы о компании с Trustpilot в Qdrant, кластеризует их (Python) и выделяет инсайты через ИИ в Google Sheets. |
| [Effortless Email Management with AI](collection/effortless-email-management-with-ai-powered-summarization-review/) | Обработка почты с ИИ: саммари писем, ответ по базе знаний (Qdrant, документы из Google Drive) с моделью DeepSeek и отправка. |
| [Email AI Auto-responder. Summerize and send email](collection/analiz-otchetov-o-dohodah-kompaniy-s-ispolzovaniem-rag/) | ИИ-автоответчик почты: делает саммари письма и отвечает по базе знаний (Qdrant). |
| [HR & IT Helpdesk Chatbot with Audio Transcription](collection/hr-it-helpdesk-chatbot-with-audio-transcription/) | Чат-бот HR и IT-поддержки в Telegram: отвечает по внутренним документам (RAG), понимает голосовые. |
| [OpenAI Personal Shopper with RAG and WooCommerce](collection/personal-shopper-chatbot-for-woocommerce-with-rag-using-google-drive-and-openai/) | ИИ-консультант для магазина WooCommerce: RAG по документам (Qdrant) и поиск товаров. |
| [Prod: Notion to Vector Store - Dimension 768](collection/notion-to-pinecone-vector-store-integration/) | Загружает страницы Notion в векторную базу Pinecone (эмбеддинги Gemini, размерность 768). |
| [RAG & GenAI App With WordPress Content](collection/wordpress-ai-chatbot-to-enhance-user-experience-with-supabase-and-openai/) | RAG-приложение по контенту WordPress: индексация в Supabase, обновление векторов и ИИ-чат для посетителей. |
| [RAG Workflow For Company Documents stored in Google Drive](collection/rag-chatbot-for-company-documents-using-google-drive-and-gemini/) | RAG по документам компании в Google Drive (Gemini + Pinecone), обновляется при изменении файлов. |
| [RAG Workflow For Stock Earnings Report Analysis](collection/ai-powered-rag-workflow-for-stock-earnings-report-analysis/) | RAG-анализ отчётов компаний о прибыли: индексирует PDF в Pinecone (Gemini-эмбеддинги) и пишет отчёт в Google Docs. |
| [RAG:Context-Aware Chunking \| Google Drive to Pinecone via OpenRouter & Gemini](collection/rag-context-aware-chunking-google-drive-to-pinecone-via-openrouter-gemini/) | RAG с контекстной разбивкой на части: документы из Google Drive → Pinecone (OpenRouter + Gemini). |
| [Recipe Recommendations with Qdrant and Mistral](collection/recipe-recommendations-with-qdrant-and-mistral/) | Рекомендации рецептов: меню HelloFresh в Qdrant и чат-агент на Mistral. |
| [Stock Q&A Workflow](collection/ai-agent-po-fundamentalnomu-analizu-aktsiy-kompaniy/) | Вопросы и ответы по отчётам: загружает PDF из Google Drive в векторную базу Supabase и отвечает на вопросы через вебхук. |
| [Store Notion's Pages as Vector Documents into Supabase with OpenAI](collection/store-notion-s-pages-as-vector-documents-into-supabase-with-openai/) | Загружает страницы Notion как векторные документы в Supabase (OpenAI). |
| [Supabase Insertion & Upsertion & Retrieval](collection/supabase-insertion-upsertion-retrieval/) | Загрузка, обновление и поиск документов в векторной базе Supabase с чат-ботом. |
| [Supabase insertion upsertion retrieval](automation/supabase-insertion-upsertion-retrieval/) | Загружает документы из Google Drive в векторную базу Supabase и даёт чат-бота с ответами по ним. |
| [Survey Insights with Qdrant, Python and Information Extractor](collection/survey-insights-with-qdrant-python-and-information-extractor/) | Анализ опросов: ответы из Google Sheets в Qdrant, кластеризация (Python) и инсайты через ИИ. |
| [Telegram Bot with Supabase memory and OpenAI assistant integration](collection/telegram-bot-with-supabase-memory-and-openai-assistant-integration/) | Telegram-бот с ассистентом OpenAI и памятью пользователей в Supabase (есть SQL для создания таблицы). |
| [Telegram RAG pdf](collection/telegram-chat-with-pdf/) | RAG по PDF в Telegram: присланный файл загружается в Pinecone, бот отвечает на вопросы (Groq). |
| [Upsert huge documents in a vector store with supabase and notion](documents/upsert-huge-documents-in-a-vector-store-with-supabase-and-notion/) | Загружает большие документы из Notion в векторную базу Supabase (с обновлением) и даёт чат с ответами по базе знаний. |
| [Voice RAG Chatbot with ElevenLabs and OpenAI](collection/golosovoy-bot-dlya-obsluzhivaniya-klientov-i-restoranov/) | Голосовой RAG-чат-бот: ElevenLabs принимает голос, n8n отвечает по документам из векторной базы (OpenAI). |
| [Wordpress ai chatbot to enhance user experience with supabase and openai](automation/wordpress-ai-chatbot-to-enhance-user-experience-with-supabase-and-openai/) | ИИ-чат-бот для сайта на WordPress: индексирует контент в Supabase (векторы) и отвечает посетителям по нему, храня историю в Postgres. |

</details>

<details>
<summary><b>📝 WordPress и блоги</b> — 14</summary>

| Воркфлоу | Что делает |
|---|---|
| [AI-Generated Summary Block for WordPress Posts - with OpenAI, WordPress, Google Sheets & Slack](collection/ai-generated-summary-block-for-wordpress-posts/) | Добавляет в посты WordPress блок с кратким содержанием, сгенерированным OpenAI; учёт в Google Sheets, уведомления в Slack. |
| [Auto categorize wordpress template](collection/auto-categorize-blog-posts-in-wordpress-using-a-i/) | Автоматически распределяет посты WordPress по рубрикам с помощью ИИ. |
| [Auto-Tag Blog Posts in WordPress with AI](collection/auto-tag-blog-posts-in-wordpress-with-ai/) | Автоматически проставляет теги постам WordPress с помощью ИИ. |
| [Automate Blog Creation in Brand Voice with AI](collection/automate-blog-creation-in-brand-voice-with-ai/) | Пишет статьи для блога в голосе вашего бренда: изучает существующие тексты и публикует в WordPress. |
| [Automate Content Generator for WordPress with DeepSeek R1](collection/generatsiya-i-posting-kontenta-na-wordpress-deepseek-r1/) | Генерирует SEO-статьи для WordPress через DeepSeek R1 по идеям из Google Sheets и добавляет обложку от OpenAI. |
| [Create or update a post in wordpress](automation/create-or-update-a-post-in-wordpress/) | Создаёт пост в WordPress и обновляет его. |
| [Enrich FAQ sections on your website pages at scale with AI](collection/enrich-faq-sections-on-your-website-pages-at-scale-with-ai/) | Массово добавляет или дополняет FAQ на страницах сайта с помощью ИИ (WordPress, Webflow, Strapi). |
| [Export wordpress posts to spreadsheet](automation/export-wordpress-posts-to-spreadsheet/) | Выгружает посты WordPress в таблицу (CSV-файл). |
| [Get all posts from wordpress](automation/get-all-posts-from-wordpress/) | Получает все посты из WordPress. |
| [RAG & GenAI App With WordPress Content](collection/wordpress-ai-chatbot-to-enhance-user-experience-with-supabase-and-openai/) | RAG-приложение по контенту WordPress: индексация в Supabase, обновление векторов и ИИ-чат для посетителей. |
| [SEO Wordpress Perplexity Research v1.0](collection/avtonapolnyaemogo-bloga-na-wordpress-cherez-n8n/) | Пишет SEO-оптимизированную статью по исследованию Perplexity и публикует её в WordPress; запуск из Telegram. |
| [Wordpress ai chatbot to enhance user experience with supabase and openai](automation/wordpress-ai-chatbot-to-enhance-user-experience-with-supabase-and-openai/) | ИИ-чат-бот для сайта на WordPress: индексирует контент в Supabase (векторы) и отвечает посетителям по нему, храня историю в Postgres. |
| [Write a WordPress post with AI (starting from a few keywords)](collection/write-a-wordpress-post-with-ai-starting-from-a-few-keywords/) | Пишет статью для WordPress по нескольким ключевым словам: OpenAI + Википедия, картинка DALL·E, публикация черновиком. |
| [✍️🌄 Your First Wordpress Content Creator - Quick Start](collection/postit-v-vordpress/) | Быстрый старт ИИ-копирайтера для WordPress: пишет статью, упрощает язык, сохраняет черновик в Google Drive и публикует; управление через Telegram. |

</details>

<details>
<summary><b>🦙 Локальные модели (Ollama, LM Studio)</b> — 10</summary>

| Воркфлоу | Что делает |
|---|---|
| [AI Agent with Ollama for current weather and wiki](collection/ai-agent-with-ollama-for-current-weather-and-wiki/) | Локальный ИИ-агент на Ollama, который умеет узнавать текущую погоду и искать в Википедии. |
| [Auto Categorise Outlook Emails with AI](collection/auto-categorise-outlook-emails-with-ai/) | Автоматически раскладывает письма Outlook по категориям с помощью локальной модели Ollama. |
| [Chat with local LLMs using n8n and Ollama](collection/chat-with-local-llms-using-n8n-and-ollama/) | Чат с локальными моделями через Ollama. |
| [Detect hallucinations using specialised Ollama model bespoke-minicheck](collection/detect-hallucinations-using-specialised-ollama-model-bespoke-minicheck/) | Проверяет текст на галлюцинации ИИ: разбивает на предложения и сверяет с источником моделью bespoke-minicheck (Ollama). |
| [Extract personal data with a self-hosted LLM Mistral NeMo](collection/extract-personal-data-with-self-hosted-llm-mistral-nemo/) | Извлекает персональные данные из текста локальной моделью Mistral NeMo (Ollama). |
| [Load Prompts from Github Repo and auto populate n8n expressions](collection/fetch-dynamic-prompts-from-github-and-auto-populate-n8n-expressions-in-prompt/) | Загружает промпты из GitHub-репозитория и подставляет в них переменные перед вызовом модели (Ollama). |
| [Testing Mulitple Local LLM with LM Studio](collection/local-multi-llm-testing-performance-tracker/) | Тестирует несколько локальных моделей в LM Studio и записывает метрики (читаемость, скорость) в Google Sheets. |
| [🐋DeepSeek V3 Chat & R1 Reasoning Quick Start](collection/deepseek-v3-chat-r1-reasoning-quick-start/) | Быстрый старт с DeepSeek V3 (чат) и R1 (рассуждения): через API, OpenAI-совместимый узел и локально через Ollama. |
| [🔥📈🤖 AI Agent for n8n Creators Leaderboard - Find Popular Workflows](collection/ai-agent-for-n8n-creators-leaderboard-find-popular-workflows/) | ИИ-агент для рейтинга авторов n8n: находит популярные воркфлоу (локальная или облачная модель). |
| [🗨️Ollama Chat](collection/private-local-ollama-self-hosted-ai-assistant/) | Простой чат с моделью Ollama, возвращающий структурированный JSON. |

</details>

<details>
<summary><b>📧 Почта с ИИ</b> — 50</summary>

| Воркфлоу | Что делает |
|---|---|
| [Advanced AI Demo (Presented at AI Developers #14 meetup)](collection/advanced-ai-demo-presented-at-ai-developers-14-meetup/) | Демо продвинутых ИИ-сценариев: классификация писем, RAG по PDF в Pinecone, чат с документами. |
| [Advanced ai demo presented at ai developers 14 meetup](automation/advanced-ai-demo-presented-at-ai-developers-14-meetup/) | Демо с митапа AI Developers: классифицирует входящие письма Gmail, загружает PDF в векторное хранилище и даёт чат с документами (OpenAI/Anthropic). |
| [AI Agent for project management and meetings with Airtable and Fireflies](collection/ai-agent-for-project-management-and-meetings-with-airtable-and-fireflies/) | ИИ-агент для проектов и встреч: берёт расшифровки Fireflies, создаёт задачи в Airtable, письма и события в календаре. |
| [AI CV Screening Workflow](collection/screen-applicants-with-ai-notify-hr-and-save-them-in-a-google-sheet/) | ИИ-скрининг резюме из Gmail через Gemini с записью в Google Sheets. |
| [AI Email processing autoresponder with approval (Yes/No)](collection/ai-powered-email-processing-autoresponder-and-response-approval-yes-no/) | Автоответчик на письма с ИИ: делает саммари, готовит ответ по базе знаний в Qdrant и отправляет его после одобрения (Да/Нет). |
| [AI Fitness Coach Strava Data Analysis and Personalized Training Insights](collection/ai-fitness-coach-strava-data-analysis-and-personalized-training-insights/) | ИИ-тренер по триатлону: анализирует тренировки из Strava (Gemini) и присылает персональные советы по почте или в WhatsApp. |
| [Ai summarize podcast episode and enhance using wikipedia](automation/ai-summarize-podcast-episode-and-enhance-using-wikipedia/) | Делает саммари выпуска подкаста, выделяет темы и вопросы, объясняет их с помощью Википедии и отправляет дайджест на почту. |
| [AI-Driven Lead Management and Inquiry Automation with ERPNext & n8n](collection/ai-driven-lead-management-and-inquiry-automation-with-erpnext-n8n/) | ИИ-обработка лидов из ERPNext: проверяет обращения с сайта, отвечает через Outlook и ведёт учёт в Google Sheets/Docs. |
| [AI-Powered Candidate Shortlisting Automation for ERPNext](collection/ai-powered-candidate-shortlisting-automation-for-erpnext/) | Автоматический отбор кандидатов в ERPNext: Gemini оценивает резюме и уведомляет кандидатов через Outlook или WhatsApp. |
| [Analyze & Sort Suspicious Email Contents with ChatGPT](collection/analyze-sort-suspicious-email-contents-with-chatgpt/) | Анализирует подозрительные письма: делает скриншот письма, ChatGPT оценивает признаки фишинга, создаётся задача в Jira. |
| [Analyze Suspicious Email Contents with ChatGPT Vision](collection/analyze-suspicious-email-contents-with-chatgpt-vision/) | Анализирует подозрительные письма из Gmail/Outlook с помощью ChatGPT Vision по скриншоту и заводит тикет в Jira. |
| [Angie, Personal AI Assistant with Telegram Voice and Text](collection/angie-personal-ai-assistant-with-telegram-voice-and-text/) | «Энджи» — личный ИИ-ассистент в Telegram (голос и текст): почта, календарь и задачи. |
| [Auto Categorise Outlook Emails with AI](collection/auto-categorise-outlook-emails-with-ai/) | Автоматически раскладывает письма Outlook по категориям с помощью локальной модели Ollama. |
| [Auto-label incoming Gmail messages with AI nodes](collection/auto-label-incoming-gmail-messages-with-ai-nodes/) | Автоматически ставит метки входящим письмам Gmail по содержанию (Partnership, Inquiry, Notification) с помощью ИИ. |
| [Automate Pinterest Analysis & AI-Powered Content Suggestions With Pinterest API](collection/automate-pinterest-analysis-ai-powered-content-suggestions-with-pinterest-api/) | Анализирует ваши пины в Pinterest, ИИ предлагает идеи контента и отправляет их по почте (данные в Airtable). |
| [Automate Sales Meeting Prep with AI & APIFY Sent To WhatsApp](collection/automate-sales-meeting-prep-with-ai-apify-sent-to-whatsapp/) | Готовит к встречам с клиентами: находит встречи в календаре, собирает данные о людях через Apify и отправляет сводку в WhatsApp. |
| [Automate Your RFP Process with OpenAI Assistants](collection/automate-your-rfp-process-with-openai-assistants/) | Автоматизирует ответы на RFP (запросы предложений): ассистент OpenAI отвечает на вопросы из документа, результат в Google Docs. |
| [Basic Automatic Gmail Email Labelling with OpenAI and Gmail API](collection/basic-automatic-gmail-email-labelling-with-openai-and-gmail-api/) | Простая автоматическая расстановка меток в Gmail с помощью OpenAI (создаёт новые метки при необходимости). |
| [Calendar scheduling](collection/suggest-meeting-slots-using-ai/) | Отвечает на письма с просьбой о встрече, проверяя свободное время в Google Calendar. |
| [Compose reply draft in Gmail with OpenAI Assistant](collection/compose-reply-draft-in-gmail-with-openai-assistant/) | Передаёт входящие письма Gmail с определённой меткой ассистенту OpenAI и создаёт черновик ответа. |
| [Create a Branded AI-Powered Website Chatbot](collection/create-a-branded-ai-powered-website-chatbot/) | Брендированный ИИ-чат-бот для сайта: отвечает клиентам и записывает на встречу через календарь Outlook. |
| [Create Social Media Written Content](collection/create-social-media-written-content/) | Генерирует тексты для соцсетей (LinkedIn, Instagram, Facebook, X и др.) с одобрением перед публикацией. |
| [Daily Podcast Summary](collection/daily-podcast-summary/) | Ежедневно делает саммари топовых подкастов выбранного жанра (Taddy API + OpenAI) и присылает на почту. |
| [Deduplicate Scraping AI Grants for Eligibility using AI](collection/deduplicate-scraping-ai-grants-for-eligibility-using-ai/) | Собирает новые гранты на ИИ, убирает уже виденные, ИИ проверяет соответствие критериям, сохраняет в Airtable и отправляет дайджест. |
| [Effortless Email Management with AI](collection/effortless-email-management-with-ai-powered-summarization-review/) | Обработка почты с ИИ: саммари писем, ответ по базе знаний (Qdrant, документы из Google Drive) с моделью DeepSeek и отправка. |
| [Email Subscription Service with n8n Forms, Airtable and AI (1)](collection/email-subscription-service-with-n8n-forms-airtable-and-ai-1/) | Сервис рассылки на формах n8n: подписка, хранение в Airtable, письма с ИИ-контентом (Groq + Википедия) по расписанию. |
| [Email Summary Agent](collection/email-summary-agent/) | Каждое утро делает саммари писем за сутки через OpenAI и присылает на почту. |
| [Extract spend details (template)](collection/extract-spending-history-from-gmail-to-google-sheet/) | Извлекает данные о расходах из писем Gmail (Gemini/Groq) и записывает в Google Sheets. |
| [Gmail AI auto-responder: create draft replies to incoming emails](collection/gmail-ai-auto-responder-create-draft-replies-to-incoming-emails/) | ИИ-автоответчик Gmail: если письмо требует ответа, создаёт черновик ответа в переписке. |
| [Invoice data extraction with LlamaParse and OpenAI (1)](collection/invoice-data-extraction-with-llamaparse-and-openai-1/) | Извлекает данные из счетов-фактур в PDF через LlamaParse и OpenAI и записывает в Google Sheets. |
| [LINE Assistant with Google Calendar and Gmail Integration](collection/line-assistant-with-google-calendar-and-gmail-integration/) | Ассистент в LINE с доступом к Google Calendar и Gmail. |
| [Mails2notion V2](collection/turn-emails-into-ai-enhanced-tasks-in-notion-multi-user-support-with-gmail-airta/) | Создаёт задачи в Notion или Airtable из писем Gmail по меткам, с обработкой ИИ. |
| [Microsoft Outlook AI Email Assistant](collection/microsoft-outlook-ai-email-assistant-with-contact-support-from-monday-and-airtab/) | ИИ-ассистент для почты Outlook: раскладывает письма по категориям с учётом данных клиентов (Airtable, Monday.com). |
| [Podcast Digest](collection/ai-summarize-podcast-episode-and-enhance-using-wikipedia/) | Дайджест подкаста: саммари расшифровки, темы и вопросы, пояснения из Википедии, отправка по Gmail. |
| [Proxmox AI Agent with n8n and Generative AI Integration](collection/proxmox-ai-agent-with-n8n-and-generative-ai-integration/) | ИИ-агент для управления Proxmox через чат, Telegram или Gmail (Gemini). |
| [Qualify replies from Pipedrive persons with AI](collection/qualify-replies-from-pipedrive-persons-with-ai/) | Читает ответы на холодную рассылку, ИИ определяет интерес к встрече и создаёт сделку в Pipedrive. |
| [Qualifying Appointment Requests with AI & n8n Forms](collection/qualifying-appointment-requests-with-ai-n8n-forms/) | Квалифицирует заявки на встречу через ИИ на многошаговых формах n8n и предлагает время из календаря. |
| [Receive Daily Market News from FT.com to your Microsoft outlook inbox](collection/receive-daily-market-news-from-ft-com-to-your-microsoft-outlook-inbox/) | Каждое утро присылает на почту Outlook дайджест финансовых новостей FT.com (Gemini). |
| [Send a ChatGPT email reply and save responses to Google Sheets](collection/send-a-chatgpt-email-reply-and-save-responses-to-google-sheets/) | Отвечает на письма через ChatGPT и сохраняет ответы и оценки в Google Sheets. |
| [Send a chatgpt email reply and save responses to google sheets](data-integration/send-a-chatgpt-email-reply-and-save-responses-to-google-sheets/) | Отвечает на письма через ChatGPT и сохраняет письма, ответы и оценки в Google Sheets. |
| [Send specific PDF attachments from Gmail to Google Drive using OpenAI](collection/send-specific-pdf-attachments-from-gmail-to-google-drive-using-openai/) | Отбирает нужные PDF-вложения Gmail через OpenAI и сохраняет их в Google Drive. |
| [Send specific pdf attachments from gmail to google drive using openai](data-integration/send-specific-pdf-attachments-from-gmail-to-google-drive-using-openai/) | Анализирует PDF-вложения Gmail через OpenAI и загружает нужные (например, счета) в Google Drive. |
| [Suggest meeting slots using ai](automation/suggest-meeting-slots-using-ai/) | Читает письма с просьбами о встрече, проверяет свободное время в Google Calendar и предлагает слоты в ответе (OpenAI). |
| [Summarize Google Sheets form feedback via OpenAI's GPT-4](collection/summarize-google-sheets-form-feedback-via-openai-s-gpt-4/) | Делает сводку отзывов из Google Sheets (Google Forms) через GPT-4 и отправляет по почте. |
| [UTM Link Creator & QR Code Generator with Scheduled Google Analytics Reports](collection/utm-link-creator-qr-code-generator-with-scheduled-google-analytics-reports/) | Создаёт UTM-ссылки и QR-коды, хранит их в Airtable и присылает отчёты Google Analytics по расписанию. |
| [Very simple Human in the loop system email with AI e IMAP](collection/a-very-simple-human-in-the-loop-email-response-system-using-ai-and-imap/) | Простая система «человек в цикле» для почты: ИИ готовит ответ на письмо IMAP по базе знаний, человек подтверждает перед отправкой. |
| [Zoom AI Meeting Assistant](collection/zoom-ai-meeting-assistant-creates-mail-summary-clickup-tasks-and-follow-up-call/) | ИИ-ассистент для встреч Zoom: саммари, задачи в ClickUp, письма участникам и встречи в Outlook. |
| [✨🤖Automated AI Powered Social Media Content Factory for X + Facebook + Instagram + LinkedIn](collection/avtoposting-s-odobreniem-po-imeyl/) | «Фабрика контента»: генерирует посты для X, Facebook, Instagram, LinkedIn и др. (OpenAI/Gemini), отправляет на одобрение и публикует. |
| [✨🩷Automated Social Media Content Publishing Factory + System Prompt Composition](collection/avtomaticheskaya-fabrika-kontenta/) | Фабрика публикации в соцсети с ИИ-агентом: роутер по площадкам (X, Instagram, Facebook, LinkedIn, Threads, YouTube Shorts), промпты в Google Docs. |
| [🤖🧑‍💻 AI Agent for Top n8n Creators Leaderboard Reporting](collection/ai-agent-for-top-n8n-creators-leaderboard-reporting/) | ИИ-агент для отчётов по рейтингу авторов n8n: собирает статистику, отправляет отчёт по Gmail и в Telegram. |

</details>

<details>
<summary><b>🛡️ Бэкапы и ошибки n8n</b> — 10</summary>

| Воркфлоу | Что делает |
|---|---|
| [Back up your n8n workflows to github](automation/back-up-your-n8n-workflows-to-github/) | Ежедневно бэкапит все воркфлоу n8n в GitHub-репозиторий, отслеживая новые и изменённые, и пишет отчёт в Slack. |
| [Backup n8n workflows to google drive](data-integration/backup-n8n-workflows-to-google-drive/) | Бэкапит все воркфлоу n8n в JSON-файлы на Google Drive. |
| [Backup workflows to github](automation/backup-workflows-to-github/) | Бэкапит и обновляет воркфлоу n8n в GitHub-репозитории. |
| [Git backup of workflows and credentials](automation/git-backup-of-workflows-and-credentials/) | Бэкапит воркфлоу и учётные данные n8n в Git-репозиторий через командную строку. |
| [N8n workflow backup management with dropbox and airtable](automation/n8n-workflow-backup-management-with-dropbox-and-airtable/) | Сохраняет описание воркфлоу n8n в Airtable и бэкапы в Dropbox по расписанию. |
| [Report n8n workflow errors directly to your email](automation/report-n8n-workflow-errors-directly-to-your-email/) | Присылает письмо в Gmail при ошибке в любом воркфлоу n8n — с деталями и ссылкой на выполнение. |
| [Report n8n workflow errors to slack](automation/report-n8n-workflow-errors-to-slack/) | Отправляет уведомление в Slack при ошибке в воркфлоу n8n. |
| [Report n8n workflow errors to telegram](automation/report-n8n-workflow-errors-to-telegram/) | Отправляет уведомление в Telegram при ошибке в воркфлоу n8n. |
| [Restore backed up workflows from github to n8n](automation/restore-backed-up-workflows-from-github-to-n8n/) | Восстанавливает воркфлоу из бэкапа в GitHub обратно в n8n, пропуская уже существующие. |
| [Send n8n automation errors to a monday com board](automation/send-n8n-automation-errors-to-a-monday-com-board/) | Записывает ошибки воркфлоу n8n как элементы на доску Monday.com. |

</details>

## Самые частые сервисы

| Сервис | Шаблонов |
|---|---|
| OpenAI | 236 |
| Google Sheets | 79 |
| Google Drive | 60 |
| Telegram | 57 |
| Gmail | 53 |
| Airtable | 44 |
| Slack | 42 |
| Google Gemini | 33 |
| Notion | 32 |
| GitHub | 19 |
| PostgreSQL | 18 |
| Qdrant | 17 |
| MySQL | 17 |
| Google Calendar | 16 |
| X (Twitter) | 14 |

## Что изменено относительно исходного архива

- Убраны дубли (одинаковые воркфлоу из разных папок и копии с битыми названиями) — около 50 штук.
- Файлы из «Сборной» (`.txt`) превращены в обычные `workflow.json`, у нескольких отрезан мусор после JSON.
- Из файлов удалены `pinData` (тестовые данные), у учётных данных оставлены только `id` и название.
- Найденные в шаблонах чужие ключи и личные значения заменены плейсхолдерами:

| Плейсхолдер | Что подставить |
|---|---|
| `<GOOGLE_API_KEY>` | ваш ключ Google API |
| `<PINTEREST_TOKEN>` | токен Pinterest API |
| `<TELEGRAM_CHAT_ID>` | id вашего Telegram-чата |
| `<LAN_IP>` | адрес сервиса в вашей локальной сети |
| `<PDF_PASSWORD>` | пароль от ваших PDF-выписок |
| `<APIFY_TOKEN>` | токен Apify |
| `<DINGTALK_TOKEN>` | токен бота DingTalk |
| `<BITRIX24_CLIENT_SECRET>` | секрет приложения Bitrix24 |
| `<LARK_APP_SECRET>` | секрет приложения Lark |
| `<VENAFI_API_KEY>` | ключ API Venafi |
| `<API_KEY>` | ключ API соответствующего сервиса |

Шаблоны сделаны разными авторами под разные версии n8n: некоторые узлы могут потребовать обновления после импорта. Оригинальное описание автора сохранено в README каждого шаблона (раскрывающийся блок).
