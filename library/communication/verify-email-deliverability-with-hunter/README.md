# Verify email deliverability with hunter

> Проверяет, существует ли e-mail адрес, через Hunter.

| | |
|---|---|
| **Категория** | [💬 Коммуникация](../README.md) |
| **Запуск** | вручную |
| **Сервисы** | Hunter |
| **Узлов в схеме** | 2 |
| **Нужные учётные данные** | `hunterApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

This workflow allows users to verify the validity of an email address using the Hunter email verification API.

Example: A marketing team can use this workflow to quickly validate email addresses before sending out a mass email campaign, ensuring higher deliverability and reducing bounce rates.

## What You Can Do
- Manually triggered execution for on-demand email verification
- Integration with the Hunter email verification API to check the status of an email address
- Ability to specify the email address to be verified

</details>
