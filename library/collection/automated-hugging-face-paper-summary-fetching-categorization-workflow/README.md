# [3/3] Anomaly detection tool (crops dataset)

> Инструмент поиска аномалий в изображениях (датасет сельхозкультур) через векторную базу Qdrant, часть 3/3.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вызов из другого воркфлоу |
| **Сервисы** | только встроенные узлы n8n |
| **Узлов в схеме** | 9 |
| **Нужные учётные данные** | `httpHeaderAuth`, `qdrantApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

We are working here with crops dataset: 
Existing (so not anomalies) crops images in dataset are:
- 'pearl_millet(bajra)',
- 'tobacco-plant',
- 'cherry',
- 'cotton',
- 'banana',
- 'cucumber',
- 'maize',
- 'wheat',
- 'clove',
- 'jowar',
- 'olive-tree',
- 'soyabean',
- 'coffee-plant',
- 'rice',
- 'lemon',
- 'mustard-oil',
- 'vigna-radiati(mung)',
- 'coconut',
- 'gram',
- 'pineapple',
- 'sugarcane',
- 'sunflower',
- 'chilli',
- 'fox_nut(makhana)',
- 'jute',
- 'papaya',
- 'tea',
- 'cardamom',
- 'almond'

## Crop Anomaly Detection Tool
### This is the tool that can be used directly for anomalous crops detection. 
It takes as input (any) **image URL** and returns a **text message** telling if whatever this image depicts is anomalous to the crop dataset stored in Qdrant. 

* An Image URL is received via the Execute Workflow Trigger which is used to generate embedding vectors via the Voyage.ai Embeddings API.
* The returned vectors are used to query the Qdrant collection to determine if the given crop is known by comparing it to **threshold scores** of each image class (crop type).
* If the image scores lower than all thresholds, then the image is considered an anomaly for the dataset.

**clusterCenterType** - either
* "is_text_anchor_medoid" or
* "is_medoid"


**clusterThresholdCenterType** - either
* "is_text_anchor_medoid_cluster_threshold" or
* "is_medoid_cluster_threshold"

Variables to access Qdrant's collection we uploaded & prepared for anomaly detection in 2 previous pipelines

These three nodes are needed just to figure out how many different classes (crops) we have in our Qdrant collection: **cropsNumber** (needed in *"Get similarity of medoids"* node. 
[Note] *"Total Points in Collection"* -> *"Each Crop Counts"* were used&explained already in *"[2/4] Set up medoids (2 types) for anomaly detection (crops dataset)"* pipeline.

Here, we're embedding the image passed to this workflow tool with the Voyage embedding model to compare the image to all crop images in the database.

Checking how similar the image is to all the centres of clusters (crops).
If it's more similar to the thresholds we set up and stored in centres in the previous workflow, the image probably belongs to this crop class; otherwise, it's anomalous to the class. 
If image is anomalous to all the classes, it's an anomaly.

### For anomaly detection
1. The first pipeline is uploading (crops) dataset to Qdrant's collection.
2. The second pipeline sets up cluster (class) centres in this Qdrant collection & cluster (class) threshold scores.
3. **This is the anomaly detection tool, which takes any image as input and uses all preparatory work done with Qdrant (crops) collection.**

### To recreate it
You'll have to upload [crops](https://www.kaggle.com/datasets/mdwaquarazam/agricultural-crops-image-classification) dataset from Kaggle to your own Google Storage bucket, and re-create APIs/connections to [Qdrant Cloud](https://qdrant.tech/documentation/quickstart-cloud/) (you can use **Free Tier** cluster), Voyage AI API & Google Cloud Storage

**In general, pipelines are adaptable to any dataset of images**

</details>
