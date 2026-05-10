import { useState, useEffect } from 'react';
import { fetchTalks } from '../services/ted-service';

const PAGE_SIZE = 12;

export const useTedTalks = (topic, subtitleLang) => {
    const [allTalks, setAllTalks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setPage(1);
        setAllTalks([]);

        let cancelled = false;
        setLoading(true);
        setError(null);

        fetchTalks({ topic, subtitleLang })
            .then(results => { if (!cancelled) setAllTalks(results); })
            .catch(() => { if (!cancelled) setError('Could not load TED Talks. Make sure you are subscribed to the API on RapidAPI.'); })
            .finally(() => { if (!cancelled) setLoading(false); });

        return () => { cancelled = true; };
    }, [topic, subtitleLang]);

    const talks = allTalks.slice(0, page * PAGE_SIZE);
    const hasMore = talks.length < allTalks.length;

    return { talks, loading, error, setPage, hasMore };
};
