# 🔗 Интеграция данных

Перенос и синхронизация данных между сервисами и базами. Воркфлоу в разделе: **73**.

[← ко всем категориям](../README.md)

| # | Воркфлоу | Что делает | Сервисы |
|---|---|---|---|
| 1 | [Add a task to google tasks](add-a-task-to-google-tasks/) | Добавляет задачу в Google Tasks. | Google Tasks |
| 2 | [Add data from google sheet to dropbox](add-data-from-google-sheet-to-dropbox/) | Каждые 15 минут выгружает данные из Google Sheets в Excel-файл и загружает в Dropbox. | Dropbox, Google Sheets |
| 3 | [Add product ideas to google sheets via a slack](add-product-ideas-to-google-sheets-via-a-slack/) | Slash-команда Slack для добавления идей в Google Sheets. | Google Sheets |
| 4 | [Archive empty pages in notion database](archive-empty-pages-in-notion-database/) | Ежедневно архивирует пустые страницы в базе Notion. | Notion |
| 5 | [Automate google analytics reporting](automate-google-analytics-reporting/) | Собирает данные Google Analytics, сравнивает неделю с предыдущей и отправляет отчёт на почту. | Gmail, Google Analytics |
| 6 | [Automated congratulations with google sheets twilio and n8n](automated-congratulations-with-google-sheets-twilio-and-n8n/) | Автоматически поздравляет сотрудников по SMS (Twilio) с днём рождения и годовщинами из Google Sheets. | Google Sheets, Twilio |
| 7 | [Backup n8n workflows to google drive](backup-n8n-workflows-to-google-drive/) | Бэкапит все воркфлоу n8n в JSON-файлы на Google Drive. | Google Drive |
| 8 | [Chat with a database using ai](chat-with-a-database-using-ai/) | ИИ-агент для чата с базой данных Postgres на естественном языке. | OpenAI |
| 9 | [Collect and label images and send to google sheets](collect-and-label-images-and-send-to-google-sheets/) | Ищет картинки, распознаёт на них объекты через AWS Rekognition и записывает метки в Google Sheets. | AWS Rekognition, Google Sheets |
| 10 | [Collects images from web search results and send to google sheets](collects-images-from-web-search-results-and-send-to-google-sheets/) | Собирает картинки из поиска, распознаёт текст на них через AWS Rekognition и сохраняет в Google Sheets. | AWS Rekognition, Google Sheets |
| 11 | [Convert json to an excel file](convert-json-to-an-excel-file/) | Принимает данные на вебхук и отдаёт в ответ Excel-файл. |  |
| 12 | [Convert sql table into excel spreadsheet](convert-sql-table-into-excel-spreadsheet/) | Выгружает таблицу MySQL в Excel (XLSX). | MySQL |
| 13 | [Create update and get a document in google cloud firestore](create-update-and-get-a-document-in-google-cloud-firestore/) | Создаёт, обновляет и получает документ в Google Cloud Firestore. | Firestore |
| 14 | [Create zoom meeting link from google calendar invite](create-zoom-meeting-link-from-google-calendar-invite/) | Создаёт ссылку на встречу Zoom для событий из Google Calendar. | Google Calendar, Zoom |
| 15 | [Database alerts with notion and signl4](database-alerts-with-notion-and-signl4/) | Следит за базой оповещений в Notion: новые отправляет в SIGNL4, закрытые закрывает. | Notion, Signl4 |
| 16 | [Download a file from google drive](download-a-file-from-google-drive/) | Скачивает файл из Google Drive. | Google Drive |
| 17 | [Excel to postgres](excel-to-postgres/) | Импортирует данные из Excel в PostgreSQL. | PostgreSQL |
| 18 | [Exponential backoff for google apis](exponential-backoff-for-google-apis/) | Экспоненциальная задержка при повторах для Google API (обход лимитов Google Sheets). | Google Sheets |
| 19 | [Export json file to google sheets](export-json-file-to-google-sheets/) | Читает JSON-файл и добавляет данные в Google Sheets. | Google Sheets |
| 20 | [Generate and insert data into a postgres database](generate-and-insert-data-into-a-postgres-database/) | По расписанию генерирует тестовые данные датчика влажности и записывает в PostgreSQL. | PostgreSQL |
| 21 | [Generate seo keyword search volume data using google api](generate-seo-keyword-search-volume-data-using-google-api/) | Получает объём поиска по ключевым словам из Google Ads API для SEO. |  |
| 22 | [Get all excel workbooks](get-all-excel-workbooks/) | Получает все книги Microsoft Excel. | Excel |
| 23 | [Get csv from url and convert to excel](get-csv-from-url-and-convert-to-excel/) | Скачивает CSV по ссылке и конвертирует в Excel. |  |
| 24 | [Get email notifications for newly uploaded google drive files](get-email-notifications-for-newly-uploaded-google-drive-files/) | Присылает письмо, когда в папке Google Drive появляется новый файл. | Google Drive |
| 25 | [Google calendar to slack status and philips hue](google-calendar-to-slack-status-and-philips-hue/) | Меняет статус в Slack (и свет Philips Hue) по событиям Google Calendar. | Google Calendar, Slack |
| 26 | [Google maps scraper](google-maps-scraper/) | Парсер Google Maps через SerpAPI: собирает данные о компаниях в Google Sheets. | Google Sheets |
| 27 | [Google spreadsheet to html variant with js function](google-spreadsheet-to-html-variant-with-js-function/) | Отдаёт данные из Google Sheets как HTML-таблицу (вариант с JS-функцией). | Google Sheets |
| 28 | [Google spreadsheet to html variant with spreadsheet file](google-spreadsheet-to-html-variant-with-spreadsheet-file/) | Отдаёт данные из Google Sheets как HTML-таблицу (вариант с узлом Spreadsheet File). | Google Sheets |
| 29 | [Identify new google sheets rows](identify-new-google-sheets-rows/) | Находит новые строки в Google Sheets и помечает их как обработанные. | Google Sheets |
| 30 | [Import csv from url to google sheets](import-csv-from-url-to-google-sheets/) | Скачивает CSV по ссылке (данные о COVID-19), фильтрует и загружает в Google Sheets. | Google Sheets |
| 31 | [Import data from google sheets into mysql](import-data-from-google-sheets-into-mysql/) | Еженедельно импортирует данные из Google Sheets в MySQL. | Google Sheets, MySQL |
| 32 | [Import data from mysql into google sheets](import-data-from-mysql-into-google-sheets/) | Еженедельно выгружает данные из MySQL в Google Sheets. | Google Sheets, MySQL |
| 33 | [Import json data into google sheets and csv file](import-json-data-into-google-sheets-and-csv-file/) | Получает JSON из API, записывает данные в Google Sheets и в CSV-файл. | Google Sheets |
| 34 | [Import multiple csv to google sheets](import-multiple-csv-to-google-sheets/) | Импортирует несколько CSV-файлов в одну таблицу Google Sheets, убирая дубли. | Google Sheets |
| 35 | [Insert and read data from google sheets](insert-and-read-data-from-google-sheets/) | Добавляет и читает данные из Google Sheets. | Google Sheets |
| 36 | [Kv cloudflare key value database full api integration workflow](kv-cloudflare-key-value-database-full-api-integration-workflow/) | Полная интеграция с Cloudflare KV: создание, удаление и переименование пространств имён и ключей. |  |
| 37 | [Load data into spreadsheet or database](load-data-into-spreadsheet-or-database/) | Учебный пример: загрузка записей в таблицу или базу данных. |  |
| 38 | [Monitor changes in google sheets every 45 mins](monitor-changes-in-google-sheets-every-45-mins/) | Каждые 45 минут проверяет Google Sheets на новые данные и сообщает в Mattermost. | Google Sheets, Mattermost |
| 39 | [Read in an excel spreadsheet file](read-in-an-excel-spreadsheet-file/) | Читает Excel-файл. |  |
| 40 | [Read xml file and store content in google sheets](read-xml-file-and-store-content-in-google-sheets/) | Скачивает XML, разбирает его и записывает данные в Google Sheets. | Google Sheets |
| 41 | [Receive google sheet data via rest api](receive-google-sheet-data-via-rest-api/) | Принимает данные через REST API (вебхук) и записывает в Google Sheets. | Google Sheets |
| 42 | [Replace images in google docs documents and download as pdf docx](replace-images-in-google-docs-documents-and-download-as-pdf-docx/) | Заменяет картинки в документах Google Docs и скачивает результат в PDF/DOCX. | Google Drive |
| 43 | [Save n8n cloud invoices received in gmail in google drive](save-n8n-cloud-invoices-received-in-gmail-in-google-drive/) | Сохраняет счета n8n Cloud (Paddle) из Gmail в Google Drive. | Gmail, Google Drive |
| 44 | [Save telegram daily messages to google sheets](save-telegram-daily-messages-to-google-sheets/) | Сохраняет ежедневные сообщения-дневник из Telegram в Google Sheets. | Google Sheets, Telegram |
| 45 | [Send a chatgpt email reply and save responses to google sheets](send-a-chatgpt-email-reply-and-save-responses-to-google-sheets/) | Отвечает на письма через ChatGPT и сохраняет письма, ответы и оценки в Google Sheets. | Gmail, Google Sheets, OpenAI |
| 46 | [Send a daily summary of your google calendar events to slack](send-a-daily-summary-of-your-google-calendar-events-to-slack/) | Каждый день отправляет в Slack список встреч из Google Calendar. | Google Calendar, Slack |
| 47 | [Send alert when data is created in app database](send-alert-when-data-is-created-in-app-database/) | Отправляет в Slack сообщение, когда в Linear появляется срочный баг. | Linear, Slack |
| 48 | [Send google analytics data to a i to analyze then save results in baserow](send-google-analytics-data-to-a-i-to-analyze-then-save-results-in-baserow/) | Анализирует данные Google Analytics с помощью ИИ, сравнивает с прошлой неделей и сохраняет SEO-рекомендации в Baserow. | Baserow, Google Analytics |
| 49 | [Send google drive files to notion database](send-google-drive-files-to-notion-database/) | Создаёт страницу в базе Notion для каждого нового файла в папке Google Drive. | Google Drive, Notion |
| 50 | [Send labeled email to a notion database](send-labeled-email-to-a-notion-database/) | Создаёт задачи в Notion из писем Gmail с определённой меткой и снимает метку после выполнения. | Gmail, Notion |
| 51 | [Send new clockify invoice to notion database](send-new-clockify-invoice-to-notion-database/) | Создаёт страницу в Notion для каждого нового счёта Clockify. | Notion |
| 52 | [Send sms alerts based on database queries twilio and postgres](send-sms-alerts-based-on-database-queries-twilio-and-postgres/) | Проверяет показания датчиков в Postgres и при превышении порога отправляет SMS через Twilio. | PostgreSQL, Twilio |
| 53 | [Send specific pdf attachments from gmail to google drive using openai](send-specific-pdf-attachments-from-gmail-to-google-drive-using-openai/) | Анализирует PDF-вложения Gmail через OpenAI и загружает нужные (например, счета) в Google Drive. | Gmail, Google Drive, OpenAI |
| 54 | [Streamline data from an n8n form into google sheet airtable and email sending](streamline-data-from-an-n8n-form-into-google-sheet-airtable-and-email-sending/) | Данные из формы n8n сохраняет в Google Sheets и Airtable и отправляет письмо пользователю. | Airtable, Gmail, Google Sheets |
| 55 | [Sync data between google drive and aws s3](sync-data-between-google-drive-and-aws-s3/) | Загружает обновлённые файлы из папки Google Drive в AWS S3. | AWS S3, Google Drive |
| 56 | [Sync data between multiple google spreadsheets](sync-data-between-multiple-google-spreadsheets/) | Синхронизирует данные между несколькими таблицами Google Sheets. | Google Sheets |
| 57 | [Sync discord scheduled events to google calendar](sync-discord-scheduled-events-to-google-calendar/) | Синхронизирует запланированные события Discord-сервера с Google Calendar. | Google Calendar |
| 58 | [Sync google sheets data with mysql](sync-google-sheets-data-with-mysql/) | Синхронизирует Google Sheets и MySQL, помечая статус записей. | Compare Datasets, Google Sheets, MySQL |
| 59 | [Sync jira issues with subsequent comments to notion database](sync-jira-issues-with-subsequent-comments-to-notion-database/) | Синхронизирует задачи Jira и комментарии к ним в базу Notion. | Jira, Notion |
| 60 | [Sync notion database pages as clickup tasks](sync-notion-database-pages-as-clickup-tasks/) | Синхронизирует страницы базы Notion с задачами ClickUp. | ClickUp, Notion |
| 61 | [Sync tasks automatically from todoist to notion](sync-tasks-automatically-from-todoist-to-notion/) | Переносит задачи Todoist с определённой меткой в Notion. | Notion, Todoist |
| 62 | [Sync tasks data between notion and asana](sync-tasks-data-between-notion-and-asana/) | Синхронизирует задачи между Asana и Notion. | Asana, Notion |
| 63 | [Sync your github issues to your notion database](sync-your-github-issues-to-your-notion-database/) | Синхронизирует GitHub-issue с базой Notion (создание, изменение, закрытие). | GitHub, Notion |
| 64 | [Sync zendesk tickets with subsequent comments to github issues](sync-zendesk-tickets-with-subsequent-comments-to-github-issues/) | Создаёт GitHub-issue из тикетов Zendesk и синхронизирует комментарии. | GitHub, Zendesk |
| 65 | [Synchronize your google sheets with postgres](synchronize-your-google-sheets-with-postgres/) | Синхронизирует Google Sheets с Postgres. | Compare Datasets, Google Sheets, PostgreSQL |
| 66 | [Transfer data from postgres to excel](transfer-data-from-postgres-to-excel/) | Выгружает данные из Postgres в Excel. | PostgreSQL |
| 67 | [Transfer google analytics data to airtable database](transfer-google-analytics-data-to-airtable-database/) | Переносит данные Google Analytics в Airtable. | Airtable, Google Analytics |
| 68 | [Transform data in google sheets](transform-data-in-google-sheets/) | Пример преобразования данных в Google Sheets (база объектов недвижимости). | Google Sheets |
| 69 | [Update time tracking projects based on syncro status changes](update-time-tracking-projects-based-on-syncro-status-changes/) | Архивирует или обновляет проекты Clockify при смене статуса тикетов в Syncro. | Clockify |
| 70 | [Waitlist form stored in googlesheet with email verification step](waitlist-form-stored-in-googlesheet-with-email-verification-step/) | Форма листа ожидания с подтверждением e-mail кодом; данные хранятся в Google Sheets. | Google Sheets |
| 71 | [Working with excel spreadsheet files xls xlsx](working-with-excel-spreadsheet-files-xls-xlsx/) | Работа с Excel-файлами (XLS/XLSX) из разных источников: FTP, Google Drive, OneDrive. | FTP, Google Drive, OneDrive |
| 72 | [Write all linear tickets to google sheets](write-all-linear-tickets-to-google-sheets/) | Выгружает все тикеты команды из Linear в Google Sheets по расписанию. | Google Sheets, GraphQL |
| 73 | [Xml to sql database import](xml-to-sql-database-import/) | Импортирует товары из XML-файла в MySQL. | MySQL |
