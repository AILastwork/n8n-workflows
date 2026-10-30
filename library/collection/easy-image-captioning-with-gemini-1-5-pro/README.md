# Easy Image Captioning with Gemini 1.5 Pro

> Генерирует подпись к картинке через Gemini 1.5 Pro и накладывает её на изображение.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Google Gemini |
| **Узлов в схеме** | 11 |
| **Нужные учётные данные** | `googlePalmApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Try it out!

### This workflow takes an image and generates a caption for it using AI. The OpenAI node has been able to do this for a while but this workflow demonstrates how to achieve the same with other multimodal vision models such as Google's Gemini.

Additional, we'll use the Edit Image node to overlay the generated caption onto the image. This can be useful for publications or can be repurposed for copyrights and/or watermarks.

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

## 1. Import an Image 
[Read more about the HTTP request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest)

For this demonstration, we'll grab an image off Pexels.com - a popular free stock photography site - by using the HTTP request node to download.

In your own workflows, this can be replaces by other triggers such as webhooks.

## 2. Using Vision Model to Generate Caption
[Learn more about the Basic LLM Chain](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm)

n8n's basic LLM node supports multimodal input by allowing you to specify either a binary or an image url to send to a compatible LLM. This makes it easy to start utilising this powerful feature for visual classification or OCR tasks which have previously depended on more dedicated OCR models.

Here, we've simply passed our image binary as a "user message" option, asking the LLM to help us generate a caption title and text which is appropriate for the given subject. Once generated, we'll pass this text along with the image to combine them both.

## 3. Overlay Caption on Image 
[Read more about the Edit Image node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.editimage)

Finally, we’ll perform some basic calculations to place the generated caption onto the image. With n8n's user-friendly image editing features, this can be done entirely within the workflow!

The Code node tool is ideal for these types of calculations and is used here to position the caption at the bottom of the image. To create the overlay, the Edit Image node enables us to insert text onto the image, which we’ll use to add the generated caption.

**FIG 1.** Example input image with AI generated caption
![Example Output](https://res.cloudinary.com/daglih2g8/image/upload/f_auto,q_auto/v1/n8n-workflows/l5xbb4ze4wyxwwefqmnc#full-width)

</details>
