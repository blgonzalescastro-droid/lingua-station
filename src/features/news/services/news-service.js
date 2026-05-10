const API_KEY = import.meta.env.VITE_NEWSDATA_KEY;
const BASE_URL = 'https://newsdata.io/api/1/latest';

export const fetchNews = async (categories = []) => {
    const params = new URLSearchParams({
        apikey: API_KEY,
        language: 'en',
    });

    if (categories.length > 0) {
        params.set('category', categories.join(','));
    }

    const res = await fetch(`${BASE_URL}?${params}`);
    if (!res.ok) throw new Error('Failed to fetch news');
    const data = await res.json();
    return data.results ?? [];
};
