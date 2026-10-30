# Flux Dev Image Generation Fal.ai

> Генерирует картинки моделью Flux Dev через Fal.ai и сохраняет в Google Drive.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Google Drive |
| **Узлов в схеме** | 9 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `httpHeaderAuth` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Set Parameter Here 
set Image Prompt and related settings

## Set Drive Folder Here

### Generic Credential Type
### Header : Authorization
Key $FAL_KEY"

for example:
Key 6f2960baxxxxxxxxx

</details>
