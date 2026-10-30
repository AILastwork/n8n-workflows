# Detect hallucinations using specialised Ollama model bespoke-minicheck

> Проверяет текст на галлюцинации ИИ: разбивает на предложения и сверяет с источником моделью bespoke-minicheck (Ollama).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, вызов из другого воркфлоу |
| **Сервисы** | Ollama |
| **Узлов в схеме** | 13 |
| **Нужные учётные данные** | `ollamaApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Build a summary

This is useful to run it in an agentic workflow. You may remove the summary part and return the raw array with the found issues.

## Split into sentences

## Fact checking

This use a small ollama model that is specialized on that task: https://ollama.com/library/bespoke-minicheck

You have to install it before use with `ollama pull bespoke-minicheck`.

## Test workflow

## Entrypoint to use in other workflows

</details>
