import { useState } from 'react';
import { useDictionary } from '../hooks/use-dictionary';
import { WordResult } from '../components/WordResult';
import { Flashcards } from '../components/Flashcards';
import { useFlashcardStore } from '../store/flashcard-store';

export function DictionaryPage() {
    const [query, setQuery] = useState('');
    const [activeTab, setActiveTab] = useState('search');
    const { results, suggestions, loading, error, search } = useDictionary();
    const { cards } = useFlashcardStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        search(query);
    };

    return (
        <div className="max-w-3xl mx-auto py-8 px-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Dictionary</h2>

            <div className="flex gap-2 mb-6 border-b border-gray-200">
                <button
                    onClick={() => setActiveTab('search')}
                    className={`pb-2 px-4 font-medium text-sm border-b-2 transition-colors cursor-pointer ${
                        activeTab === 'search'
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                >
                    Search
                </button>
                <button
                    onClick={() => setActiveTab('flashcards')}
                    className={`pb-2 px-4 font-medium text-sm border-b-2 transition-colors cursor-pointer flex items-center gap-1 ${
                        activeTab === 'flashcards'
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                >
                    Flashcards
                    {cards.length > 0 && (
                        <span className="bg-blue-100 text-blue-600 rounded-full px-1.5 py-0.5 text-xs leading-none">
                            {cards.length}
                        </span>
                    )}
                </button>
            </div>

            {activeTab === 'search' && (
                <>
                    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
                        <input
                            type="text"
                            id="dictionary-search"
                            name="query"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search a word..."
                            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50 cursor-pointer"
                        >
                            {loading ? '...' : 'Search'}
                        </button>
                    </form>

                    {error && (
                        <p className="text-red-500 mb-4 text-sm">{error}</p>
                    )}

                    {suggestions.length > 0 && (
                        <div className="mb-4">
                            <p className="text-gray-500 text-sm mb-2">Word not found. Did you mean:</p>
                            <div className="flex flex-wrap gap-2">
                                {suggestions.slice(0, 8).map(s => (
                                    <button
                                        key={s}
                                        onClick={() => { setQuery(s); search(s); }}
                                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm cursor-pointer"
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {results.map((entry, i) => (
                        <WordResult key={i} entry={entry} />
                    ))}
                </>
            )}

            {activeTab === 'flashcards' && <Flashcards />}
        </div>
    );
}
