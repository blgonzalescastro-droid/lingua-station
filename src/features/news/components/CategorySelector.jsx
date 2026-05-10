import { CATEGORIES, useNewsPreferencesStore } from '../store/news-preferences-store';

export function CategorySelector() {
    const { selectedCategories, toggleCategory } = useNewsPreferencesStore();

    return (
        <div className="flex flex-wrap gap-2 mb-6">
            {CATEGORIES.map(({ id, label }) => {
                const isSelected = selectedCategories.includes(id);
                return (
                    <button
                        key={id}
                        onClick={() => toggleCategory(id)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer border ${
                            isSelected
                                ? 'bg-blue-500 text-white border-blue-500'
                                : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400 hover:text-blue-500'
                        }`}
                    >
                        {label}
                    </button>
                );
            })}
        </div>
    );
}
