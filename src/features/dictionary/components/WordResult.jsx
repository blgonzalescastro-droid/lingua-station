import { getAudioUrl } from '../services/dictionary-service';
import { useFlashcardStore } from '../store/flashcard-store';

export function WordResult({ entry }) {
    const { addCard, cards } = useFlashcardStore();

    const word = entry.hwi?.hw?.replace(/\*/g, '') ?? '';
    const partOfSpeech = entry.fl ?? '';
    const pronunciation = entry.hwi?.prs?.[0]?.mw ?? '';
    const audioFile = entry.hwi?.prs?.[0]?.sound?.audio;
    const definitions = entry.shortdef ?? [];

    const isSaved = cards.some(c => c.word === word);

    const playAudio = () => {
        if (!audioFile) return;
        new Audio(getAudioUrl(audioFile)).play();
    };

    const handleSave = () => {
        addCard({ word, partOfSpeech, definitions, pronunciation });
    };

    return (
        <div className="bg-white rounded-lg shadow p-5 mb-4">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900">{word}</h3>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm italic text-gray-500">{partOfSpeech}</span>
                        {pronunciation && (
                            <span className="text-sm text-gray-400">/{pronunciation}/</span>
                        )}
                        {audioFile && (
                            <button
                                onClick={playAudio}
                                className="text-blue-500 hover:text-blue-700 cursor-pointer"
                                title="Play pronunciation"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
                <button
                    onClick={handleSave}
                    disabled={isSaved}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                        isSaved
                            ? 'bg-gray-100 text-gray-400 cursor-default'
                            : 'bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'
                    }`}
                >
                    {isSaved ? 'Saved' : 'Save flashcard'}
                </button>
            </div>
            <ul className="mt-3 space-y-1">
                {definitions.map((def, i) => (
                    <li key={i} className="text-gray-700 text-sm">
                        <span className="font-semibold text-gray-400 mr-2">{i + 1}.</span>
                        {def}
                    </li>
                ))}
            </ul>
        </div>
    );
}
