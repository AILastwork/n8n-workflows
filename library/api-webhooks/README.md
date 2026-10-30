# 🌐 API и вебхуки

Свои API-эндпоинты, приём вебхуков, работа с внешними API. Воркфлоу в разделе: **20**.

[← ко всем категориям](../README.md)

| # | Воркфлоу | Что делает | Сервисы |
|---|---|---|---|
| 1 | [Api queries data from graphql](api-queries-data-from-graphql/) | По коду страны из вебхука запрашивает данные о стране через GraphQL API и возвращает понятный текстовый ответ. | GraphQL |
| 2 | [Api schema extractor](api-schema-extractor/) | Обходит сайты с документацией API, с помощью ИИ (Gemini) находит описания операций и собирает для каждого сервиса JSON-схему; результаты складывает в Google Sheets и Google Drive. | Google Drive, Google Gemini, Google Sheets, Qdrant |
| 3 | [Automate testimonials in strapi with n8n](automate-testimonials-in-strapi-with-n8n/) | Собирает твиты про Strapi и n8n, отсеивает ретвиты и старые записи, оценивает тональность через Google Natural Language и сохраняет хорошие отзывы в Strapi. | Google Natural Language, Strapi, X (Twitter) |
| 4 | [Create an event in posthog when a request is made to a webhook url](create-an-event-in-posthog-when-a-request-is-made-to-a-webhook-url/) | Принимает запрос на вебхук и создаёт по нему событие в PostHog — для трекинга действий пользователей. | PostHog |
| 5 | [Create update and get an entry in strapi](create-update-and-get-an-entry-in-strapi/) | Пример работы со Strapi: создаёт запись, обновляет её и читает обратно. | Strapi |
| 6 | [Creating an api endpoint](creating-an-api-endpoint/) | Простейший API-эндпоинт: по имени и фамилии из запроса возвращает ссылку на поиск в Google. |  |
| 7 | [Get the last five spacex launches from the spacex land api using graphql](get-the-last-five-spacex-launches-from-the-spacex-land-api-using-graphql/) | Получает через GraphQL данные о пяти последних запусках SpaceX: миссии, площадки, ракеты. | GraphQL |
| 8 | [Handle verification for twitter webhook](handle-verification-for-twitter-webhook/) | Отвечает на CRC-проверку вебхука Twitter: считает HMAC-SHA256 от токена и возвращает подпись. |  |
| 9 | [Low code api for flutterflow apps](low-code-api-for-flutterflow-apps/) | Low-code API для приложений FlutterFlow: эндпоинт отдаёт данные клиентов из хранилища. |  |
| 10 | [Manage adobe acrobat e signatures with webhooks](manage-adobe-acrobat-e-signatures-with-webhooks/) | Обрабатывает вебхуки Adobe Acrobat Sign (электронные подписи): отвечает с нужным заголовком и дополняет данные. |  |
| 11 | [Manipulate pdf with adobe developer api](manipulate-pdf-with-adobe-developer-api/) | Обёртка над Adobe PDF Services API: загружает PDF, обрабатывает его (извлечение текста, конвертация и т. п.) и сохраняет результат в Dropbox. | Dropbox |
| 12 | [Monitor multiple github repos via webhook](monitor-multiple-github-repos-via-webhook/) | Следит за несколькими GitHub-репозиториями через вебхук и присылает уведомления о новых коммитах в Slack или Telegram. | Slack, Telegram |
| 13 | [Pulling data from services that n8n doesnt have a pre built integration for](pulling-data-from-services-that-n8n-doesnt-have-a-pre-built-integration-for/) | Учебный пример по HTTP Request: парсинг страниц, разбиение ответа на элементы, пагинация — для сервисов без готовой интеграции. |  |
| 14 | [Send github notifications to discord webhook](send-github-notifications-to-discord-webhook/) | Проверяет уведомления GitHub и отправляет сводку о новых событиях в Discord через вебхук. | Discord |
| 15 | [Send rss feed data to webhook](send-rss-feed-data-to-webhook/) | Периодически читает RSS, фильтрует статьи по ключевым словам, сохраняет новые в MongoDB и отправляет их на вебхук. | MongoDB, RSS |
| 16 | [Store data received from webhook in json](store-data-received-from-webhook-in-json/) | Получает случайный рецепт коктейля из API и сохраняет ответ в JSON-файл. |  |
| 17 | [Use redis to rate limit your low code api](use-redis-to-rate-limit-your-low-code-api/) | Ограничивает частоту запросов к вашему low-code API: считает использование ключей в Redis и сообщает о превышении лимита. | Airtable, Redis |
| 18 | [Visual regression testing with apify and ai vision model](visual-regression-testing-with-apify-and-ai-vision-model/) | Визуальное регрессионное тестирование сайтов: по расписанию делает скриншоты, сравнивает их с эталоном через Gemini и заводит задачи в Linear при изменениях. | Google Drive, Google Gemini, Google Sheets, Linear |
| 19 | [Webhook returning xml](webhook-returning-xml/) | Вебхук, который принимает JSON, конвертирует его в XML и возвращает XML в ответе. |  |
| 20 | [Webhooks with mattermost](webhooks-with-mattermost/) | По вебхуку из Mattermost получает случайный рецепт коктейля и публикует его в канал. | Mattermost |
