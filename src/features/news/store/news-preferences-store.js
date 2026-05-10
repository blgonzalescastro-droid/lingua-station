import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const CATEGORIES = [
    { id: 'technology', label: 'Technology' },
    { id: 'science', label: 'Science' },
    { id: 'health', label: 'Health' },
    { id: 'business', label: 'Business' },
    { id: 'sports', label: 'Sports' },
    { id: 'entertainment', label: 'Entertainment' },
    { id: 'world', label: 'World' },
    { id: 'education', label: 'Education' },
    { id: 'environment', label: 'Environment' },
    { id: 'politics', label: 'Politics' },
];

export const useNewsPreferencesStore = create(
    persist(
        (set, get) => ({
            selectedCategories: ['technology', 'science'],
            toggleCategory: (id) => {
                const current = get().selectedCategories;
                const isSelected = current.includes(id);
                if (isSelected && current.length === 1) return;
                set({
                    selectedCategories: isSelected
                        ? current.filter(c => c !== id)
                        : [...current, id],
                });
            },
        }),
        { name: 'news-preferences' }
    )
);
