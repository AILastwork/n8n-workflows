# Store data received from webhook in json

> Получает случайный рецепт коктейля из API и сохраняет ответ в JSON-файл.

| | |
|---|---|
| **Категория** | [🌐 API и вебхуки](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 4 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow retrieves a random cocktail recipe from an API, converts the response to binary data, and saves it as a JSON file.

Example: A user could use this workflow to automatically download and save random cocktail recipes from an API, which could be useful for bartenders, cocktail enthusiasts, or anyone interested in exploring new drink recipes.

## What You Can Do
- Triggered by a manual click to execute the workflow
- Fetches a random cocktail recipe from the TheCocktailDB API
- Converts the API response from JSON to binary data and saves it as a JSON file

</details>
