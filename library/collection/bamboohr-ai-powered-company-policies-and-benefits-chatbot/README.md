# BambooHR AI-Powered Company Policies and Benefits Chatbot

> ИИ-чат-бот по политикам и льготам компании из BambooHR, умеет искать сотрудников.

| | |
|---|---|
| **Категория** | [🤖 Сборная 300+ (ИИ и контент)](../README.md) |
| **Запуск** | вручную, вызов из другого воркфлоу, чат |
| **Сервисы** | BambooHR, OpenAI, Supabase |
| **Узлов в схеме** | 39 |
| **Нужные учётные данные** | `bambooHrApi`, `openAiApi`, `supabaseApi` |

## Как запустить

1. Скачайте [`workflow.json`](workflow.json) (кнопка **Download raw file** на GitHub).
2. В n8n: **Workflows → Import from File** и выберите файл.
3. Откройте узлы с учётными данными и подключите свои — ключей в файле нет.
4. Проверьте параметры узлов (адреса, id таблиц, чатов и т. п.) под себя и включите воркфлоу.

<details>
<summary>Оригинальное описание автора (англ.)</summary>

## STEP #1: Retrieve company policies and load them into a vector store

## BambooHR AI-Powered HR Benefits and Company Policies Chatbot

## (Optional) STEP #2: Set up employee lookup tool

Toggle **off** the _simplify_ option to ensure categories are retrieved as well

This employee lookup tool gives the AI Benefits and Company Policies chatbot additional superpowers by allowing it to **search for an individual or a department to retrieve contact information from BambooHR**.

### AI Chatbot Operating Guidelines 
- When an employee asks for a contact person, first attempt to find the relevant contact in company_files. 
- If a contact person is found but their details (e.g., email or phone number) are missing, use the `employee_lookup_tool` to retrieve their contact details. 
- If no contact person is found: 
 1. Use the `employee_lookup_tool` with "HR" (or another relevant department) to retrieve the most senior person in that department. 
 2. If no senior contact is found, ask the employee for their name. 
 3. Use the `employee_lookup_tool` to retrieve their supervisor’s name. 
 4. Use the `employee_lookup_tool` to retrieve their supervisor’s details. 
 5. Provide the supervisor's contact information and recommend them as the best next point of contact.

### GetAll employees from BambooHR
BambooHR does not offer search by {field} functionality for its `/employees` endpoint, so filtering must be done after data retrieval. This can be inefficient for very large organizations where there may be multiple employees with the same name or simply a large number of employees.

### GET singular employee by name path
This path may be used multiple times by the HR AI Agent to look up the employee's details, and then to look up their supervisor's details.

### GET senior leader of department path
This path would normally only be used when no other contacts can be identified from the company_files. The employee can retrieve the contact details for the most senior leader of a department should they request it.

### Final node returns employee name
The AI Agent can then call the employee lookup path to retrieve details, if requested.

## About the maker
**[Find Ludwig Gerdes on LinkedIn](https://www.linkedin.com/in/ludwiggerdes)**

</details>
