import { useState } from 'react';
import { searchWord } from '../services/dictionary-service';

export const useDictionary = () => {
    const [results, setResults] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const search = async (word) => {
        if (!word.trim()) return;
        setLoading(true);
        setError(null);
        setResults([]);
        setSuggestions([]);
        try {
            const data = await searchWord(word);
            const entries = data.filter(item => typeof item === 'object');
            const suggested = data.filter(item => typeof item === 'string');
            if (entries.length === 0 && suggested.length > 0) {
                setSuggestions(suggested);
            } else {
                setResults(entries);
            }
        } catch {
            setError('Could not fetch the word. Check your API key or connection.');
        } finally {
            setLoading(false);
        }
    };

    return { results, suggestions, loading, error, search };
};
