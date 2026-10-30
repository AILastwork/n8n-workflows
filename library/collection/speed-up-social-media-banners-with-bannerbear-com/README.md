# Speed Up Social Media Banners With BannerBear.com

> Быстро делает баннеры для соцсетей через Bannerbear по данным формы, с текстом от OpenAI, и отправляет в Discord.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | форма n8n |
| **Сервисы** | Bannerbear, Discord, OpenAI |
| **Узлов в схеме** | 7 |
| **Нужные учётные данные** | `bannerbearApi`, `discordBotApi`, `httpQueryAuth`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## 1. Start with n8n Forms
[Read more about using forms](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.formtrigger/)

For this demo, we'll use the form trigger for simple data capture but you could use webhooks for better customisation and/or integration into other workflows.

## 2. Use AI to Generate an Image
[Read more about using OpenAI](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.openai)

Generating AI images is just as easy as generating text thanks for n8n's OpenAI node. Once completed, OpenAI will return a binary image file. We'll have to store this image externally however since we can't upload it directly BannerBear. I've chosen to use Cloudinary CDN but S3 is also a good choice.

## 3. Create Social Media Banners with BannerBear.com
[Read more about the BannerBear Node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.bannerbear)

Now with your generated AI image and template variables, we're ready to send them to BannerBear which will use a predefined template to create our social media banner.

## 4. Post directly to Social Media
[Read more about using the Discord Node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.discord)

We'll share our event banner with our community in Discord. You can also choose to post this on your favourite social media channels.

### 🙋‍♂️ Optimise your images!
AI generated images can get quite large (20mb+) which may hit filesize limits for some services. I've used Cloudinary's optimise API to reduce the file size before sending to BannerBear.

### Result!
Here is a screenshot of the generated banner.
![Result](https://res.cloudinary.com/daglih2g8/image/upload/f_auto,q_auto,w_360/v1/n8n-workflows/qlzyrjjhxeh3zgerglti)

## Try It Out!
### This workflow does the following:
* Uses an n8n form to capture an event to be announced.
* Form includes imagery required for the event and this is sent to OpenAI Dalle-3 service to generate.
* Event details as well as the ai-generated image is then sent to the BannerBear.com service where a template is used.
* The final event poster is created and posted to X (formerly Twitter)

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

🚨**Required**
* You'll need to create a template in BannerBear.
* Once you have, map the template variables to fields in this node!

🚨**Required**
* You'll need to change all ids and references to your own Cloudinary instance.
* Feel free to change this to another service!

</details>
