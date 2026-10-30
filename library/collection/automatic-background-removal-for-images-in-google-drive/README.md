# Remove Advanced Background from Google Drive Images

> Удаляет фон с новых картинок в Google Drive и добавляет новый фон.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | событие в Google Drive |
| **Сервисы** | Google Drive |
| **Узлов в схеме** | 12 |
| **Нужные учётные данные** | `googleDriveOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## About this worfklow 

## How it works
This workflow does watch out for new images uploaded within Google Drive. 
Once there are new images it will download the image. And then run some logic, remove the background and add some padding to the output image. 
**By default Images are saved as .png**
Once done upload it to Google Drive again.
## Features* Select Google Drive Credentials within the Google Drive Nodes
### This workflow supports
* Remove Background
* Transparent Background
* Coloured Background (1 Color)
* Add Padding
* Choose Output Size

## Customize it!
* Feel free to customize the workflow to your needs
* Speed up the workflow: Using fixed output size
### Examples 
* Send Final Images to another service
* For Products: Let ChatGPT Analyze the Product Type
* Add Text with the "Edit Image" Node

### Photroom API Playground
[Click me](https://www.photoroom.com/api/playground)

## Setup

### Requirements
* Photoroom API Key [Click me](https://docs.photoroom.com/getting-started/how-can-i-get-my-api-key)
* Google Drive Credential Setup


## Config
* Select Google Drive Credentials within the Google Drive Nodes

* **Please refer to the "Config" Node**

For the API Key you can also setup an Header Authentication

Select Input Folder

### Configuration
* Provide Your API Key
* Set Background Color
-HEX or values like white, transparent...
* Select if Output Size / or Original Size should be used 
* Output Drive Folder
 ->Copy URL
* Padding (Default 5%)

</details>
