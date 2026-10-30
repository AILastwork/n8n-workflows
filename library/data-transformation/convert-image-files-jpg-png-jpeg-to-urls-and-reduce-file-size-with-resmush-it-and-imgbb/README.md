# Convert image files jpg png jpeg to urls and reduce file size with resmush it and imgbb

> Загружает картинки на ImgBB, сжимает через reSmush.it и возвращает ссылки; может генерировать картинки через OpenAI.

| | |
|---|---|
| **Категория** | [🔄 Преобразование данных](../README.md) |
| **Запуск** | — |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow automates the process of uploading images to ImgBB, optimizing them using ReSmush.it, and optionally generating images using OpenAI, providing optimized image URLs ready for use.

Example: A marketing team needs to create web content with high-quality, optimized images. This workflow allows them to upload local image files, automatically optimize them, and generate new images using AI, all while providing the optimized image URLs for easy integration into their web content.

## What You Can Do
- Uploads images to ImgBB for hosting and URL generation
- Optimizes images using ReSmush.it to reduce file size
- Optionally generates new images using OpenAI's image generation capabilities

</details>
