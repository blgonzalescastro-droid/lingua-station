import { useSubtitleLanguages } from '../hooks/use-subtitle-languages';
import { useTedPreferencesStore } from '../store/ted-preferences-store';

export function LanguageSelector() {
    const { languages } = useSubtitleLanguages();
    const { subtitleLanguage, setSubtitleLanguage } = useTedPreferencesStore();

    return (
        <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600 whitespace-nowrap">Subtitles:</label>
            <select
                value={subtitleLanguage}
                onChange={(e) => setSubtitleLanguage(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-400 cursor-pointer"
            >
                {languages.map(lang => (
                    <option key={lang.code} value={lang.code}>
                        {lang.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
