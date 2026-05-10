const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const BASE_URL = 'https://ted-talks-api.p.rapidapi.com';
const HEADERS = {
    'x-rapidapi-host': 'ted-talks-api.p.rapidapi.com',
    'x-rapidapi-key': API_KEY,
    'Content-Type': 'application/json',
};

export const fetchTalks = async ({ topic, subtitleLang } = {}) => {
    const params = new URLSearchParams({ audio_lang: 'en' });
    if (topic) params.set('topic', topic);
    if (subtitleLang && subtitleLang !== 'en') params.set('subtitle_lang', subtitleLang);
    const res = await fetch(`${BASE_URL}/talks?${params}`, { headers: HEADERS });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    const data = await res.json();
    return data?.result?.results ?? [];
};

export const fetchTopics = async () => {
    const res = await fetch(`${BASE_URL}/topics`, { headers: HEADERS });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    const data = await res.json();
    return data?.result?.results ?? [];
};

export const fetchSubtitleLanguages = async () => {
    const res = await fetch(`${BASE_URL}/subtitle_languages`, { headers: HEADERS });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    const data = await res.json();
    return data?.result?.results ?? [];
};
