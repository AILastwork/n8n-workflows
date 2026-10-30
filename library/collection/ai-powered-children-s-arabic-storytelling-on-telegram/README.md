# AI-Powered Children s Arabic Storytelling on Telegram

> Каждый день публикует в Telegram детскую сказку на арабском языке с иллюстрацией и озвучкой (OpenAI).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | по расписанию |
| **Сервисы** | OpenAI, Telegram |
| **Узлов в схеме** | 13 |
| **Нужные учётные данные** | `openAiApi`, `telegramApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# Template for Kids' Story in Arabic

The n8n template for creating kids' stories in Arabic provides a versatile platform for storytellers to captivate young audiences with educational and interactive tales. Along with its core functionalities, this template allows for customization to suit various use cases and can be set up effortlessly.

Check this example: [https://t.me/st0ries95](https://t.me/st0ries95)


## Node Functionalities


## Automated Storytelling Process


## Use Cases
1. **Educational Platforms**:
 Educational platforms can automate the creation and distribution of educational stories in Arabic for children using this template. By incorporating visual and auditory elements into the storytelling process, educational platforms can enhance learning experiences and engage young learners effectively.

2. **Children's Libraries**:
 Children's libraries can utilize this template to curate and share a diverse collection of Arabic stories with young readers. The automated generation of visual content and audio files enhances the storytelling experience, encouraging children to immerse themselves in new worlds and characters through captivating narratives.

3. **Language Learning Apps**:
 Language learning apps focused on Arabic can integrate this template to offer culturally rich storytelling experiences for children learning the language. By translating stories into Arabic and supplementing them with visual and auditory components, these apps can facilitate language acquisition in an enjoyable and interactive manner.

## Configuration Guide for Nodes

### OpenAI Chat Model Nodes:
- **Credentials**: Provide the necessary API credentials for the OpenAI GPT-4 Turbo model.
- **Options**: Configure any specific options required for the chat model.

### Create a Prompt for DALL-E Node:
- **Prompts Customization**: Customize prompts to generate relevant visual content for the stories.
- **Summarization Method and Prompts**: Define the summarization method and prompts for generating visual content without text.

### Generate an Image for the Story Node:
- **Resource**: Specify the type of resource (image).
- **Prompt**: Set up the prompt for producing an image without text within the visual content.

### Generate Audio for the Story Node:
- **Resource**: Select the type of resource (audio).
- **Input**: Define the input text for generating audio files.

### Translate the Story to Arabic Node:
- **Chunking Mode**: Choose the chunking mode (advanced).
- **Summarization Method and Prompts**: Set the summarization method and prompts for translating the story into Arabic.

### Send the Story To Channel Node:
- **Chat ID**: Provide the chat ID where the story text will be sent.
- **Text**: Configure the text to be sent to the channel.

By configuring each node as per the guidelines above, users can effectively set up and customize the n8n template for kids' stories in Arabic, tailoring it to specific use cases and delivering a seamless and engaging storytelling experience for young audiences.

</details>
