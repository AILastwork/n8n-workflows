# [2/2] KNN classifier (lands dataset)

> KNN-классификатор спутниковых снимков типов земель через Qdrant, часть 2/2.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вызов из другого воркфлоу |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 10 |
| **Нужные учётные данные** | `httpHeaderAuth`, `qdrantApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

Here we're classifying existing types of satellite imagery of land types:
- 'agricultural',
- 'airplane',
- 'baseballdiamond',
- 'beach',
- 'buildings',
- 'chaparral',
- 'denseresidential',
- 'forest',
- 'freeway',
- 'golfcourse',
- 'harbor',
- 'intersection',
- 'mediumresidential',
- 'mobilehomepark',
- 'overpass',
- 'parkinglot',
- 'river',
- 'runway',
- 'sparseresidential',
- 'storagetanks',
- 'tenniscourt'

I tested this KNN classifier on a whole `test` set of a dataset (it's not a part of the collection, only `validation` + `train` parts). Accuracy of classification on `test` is **93.24%**, no fine-tuning, no metric learning.

## KNN classification workflow-tool
### This n8n template takes an image URL (as anomaly detection tool does), and as output, it returns a class of the object on the image (out of land types list)

* An image URL is received via the Execute Workflow Trigger, which is then sent to the Voyage.ai Multimodal Embeddings API to fetch its embedding.
* The image's embedding vector is then used to query Qdrant, returning a set of X similar images with pre-labeled classes.
* Majority voting is done for classes of neighbouring images.
* A loop is used to resolve scenarios where there is a tie in Majority Voting (for example, we have 5 "forest" and 5 "beach"), and we increase the number of neighbours to retrieve.
* When the loop finally resolves, the identified class is returned to the calling workflow.

Variables define another Qdrant's collection with landscapes (uploaded similarly as the crops collection, don't forget to switch it with your data) + amount of neighbours **limitKNN** in the database we'll use for an input image classification.

Similarly to anomaly detection tool, we're embedding input image with the Voyage model

## Tie loop
Here we're [querying](https://api.qdrant.tech/api-reference/search/query-points) Qdrant, getting **limitKNN** nearest neighbours to our image <*Query Qdrant node*>, parsing their classes from payloads (images were pre-labeled & uploaded with their labels to Qdrant) & calculating the most frequent class name <*Majority Vote node*>. If there is a tie <*check tie node*> in 2 most common classes, for example, we have 5 "forest" and 5 "harbor", we repeat the procedure with the number of neighbours increased by 5 <*propagate loop variables node* and *increase limitKNN node*>.
If there is no tie, or we have already checked 100 neighbours, we exit the loop <*check tie node*> and return the class-answer.

Here, we extract the name of the input image class decided by the Majority Vote

### KNN (k nearest neighbours) classification
1. The first pipeline is uploading (lands) dataset to Qdrant's collection.
2. **This is the KNN classifier tool, which takes any image as input and classifies it based on queries to the Qdrant (lands) collection.**

### To recreate it
You'll have to upload [lands](https://www.kaggle.com/datasets/apollo2506/landuse-scene-classification) dataset from Kaggle to your own Google Storage bucket, and re-create APIs/connections to [Qdrant Cloud](https://qdrant.tech/documentation/quickstart-cloud/) (you can use **Free Tier** cluster), Voyage AI API & Google Cloud Storage

**In general, pipelines are adaptable to any dataset of images**

</details>
