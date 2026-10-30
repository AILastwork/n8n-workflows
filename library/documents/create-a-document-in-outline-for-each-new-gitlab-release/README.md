# Create a document in outline for each new gitlab release

> Создаёт документ в Outline при каждом новом релизе в GitLab.

| | |
|---|---|
| **Категория** | [📄 Обработка документов](../README.md) |
| **Запуск** | событие в GitLab |
| **Сервисы** | GitLab |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automatically creates a new document in Outline (a knowledge base tool) whenever a new release is pushed to a GitLab repository.

Example: A software development team uses this workflow to automatically document their software releases. Whenever a new release is pushed to their GitLab repository, the workflow triggers and creates a new document in Outline with the release details, including the release name, description, and a link to the release.

## What You Can Do
- Automatically triggered by GitLab release events
- Extracts relevant release information from the GitLab event payload
- Creates a new document in Outline with the release details
- Supports customizing the document content and structure

</details>
