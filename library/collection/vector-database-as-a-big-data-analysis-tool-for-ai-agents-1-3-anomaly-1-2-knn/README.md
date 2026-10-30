# [1/3 - anomaly detection] [1/2 - KNN classification] Batch upload dataset to Qdrant (crops dataset)

> Загружает датасет изображений (сельхозкультуры) из Google Cloud Storage в Qdrant — подготовка для поиска аномалий и KNN.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Google Cloud Storage |
| **Узлов в схеме** | 13 |
| **Нужные учётные данные** | `googleCloudStorageOAuth2Api`, `httpHeaderAuth`, `qdrantApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

In the next workflow, we're going to use Qdrant to get the number of images belonging to each crop type defined by `crop_name` (for example, *"cucumber"*). 
To get this information about counts in payload fields, we need to create an index on that field to optimise the resources (it needs to be done once). That's what is happening here

Setting up variables
1) Cloud URL - to connect to Qdrant Cloud (your personal cluster URL)
2) Collection name in Qdrant
3) Size of Voyage embeddings (needed for collection creation in Qdrant) <this one should not be changed unless the embedding model is changed>
4) Batch size for batch embedding/batch uploading to Qdrant

In Qdrant, you can create a collection once; if you try to create it two times with the same name, you'll get an error, so I am adding here a check if a collection with this name exists already

If a collection with the name set up in variables doesn't exist yet, I create an empty one; 

Collection will contain [named vectors](https://qdrant.tech/documentation/concepts/vectors/#named-vectors), with a name *"voyage"*
For these named vectors, I define two parameters:
1) Vectors size (in our case, Voyage embeddings size)
2) Similarity metric to compare embeddings: in our case, **"Cosine"**.

Now it's time to embed & upload to Qdrant our image datasets;
Both of them, [crops](https://www.kaggle.com/datasets/mdwaquarazam/agricultural-crops-image-classification) and [lands](https://www.kaggle.com/datasets/apollo2506/landuse-scene-classification) were uploaded to our Google Cloud Storage bucket, and in this workflow we're fetching **the crops dataset** (for lands it will be a nearly identical workflow, up to variable names)
(you should replace it with your image datasets)

Datasets consist of **image URLs**; images are grouped by folders based on their class. For example, we have a system of subfolders like *"tomato"* and *"cucumber"* for the crops dataset with image URLs of the respective class.

Google Storage node returns **mediaLink**, which can be used directly for downloading images; however, we just need a public image URL so that Voyage API can process it; so here we construct this public link and extract a crop name from the folder in which image was stored (for example, *"cucumber"*)

I regroup images into batches of `batchSize` size and, to make batch upload to Qdrant possible, generate UUIDs to use them as batch [point IDs](https://qdrant.tech/documentation/concepts/points/#point-ids) (Qdrant doesn't set up id's for the user; users have to choose them themselves)

Since we build anomaly detection based on the crops dataset, to test it properly, I didn't upload to Qdrant pictures of tomatoes at all; I filter them out here

Since Voyage API requires a [specific json structure](https://docs.voyageai.com/reference/multimodal-embeddings-api) for batch embeddings, as does [Qdrant's API for uploading points in batches](https://api.qdrant.tech/api-reference/points/upsert-points), I am adapting the structure of jsons

[NB] - [payload = meta data in Qdrant]

Embedding images with Voyage model (mind `input_type`)

## Batch Uploading Dataset to Qdrant 
### This template imports dataset images from storage, creates embeddings for them in batches, and uploads them to Qdrant in batches. In this particular template, we work with [crops dataset](https://www.kaggle.com/datasets/mdwaquarazam/agricultural-crops-image-classification). However, it's analogous to [lands dataset](https://www.kaggle.com/datasets/apollo2506/landuse-scene-classification), and in general, it's adaptable to any dataset consisting of image URLs (as the following pipelines are).

* First, check for an existing Qdrant collection to use; otherwise, create it here. Additionally, when creating the collection, we'll create a [payload index](https://qdrant.tech/documentation/concepts/indexing/#payload-index), which is required for a particular type of Qdrant requests we will use later.
* Next, import all (dataset) images from Google Storage but keep only non-tomato-related ones (for anomaly detection testing).
* Create (per batch) embeddings for all imported images using the Voyage AI multimodal embeddings API.
* Finally, upload the resulting embeddings and image descriptors to Qdrant via batch uploading.

### For anomaly detection
**1. This is the first pipeline to upload (crops) dataset to Qdrant's collection.**
2. The second pipeline is to set up cluster (class) centres in this Qdrant collection & cluster (class) threshold scores.
3. The third is the anomaly detection tool, which takes any image as input and uses all preparatory work done with Qdrant (crops) collection.

### For KNN (k nearest neighbours) classification
**1. This is the first pipeline to upload (lands) dataset to Qdrant's collection.**
2. The second is the KNN classifier tool, which takes any image as input and classifies it based on queries to the Qdrant (lands) collection.

### To recreate both
You'll have to upload [crops](https://www.kaggle.com/datasets/mdwaquarazam/agricultural-crops-image-classification) and [lands](https://www.kaggle.com/datasets/apollo2506/landuse-scene-classification) datasets from Kaggle to your own Google Storage bucket, and re-create APIs/connections to [Qdrant Cloud](https://qdrant.tech/documentation/quickstart-cloud/) (you can use **Free Tier** cluster), Voyage AI API & Google Cloud Storage

**In general, pipelines are adaptable to any dataset of images**

</details>
