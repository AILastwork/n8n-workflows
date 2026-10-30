# Get slack notifications when new product published on woocommerce

> Уведомляет в Slack о новом товаре в WooCommerce.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | событие в WooCommerce |
| **Сервисы** | Slack, WooCommerce |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | `slackApi`, `wooCommerceApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically sends a notification to a Slack channel whenever a new product is added to a WooCommerce-powered website.

Example: A small e-commerce business owner uses this workflow to stay informed about new product additions on their website. Whenever a new product is added, the workflow triggers and sends a message to a dedicated Slack channel, providing key details about the new product, such as its name, price, and a link to the product page.

## What You Can Do
- Automatically monitors a WooCommerce website for new product additions
- Sends a formatted Slack message with relevant product information
- Includes a check to ensure the message is only sent for products with a URL containing "/product/"

</details>
