# Visual Regression Testing with Apify and AI Vision Model

> Визуальное регрессионное тестирование: скриншоты через Apify, сравнение через Gemini, задачи в Linear.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, по расписанию |
| **Сервисы** | Google Drive, Google Gemini, Google Sheets, Linear |
| **Узлов в схеме** | 24 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `googlePalmApi`, `googleSheetsOAuth2Api`, `httpQueryAuth`, `linearApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

### Part A. Generate Base Images
Before we can run our visual regression tests, we must generate a series of base screenshots to compare against. This part of the workflow uses an external website screenshotting service, [Apify.com](https://www.apify.com?fpr=414q6), to achieve this. This part of the workflow should only be run when we want to update our base screenshots.

## 5. Download Base and Generate new Webpage Screenshot
[Learn more about Apify.com](https://www.apify.com?fpr=414q6)

Looping for each webpage, we'll do 2 tasks (1) download the base screenshot for the url and (2) and use our [Apify.com](https://www.apify.com?fpr=414q6) webpage screenshot actor again to generate a fresh screenshot.

## 6. Compare Screenshots using Vision Model
[Read more about the basic LLM chain](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm/)

To carry out our visual regression test, we need to send both screenshots simultaneously to our Vision model. This is easily achieved using n8n's built-in basic LLM chain where we can define two user messages of the binary type. For our vision model, we'll use Google's Gemini but any capable vision model will also do the job. A Structured Output Parser is used here to return the AI's response in JSON format, this is for easier formatting purposes which we'll get to in the next step.

## 7. Create Report In Linear
[Learn more about integrating with Linear.app](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.linear)

For the final step, we'll generate a simple report which will capture any changes detected in our webpages list. Let's do this by first combining our webpages with their test results and filter out any in the page where no changes were detected. Next, we'll aggregate all changes into the Linear.app node which will be formatted into a markdown snippet and used to create a new issue in Linear. If you don't use Linear, feel free to swap this out for JIRA or even Slack.

## 4. Trigger Visual Regression Test Run
[Read more about the Schedule Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/)

Once we've generated our base images to compare with in Part A, we can now run our Visual Regression Tests. These tests are intended to check for unexpected changes to a webpage by using some form of image detection. To trigger Part B, we'll start with a schedule trigger and pull a list of webpages to test from Google Sheets.

## 1. Get List of Webpages to Generate Base Images
[Learn more about using Google Sheets](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/)

This workflow is split into 2 parts: Part A will generate the "base" screenshots to compare new screenshots against. To capture these base screenshots, we'll use Google Sheets to hold our list of webpages and their screenshot references (we'll come on to that later).

Example Sheet: https://docs.google.com/spreadsheets/d/e/2PACX-1vTXRZRi55dUbLAsWZboJqH5U-EK0ZRSse8pkqANAV4Ss70otpQ97zgT8YBd3dL4d2u2UC1TTx_o1o1R/pubhtml

## 2. Generate Webpage Screenshot via Apify
[Learn more about Apify.com](https://www.apify.com?fpr=414q6)

To generate a screenshot of the webpage, we'll need a third party service since this functionality is outside the scope of n8n. Feel free to pick whichever internal or external service works for you but I've had great experience using [Apify.com](https://www.apify.com?fpr=414q6) - a popular webscraping SaaS who offer a generous free plan and require very little configuration to get started.

The Apify "actor" (ie. a type of scraper) we'll be using is specifically designed to take webpage screenshots.

## 3. Upload Screenshot to Google Drive
[Read more about using the Google Drive node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/)

Once we have our screenshots, we'll download them from Apify and upload them to our Google Drive for safe keeping. After uploading, we'll capture the new Google Drive IDs for the images into our Google Sheet, this will allow us to reference them again when we perform the visual regression testing.

### Part B. Run Visual Regression Test
In this part of the workflow, we'll retrieve our list of webpages to test with our AI vision model. This part can be run as many times as required.

## Try It Out!

### This workflow implements an approach to Visual Regression Testing - a means to test websites for defects - using AI Vision Models.

This workflow uses a Google Sheet to track a list of webpages to test and is split into 2 parts; Part A generates the base screenshots of the list and Part B runs the visual regression testing.

The example spreadsheet can be found here: https://docs.google.com/spreadsheets/d/e/2PACX-1vTXRZRi55dUbLAsWZboJqH5U-EK0ZRSse8pkqANAV4Ss70otpQ97zgT8YBd3dL4d2u2UC1TTx_o1o1R/pubhtml

**[Apify.com](https://www.apify.com?fpr=414q6)** is the screenshot generator of choice and a free account with $5 in credit is available via this [link](https://www.apify.com?fpr=414q6).


### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

</details>
