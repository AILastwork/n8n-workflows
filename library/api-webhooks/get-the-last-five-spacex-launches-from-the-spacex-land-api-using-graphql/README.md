# Get the last five spacex launches from the spacex land api using graphql

> Получает через GraphQL данные о пяти последних запусках SpaceX: миссии, площадки, ракеты.

| | |
|---|---|
| **Категория** | [🌐 API и вебхуки](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | GraphQL |
| **Узлов в схеме** | 2 |
| **Нужные учётные данные** | не требуются |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Учётные данные не нужны — можно сразу запускать.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow retrieves the details of the 5 most recent SpaceX launches, providing valuable information about the missions, launch sites, rockets, and associated ships.

Example: A space enthusiast or journalist could use this workflow to quickly gather and display the latest launch information from SpaceX, enabling them to stay up-to-date on the company's activities and share the details with their audience.

## What You Can Do
- Retrieves the mission name, launch date, launch site, article and video links, rocket details, and associated ships for the 5 most recent SpaceX launches.
- Utilizes a GraphQL API to efficiently fetch the desired data.
- Allows for easy integration with other tools or platforms to further process or display the launch information.

</details>
