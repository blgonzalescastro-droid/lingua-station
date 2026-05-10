const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const BASE_URL = 'https://ted-talks-api.p.rapidapi.com';
const HEADERS = {
    'x-rapidapi-host': 'ted-talks-api.p.rapidapi.com',
    'x-rapidapi-key': API_KEY,
};

const talksCache = new Map();
const topicsCache = { data: null };
const langsCache = { data: null };

const request = async (url) => {
    const res = await fetch(url, { headers: HEADERS });
    if (res.status === 429) throw new Error('RATE_LIMIT');
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
};

export const fetchTalks = async ({ topic, subtitleLang } = {}) => {
    const key = `${topic ?? '_'}:${subtitleLang ?? 'en'}`;
    if (talksCache.has(key)) return talksCache.get(key);

    const params = new URLSearchParams({ audio_lang: 'en' });
    if (topic) params.set('topic', topic);
    if (subtitleLang && subtitleLang !== 'en') params.set('subtitle_lang', subtitleLang);

    const data = await request(`${BASE_URL}/talks?${params}`);
    const results = data?.result?.results ?? [];
    talksCache.set(key, results);
    return results;
};

export const fetchTopics = async () => {
    if (topicsCache.data) return topicsCache.data;
    const data = await request(`${BASE_URL}/topics`);
    topicsCache.data = data?.result?.results ?? [];
    return topicsCache.data;
};

export const fetchSubtitleLanguages = async () => {
    if (langsCache.data) return langsCache.data;
    const data = await request(`${BASE_URL}/subtitle_languages`);
    langsCache.data = data?.result?.results ?? [];
    return langsCache.data;
};
