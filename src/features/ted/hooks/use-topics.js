import { useState, useEffect } from 'react';
import { fetchTopics } from '../services/ted-service';

const slugToLabel = (slug) =>
    slug.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

const FALLBACK = ['technology', 'science', 'design', 'business', 'health', 'education', 'psychology', 'environment']
    .map(s => ({ slug: s, label: slugToLabel(s) }));

export const useTopics = () => {
    const [topics, setTopics] = useState(FALLBACK);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchTopics()
            .then(results => {
                if (results.length > 0) {
                    setTopics(results.map(t => ({ slug: t.slug, label: slugToLabel(t.slug) })));
                }
            })
            .catch(() => {})
            .finally(() => setLoading(false));
    }, []);

    return { topics, loading };
};
