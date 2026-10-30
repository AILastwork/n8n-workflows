# Create single new masked email address with fastmail

> Создаёт новый маскированный адрес e-mail в Fastmail по запросу на вебхук.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `httpHeaderAuth` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This n8n workflow allows users to create a disposable, masked email address using the Fastmail API, triggered by a webhook.

Example: A user or application can send a POST request to a specific webhook with a JSON payload containing the desired state and description for the masked email. The workflow then creates the masked email address and responds with the generated email and its description, which can be used for various purposes, such as privacy-conscious communication or testing.

## What You Can Do
- Webhook-triggered creation of masked email addresses
- Customizable state and description for the masked email
- Secure integration with the Fastmail API using HTTP header authentication
- Flexible output format, with the generated email address and description returned in the webhook response

</details>
