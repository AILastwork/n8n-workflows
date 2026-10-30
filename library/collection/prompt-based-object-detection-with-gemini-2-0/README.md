# Prompt-based Object Detection with Gemini 2.0

> Находит объекты на картинке по запросу через Gemini 2.0 и рисует рамки.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 7 |
| **Нужные учётные данные** | `googlePalmApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

Fig 1. Output of Object Detection
![](https://res.cloudinary.com/daglih2g8/image/upload/f_auto,q_auto/v1/n8n-workflows/download_1_qmqyyo#full-width)

## 1. Download Test Image
[Read more about the HTTP node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest)

Any compatible image will do ([see docs](https://ai.google.dev/gemini-api/docs/vision?lang=rest#technical-details-image)) but best if it isn't too busy or the subjects too obscure. Most importantly, you are able to retrieve the width and height as this is required for a later step.

## 2. Use Prompt-Based Object Detection
[Read more about the HTTP node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest)

We've had generalised object detection before ([see my other template using ResNet](https://n8n.io/workflows/2331-build-your-own-image-search-using-ai-object-detection-cdn-and-elasticsearch/)) but being able to prompt for what you're looking for is a very exciting proposition! Not only could this reduce the effort in post-detection filtering but also introduce contextual use-cases such as searching by "emotion", "locality", "anomolies" and many more!

I found the the output json schema of `{ "box_2d": { "type": "array", ... } }` works best for Gemini to return coordinates.

## 3. Scale Coords to Fit Original Image
[Read more about the Code node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code/)

According to the Gemini 2.0 overview on [how it calculates bounding boxes](https://ai.google.dev/gemini-api/docs/models/gemini-v2?_gl=1*187cb6v*_up*MQ..*_ga*MTU1ODkzMDc0Mi4xNzM0NDM0NDg2*_ga_P1DBVKWT6V*MTczNDQzNDQ4Ni4xLjAuMTczNDQzNDQ4Ni4wLjAuMjEzNzc5MjU0Ng..#bounding-box), we'll have to rescale the coordinate values as they are normalised to a 0-1000 range. Nothing a little code node can't help with!

### Q. Why not use the Basic LLM node?
At time of writing, Langchain version does not recognise Gemini 2.0 to be a multimodal model.

## 4. Draw!
[Read more about the Edit Image node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.editimage/)

Finally for this demonstration, we can use the "Edit Image" node to draw the bounding boxes on top of the original image. In my test run, I can see Gemini did miss out one of the bunnies but seeing how this is the experimental version we're playing with, it's pretty good to see it doesn't do too bad of a job.

## Try it out!
### This n8n template demonstrates how to use Gemini 2.0's new Bounding Box detection capabilities your workflows.

The key difference being this enables prompt-based object detection for images which is pretty powerful for things like contextual search over an image. eg. "Put a bounding box around all adults with children in this image" or "Put a bounding box around cars parked out of bounds of a parking space".

## How it works
* An image is downloaded via the HTTP node and an "Edit Image" node is used to extract the file's width and height.
* The image is then given to the Gemini 2.0 API to parse and return coordinates of the bounding box of the requested subjects. In this demo, we've asked for the AI to identify all bunnies.
* The coordinates are then rescaled with the original image's width and height to correctl align them.
* Finally to measure the accuracy of the object detection, we use the "Edit Image" node to draw the bounding boxes onto the original image.


### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

</details>
