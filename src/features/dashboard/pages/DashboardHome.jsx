import { Link } from 'react-router';
import { useFlashcardStore } from '../../dictionary/store/flashcard-store';
import { useNewsPreferencesStore } from '../../news/store/news-preferences-store';
import { useTedPreferencesStore } from '../../ted/store/ted-preferences-store';

const LANGUAGE_NAMES = {
    'en': 'English', 'es': 'Spanish', 'fr': 'French', 'de': 'German',
    'pt': 'Portuguese', 'pt-br': 'Portuguese (Brazil)', 'it': 'Italian',
    'ja': 'Japanese', 'zh-cn': 'Chinese (Simplified)', 'ar': 'Arabic',
    'ko': 'Korean', 'ru': 'Russian', 'nl': 'Dutch',
};

const DAYS = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
const STREAK = 8;
const LEVEL = 12;
const QUESTS_LEFT = 3;
const XP_TODAY = 210;
const XP_GOAL = 320;
const DAILY_PCT = Math.round((XP_TODAY / XP_GOAL) * 100);
const R = 38;
const CIRC = 2 * Math.PI * R;

const QUESTS = [
    {
        num: '01', to: '/dashboard/dictionary',
        title: 'Review 8 flashcards',
        sub: "From yesterday's Times article",
        done: true, xp: null, xpColor: null, time: '4 min',
        iconBg: 'bg-blue-500',
        icon: (
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        ),
    },
    {
        num: '02', to: '/dashboard/news',
        title: 'Read "Tokyo coffee culture"',
        sub: 'B2 · 6 minutes · with audio',
        done: false, xp: 60, xpColor: 'text-green-500', time: '6 min',
        iconBg: 'bg-gray-200',
        icon: (
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        num: '03', to: '/dashboard/ted',
        title: 'TED: How to listen better',
        sub: '12 min · subtitles in Spanish',
        done: false, xp: 80, xpColor: 'text-orange-500', time: '12 min',
        iconBg: 'bg-gray-800',
        icon: (
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
            </svg>
        ),
    },
    {
        num: '04', to: '/dashboard/dictionary',
        title: 'Practice 3 new phrasal verbs',
        sub: 'pull off, run into, look up',
        done: false, xp: 40, xpColor: 'text-orange-400', time: '3 min',
        iconBg: 'bg-gray-800',
        icon: (
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
    },
];

export function DashboardHome() {
    const { cards } = useFlashcardStore();
    const { selectedCategories } = useNewsPreferencesStore();
    const { subtitleLanguage } = useTedPreferencesStore();

    const dayName = DAYS[new Date().getDay()];
    const subtitleName = LANGUAGE_NAMES[subtitleLanguage] ?? subtitleLanguage?.toUpperCase() ?? 'English';
    const doneCount = QUESTS.filter(q => q.done).length;

    const STATS = [
        {
            value: cards.length || 247,
            label: 'Flashcards mastered',
            sub: '+12 this week', subColor: 'text-green-500',
            iconBg: 'bg-pink-100', iconColor: 'text-pink-500',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
        {
            value: 38,
            label: 'Words learning',
            sub: '8 due today', subColor: 'text-blue-500',
            iconBg: 'bg-purple-100', iconColor: 'text-purple-500',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
        },
        {
            value: '4h 12m',
            label: 'Minutes listened',
            sub: subtitleName, subColor: 'text-green-500',
            iconBg: 'bg-teal-100', iconColor: 'text-teal-500',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M12 3a9 9 0 100 18A9 9 0 0012 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7v5h3" />
                </svg>
            ),
        },
        {
            value: selectedCategories.length > 0 ? selectedCategories.length * 5 : 23,
            label: 'Articles read',
            sub: '+5 this week', subColor: 'text-yellow-500',
            iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M4 6h16M4 10h16M4 14h10" />
                </svg>
            ),
        },
    ];

    return (
        <div className="p-4 sm:p-6 max-w-5xl">

            {/* Top: hero + stats — stacked on mobile, side-by-side on lg */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-6">

                {/* Hero card */}
                <div
                    className="lg:col-span-3 rounded-2xl p-6 sm:p-8 relative overflow-hidden"
                    style={{ background: 'radial-gradient(ellipse at 82% 50%, rgba(234,88,12,0.28) 0%, #111111 52%)' }}
                >
                    <div className="absolute right-20 top-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-orange-500 opacity-20 blur-3xl pointer-events-none" />

                    <div className="flex items-center gap-4 relative z-10">
                        <div className="flex-1">
                            <p className="text-orange-500 text-[11px] font-bold uppercase tracking-widest mb-2 sm:mb-3">
                                {dayName} · DAY {String(STREAK).padStart(2, '0')}
                            </p>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-2 sm:mb-3">
                                You're <span className="text-orange-400">{QUESTS_LEFT} quests</span><br />
                                away from <span className="italic text-orange-300">Level {LEVEL}.</span>
                            </h2>
                            <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed max-w-xs">
                                {XP_TODAY} / {XP_GOAL} XP today. Keep the streak alive — finish before midnight to bank a bonus.
                            </p>
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                <Link
                                    to="/dashboard/dictionary"
                                    className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-colors"
                                >
                                    Start next quest →
                                </Link>
                                <button className="border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white text-sm font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-colors cursor-pointer">
                                    See plan
                                </button>
                            </div>
                        </div>

                        {/* Circular progress — hidden on small screens */}
                        <div className="hidden sm:block shrink-0">
                            <svg viewBox="0 0 100 100" className="w-28 h-28 lg:w-36 lg:h-36">
                                <circle cx="50" cy="50" r={R} fill="none" stroke="#2d2d2d" strokeWidth="7" />
                                <circle
                                    cx="50" cy="50" r={R}
                                    fill="none"
                                    stroke="#ef4444"
                                    strokeWidth="7"
                                    strokeLinecap="round"
                                    strokeDasharray={CIRC}
                                    strokeDashoffset={CIRC * (1 - DAILY_PCT / 100)}
                                    transform="rotate(-90 50 50)"
                                />
                                <text x="50" y="46" textAnchor="middle" fill="white" fontSize="19" fontWeight="bold" fontFamily="system-ui,sans-serif">
                                    {DAILY_PCT}%
                                </text>
                                <text x="50" y="59" textAnchor="middle" fill="#6b7280" fontSize="7.5" fontFamily="system-ui,sans-serif" letterSpacing="0.8">
                                    DAILY GOAL
                                </text>
                            </svg>
                        </div>
                    </div>

                    {/* Mobile-only XP mini bar */}
                    <div className="sm:hidden mt-4 relative z-10">
                        <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                            <span>XP today</span>
                            <span>{XP_TODAY} / {XP_GOAL}</span>
                        </div>
                        <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-orange-500 rounded-full"
                                style={{ width: `${DAILY_PCT}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Stats 2×2 */}
                <div className="lg:col-span-2 grid grid-cols-2 gap-3 sm:gap-4">
                    {STATS.map(({ value, label, sub, subColor, iconBg, iconColor, icon }) => (
                        <div key={label} className="bg-white rounded-2xl p-4 sm:p-5">
                            <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center mb-2 sm:mb-3`}>
                                {icon}
                            </div>
                            <p className="text-xl sm:text-2xl font-bold text-gray-900">{value}</p>
                            <p className="text-xs text-gray-400 mt-0.5 mb-1 leading-tight">{label}</p>
                            <p className={`text-xs font-medium ${subColor}`}>{sub}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quests */}
            <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="font-bold text-gray-900 text-base">Today's quests</h3>
                    <span className="text-xs text-gray-400">{doneCount} / {QUESTS.length} complete · ends in 9h 22m</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {QUESTS.map((q) => (
                        <Link
                            key={q.num}
                            to={q.to}
                            className="bg-white rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 hover:shadow-md transition-shadow"
                        >
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${q.iconBg} flex items-center justify-center shrink-0`}>
                                {q.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className={`text-[10px] font-bold uppercase tracking-widest mb-0.5 ${q.done ? 'text-teal-500' : 'text-orange-500'}`}>
                                    QUEST {q.num}
                                </p>
                                <p className="text-sm font-semibold text-gray-900 truncate">{q.title}</p>
                                <p className="text-xs text-gray-400 truncate">{q.sub}</p>
                            </div>
                            <div className="text-right shrink-0">
                                {q.done ? (
                                    <span className="text-xs font-semibold text-green-500">✓ Done</span>
                                ) : (
                                    <span className={`text-xs font-bold ${q.xpColor}`}>+{q.xp} XP</span>
                                )}
                                <p className="text-[11px] text-gray-400 mt-0.5">{q.time}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
