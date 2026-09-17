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
const SLOTS = [];
for (let hr = 9; hr <= 22; hr++) { SLOTS.push([hr,0]); SLOTS.push([hr,30]); }
const now = new Date();
const h = now.getHours();
const m = now.getMinutes();
let idx = -1;
for (let i = 0; i < SLOTS.length; i++) {
  if (SLOTS[i][0] === h && Math.abs(SLOTS[i][1] - m) <= 5) { idx = i; break; }
}
if (idx < 0) return [];
const src = SOURCES[idx % SOURCES.length];
return [{ json: { url: src.url, sourceName: src.name, slotIndex: idx } }];
