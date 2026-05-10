const TESTIMONIALS = [
    {
        streak: 47,
        stars: 5,
        text: "I tap \"start quest\" with my coffee. Three weeks in I noticed I was thinking in English on the metro.",
        name: "Maria S.",
        lang: "Spanish · B2",
        initial: "M",
        avatarBg: "bg-orange-400",
    },
    {
        streak: 92,
        stars: 5,
        text: "The flashcard system is the only one I haven't abandoned. Words come back from articles I forgot I had read.",
        name: "Yuki T.",
        lang: "Japanese · C1",
        initial: "Y",
        avatarBg: "bg-yellow-500",
    },
    {
        streak: 31,
        stars: 5,
        text: "TED with bilingual subtitles changed everything. My brain stopped translating; it started listening.",
        name: "João D.",
        lang: "Portuguese · B1",
        initial: "J",
        avatarBg: "bg-teal-500",
    },
];

export function Testimonials() {
    return (
        <section className="py-12 sm:py-20 px-4 sm:px-8">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
                    Streaks people are<br className="hidden sm:block" /> bragging about.
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {TESTIMONIALS.map(({ streak, stars, text, name, lang, initial, avatarBg }) => (
                        <div key={name} className="bg-white rounded-2xl p-6 sm:p-7 flex flex-col border border-gray-100">
                            <div className="flex items-center justify-between mb-5">
                                <span className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-100 text-orange-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                                    🔥 {streak} day streak
                                </span>
                                <div className="flex gap-0.5">
                                    {Array.from({ length: stars }).map((_, i) => (
                                        <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>

                            <p className="text-gray-900 text-base font-medium leading-relaxed flex-1 mb-6">
                                "{text}"
                            </p>

                            <div className="flex items-center gap-3">
                                <div className={`w-9 h-9 rounded-full ${avatarBg} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                                    {initial}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">{name}</p>
                                    <p className="text-xs text-gray-400">{lang}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
