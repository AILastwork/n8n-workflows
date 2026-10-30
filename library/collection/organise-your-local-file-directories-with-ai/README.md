# Organise Your Local File Directories With AI

> Наводит порядок в локальных папках: ИИ (Mistral) раскладывает файлы по подпапкам.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | изменение файла |
| **Сервисы** | Mistral AI |
| **Узлов в схеме** | 10 |
| **Нужные учётные данные** | `mistralCloudApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Step 1. Select the target folder
[Read more about local file trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.localfiletrigger)

In this workflow, we'll monitor a specific folder on disk that n8n has access to. Since we're using docker, we can either use the n8n volume or mount a folder from the host machine.

The local file trigger is useful to execute the workflow whenever changes are made to our target folder.

## Step 2. Identify files that need to be organised
[Read more about Execute Command node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executecommand)

For all Files in the root level of our selected target folder, we want them to be sorted and moved into categorised subdirectories. In this step, we'll use linux commands to get a list of files and folders currently present in the target folder.

## Step 3. Using Mistral AI to organise our target folder
[Read more about Mistral AI](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatmistralcloud)

Using Mistral AI as our AI file manager, it can help us suggest which files go into which categorised subdirectory. If the subdirectory doesn't exist, Mistral can also suggest one to be created.

## Step 4. Move the files into subdirectories
[Read more about Execute Command node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executecommand)

For this step, we'll use the execute command node to execute a shellscript to move the files into their respective subdirectories.

## Try It Out!
### This workflow does the following:
* Monitors a target folder for changes using the local file trigger
* identifies all files and subdirectories in the target folder and passes this to Mistral AI
* Mistral AI suggests where to move top level files into which subdirectories. It can also suggest subdirectories tp create if none are suitable.
* Finally, we take the AI's suggestions are perform the move operations using the execute command node.

### Need Help?
Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

### 🚨 Warning! Potential destructive operations ahead!
This workflow manipulates the filesystem. Always make backups of your files before running local workflows.

</details>
