# Zalando price patrol monitor price evolution with email notification

> Следит за ценами товаров на Zalando, записывает их в Google Sheets и присылает письмо при снижении цены.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | по расписанию, форма n8n |
| **Сервисы** | Gmail, Google Sheets |
| **Узлов в схеме** | 10 |
| **Нужные учётные данные** | `gmailOAuth2`, `googleSheetsOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically monitors Zalando product prices, updates a Google Sheet with the latest prices, and sends an email notification when a product's price drops below a user-specified alert price.

Example: A small business owner wants to keep track of the prices of certain products on the Zalando e-commerce platform. They can use this workflow to set up price alerts, so they are notified when the price of a product they are interested in drops below their desired threshold. This allows them to quickly take advantage of price reductions and make informed purchasing decisions for their business.

## What You Can Do
- Allows users to add new products to monitor by providing a Zalando product URL and a price alert threshold
- Automatically scrapes the current price of each monitored product and updates a Google Sheet with the latest information
- Sends an email notification when a product's price drops below the user-specified alert price

</details>
