# Auto categorize wordpress template

> Автоматически распределяет посты WordPress по рубрикам с помощью ИИ.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | OpenAI, WordPress |
| **Узлов в схеме** | 5 |
| **Нужные учётные данные** | `openAiApi`, `wordpressApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## How to Auto-Categorize 82 Blog Posts in 2 Minutes using A.I. (No Coding Required)

💡 Read the [case study here](https://rumjahn.com/how-to-use-a-i-to-categorize-wordpress-posts-and-streamline-your-content-organization-process/).

📺 Watch the [youtube tutorial here](https://www.youtube.com/watch?v=IvQioioVqhw)

### Get wordpress posts

Turn off return all if you're running into issues.

### A.I. Categorization

1. you need to set up the categories first in wordpress

2. Edit the message prompt and change the categories and category numbers

### Update category

</details>
