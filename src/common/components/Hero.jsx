import { Link } from "react-router";
import { useAuth } from "../../features/auth/hooks/use-auth";

const R = 52;
const CIRC = 2 * Math.PI * R;
const DAILY_PCT = 66;

const STATS = [
    { value: '84k',     label: 'Daily learners' },
    { value: '3,000+',  label: 'TED talks indexed' },
    { value: '112',     label: 'Subtitle languages' },
    { value: '28 min',  label: 'Median to a daily streak' },
];

const AVATARS = [
    { letter: 'M', bg: 'bg-orange-400' },
    { letter: 'J', bg: 'bg-teal-500' },
    { letter: 'Y', bg: 'bg-yellow-500' },
    { letter: 'S', bg: 'bg-purple-500' },
];

export function Hero() {
    const { isAuthenticated } = useAuth();

    return (
        <section className="px-4 sm:px-8 pt-10 sm:pt-16 pb-8 sm:pb-10">
            <div className="max-w-6xl mx-auto">

                {/* Two-column hero */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-8 sm:mb-14">

                    {/* Left */}
                    <div>
                        <span className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-100 text-orange-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 sm:mb-6">
                            🔥 Loved by 84,000 daily learners
                        </span>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-5 sm:mb-6">
                            Learn English<br />
                            <span className="text-orange-500 italic underline decoration-orange-400 decoration-[3px] underline-offset-2">
                                five minutes
                            </span>{' '}
                            <span className="italic">at</span><br />
                            <span className="italic">a time.</span>
                        </h1>

                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-sm">
                            Real news, TED talks and a smart dictionary — wrapped in tiny daily quests that earn you XP, levels and the satisfying click of a finished list.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                            <Link
                                to={isAuthenticated ? "/dashboard" : "/register"}
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors w-full sm:w-auto text-center"
                            >
                                Start your first quest →
                            </Link>
                            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors cursor-pointer">
                                <div className="w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
                                    <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                Watch demo · 90s
                            </button>
                        </div>

                        {/* Social proof */}
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                {AVATARS.map(({ letter, bg }) => (
                                    <div key={letter} className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold ${bg}`}>
                                        {letter}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex gap-0.5">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-xs text-gray-500 mt-0.5">
                                    <span className="font-semibold text-gray-700">4.9 average</span> · From 12,400 App Store reviews
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Desktop: floating product mockup */}
                    <div className="relative h-105 hidden md:block">

                        {/* Streak card */}
                        <div className="absolute top-10 left-6 z-20 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3">
                            <div className="w-9 h-9 bg-orange-50 rounded-xl flex items-center justify-center text-lg shrink-0">🔥</div>
                            <div>
                                <p className="text-sm font-bold text-gray-900">8 day streak</p>
                                <p className="text-xs text-gray-400">Don't break the chain</p>
                            </div>
                        </div>

                        {/* Circular progress */}
                        <div className="absolute top-0 right-0 w-56 h-56 flex items-center justify-center">
                            <svg viewBox="0 0 130 130" className="w-56 h-56">
                                <circle cx="65" cy="65" r={R} fill="none" stroke="#ede9e0" strokeWidth="12" />
                                <circle
                                    cx="65" cy="65" r={R}
                                    fill="none"
                                    stroke="#ef4444"
                                    strokeWidth="12"
                                    strokeLinecap="round"
                                    strokeDasharray={CIRC}
                                    strokeDashoffset={CIRC * (1 - DAILY_PCT / 100)}
                                    transform="rotate(-90 65 65)"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <p className="text-4xl font-bold text-gray-900">
                                    {DAILY_PCT}<span className="text-2xl">%</span>
                                </p>
                                <p className="text-[10px] text-gray-400 tracking-widest uppercase mt-0.5">Daily Goal</p>
                            </div>
                        </div>

                        {/* Level card */}
                        <div className="absolute bottom-16 left-0 z-10 bg-gray-900 text-white rounded-2xl px-4 py-3 w-48">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-[10px] font-bold">11</div>
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-300">Level 11</span>
                            </div>
                            <p className="text-xs text-gray-400 mb-1.5">210 / 320 XP today</p>
                            <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500 rounded-full" style={{ width: '65%' }} />
                            </div>
                        </div>

                        {/* Quest card */}
                        <div className="absolute bottom-2 right-6 z-20 bg-white rounded-2xl shadow-lg p-3.5 flex items-center gap-3 w-56">
                            <div className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[10px] font-bold text-orange-500 uppercase tracking-wide">QUEST 02</p>
                                <p className="text-xs font-semibold text-gray-900 truncate">Read "Tokyo coffee culture"</p>
                                <p className="text-[10px] text-gray-400">B2 · 6 min · with audio</p>
                            </div>
                            <span className="text-xs font-bold text-green-500 shrink-0">+60 XP</span>
                        </div>
                    </div>
                </div>

                {/* Mobile: compact mockup strip */}
                <div className="md:hidden flex gap-3 overflow-x-auto pb-1 mb-8 -mx-1 px-1">
                    {/* Streak */}
                    <div className="bg-white rounded-2xl shadow-sm px-3 py-3 flex items-center gap-2.5 shrink-0">
                        <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center text-base shrink-0">🔥</div>
                        <div>
                            <p className="text-sm font-bold text-gray-900 whitespace-nowrap">8 day streak</p>
                            <p className="text-xs text-gray-400 whitespace-nowrap">Don't break the chain</p>
                        </div>
                    </div>

                    {/* Circle progress */}
                    <div className="bg-white rounded-2xl shadow-sm px-4 py-3 flex items-center gap-3 shrink-0">
                        <div className="relative w-14 h-14 shrink-0">
                            <svg viewBox="0 0 130 130" className="w-14 h-14">
                                <circle cx="65" cy="65" r={R} fill="none" stroke="#ede9e0" strokeWidth="16" />
                                <circle
                                    cx="65" cy="65" r={R}
                                    fill="none"
                                    stroke="#ef4444"
                                    strokeWidth="16"
                                    strokeLinecap="round"
                                    strokeDasharray={CIRC}
                                    strokeDashoffset={CIRC * (1 - DAILY_PCT / 100)}
                                    transform="rotate(-90 65 65)"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-xs font-bold text-gray-900">{DAILY_PCT}%</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-900 whitespace-nowrap">Daily goal</p>
                            <p className="text-xs text-gray-400 whitespace-nowrap">66% complete</p>
                        </div>
                    </div>

                    {/* Level */}
                    <div className="bg-gray-900 text-white rounded-2xl px-4 py-3 shrink-0">
                        <div className="flex items-center gap-1.5 mb-1.5">
                            <div className="w-5 h-5 bg-orange-500 rounded text-[9px] font-bold flex items-center justify-center">11</div>
                            <span className="text-xs font-bold text-gray-300 whitespace-nowrap">Level 11</span>
                        </div>
                        <p className="text-[10px] text-gray-400 mb-1.5 whitespace-nowrap">210 / 320 XP today</p>
                        <div className="w-28 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-orange-500 rounded-full" style={{ width: '65%' }} />
                        </div>
                    </div>
                </div>

                {/* Stats bar */}
                <div className="bg-gray-900 rounded-2xl px-5 sm:px-8 py-6 sm:py-7 grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
                    {STATS.map(({ value, label }, i, arr) => (
                        <div key={label} className="text-center relative">
                            <p className="text-2xl sm:text-3xl font-bold text-white">{value}</p>
                            <p className="text-xs sm:text-sm text-gray-400 mt-1">{label}</p>
                            {i < arr.length - 1 && (
                                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-gray-700" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
