# Handle verification for twitter webhook

> Отвечает на CRC-проверку вебхука Twitter: считает HMAC-SHA256 от токена и возвращает подпись.

| | |
|---|---|
| **Категория** | [🌐 API и вебхуки](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow generates a secure response token by applying a SHA256 HMAC encryption to a webhook input, providing a secure way to authenticate and validate incoming requests.

Example: A company that offers a web service might use this workflow to securely authenticate incoming webhook requests from their customers. When a customer sends a request to the webhook, the workflow generates a secure response token that the customer can use to verify the authenticity of the response, ensuring the integrity of the data exchange.

## What You Can Do
- Secure webhook authentication using SHA256 HMAC encryption
- Flexible configuration options for the encryption process
- Ability to generate a response token that can be used to validate the authenticity of the response

</details>
