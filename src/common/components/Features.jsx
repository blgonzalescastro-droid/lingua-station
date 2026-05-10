const FEATURES = [
    {
        title: "Smart Dictionary",
        tag: "Core feature",
        tagColor: "bg-orange-50 text-orange-600 border border-orange-100",
        description: "Tap any word, anywhere. Save it as a flashcard with one click. Spaced repetition wakes them up at the right time.",
        linkColor: "text-orange-500 hover:text-orange-600",
        iconBg: "bg-pink-50",
        iconColor: "text-pink-400",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
    },
    {
        title: "Real English News",
        tag: "10 categories",
        tagColor: "bg-blue-50 text-blue-600 border border-blue-100",
        description: "Stories from real outlets, re-leveled for B1 → C1 readers. New articles every morning, sorted by topic.",
        linkColor: "text-blue-500 hover:text-blue-600",
        iconBg: "bg-purple-50",
        iconColor: "text-purple-400",
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M4 6h16M4 10h16M4 14h16M4 18h7" />
            </svg>
        ),
    },
    {
        title: "TED Talks",
        tag: "3,000+ talks",
        tagColor: "bg-teal-50 text-teal-600 border border-teal-100",
        description: "Watch the talks people are quoting. Subtitles in 112 languages. Save phrasings into flashcards instantly.",
        linkColor: "text-teal-500 hover:text-teal-600",
        iconBg: "bg-teal-50",
        iconColor: "text-teal-500",
        icon: (
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
            </svg>
        ),
    },
];

export function Features() {
    return (
        <section id="features" className="py-12 sm:py-20 px-4 sm:px-8">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-10 sm:mb-14">
                    <span className="inline-flex items-center gap-1.5 bg-teal-50 border border-teal-100 text-teal-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 sm:mb-5">
                        ✦ THREE TOOLS, ONE HABIT
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                        Daily quests, built from<br className="hidden sm:block" /> real English.
                    </h2>
                    <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
                        Three modules. Auto-mixed every morning into a 5–15 min daily plan that fits your level.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {FEATURES.map(({ title, tag, tagColor, description, linkColor, iconBg, iconColor, icon }) => (
                        <div key={title} className="bg-white rounded-2xl p-6 sm:p-7 flex flex-col border border-gray-100">
                            <div className={`w-12 h-12 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center mb-4`}>
                                {icon}
                            </div>
                            <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-4 ${tagColor}`}>
                                {tag}
                            </span>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{description}</p>
                            <a href="#" className={`text-sm font-semibold transition-colors ${linkColor}`}>
                                Learn more →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
