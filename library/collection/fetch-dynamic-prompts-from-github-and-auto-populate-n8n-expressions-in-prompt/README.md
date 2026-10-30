# Load Prompts from Github Repo and auto populate n8n expressions

> Загружает промпты из GitHub-репозитория и подставляет в них переменные перед вызовом модели (Ollama).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | GitHub, Ollama |
| **Узлов в схеме** | 13 |
| **Нужные учётные данные** | `githubApi`, `ollamaApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# Set The variables in your prompt here

## The repo is currently public for you to test with

## Replaces the values in the prompt with the variables in the 
# 'setVars' Node

## If you're missing variables they will be listed here

</details>
