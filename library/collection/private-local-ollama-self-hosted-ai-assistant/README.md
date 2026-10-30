# 🗨️Ollama Chat

> Простой чат с моделью Ollama, возвращающий структурированный JSON.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | чат |
| **Сервисы** | Ollama |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `ollamaApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# 🦙 Ollama Chat Workflow

A simple N8N workflow that integrates Ollama LLM for chat message processing and returns a structured JSON object.

## Overview
This workflow creates a chat interface that processes messages using the Llama 3.2 model through Ollama. When a chat message is received, it gets processed through a basic LLM chain and returns a response.

## Components
- **Trigger Node**
- **Processing Node**
- **Model Node**
- **JSON to Object Node**
- **Structured Response Node**
- **Error Response Node**

## Workflow Structure
1. The chat trigger node receives incoming messages
2. Messages are passed to the Basic LLM Chain
3. The Ollama Model processes the input using Llama 3.2
4. Responses are returned through the chain

## Prerequisites
- N8N installation
- Ollama setup with Llama 3.2 model
- Valid Ollama API credentials

## Configuration
1. Set up the Ollama API credentials in N8N
2. Ensure the Llama 3.2 model is available in your Ollama installation

## Model Node
- Name: Ollama Model
- Type: LangChain Ollama Integration
- Model: llama3.2:latest
- Purpose: Provides the language model capabilities

## Trigger Node
- Name: When chat message received
- Type: Chat Trigger
- Purpose: Initiates the workflow when a new chat message arrives

## Processing Node
- Name: Basic LLM Chain
- Type: LangChain LLM Chain
- Purpose: Handles the processing of messages through the language model and returns a structured JSON object.

### Prompt (Change this for your use case)
Provide the users prompt and response as a JSON object with two fields:
- Prompt
- Response


Avoid any preample or further explanation.
This is the question: {{ $json.chatInput }}

## JSON to Object Node
- Type: Set Node
- Purpose: A node designed to transform and structure response data in a specific format before sending it through the workflow. It operates in manual mapping mode to allow precise control over the response format.

**Key Features**
- Manual field mapping capabilities
- Object transformation and restructuring
- Support for JSON data formatting
- Field-to-field value mapping
- Includes option to add additional input fields

## Structured Response Node
- Type: Set Node
- Purpose: Controls how the workflow responds to users chat prompt.

**Response Mode**
- Manual Mapping: Allows custom formatting of response data
- Fields to Set: Specify which data fields to include in response

## Error Response Node
- Type: Set Node
- Purpose: Handles error cases when the Basic LLM Chain fails to process the chat message properly. It provides a fallback response mechanism to ensure the workflow remains robust.

**Key Features**
- Provides default error messaging
- Maintains consistent response structure
- Connects to the error output branch of the LLM Chain
- Ensures graceful failure handling

The Error Response node activates when the main processing chain encounters issues, ensuring users always receive feedback even when errors occur in the language model processing.

</details>
