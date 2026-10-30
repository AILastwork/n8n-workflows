# Create update and get a document in google cloud firestore

> Создаёт, обновляет и получает документ в Google Cloud Firestore.

| | |
|---|---|
| **Категория** | [🔗 Интеграция данных](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Firestore |
| **Узлов в схеме** | 6 |
| **Нужные учётные данные** | `googleFirebaseCloudFirestoreOAuth2Api` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow creates a new document in a Google Cloud Firestore database, updates the document with additional data, and then retrieves the updated document.

Example: A small business owner could use this workflow to create and manage customer records in their Google Cloud Firestore database. When a new customer is added, the workflow would create a new document with the customer's ID and name. The workflow would then update the document with additional information, such as the customer's address or contact details. Finally, the workflow would retrieve the updated document, allowing the business owner to access the complete customer record.

## What You Can Do
- Automatically creates a new document in a Google Cloud Firestore database
- Updates the document with additional data, such as a document ID and a new name
- Retrieves the updated document, allowing for further processing or display

</details>
