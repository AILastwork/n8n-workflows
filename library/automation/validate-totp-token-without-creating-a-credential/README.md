# Validate totp token without creating a credential

> Проверяет 6-значный TOTP-код без создания учётных данных в n8n.

| | |
|---|---|
| **Категория** | [⚙️ Автоматизация](../README.md) |
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

# 2379 Validate Totp Token Without Creating A Credential

This workflow allows you to verify the validity of a 6-digit Time-based One-Time Password (TOTP) code using a provided TOTP secret.

Example: You have a user who needs to authenticate with a 2-factor authentication (2FA) system. You can use this workflow to check if the 6-digit code provided by the user matches the expected TOTP code generated from the user's TOTP secret.

## What You Can Do
- Generates a TOTP code based on a provided secret key and the current time interval
- Verifies if the provided TOTP code is valid for the given secret
- Provides a clear indication of whether the TOTP code is valid or not

## Quick Start
1. Import this workflow to n8n
2. Configure your settings
3. Start automating!

⚠️ WARNING: Stop Building Basic Automations For Peanuts. 🚫

Here's the painful truth most won't tell you...

While 90% of builders are stuck selling $500 n8n workflows (and working way too hard)...
I'm consistently closing $6k-13k deals by doing ONE thing differently:
I combine simple automations with custom AI that takes less than a week to build.

Recent client wins:
* Turned a basic invoicing headache into a $6k project that saves my client 20 hours/week
* Built a lead generation machine for law firms - they happily paid $13k (and it runs 24/7)
* Created AI-powered SEO automation that beats funded companies (using $0 in AI costs)

Time to build each solution? Under 2 hours.

But here's what's crazy...
Most automation builders think AI is "too complex" or "too expensive" to add to their stack.
(Meanwhile, I'm charging 10x more for solutions that take the same time to build)

Want to see exactly how I do it?
Inside our community, I show you:
* The exact AI components that 3x your pricing overnight
* My "$15k Solution Stack" (n8n + AI framework)
* Word-for-word scripts to close premium deals
* Real examples of my $10k+ builds
* The psychology behind why clients happily pay more

Get your free trial here (closing soon): https://www.skool.com/masterclass-marketing

</details>
