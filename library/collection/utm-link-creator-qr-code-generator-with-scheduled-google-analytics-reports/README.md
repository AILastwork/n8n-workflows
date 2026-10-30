# UTM Link Creator & QR Code Generator with Scheduled Google Analytics Reports

> Создаёт UTM-ссылки и QR-коды, хранит их в Airtable и присылает отчёты Google Analytics по расписанию.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, по расписанию |
| **Сервисы** | Airtable, Gmail, Google Analytics, OpenAI |
| **Узлов в схеме** | 11 |
| **Нужные учётные данные** | `airtableTokenApi`, `gmailOAuth2`, `googleAnalyticsOAuth2`, `openAiApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

Create a marketing link with UTM parameters. Easily store in database and have QR code created and ready as well.

Type in requirements:
website URL
campaign id
campaign source
campaign medium
campaign name
campaign term

Code node creates the URL with UTM parameters. 

It then sends to your Airtable database to store for records. It also creates a QR code with the embedded link to be used for materials. 

Sample Airtable Setup:
-Website Link UTM column

Schedule a Google Analytics Reports with Medium/Source to track UTM link performance. Update the reporting fields to fit your business needs. You can track traffic, conversions and other engagement metrics.

*Sample Google Report Metrics: Sessions. Update metrics as needed.

</details>
