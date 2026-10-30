# Automate Blog Creation in Brand Voice with AI

> Пишет статьи для блога в голосе вашего бренда: изучает существующие тексты и публикует в WordPress.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | OpenAI, WordPress |
| **Узлов в схеме** | 18 |
| **Нужные учётные данные** | `openAiApi`, `wordpressApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## 1. Import Existing Content
[Read more about the HTML node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.html/)

First, we'll need to gather existing content for the brand voice we want to replicate. This content can be blogs, social media posts or internal documents - the idea is to use this content to "train" our AI to produce content from the provided examples. One call out is that the quality and consistency of the content is important to get the desired results.

In this demonstration, we'll grab the latest blog posts off a corporate blog to use as an example. Since, the blog articles are likely consistent because of the source and narrower focus of the medium, it'll serve well to showcase this workflow.

## 2. Convert HTML to Markdown
[Learn more about the Markdown node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.markdown)

Markdown is a great way to optimise the article data we're sending to the LLM because it reduces the amount of tokens required but keeps all relevant writing structure information.

Also useful to get Markdown output as a response because typically it's the format authors will write in.

## 3. Using AI to Analyse Article Structure and Writing Styles
[Read more about the Basic LLM Chain node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm)

Our approach is to first perform a high-level analysis of all available articles in order to replicate their content layout and writing styles. This will act as a guideline to help the AI to structure our future articles.

## 4. Using AI to Extract Voice Characteristics and Traits
[Read more about the Information Extractor node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.information-extractor/)

Second, we'll use AI to analysis the brand voice characteristics of the previous articles. This picks out the tone, style and choice of language used and identifies them into categories. These categories will be used as guidelines for the AI to keep the future article consistent in tone and voice.

## 5. Automate On-Brand Articles Using AI
[Read more about the Information Extractor node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.information-extractor)

Finally with this approach, we can feed both content and voice guidelines into our final LLM - our content generation agent - to produce any number of on-brand articles, social media posts etc.

When it comes to assessing the output, note the AI does a pretty good job at simulating format and reusing common phrases and wording for the target article. However, this could become repetitive very quickly! Whilst AI can help speed up the process, a human touch may still be required to add a some variety.

## 6. Save Draft to Wordpress
[Learn more about the Wordpress node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.wordpress/)

To close out the template, we'll simple save our generated article as a draft which could allow human team members to review and validate the article before publishing.

### Q. Do I need to analyse Brand Voice for every article?
A. No! I would recommend storing the results of the AI's analysis and re-use for a list of planned articles rather than generate anew every time.

### Q. Can I use other media than blog articles?
A. Yes! This approach can use other source materials such as PDFs, as long as they can be produces in a text format to give to the LLM.

## Try It Out!
### This n8n template demonstrates how to use AI to generate new on-brand written content by analysing previously published content.

With such an approach, it's possible to generate a steady stream of blog article drafts quickly with high consistency with your brand and existing content.

### How it works
* In this demonstration, the n8n.io blog is used as the source of existing published content and 5 of the latest articles are imported via the HTTP node.
* The HTML node is extract the article bodies which are then converted to markdown for our LLMs.
* We use LLM nodes to (1) understand the article structure and writing style and (2) identify the brand voice characteristics used in the posts.
* These are then used as guidelines in our final LLM node when generating new articles.
* Finally, a draft is saved to Wordpress for human editors to review or use as starting point for their own articles.

### How to use
* Update Step 1 to fetch data from your desired blog or change to fetch existing content in a different way.
* Update Step 5 to provide your new article instruction. For optimal output, theme topics relevant to your brand.


### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

</details>
