#!/usr/bin/env python3
"""Выгружает воркфлоу из n8n в репозиторий, вычищая чувствительное.

Запуск: python3 export_workflows.py [--check]
  --check  ничего не пишет, только проверяет содержимое репозитория
           на секреты и внутренние идентификаторы (используется pre-commit хуком)

Что вычищается:
  - блоки credentials.<тип>.data (значения ключей) — остаются только id/name
  - pinData (может содержать реальные ответы API)
  - изменчивые поля (updatedAt, versionId) — чтобы не было шумных диффов
  - приватные идентификаторы чатов заменяются на понятные плейсхолдеры

Настройки окружения (для чужого сервера):
  N8N_URL           адрес API n8n, по умолчанию http://127.0.0.1:5678/api/v1
  N8N_SECRETS_FILE  файл со строкой N8N_API_KEY=...
  N8N_API_KEY       ключ напрямую, в обход файла
"""
import json, re, sys, os, urllib.request, urllib.error

REPO = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(REPO, 'workflows')

N8N = os.environ.get('N8N_URL', 'http://127.0.0.1:5678/api/v1')
SECRETS = os.environ.get('N8N_SECRETS_FILE',
                         os.path.expanduser('~/.config/hermes-reports/secrets.env'))

# Воркфлоу, которые выгружаем: id -> имя файла
TARGETS = {
    'nscEU2gaItJmgYN6': 'my-itnews-autopost.json',
}

# Приватные значения -> плейсхолдер. Публичный канал не скрываем: он и так открыт.
# Значения берутся из окружения, чтобы сам скрипт не содержал приватных id.
REDACTIONS = {}
_ops_chat = os.environ.get('OPS_GROUP_CHAT_ID', '')
if _ops_chat:
    REDACTIONS[_ops_chat] = '<OPS_GROUP_CHAT_ID>'

# Шаблоны, которых в репозитории быть не должно ни при каких условиях.
SECRET_PATTERNS = {
    'telegram bot token': re.compile(r'\d{9,10}:AA[\w-]{30,}'),
    'openrouter key': re.compile(r'sk-or-v1-[a-f0-9]{20,}'),
    'yandex oauth token': re.compile(r'y0_[\w-]{20,}'),
    'groq key': re.compile(r'gsk_[A-Za-z0-9]{20,}'),
    'jwt / n8n api key': re.compile(r'eyJ[\w-]{10,}\.[\w-]{10,}\.[\w-]{10,}'),
    'private key block': re.compile(r'BEGIN [A-Z ]*PRIVATE KEY'),
    'openai key': re.compile(r'sk-[A-Za-z0-9]{32,}'),
    'приватный id чата': re.compile(r'-100\d{10}(?<!1003895715777)'),
    'внутренний LAN-адрес': re.compile(r'192\.168\.\d{1,3}\.\d{1,3}'),
    'путь на сервере': re.compile(r'/home/[a-z]+/'),
}

VOLATILE = ('updatedAt', 'createdAt', 'versionId', 'triggerCount',
            'shared', 'homeProject', 'scopes', 'tags')

SKIP_DIRS = {'.git', '__pycache__'}


def load_key():
    if os.environ.get('N8N_API_KEY'):
        return os.environ['N8N_API_KEY']
    try:
        for line in open(SECRETS, errors='ignore'):
            if line.startswith('N8N_API_KEY='):
                return line.strip().split('=', 1)[1]
    except FileNotFoundError:
        pass
    sys.exit(f'N8N_API_KEY не найден: задайте переменную окружения или файл {SECRETS}')


def fetch(wf_id, key):
    req = urllib.request.Request(f'{N8N}/workflows/{wf_id}',
                                 headers={'X-N8N-API-KEY': key, 'Accept': 'application/json'})
    try:
        return json.load(urllib.request.urlopen(req, timeout=60))
    except urllib.error.HTTPError as e:
        sys.exit(f'n8n HTTP {e.code}: {e.read().decode("utf-8", "ignore")[:200]}')
    except urllib.error.URLError as e:
        sys.exit(f'n8n недоступен по {N8N}: {e}')


def sanitize(wf):
    wf = json.loads(json.dumps(wf))
    for f in VOLATILE:
        wf.pop(f, None)
    wf.pop('pinData', None)
    for node in wf.get('nodes', []):
        node.pop('pinData', None)
        creds = node.get('credentials') or {}
        for cname, cval in creds.items():
            if isinstance(cval, dict):
                # оставляем только ссылку, значения ключей не выгружаем
                creds[cname] = {k: v for k, v in cval.items() if k in ('id', 'name')}
    return wf


def redact(text):
    for real, placeholder in REDACTIONS.items():
        text = text.replace(real, placeholder)
    return text


def scan(text, label):
    found = [name for name, pat in SECRET_PATTERNS.items() if pat.search(text)]
    if found:
        print(f'  ОПАСНО  {label}: {", ".join(found)}')
    return found


def check_repo():
    """Проверяет все файлы репозитория, включая сам скрипт.

    У скрипта пропускается только блок с регулярными выражениями — иначе он
    сработал бы на собственных шаблонах поиска. Всё остальное в нём
    проверяется наравне с прочими файлами: именно там однажды и осталась
    приватная строка.
    """
    problems = []
    self_name = os.path.basename(__file__)
    for root, dirs, files in os.walk(REPO):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        for fn in files:
            p = os.path.join(root, fn)
            rel = os.path.relpath(p, REPO)
            try:
                text = open(p, encoding='utf-8', errors='ignore').read()
            except Exception:
                continue
            if rel == self_name:
                text = '\n'.join(l for l in text.split('\n')
                                 if 're.compile(' not in l)
            problems += scan(text, rel)
    if problems:
        print('\nНАЙДЕНО ЧУВСТВИТЕЛЬНОЕ — публиковать нельзя')
        return 1
    print('  секретов и внутренних идентификаторов не найдено')
    return 0


def main():
    if '--check' in sys.argv:
        return check_repo()

    key = load_key()
    os.makedirs(OUT, exist_ok=True)
    failed = False
    for wf_id, fname in TARGETS.items():
        wf = sanitize(fetch(wf_id, key))
        text = redact(json.dumps(wf, ensure_ascii=False, indent=2) + '\n')
        if scan(text, fname):
            failed = True
            continue
        open(os.path.join(OUT, fname), 'w', encoding='utf-8').write(text)
        print(f'  записан {fname}: {len(wf.get("nodes", []))} узлов, '
              f'активен={wf.get("active")}')

    if failed:
        print('\nВЫГРУЗКА ПРЕРВАНА: в данных найдено чувствительное')
        return 1
    print('готово')
    return 0


if __name__ == '__main__':
    sys.exit(main())
