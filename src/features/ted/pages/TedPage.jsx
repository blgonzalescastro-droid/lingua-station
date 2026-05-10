import { useTedTalks } from '../hooks/use-ted-talks';
import { useTedPreferencesStore } from '../store/ted-preferences-store';
import { TalkCard } from '../components/TalkCard';
import { TopicFilter } from '../components/TopicFilter';
import { LanguageSelector } from '../components/LanguageSelector';

export function TedPage() {
    const { selectedTopic, subtitleLanguage } = useTedPreferencesStore();
    const { talks, loading, error, setPage, hasMore } = useTedTalks(selectedTopic, subtitleLanguage);

    return (
        <div className="max-w-6xl mx-auto py-8 px-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">TED Talks</h2>
                    <p className="text-gray-500 text-sm">Watch talks with subtitles in your language</p>
                </div>
                <LanguageSelector />
            </div>

            <div className="mb-6">
                <TopicFilter />
            </div>

            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg mb-6">
                    {error}
                </div>
            )}

            {loading && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="bg-white rounded-lg shadow overflow-hidden animate-pulse">
                            <div className="w-full h-44 bg-gray-200" />
                            <div className="p-4 space-y-2">
                                <div className="h-4 bg-gray-200 rounded w-full" />
                                <div className="h-3 bg-gray-200 rounded w-1/2" />
                                <div className="h-8 bg-gray-200 rounded w-full mt-4" />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {!loading && !error && talks.length === 0 && (
                <p className="text-gray-400 text-sm">No talks found for this combination of topic and subtitle language.</p>
            )}

            {!loading && talks.length > 0 && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {talks.map((talk, i) => (
                            <TalkCard key={talk.id ?? i} talk={talk} />
                        ))}
                    </div>

                    {hasMore && (
                        <div className="mt-8 text-center">
                            <button
                                onClick={() => setPage(p => p + 1)}
                                className="bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded-lg font-medium text-sm cursor-pointer transition-colors"
                            >
                                Load more
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
