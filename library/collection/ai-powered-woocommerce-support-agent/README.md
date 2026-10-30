# AI-powered WooCommerce Support-Agent

> ИИ-агент поддержки WooCommerce: отвечает о заказах клиента и статусе доставки DHL.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук, вызов из другого воркфлоу, чат |
| **Сервисы** | Dhl, OpenAI, WooCommerce |
| **Узлов в схеме** | 31 |
| **Нужные учётные данные** | `dhlApi`, `openAiApi`, `wooCommerceApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Find WooCommerce User-ID
User-ID is required to query past orders

# Agent

## Add DHL tracking information
Queries the status of shipped orders from DHL.

Can be skipped if order tracking should not be available or replaced with other services like UPS.

# Setup
## Generally
- The environment variable `NODE_FUNCTION_ALLOW_BUILTIN` has to equal or include the value `crypto` (FYI: is default on n8n cloud) as it is required to run this workflow


## To test the workflow
1. Set a valid email address of a user that exists in WooCommerce in the Mock Node "Mock Data"
2. Enable the node "Mock Data"
3. Disable the node "Decrypt email address"
4. Use the built-in chat by pressing the "Chat" button


## For production use:
1. Update the "System Message" in the node "AI Agent" for specific use case. At least the name of the shop should be changed
2. Integrate the chat into the website. An example can be found in the box "Example Website Implementation"
3. Disable or delete the node "Mock Data"
4. Enable the node "Decrypt email address"
5. Enable Workflow

## Get Orders

# WooCommerce Order Tool

## Check orders found

## How to supply user email
As we want to ensure that customers can only query information about their own orders, the email address gets encrypted in the backend, and then decrypt again in this workflow. If the email was allowed to be set unencrypted, anyone could query information from other customers.

### The email address get supplied in the chat script at the following location:
```
createChat({
	webhookUrl: '...',
	metadata: {
 email: 'ENCRYPTED_EMAIL_ADDRESS'
 },
});
```


## Example Scripts:

### Encrypt email on the backend
Run the following code in the backend of your website, send the data to the frontend, and then set it dynamically at the above defined location as email.













### Decrypt email in workflow
This script is already used in this workflow and is only provided here again as an example.

## Example Website Implementation
Example Code for a website can be found in node "Respond to Webhook".

More information about the embeddable chat can be found [here](https://github.com/n8n-io/n8n/tree/master/packages/%40n8n/chat#installation).

Required changes:
- Change "webhookUrl" to the displayed in "Chat Trigger" node
- Set the encrypted email address dynamically. The value has to be calculated in the backend to make it truly secure
- Use a unique password for email en-/decryption and use it in the backend and this workflow (can be set in node "Decrypt email address")


The example page can be opened by calling the production Webhook-URL of the node "Webhook Example Page". It only works if the "For production use" steps on the left have been followed.

</details>
