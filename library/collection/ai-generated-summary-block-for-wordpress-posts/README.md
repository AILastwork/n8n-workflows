# AI-Generated Summary Block for WordPress Posts - with OpenAI, WordPress, Google Sheets & Slack

> Добавляет в посты WordPress блок с кратким содержанием, сгенерированным OpenAI; учёт в Google Sheets, уведомления в Slack.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вебхук, вручную, по расписанию |
| **Сервисы** | Google Sheets, OpenAI, Slack, WordPress |
| **Узлов в схеме** | 21 |
| **Нужные учётные данные** | `googleApi`, `httpHeaderAuth`, `openAiApi`, `slackOAuth2Api`, `wordpressApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Trigger - Two Options
To use this workflow, you have two trigger options.

The default trigger is **"When clicking 'Test workflow'"**, allowing you to manually test the scenario.

If you want to use this workflow in production, you can choose one of the following triggers. You'll need to **select the one you prefer and enable it**.:

### Schedule Trigger 
This trigger checks at regular intervals (e.g., every 5 minutes) if a new post has been published on your WordPress blog and triggers the workflow accordingly. 

✅ **Easy to set up** 
✅ **Automates AI summaries without manual intervention** 

⚠️ If you run the workflow manually once, the AI-generated summaries will be added to Google Sheets and processed in later steps to prevent duplication. 

💡 **Recommended follow-up nodes:** If you choose this trigger, the following nodes are suggested in the template: 
- **`Date & Time - Subtract`**: Subtracts the scheduled interval from the current execution timestamp. For example, if the workflow runs every 5 minutes, it subtracts 5 minutes from the execution time. 
- **`WordPress - Get Posts`**: Uses the output of the `Date & Time - Subtract` node as a filter to retrieve only posts published after the last execution. 

### Webhook Trigger 
If you're familiar with webhooks, you can set up a webhook that triggers when a new post is published. 

✅ **Faster than scheduled triggers** 
✅ **More event-driven** 

You can implement this using either: 
- A **Webhook plugin** on WordPress (not recommended due to plugin dependency). 
- A **PHP function** that triggers the webhook with authentication for security. 

⚠️ **Be cautious** with how the webhook is triggered—you may not want it to fire on every post edit. 

💡 **Recommended follow-up nodes for this option:** 
- **`Set Fields - From Webhook Input`**: Configures the fields based on the data sent to the webhook. 
- **`WordPress - Get Post`**: Retrieves the post using the `post_id` received from the webhook, ensuring higher accuracy than the schedule trigger approach.

## WordPress - Get All Posts 

This node is used for the **initial/test run**. In production, you should use the WordPress node that follows the **Scheduled Trigger** or **Webhook Trigger** instead. 

It retrieves all existing WordPress posts to generate an AI Summary. 

### 🔹 Considerations: 
- In this template, the query is **limited to 5 posts** to prevent accidental large-scale execution. This makes it easier to fix any issues. 
- You can **add filters** (category, tag, date, etc.) to target only the posts for which you want an AI Summary. 
- You can enable the **"Get All Posts"** option in the node if you want summaries for all posts—**but make sure this is intentional**. 
- The **more posts** you process, the **higher the cost** in OpenAI API usage.

## Loop Over Items 

Since multiple posts may be retrieved from the previous step, a **"Loop Over Items"** node is used to process each post individually, optimizing the execution of subsequent nodes. 

### 🔹 In Production - Using the "Schedule Trigger" 
You can continue using the **"Loop Over Items"** approach in production. Depending on your **publication frequency** and the **schedule interval** you've chosen, multiple posts could be retrieved in a single execution. This ensures each post is processed sequentially. 

### 🔹 In Production - Using the "Webhook Trigger" 
With a **Webhook Trigger**, the workflow typically runs for **one post at a time**, meaning the **"Loop Over Items"** node is not strictly necessary. 

- **You can remove it** for a slightly more efficient workflow. 
- **However, keeping it won’t cause any issues**—it will simply loop over one item instead of multiple.

## Google Sheets - Get Rows & IF Nodes 

This step is used to **check whether a post already has an AI Summary**. 

For the Google Sheets node, you can **[make a copy of this Google Sheets template](https://docs.google.com/spreadsheets/d/1uO0zaNc5UrLhtdcvETFcZGln_qij-nqpYP06n9GxJUk/)** by going to **File → Make a copy**.


### 🔹 How It Works: 
1. **On the first execution**, posts retrieved from WordPress and processed for AI summarization are added to a **Google Sheet**. 
2. **On subsequent executions**, when the workflow retrieves new posts, it checks if the `post_id` is already recorded in Google Sheets. 

### 🔹 IF Node Logic: 
- ✅ **If a row exists for the `post_id`** → The post already has an AI Summary. The workflow **skips processing** and moves to the `"Loop Over Items"` node. 
- ❌ **If no row exists for the `post_id`** → The post **does not have an AI Summary**, so the workflow continues along the execution path that leads to AI Summary generation.

## WordPress - Get Post & HTML to Markdown Nodes 

This step retrieves the WordPress post data using the `post_id` and converts the HTML content to Markdown. This ensures that the text is formatted in a **clean and structured way** before being sent to the **Text Classifier** node (which works with AI). More details about this step are provided in the next sticky note. 

### 🔹 WordPress - Get Post 
- The **`context=edit`** option is enabled to retrieve the **raw** post data. 
- This is necessary because the post content will be **updated later in the workflow**. 

### 🔹 HTML to Markdown 
- Converts the retrieved HTML content into **Markdown** format. 
- This makes the text **easier to process** for the LLM (Large Language Model) in the next step. 
- Markdown ensures that the AI better understands the structure and formatting of the content.

## Text Classifier 

This step **classifies posts into categories**: 

- **`not_summarized`** → If the post **does not** have a summary, the following nodes execute the AI summary generation. 
- **`summarized`** → If the post **already** has a summary, the workflow **skips processing**: 
 - The workflow moves to `"Loop Over Items"`. 
 - The `"Done"` branch goes to the `"Do Nothing"` node. 

The LLM model used is **`gpt-4o-mini`**—it's efficient and cost-effectiv

…

</details>
