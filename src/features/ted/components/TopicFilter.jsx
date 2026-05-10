import { useTopics } from '../hooks/use-topics';
import { useTedPreferencesStore } from '../store/ted-preferences-store';

export function TopicFilter() {
    const { topics, loading } = useTopics();
    const { selectedTopic, setTopic } = useTedPreferencesStore();

    return (
        <div className="overflow-x-auto pb-2">
            <div className="flex gap-2 min-w-max">
                <button
                    onClick={() => setTopic(null)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer border whitespace-nowrap ${
                        selectedTopic === null
                            ? 'bg-red-600 text-white border-red-600'
                            : 'bg-white text-gray-600 border-gray-300 hover:border-red-400 hover:text-red-500'
                    }`}
                >
                    All
                </button>

                {loading
                    ? Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="h-8 w-24 bg-gray-200 rounded-full animate-pulse" />
                    ))
                    : topics.map(({ slug, label }) => (
                        <button
                            key={slug}
                            onClick={() => setTopic(selectedTopic === slug ? null : slug)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer border whitespace-nowrap ${
                                selectedTopic === slug
                                    ? 'bg-red-600 text-white border-red-600'
                                    : 'bg-white text-gray-600 border-gray-300 hover:border-red-400 hover:text-red-500'
                            }`}
                        >
                            {label}
                        </button>
                    ))
                }
            </div>
        </div>
    );
}
