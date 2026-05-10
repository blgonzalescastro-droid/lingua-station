import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useTedPreferencesStore = create(
    persist(
        (set) => ({
            selectedTopic: null,
            subtitleLanguage: 'en',
            setTopic: (topic) => set({ selectedTopic: topic }),
            setSubtitleLanguage: (lang) => set({ subtitleLanguage: lang }),
        }),
        { name: 'ted-preferences' }
    )
);
