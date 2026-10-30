# Generating Image Embeddings via Textual Summarisation

> Создаёт эмбеддинги картинок через их текстовое описание (OpenAI) и ищет похожие изображения.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Google Drive, OpenAI |
| **Узлов в схеме** | 13 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### Get Color Channels
[Source: https://www.pinecone.io/learn/series/image-search/color-histograms/](https://www.pinecone.io/learn/series/image-search/color-histograms/)

### Generate Image Keywords
[Source: https://www.pinecone.io/learn/series/image-search/bag-of-visual-words/](https://www.pinecone.io/learn/series/image-search/bag-of-visual-words/)

Note, OpenAI Image models work best when image is resized to 512x512.

⚠️ **Multimodal embedding is not designed analyze medical images for diagnostic features or disease patterns.** Please do not use Multimodal embedding for medical purposes.

## 1. Get the Source Image
In this demo, we just need an image file. We'll pull an image from google drive but you can use all input trigger or source you prefer.

## 2. Image Embedding Methods
[Read more about working with images in n8n](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.editimage)

There are a [myriad of image embedding techniques](https://www.pinecone.io/learn/series/image-search/) some which involve specialised models and some which do a simplified image-to-text representation.
In this demo, we'll use the simplified text representation methods: collecting color channel information and using Multimodal LLMs to produce keywords for the image. Together, these will form the document we'll embed to represent our image for search.

## 3. Generate Embedding Doc
It is important to define your metadata for later filtering and retrieval purposes.

## 3. Store in Vector Store
[Read more about vector stores](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreinmemory)

Once our document is ready, we can just insert into any vector store to make it ready for searching. When searching, be sure to defined the same vector store index used here!
Note: Metadata is defined in the document loader which must be mapped manually.

## 4. Try it out!
[Read more about vector stores](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreinmemory)

Here's a quick test to use a simple text prompt to search for the image. Next step would be to implement image-to-image search by using the "Embedding Doc" to search rather to store in the vector database.

## Try It Out!
### This workflow does the following:
* Downloads a selected image from Google Drive.
* Extracts colour channel information from the image.
* Generates semantic keywords of the iamge using OpenAI vision model.
* Combines extracted and generated data to create an embedding document for the image.
* Inserts this document into a vector store to allow for vector search on the original image. 

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

</details>
