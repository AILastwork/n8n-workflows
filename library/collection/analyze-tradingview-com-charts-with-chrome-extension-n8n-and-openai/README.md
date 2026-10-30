# Chrome extension backend with AI

> Бэкенд для расширения Chrome: OpenAI анализирует скриншот графика акций или криптовалюты и даёт технический анализ.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## N8N en OpenAI image analyser

## AI prompt
You are an expert financial analyst tasked with providing an advanced technical analyses of a stock or crypto currency chart provided. Your analysis will be based on various technical indicators and will provide simple insights for novice traders. Just explain to traders were you expect the market is moving. Also warn them this is not a binding advice. Make sure to explain everything in infant language.

</details>
