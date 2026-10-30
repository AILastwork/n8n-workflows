# 💬 Коммуникация

Сообщения, уведомления, почта, мессенджеры. Воркфлоу в разделе: **41**.

[← ко всем категориям](../README.md)

| # | Воркфлоу | Что делает | Сервисы |
|---|---|---|---|
| 1 | [Add positive feedback messages to a table in notion](add-positive-feedback-messages-to-a-table-in-notion/) | Анализирует отзывы из Typeform: положительные добавляет в Notion, отрицательные — карточкой в Trello, уведомляет в Slack. | Google Natural Language, Notion, Slack, Trello, Typeform |
| 2 | [Check to do on notion and send message on slack](check-to-do-on-notion-and-send-message-on-slack/) | Проверяет незакрытые задачи пользователя в Notion и пишет ему в Slack. | Notion, Slack |
| 3 | [Create a channel add a member and post a message to the channel on mattermost](create-a-channel-add-a-member-and-post-a-message-to-the-channel-on-mattermost/) | Создаёт канал в Mattermost, добавляет участника и публикует сообщение. | Mattermost |
| 4 | [Create screenshots with uproc save to dropbox and send by email](create-screenshots-with-uproc-save-to-dropbox-and-send-by-email/) | Делает скриншоты сайтов через uProc, сохраняет в Dropbox и отправляет на почту (AWS SES). | AWS SES, Dropbox, uProc |
| 5 | [Create single new masked email address with fastmail](create-single-new-masked-email-address-with-fastmail/) | Создаёт новый маскированный адрес e-mail в Fastmail по запросу на вебхук. |  |
| 6 | [Create update and send a message to a channel in microsoft teams](create-update-and-send-a-message-to-a-channel-in-microsoft-teams/) | Создаёт канал в Microsoft Teams, переименовывает и отправляет в него сообщение. | Microsoft Teams |
| 7 | [Extract domain and verify email syntax on the go](extract-domain-and-verify-email-syntax-on-the-go/) | Проверяет синтаксис e-mail и извлекает из него домен. |  |
| 8 | [Extract url from an email address](extract-url-from-an-email-address/) | Извлекает домен из адреса e-mail. |  |
| 9 | [Generate dynamic contents for emails or html pages](generate-dynamic-contents-for-emails-or-html-pages/) | Генерирует динамический контент для писем и HTML-страниц (счета клиентам, сводка по новым клиентам). | Document Generator |
| 10 | [Get slack notifications when new product published on woocommerce](get-slack-notifications-when-new-product-published-on-woocommerce/) | Уведомляет в Slack о новом товаре в WooCommerce. | Slack, WooCommerce |
| 11 | [Listen on new emails on a imap mailbox](listen-on-new-emails-on-a-imap-mailbox/) | Слушает почтовый ящик IMAP, конвертирует вложения в XML и отправляет в API. |  |
| 12 | [Message on website content changed in telegram](message-on-website-content-changed-in-telegram/) | Следит за изменениями на сайте и сообщает о них в Telegram. | Telegram |
| 13 | [Monitor strava and send email updates](monitor-strava-and-send-email-updates/) | Проверяет активность в Strava и пишет партнёрам по мотивации, если тренировок было мало. | Strava |
| 14 | [Parse email body message](parse-email-body-message/) | Разбирает текст письма по заданным меткам и вытаскивает нужные поля (имя, телефон и т. п.). |  |
| 15 | [Poll emails using jmap](poll-emails-using-jmap/) | Получает непрочитанные письма из Fastmail по протоколу JMAP. |  |
| 16 | [Post a message to a channel in rocketchat](post-a-message-to-a-channel-in-rocketchat/) | Отправляет сообщение в канал Rocket.Chat. | Rocketchat |
| 17 | [Receive a mattermost message when new data gets added to airtable](receive-a-mattermost-message-when-new-data-gets-added-to-airtable/) | Отправляет сообщение в Mattermost, когда в Airtable появляется новая запись. | Airtable, Mattermost |
| 18 | [Receive messages from a queue via rabbitmq and send an sms](receive-messages-from-a-queue-via-rabbitmq-and-send-an-sms/) | Читает сообщения из очереди RabbitMQ и отправляет SMS через Vonage, если температура выше порога. | RabbitMQ, Vonage |
| 19 | [Receive messages from a topic via kafka and send an sms](receive-messages-from-a-topic-via-kafka-and-send-an-sms/) | Читает сообщения из топика Kafka и отправляет SMS через Vonage, если температура выше порога. | Kafka, Vonage |
| 20 | [Save email attachments to nextcloud](save-email-attachments-to-nextcloud/) | Сохраняет вложения из писем IMAP в Nextcloud, раскладывая по отправителю и дате. | Nextcloud |
| 21 | [Send a discord message when a certain onfleet event happens](send-a-discord-message-when-a-certain-onfleet-event-happens/) | Отправляет сообщение в Discord при событии в Onfleet (например, старт доставки). | Discord, Onfleet |
| 22 | [Send a message to telegram on a new item saved to reader](send-a-message-to-telegram-on-a-new-item-saved-to-reader/) | Присылает в Telegram сообщение о каждой новой статье, сохранённой в Readwise Reader. | Telegram |
| 23 | [Send a message via a lark bot](send-a-message-via-a-lark-bot/) | Отправляет сообщение через бота Lark (Feishu). |  |
| 24 | [Send a message via aws sns](send-a-message-via-aws-sns/) | Отправляет сообщение через AWS SNS. | AWS SNS |
| 25 | [Send a message with an inline embedded image with gmail](send-a-message-with-an-inline-embedded-image-with-gmail/) | Отправляет письмо через Gmail с картинкой, встроенной прямо в текст. |  |
| 26 | [Send an email](send-an-email/) | Отправляет письмо по SMTP. |  |
| 27 | [Send an email template using mandrill](send-an-email-template-using-mandrill/) | Отправляет письмо по шаблону через Mandrill. | Mandrill |
| 28 | [Send an email using aws ses](send-an-email-using-aws-ses/) | Отправляет письмо через AWS SES. | AWS SES |
| 29 | [Send an email using mailgun](send-an-email-using-mailgun/) | Отправляет письмо через Mailgun. | Mailgun |
| 30 | [Send an email using mailjet](send-an-email-using-mailjet/) | Отправляет письмо через Mailjet. | Mailjet |
| 31 | [Send an sms whatsapp message with twilio](send-an-sms-whatsapp-message-with-twilio/) | Отправляет SMS или сообщение WhatsApp через Twilio. | Twilio |
| 32 | [Send bulk messages to chats in telegram](send-bulk-messages-to-chats-in-telegram/) | Массовая рассылка сообщений по чатам Telegram из списка в Google Sheets с паузами между пачками. | Google Sheets, Telegram |
| 33 | [Send daily weather updates via a message using the gotify node](send-daily-weather-updates-via-a-message-using-the-gotify-node/) | Ежедневно присылает погоду через Gotify. | Gotify, OpenWeatherMap |
| 34 | [Send daily weather updates via a push notification using spontit](send-daily-weather-updates-via-a-push-notification-using-spontit/) | Ежедневно присылает погоду push-уведомлением через Spontit. | OpenWeatherMap, Spontit |
| 35 | [Send dingtalk message on new azure devops pull request](send-dingtalk-message-on-new-azure-devops-pull-request/) | Отправляет сообщение в DingTalk нужным людям при новом pull request в Azure DevOps (сопоставление пользователей в MySQL). | MySQL |
| 36 | [Send notification when deployment fails](send-notification-when-deployment-fails/) | Сообщает в Slack, если деплой на Netlify упал. | Netlify, Slack |
| 37 | [Send onfleet driver signup messages in slack](send-onfleet-driver-signup-messages-in-slack/) | Сообщает в Slack о регистрации нового водителя в Onfleet. | Onfleet, Slack |
| 38 | [Send telegram messages on rss feed read](send-telegram-messages-on-rss-feed-read/) | Отправляет в Telegram новые записи из RSS-ленты. | RSS, Telegram |
| 39 | [Telegram ai bot assistant ready made template for voice text messages](telegram-ai-bot-assistant-ready-made-template-for-voice-text-messages/) | Готовый Telegram-бот с ИИ (OpenAI): отвечает на текстовые и голосовые сообщения. | OpenAI, Telegram |
| 40 | [Verify email deliverability with hunter](verify-email-deliverability-with-hunter/) | Проверяет, существует ли e-mail адрес, через Hunter. | Hunter |
| 41 | [Zalando price patrol monitor price evolution with email notification](zalando-price-patrol-monitor-price-evolution-with-email-notification/) | Следит за ценами товаров на Zalando, записывает их в Google Sheets и присылает письмо при снижении цены. | Gmail, Google Sheets |
