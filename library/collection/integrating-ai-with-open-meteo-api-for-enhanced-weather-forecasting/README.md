# Integrating AI with Open-Meteo API for Enhanced Weather Forecasting

> ИИ-агент прогноза погоды через Open-Meteo API (пример использования инструментов).

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | чат |
| **Сервисы** | OpenAI |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## Integrating AI with Open-Meteo API for Enhanced Weather Forecasting

## Use case

### Workshop

We are using this workflow in our workshops to teach how to use Tools a.k.a functions with artificial intelligence. In this specific case, we will use a generic "AI Agent" node to illustrate that it could use other models from different data providers.

### Enhanced Weather Forecasting

In this small example, it's easy to demonstrate how to obtain weather forecast results from the Open-Meteo site to accurately display the upcoming days.

This can be used to plan travel decisions, for example.

## What this workflow does

1. We will make an HTTP request to find out the geographic coordinates of a city.
2. Then, we will make other HTTP requests to discover the weather for the upcoming days.

In this workshop, we demonstrate that the AI will be able to determine which tool to call first—it will first call the geolocation tool and then the weather forecast tool. All of this within a single client conversation call.


## Setup

Insert an OpenAI Key and activate the workflow.

by Davi Saranszky Mesquita
https://www.linkedin.com/in/mesquitadavi/

## Create an Hosted Web Chat

### And setup the trigger!

Example: https://website/webhook/4a4..../chat

-


## Setup OpenAI Key

### Open Meteo SPEC - City Geolocation

This tool will go to the URL https://geocoding-api.open-meteo.com/v1/search to fetch the geolocation data of the city, and I only need to get the name of the city.

So, I will ask the user to input the name of the city and pass some pre-existing information, such as returning only the first city and returning in JSON format.

- name (By Model) - And placeholder - The parameter that the AI will need to fill in as required.

- count - 1 by default because I want only the first city.

- format - Putting JSON for no specific reason, but OpenAI could figure out how to process that information.

### Open Meteo SPEC - Weather Forecast

This tool will go to the Open Meteo site with the geolocation information at https://api.open-meteo.com/v1/forecast

It will pass the information on latitude, longitude, and the number of days for which it will bring data.

There are many default pieces of information within, but the focus is not to explain the Open Meteo API.

Variables like latitude, longitude, and forecast_days are self-explanatory for OpenAI, making it the easiest tool to configure.

- latitude (By Model) and Placeholder
- longitude (By Model) and Placeholder
- forecast_days (By Model) and Placeholder

## Within N8N, there will be a chat button to test, or you can use the external chat link from the trigger.

</details>
