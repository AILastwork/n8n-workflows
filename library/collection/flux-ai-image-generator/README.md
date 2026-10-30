# Flux AI Image Generator

> Генератор картинок на FLUX через Hugging Face: выбор стиля, сохранение в S3, веб-страница с результатом.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | форма n8n |
| **Сервисы** | S3 |
| **Узлов в схеме** | 12 |
| **Нужные учётные данные** | `httpHeaderAuth`, `s3` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### Set style prompt
Each Edit fields node after the Switch sets `stylePrompt`, used in huggingface node.

### Run flux model
In `Call huggingface inference api` You can change `black-forest-labs/FLUX.1-schnell` in URL parameter to other models:
- `black-forest-labs/FLUX.1-dev`
- `Shakker-Labs/FLUX.1-dev-LoRA-AntiBlur`
- `XLabs-AI/flux-RealismLora`
- `ByteDance/Hyper-SD`

[See more models on huggingface.co](https://huggingface.co/models?pipeline_tag=text-to-image&sort=trending)

### Host image on S3
[Cloudflare](https://cloudflare.com) has free S3 compatible hosting. They call it "R2".

### Respond to Form
Serve a webform with image on success. On error, send message to form.

### Serve form to user
Captures `Prompt to flux` and `Style` from user.

### Watch Set Up Video 👇
[![Flux Generator](https://uploads.n8n.io/devrel/fluxgenerator.png#full-width)](https://youtu.be/Rv_1jt5WvtY)

# flux image generator
Built by [@maxtkacz](https://x.com/maxtkacz) as part of the [30 Day AI Sprint](https://30dayaisprint.notion.site/)
Check out the project's [Notion page](https://30dayaisprint.notion.site/Flux-image-generator-bc94a8d2de8447c6ab70aacf2c4179f2) for more details

</details>
