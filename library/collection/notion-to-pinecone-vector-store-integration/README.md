# Prod: Notion to Vector Store - Dimension 768

> Загружает страницы Notion в векторную базу Pinecone (эмбеддинги Gemini, размерность 768).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Notion |
| **Сервисы** | Google Gemini, Notion, Pinecone |
| **Узлов в схеме** | 8 |
| **Нужные учётные данные** | `googlePalmApi`, `notionApi`, `pineconeApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.
