# Transcribing Bank Statements To Markdown Using Gemini Vision AI

> Переводит банковскую выписку в Markdown с помощью Gemini Vision и извлекает данные.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Google Drive, Google Gemini |
| **Узлов в схеме** | 12 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `googlePalmApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Try Me Out!

### This workflow converts a bank statement to markdown, faithfully capturing the details using the power of Vision Language Models ("VLMs"). The resulting markdown can then be parsed again by your standard LLM to extract data such as identifying all deposit table rows in the document.

This workflow is able to handle both downloaded PDFs as well as scanned PDFs. Be sure to protect sensitive data before running this workflow.

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

## 1. Download Bank Statement PDF
[Read more about Google Drive node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive)

For this demonstration, we'll pull an example bank statement off Google Drive however, you can also swap this out for other triggers such as webhook.

You can use the example bank statement created specifically for this workflow here: https://drive.google.com/file/d/1wS9U7MQDthj57CvEcqG_Llkr-ek6RqGA/view?usp=sharing

## 2. Split PDF Pages into Seperate Images

Currently, the vision model we'll be using can't accept raw PDFs so we'll have to convert our PDF to a image in order to use it. To achieve this, we'll use the free [Stirling PDF webservice](https://stirlingpdf.io/) for convenience but if we need data privacy (recommended!), we could self-host our own [Stirling PDF instance](https://github.com/Stirling-Tools/Stirling-PDF/) instead. Alternatively, feel free to swap this service out for one of your own as long as it can convert PDFs into images!

We will ask the PDF service to return each page of our statement as separate images, which it does so as a zip file. Next steps is to just unzip the file and convert the output as a list of images.

## 3. Convert PDF Pages to Markdown Using Vision Model
[Learn more about using the Basic LLM node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm)

Unlike traditional OCR, vision models ("VLMs") "transcribe" what they see so while we shouldn't expect an exact replication of a document, they may perform better making sense of complex document layouts ie. such as with horizontally stacked tables.
 
In this demonstration, we can transcribe our bank statement scans to markdown text for the purpose of further processing. With markdown, we can retain tables or columnar data found in the document. We'll employ two optimisations however as a workaround for token and timeout limits (1) we'll only transcribe one page at a time and (2) we'll shrink the pages just a little just enough to speed up processing but not enough to reduce our required resolution.

## 4. Extract Key Data Confidently From Statement
[Read more about the Information Extractor](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.information-extractor)

With our newly generated transcript, let's pull just the deposit line items from our statement. Processing all pages together as images may have been compute-extensive but as text, this is usually no problem at all for our LLM.

For our example bank statement PDF, the resulting extraction should be 8 table rows where a value exists in the "deposits" column.

### 💡 About the Example PDF
Scanned PDFs (ie. where each page is a scanned image) are a use-case where extracting PDF text content will not work. Vision models are a great solution as this workflow aims to demonstrate!

### Privacy Warning!
This example uses a public third party service. If your data is senstive, please swap this out for the self-hosted version!

### 💡 Don't use Google?
Feel free to swap the model out for any state-of-the-art multimodal model which supports image inputs such as GPT4o(-mini) or Claude Sonnet/Opus. Note, I've found Gemini to produce the most accurate and consistent for this example use-case so no guarantees if you switch!

</details>
