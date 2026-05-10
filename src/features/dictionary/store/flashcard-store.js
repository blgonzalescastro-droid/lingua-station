import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useFlashcardStore = create(
    persist(
        (set, get) => ({
            cards: [],
            addCard: (card) => {
                if (!get().cards.find(c => c.word === card.word)) {
                    set({ cards: [...get().cards, card] });
                }
            },
            removeCard: (word) => set({ cards: get().cards.filter(c => c.word !== word) }),
        }),
        { name: 'flashcard-storage' }
    )
);
