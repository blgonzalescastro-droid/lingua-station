const API_KEY = import.meta.env.VITE_MW_DICTIONARY_KEY;
const BASE_URL = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json';

export const searchWord = async (word) => {
    const res = await fetch(`${BASE_URL}/${encodeURIComponent(word)}?key=${API_KEY}`);
    if (!res.ok) throw new Error('Network error');
    return res.json();
};

export const getAudioUrl = (audio) => {
    let subdir;
    if (audio.startsWith('bix')) subdir = 'bix';
    else if (audio.startsWith('gg')) subdir = 'gg';
    else if (/^\d/.test(audio)) subdir = 'number';
    else subdir = audio[0];
    return `https://media.merriam-webster.com/audio/prons/en/us/mp3/${subdir}/${audio}.mp3`;
};
