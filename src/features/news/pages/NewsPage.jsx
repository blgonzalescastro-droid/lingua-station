import { useNews } from '../hooks/use-news';
import { useNewsPreferencesStore } from '../store/news-preferences-store';
import { CategorySelector } from '../components/CategorySelector';
import { NewsCard } from '../components/NewsCard';

export function NewsPage() {
    const { selectedCategories } = useNewsPreferencesStore();
    const { articles, loading, error } = useNews(selectedCategories);

    return (
        <div className="max-w-6xl mx-auto py-8 px-4">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">News</h2>
                <p className="text-gray-500 text-sm">Select your topics of interest</p>
            </div>

            <CategorySelector />

            {loading && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="bg-white rounded-lg shadow overflow-hidden animate-pulse">
                            <div className="w-full h-44 bg-gray-200" />
                            <div className="p-4 space-y-2">
                                <div className="h-3 bg-gray-200 rounded w-1/4" />
                                <div className="h-4 bg-gray-200 rounded w-full" />
                                <div className="h-4 bg-gray-200 rounded w-3/4" />
                                <div className="h-3 bg-gray-200 rounded w-1/2 mt-4" />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {error && (
                <p className="text-red-500 text-sm">{error}</p>
            )}

            {!loading && !error && articles.length === 0 && (
                <p className="text-gray-400 text-sm">No articles found for the selected topics.</p>
            )}

            {!loading && !error && articles.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {articles.map(article => (
                        <NewsCard key={article.article_id} article={article} />
                    ))}
                </div>
            )}
        </div>
    );
}
