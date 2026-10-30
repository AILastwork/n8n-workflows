# FLUX-fill standalone

> Интерактивный редактор картинок с инпейнтингом через FLUX.1 Fill.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 12 |
| **Нужные учётные данные** | `httpHeaderAuth` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# Deliver the editor with links to the images

# Image processing part

# Send back edited image
## Add extra steps to save an edited image

## Image array
* Load from PC
* Select one of the default images

### Change this node to
### get image URLs from your data source

## HTML code of the editor
* Konva.js
* img-comparison-slider to compare edits vs original file
* Additional css + js files for the editor logic

## Call FLUX-Fill Tool
Pass the following data:
* original image
* alpha mask from the editor
* text prompt
* additional settings

</details>
