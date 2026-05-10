import { useState, useEffect } from 'react';
import { fetchNews } from '../services/news-service';

export const useNews = (categories) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!categories || categories.length === 0) return;

        let cancelled = false;
        setLoading(true);
        setError(null);

        fetchNews(categories)
            .then(data => { if (!cancelled) setArticles(data); })
            .catch(() => { if (!cancelled) setError('Could not load news. Try again later.'); })
            .finally(() => { if (!cancelled) setLoading(false); });

        return () => { cancelled = true; };
    }, [categories.join(',')]);

    return { articles, loading, error };
};
