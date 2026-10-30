# Manipulate PDF with Adobe developer API

> Обёртка над Adobe PDF Services API: загрузка PDF, обработка и сохранение результата в Dropbox.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, вызов из другого воркфлоу |
| **Сервисы** | Dropbox |
| **Узлов в схеме** | 14 |
| **Нужные учётные данные** | `dropboxOAuth2Api`, `httpCustomAuth`, `httpHeaderAuth` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

# Adobe API Wrapper

See Adobe documentation:
- https://developer.adobe.com/document-services/docs/overview/pdf-services-api/howtos/
- https://developer.adobe.com/document-services/docs/overview/pdf-extract-api/gettingstarted/

In short, this workflow does the following steps :

- Authentication
- Upload an asset (pdf) to adobe
- Wait for the asset to be processed by Adobe
- Download the result

## Credential

Credentials are not "predefined" and you'll have to create 2 custom credentials, detailed in the workflow.

## Result

The result will depend on the transformation requested. It could be 1 of various files (json, zip...) accessible via download URL returned by the workflow.

Workflow can be tested with a PDF filed fetched with Dorpbox for example or any storage provider.

## Testing for development

## Wait for file do be processed

### 1- Credential for token request

Create a "Custom Auth" credential like this :

```
{
 "headers": {
 "Content-Type":"application/x-www-form-urlencoded"
 }, 
 "body" : {
 "client_id": "****", 
 "client_secret":"****"
 }
}
```

### 2- Credential for all other Queries

Create a "Header Auth" credential like this : 

```
X-API-Key: **** (same value as client_id)
```

## Workflow Input

- endpoint: splitpdf, extractpdf, ...
- json_payload : all endpoint payload except assetID which is handled in current workflow
- **PDF Data as n8n Binary**


### Example for **split** : 

```
{
 "endpoint": "splitpdf",
 "json_payload": {
 "splitoption": 
 { "pageRanges": [{"start": 1,"end": 2}]}
 }
 }
}
```

### Example for **extractpdf**

```
{
 "endpoint": "splitpdf",
 "json_payload": {
 "renditionsToExtract": [
 "tables"
 ],
 "elementsToExtract": [
 "text",
 "tables"
 ]
 }
}
```

</details>
