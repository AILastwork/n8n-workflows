# Convert the json data received from the cocktaildb api in xml

> Конвертирует JSON-ответ TheCocktailDB API в XML.

| | |
|---|---|
| **Категория** | [🔄 Преобразование данных](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 3 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow retrieves a random cocktail recipe from an API and converts the response to XML format.

Example: A bartender or cocktail enthusiast could use this workflow to quickly generate a random cocktail recipe, which could be useful for inspiration or to try new drinks.

## What You Can Do
- Triggered manually by the user clicking "execute"
- Fetches a random cocktail recipe from an API
- Converts the API response from JSON to XML format

</details>
