# CV Resume PDF Parsing with Multimodal Vision AI

> Конвертирует резюме из PDF в картинку и оценивает кандидата с помощью мультимодальной модели Gemini.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Google Drive, Google Gemini |
| **Узлов в схеме** | 8 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `googlePalmApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Try me out!

### This workflow converts a Candidate Resume PDF to an image which is then "read" by a Vision Language Model (VLM). The VLM assesses if the candidate's CV is a fit for the desired role.

This approach can be employed to combat "hidden prompts" planted in resumes to bypass and/or manipulate automated ATS systems using AI.


### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

## 1. Download Candidate Resume
[Read more about using Google Drive](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive)

For this demonstration, we'll pull the candidate's resume PDF from Google Drive but you can just as easily recieve this resume from email or your ATS.

It should be noted that our PDF is a special test case which has been deliberately injected with an AI bypass; the bypass is a hidden prompt which aims to override AI instructions and auto-qualify the candidate... sneaky!

Download a copy of this resume here: https://drive.google.com/file/d/1MORAdeev6cMcTJBV2EYALAwll8gCDRav/view?usp=sharing

## 2. Convert PDF to Image(s)
[Read more about using Stirling PDF](https://github.com/Stirling-Tools/Stirling-PDF)

AI vision models can only accept images (and sometimes videos!) as non-text inputs but not PDFs at time of writing. We'll have to convert our PDF to an image in order to use it.

Here, we'll use a tool called **Stirling PDF** which can provide this functionality and can be accessed via a HTTP API. Feel free to use an alternative solution if available, otherwise follow the instructions on the Stirling PDF website to set up your own instance.

Additionally, we'll reduce the resolution of our converted image to speed up the processing done by the LLM. I find that about 75% of an A4 (30x40cm) is a good balance.

## 3. Parse Resume with Multimodal LLM
[Read more about using Basic LLM Chain](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm/)

Multimodal LLMs are LLMs which can accept binary inputs such as images, audio and/or video files. Most newer LLMs are by default multimodal and we'll use Google's Gemini here as an example. By processing each candidate's resume as an image, we avoid scenarios where text extraction fails due to layout issues or by picking up "hidden" or malicious prompts planted to subvert AI automated processing.

This vision model ensures the resume is read and understood as a human would. The hidden bypass is therefore rendered mute since the AI also cannot "see" the special prompt embedded in the document.

### Data Privacy Warning!
For demo purposes, we're using the public online version of Stirling PDF. It is recommended to setup your own private instance of Stirling PDF before using this workflow in production.

</details>
