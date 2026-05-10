import { useState, useEffect } from 'react';
import { fetchSubtitleLanguages } from '../services/ted-service';

const FALLBACK_LANGUAGES = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'it', name: 'Italian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'zh-cn', name: 'Chinese (Simplified)' },
    { code: 'ar', name: 'Arabic' },
    { code: 'ko', name: 'Korean' },
    { code: 'ru', name: 'Russian' },
    { code: 'nl', name: 'Dutch' },
];

const normalize = (data) => {
    if (!Array.isArray(data) || data.length === 0) return null;
    if (typeof data[0] === 'string') return data.map(code => ({ code, name: code }));
    return data.map(l => ({
        code: l.language ?? l.code ?? l.languageCode ?? l,
        name: l.name ?? l.languageName ?? l.language ?? l.code ?? l,
    }));
};

export const useSubtitleLanguages = () => {
    const [languages, setLanguages] = useState(FALLBACK_LANGUAGES);

    useEffect(() => {
        fetchSubtitleLanguages()
            .then(data => {
                const normalized = normalize(data);
                if (normalized) setLanguages(normalized);
            })
            .catch(() => {});
    }, []);

    return { languages };
};
