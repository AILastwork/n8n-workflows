# Auto Categorise Outlook Emails with AI

> Автоматически раскладывает письма Outlook по категориям с помощью локальной модели Ollama.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Ollama, Outlook |
| **Узлов в схеме** | 26 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# Auto Categorise Outlook Emails with AI
Built by [Wayne Simpson](https://www.linkedin.com/in/simpsonwayne/) at [nocodecreative.io](https://nocodecreative.io)

### Watch Set Up Video 👇
[![Auto Categorise Outlook Emails with AI](https://vdyfnvnstovfxpabhdjc.supabase.co/storage/v1/object/public/images/Thumbnails/auto-categories-emails.png?t=2024-10-11T09%3A56%3A37.961Z#full-width)](https://www.youtube.com/watch?v=EhRBkkjv_3c)

## Outlook Business with filters
Filters:
```
flag/flagStatus eq 'notFlagged' and not categories/any()
```

These filters ensure we do not process flagged emails or email that already have a category set.

## Sanitise Email 
Removes HTML and useless information in preparation for the AI Agent

## Modify Categories 
Edit this to customise category selection

## Convert to JSON
* Ensures the Agent output to converted to JSON
* Catches any errors and continues processing

## Switch Categories
Ensure your categories match the **varID & Category** Edit Fields node

## Set Categories

## Move to Folders

## Check if email has been read

</details>
