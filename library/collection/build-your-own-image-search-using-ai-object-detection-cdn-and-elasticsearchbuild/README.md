# Build Your Own Image Search Using AI Object Detection, CDN and ElasticSearchBuild Your Own Image Search Using AI Object Detection, CDN and ElasticSearch

> Своя система поиска по картинкам: распознаёт объекты, хранит изображения в CDN и индексирует в Elasticsearch.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Elasticsearch |
| **Узлов в схеме** | 10 |
| **Нужные учётные данные** | `cloudflareApi`, `elasticsearchApi`, `httpQueryAuth` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## 1. Get Source Image
[Read more about setting variables for your workflow](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.set)

For this demo, we'll manually define an image to process. In production however, this image can come from a variety of sources such as drives, webhooks and more.

## 2. Use Detr-Resnet-50 Object Classification
[Learn more about Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/)

Not all AI workflows need an LLM! As in this example, we're using a non-LLM vision model to parse the source image and return what objects are contained within. The image search feature we're building will be based on the objects in the image making for a much more granular search via object association.

We'll use the Cloudflare Workers AI service which conveniently provides this model via API use.

## 3. Crop Objects Out of Source Image
[Read more about Editing Images in n8n](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.editimage)

With our objects identified by their bounding boxes, we can "cut" them out of the source image as separate images.

## 4. Index Object Images In ElasticSearch
[Read more about using ElasticSearch](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.elasticsearch)

By storing the newly created object images externally and indexing them in Elasticsearch, we now have a foundation for our Image Search service which queries by object association.

Fig 1. Result of Classification
![image of classification](https://res.cloudinary.com/daglih2g8/image/upload/f_auto,q_auto,w_300/v1/n8n-workflows/ywtzjcmqrypihci1npgh)

## Try It Out!
### This workflow does the following:
* Downloads an image
* Uses an object classification AI model to identify objects in the image.
* Crops the objects out from the original image into new image files.
* Indexes the image's object in an Elasticsearch Database to enable image search.

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

🚨**Required**
* Set your variables here first!

</details>
