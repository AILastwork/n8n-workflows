// Router: pick source by current MSK time (container TZ=Europe/Moscow)
const SOURCES = [
  {"name":"OpenAI","url":"https://openai.com/news/rss.xml"},
  {"name":"Google AI","url":"https://blog.google/technology/ai/rss/"},
  {"name":"Anthropic","url":"https://www.anthropic.com/news/rss.xml"},
  {"name":"Hugging Face","url":"https://huggingface.co/blog/feed.xml"},
  {"name":"GitHub Changelog","url":"https://github.blog/changelog/feed/"},
  {"name":"TechCrunch AI","url":"https://techcrunch.com/category/artificial-intelligence/feed/"},
  {"name":"The Verge","url":"https://www.theverge.com/rss/index.xml"},
  {"name":"Habr Develop","url":"https://habr.com/ru/rss/flows/develop/all/?fl=ru"},
  {"name":"The Hacker News","url":"https://feeds.feedburner.com/TheHackersNews"},
  {"name":"Krebs Security","url":"https://krebsonsecurity.com/feed/"},
  {"name":"Bleeping Comp","url":"https://www.bleepingcomputer.com/feed/"},
  {"name":"Habr Admin","url":"https://habr.com/ru/rss/flows/admin/all/?fl=ru"},
  {"name":"Kubernetes","url":"https://kubernetes.io/feed.xml"},
  {"name":"Docker","url":"https://www.docker.com/blog/feed/"},
];
// Слоты 9:00, 9:30 … 22:30 — по одному на каждый запуск cron `0,30 9-22 * * *`.
// Слот определяется по началу получаса, а не по допуску ±5 минут: запуск,
// задержавшийся в очереди n8n, всё равно попадёт в свой слот, а не пропадёт.
const FIRST_HOUR = 9, LAST_HOUR = 22;
const now = new Date();
const h = now.getHours();
if (h < FIRST_HOUR || h > LAST_HOUR) return [];
const idx = (h - FIRST_HOUR) * 2 + (now.getMinutes() >= 30 ? 1 : 0);
const src = SOURCES[idx % SOURCES.length];
return [{ json: { url: src.url, sourceName: src.name, slotIndex: idx } }];
