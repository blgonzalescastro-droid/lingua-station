import { useTedPreferencesStore } from '../store/ted-preferences-store';

const FALLBACK_IMAGE = 'https://placehold.co/600x400/e2e8f0/94a3b8?text=TED+Talk';

function formatDuration(seconds) {
    if (!seconds) return null;
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
}

function speakerFromUrl(url) {
    const slug = url?.split('/talks/')?.[1] ?? '';
    if (!slug) return '';
    return slug.split('_').slice(0, 2).map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
}

export function TalkCard({ talk }) {
    const { subtitleLanguage } = useTedPreferencesStore();

    const duration = formatDuration(talk.duration_in_seconds);
    const speaker = speakerFromUrl(talk.url);
    const watchUrl = `${talk.url}?language=${subtitleLanguage}`;

    return (
        <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
            <div className="relative">
                <img
                    src={talk.thumbnail_url || FALLBACK_IMAGE}
                    alt={talk.title}
                    className="w-full h-44 object-cover"
                    onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
                />
                {duration && (
                    <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                        {duration}
                    </span>
                )}
            </div>
            <div className="p-4 flex flex-col flex-1">
                <h3 className="text-gray-900 font-semibold text-sm leading-snug mb-1 line-clamp-2">
                    {talk.title}
                </h3>
                {speaker && (
                    <p className="text-gray-500 text-xs mb-1">{speaker}</p>
                )}
                {talk.event && (
                    <p className="text-gray-400 text-xs mb-3">{talk.event}</p>
                )}
                <div className="mt-auto">
                    <a
                        href={watchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 rounded-lg transition-colors"
                    >
                        Watch
                    </a>
                </div>
            </div>
        </div>
    );
}
