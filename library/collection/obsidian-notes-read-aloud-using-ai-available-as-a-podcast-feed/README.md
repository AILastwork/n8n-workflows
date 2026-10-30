# Obsidian Notes Read Aloud: Available as a Podcast Feed

> Озвучивает заметки Obsidian и публикует их как подкаст-ленту.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук |
| **Сервисы** | Google Sheets, OpenAI |
| **Узлов в схеме** | 15 |
| **Нужные учётные данные** | `googleSheetsOAuth2Api`, `httpCustomAuth`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Send Notes to Webhook
**Setup:**
- Install [Post Webhook Plugin](https://github.com/Masterb1234/obsidian-post-webhook/) in Obsidian
- Enter n8n Webhook URL and name in plugin settings

**Usage:**
- Select text or use full note
- Open Command Palette (Ctrl+P)
- Choose 'Send Note/Selection to [name]'
- Audio file appears in Podcast Feed and note

## Generic Podcast Feed Module
A reusable module for any 'X-to-Podcast' workflow. Generates standard RSS feed from:
- Source data (Google Sheets)
- Podcast metadata

Compatible with all major podcast platforms (Apple, Google, Spotify, etc.).

## Create Audio and Write Description
OpenAI TTS converts notes to audio while the messaging model generates concise descriptions for podcast apps.

## Append Row to Google Sheets
Saves essential podcast parameters (<title>, <link>, <description>, <duration>) to Google Sheets for Feed generation.

## Podcast Feed Configuration
- Static: Configure podcast metadata in 'Edit Fields'
- Dynamic: Episodes automatically pulled from Google Sheets

## Write Podcast Feed
Generates RSS feed XML from collected data.

## Audio to Cloudinary and Obsidian
Cloudinary stores audio files and provides duration metadata for podcast feed.

Setup:
- Create Custom Auth credentials
- Set CLOUDINARY_ENV to your environment

## Prepare Relevant Data
Consolidates and formats data for Google Sheets storage.

</details>
