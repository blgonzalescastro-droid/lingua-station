import { useState } from 'react';
import { useFlashcardStore } from '../store/flashcard-store';

function FlipCard({ card, onRemove }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className="relative h-48 cursor-pointer"
            style={{ perspective: '1000px' }}
            onClick={() => setFlipped(f => !f)}
        >
            <div
                className="relative w-full h-full transition-transform duration-500"
                style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
            >
                <div
                    className="absolute inset-0 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex flex-col items-center justify-center p-4 select-none"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <span className="text-white text-2xl font-bold text-center">{card.word}</span>
                    {card.partOfSpeech && (
                        <span className="text-blue-100 text-sm italic mt-1">{card.partOfSpeech}</span>
                    )}
                    {card.pronunciation && (
                        <span className="text-blue-200 text-xs mt-1">/{card.pronunciation}/</span>
                    )}
                    <span className="text-blue-200 text-xs mt-4 opacity-70">Click to reveal</span>
                </div>

                <div
                    className="absolute inset-0 bg-white border border-gray-200 rounded-lg p-4 overflow-auto select-none"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                    <ul className="space-y-1.5">
                        {card.definitions.map((def, i) => (
                            <li key={i} className="text-gray-700 text-sm">
                                <span className="font-semibold text-gray-400 mr-1">{i + 1}.</span>
                                {def}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <button
                onClick={(e) => { e.stopPropagation(); onRemove(card.word); }}
                className="absolute top-2 right-2 z-10 bg-red-100 text-red-500 hover:bg-red-200 rounded-full w-6 h-6 flex items-center justify-center text-sm leading-none cursor-pointer"
                title="Remove flashcard"
            >
                &times;
            </button>
        </div>
    );
}

export function Flashcards() {
    const { cards, removeCard } = useFlashcardStore();

    if (cards.length === 0) {
        return (
            <div className="text-center py-16 text-gray-400">
                <p className="text-lg font-medium">No flashcards yet</p>
                <p className="text-sm mt-1">Search a word and save it to create your first card.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cards.map(card => (
                <FlipCard key={card.word} card={card} onRemove={removeCard} />
            ))}
        </div>
    );
}
