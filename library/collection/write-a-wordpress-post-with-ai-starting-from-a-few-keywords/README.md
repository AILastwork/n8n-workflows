# Write a WordPress post with AI (starting from a few keywords)

> Пишет статью для WordPress по нескольким ключевым словам: OpenAI + Википедия, картинка DALL·E, публикация черновиком.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | форма n8n |
| **Сервисы** | OpenAI, Wikipedia, WordPress |
| **Узлов в схеме** | 15 |
| **Нужные учётные данные** | `openAiApi`, `wordpressApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Data check

Checks that the data returned by OpenAI is correct

## Draft on WordPress

The article is posted as a draft on WordPress

## Featured image

The image is generated with Dall-E, uploaded to WordPress, and then connected to the post as its featured image

Starting from the given keywords, generates the article title, subtitle, chapters, and image prompt

## Article structure

## User form

The user triggers the post creation

## User feedback

Final confirmation to the user

User is notified to try again since some data is missing

Wikipedia is used to write the article

## Settings

Set the URL of your WordPress here

## Chapters split

Splits out chapter contents from the previous node

Writes the text for each chapter

## Chapters text

## Content preparation

Merges the content and prepare it before sending it to WordPress

</details>
