import { useState, useEffect } from 'react';
import { fetchSubtitleLanguages } from '../services/ted-service';

const LANGUAGE_NAMES = {
    'en': 'English', 'es': 'Spanish', 'fr': 'French', 'de': 'German',
    'pt': 'Portuguese', 'pt-br': 'Portuguese (Brazil)', 'it': 'Italian',
    'ja': 'Japanese', 'zh-cn': 'Chinese (Simplified)', 'zh-tw': 'Chinese (Traditional)',
    'ar': 'Arabic', 'ko': 'Korean', 'ru': 'Russian', 'nl': 'Dutch',
    'pl': 'Polish', 'tr': 'Turkish', 'sv': 'Swedish', 'da': 'Danish',
    'fi': 'Finnish', 'nb': 'Norwegian', 'el': 'Greek', 'he': 'Hebrew',
    'hi': 'Hindi', 'id': 'Indonesian', 'uk': 'Ukrainian', 'cs': 'Czech',
    'ro': 'Romanian', 'hu': 'Hungarian', 'vi': 'Vietnamese', 'th': 'Thai',
};

const FALLBACK_LANGUAGES = [
    { code: 'en', name: 'English' }, { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' }, { code: 'de', name: 'German' },
    { code: 'pt', name: 'Portuguese' }, { code: 'it', name: 'Italian' },
    { code: 'ja', name: 'Japanese' }, { code: 'zh-cn', name: 'Chinese (Simplified)' },
    { code: 'ar', name: 'Arabic' }, { code: 'ko', name: 'Korean' },
    { code: 'ru', name: 'Russian' }, { code: 'nl', name: 'Dutch' },
];

export const useSubtitleLanguages = () => {
    const [languages, setLanguages] = useState(FALLBACK_LANGUAGES);

    useEffect(() => {
        fetchSubtitleLanguages()
            .then(results => {
                if (Array.isArray(results) && results.length > 0) {
                    const normalized = results.map(l => ({
                        code: l.slug,
                        name: LANGUAGE_NAMES[l.slug] ?? l.slug.toUpperCase(),
                    }));
                    setLanguages(normalized);
                }
            })
            .catch(() => {});
    }, []);

    return { languages };
};
