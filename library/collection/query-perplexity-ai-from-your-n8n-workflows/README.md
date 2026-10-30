# Query Perplexity AI from your n8n workflows

> Запросы к Perplexity AI из воркфлоу n8n.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | `httpBasicAuth`, `httpHeaderAuth` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Credentials Setup

1/ Go to the perplexity dashboard, purchase some credits and create an API Key

https://www.perplexity.ai/settings/api

2/ In the perplexity Request node, use Generic Credentials, Header Auth. 

For the name, use the value "Authorization"
And for the value "Bearer pplx-e4...59ea" (Your Perplexity Api Key)

**Sonar Pro** is the current top model used by perplexity. 
If you want to use a different one, check this page: 

https://docs.perplexity.ai/guides/model-cards

</details>
