# Narrating over a Video using Multimodal AI

> Озвучивает видео: кадры → сценарий мультимодальной моделью → голос → сохранение в Google Drive.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Google Drive, OpenAI |
| **Узлов в схеме** | 14 |
| **Нужные учётные данные** | `googleDriveOAuth2Api`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Try It Out!

### This n8n template takes a video and extracts frames from it which are used with a multimodal LLM to generate a script. The script is then passed to the same multimodal LLM to generate a voiceover clip.

This template was inspired by [Processing and narrating a video with GPT's visual capabilities and the TTS API](https://cookbook.openai.com/examples/gpt_with_vision_for_video_understanding)

* Video is downloaded using the HTTP node.
* Python code node is used to extract the frames using OpenCV.
* Loop node is used o batch the frames for the LLM to generate partial scripts.
* All partial scripts are combined to form the full script which is then sent to OpenAI to generate audio from it.
* The finished voiceover clip is uploaded to Google Drive.

Sample the finished product here: https://drive.google.com/file/d/1-XCoii0leGB2MffBMPpCZoxboVyeyeIX/view?usp=sharing


### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

## 1. Download Video
[Learn more about the HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/)

In this demonstration, we'll download a stock video from pixabay using the HTTP Request node. Feel free to use other sources but ensure they are in a format support by OpenCV ([See docs](https://docs.opencv.org/3.4/dd/d43/tutorial_py_video_display.html))

## 2. Split Video into Frames
[Learn more about the Code node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code/)

We need to think of videos are a sum of 2 parts; a visual track and an audio track. The visual track is technically just a collection of images displayed one after the other and are typically referred to as frames. When we want LLM to understand videos, most of the time we can do so by giving it a series of frames as images to process.

Here, we use the Python Code node to extract the frames from the video using OpenCV, a computer vision library. For performance reasons, we'll also capture only a max of 90 frames from the video but ensure they are evenly distributed across the video. This step takes about 1-2 mins to complete on a 3mb video.

### 🚨 PERFORMANCE WARNING!
Using large videos or capturing a large number of frames is really memory intensive and could crash your n8n instance. Be sure you have sufficient memory and to optimise the video beforehand!

## 3. Use Vision AI to Narrate on Batches of Frames
[Read more about the Basic LLM node](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm/)

To keep within token limits of our LLM, we'll need to send our frames in sequential batches to represent chunks of our original video. We'll use the loop node to create batches of 15 frames - this is because of our max of 90 frames, this fits perfectly for a total of 6 loops. Next, we'll convert each frame to a binary image so we can resize for and attach to the Basic LLM node. One trick to point out is that within the Basic LLM node, previous iterations of the generation are prepended to form a cohesive script. Without, the LLM will assume it needs to start fresh for each batch of frames.

A wait node is used to stay within service rate limits. This is useful for new users who are still on lower tiers. If you do not have such restrictions, feel free to remove this wait node!

## 4. Generate Voice Over Clip Using TTS
[Read more about the OpenAI node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.openai)

Finally with our generated script parts, we can combine them into one and use OpenAI's Audio generation capabilities to generate a voice over from the full script. Once we have the output mp3, we can upload it to somewhere like Google Drive for later use.

Have a listen to the finished product here: https://drive.google.com/file/d/1-XCoii0leGB2MffBMPpCZoxboVyeyeIX/view?usp=sharing

**The video used in this demonstration is**
&copy; [Coverr-Free-Footage](https://pixabay.com/users/coverr-free-footage-1281706/) via [Pixabay](https://pixabay.com/videos/india-street-busy-rickshaw-people-3175/)
![](https://res.cloudinary.com/daglih2g8/image/upload/f_auto,q_auto/v1/n8n-workflows/jhx2tma2gxaabkeiqlgp#full-width)

</details>
