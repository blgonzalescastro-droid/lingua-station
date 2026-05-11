import { Outlet, NavLink } from "react-router";
import { useAuth } from "../../features/auth/hooks/use-auth";

const NAV_ITEMS = [
    {
        to: "/dashboard", end: true, label: "Today",
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 3v1m0 16v1M4.222 4.222l.707.707m12.728 12.728.707.707M1 12h2m18 0h2M4.222 19.778l.707-.707m12.728-12.728.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
        ),
    },
    {
        to: "/dashboard/dictionary", label: "Words",
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
    },
    {
        to: "/dashboard/news", label: "News",
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h7" />
            </svg>
        ),
    },

];

const STREAK = 8;

export function DashboardPage() {
    const { logout } = useAuth();

    return (
        <div className="min-h-screen bg-[#faf5ed]">
            <header className="bg-white border-b border-gray-100 px-4 sm:px-6 h-14 flex items-center justify-between sticky top-0 z-10">

                {/* Logo */}
                <div className="flex items-center gap-2 shrink-0">
                    <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-white font-bold text-xs">L</span>
                    </div>
                    <span className="font-bold text-gray-900 text-sm hidden xs:inline sm:inline">Lingua Station</span>
                </div>

                {/* Nav — icon-only on mobile, icon + label on sm+ */}
                <nav className="flex items-center bg-gray-100 rounded-full px-1 py-1 gap-0.5">
                    {NAV_ITEMS.map(({ to, end, label, icon }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={end}
                            className={({ isActive }) =>
                                `flex items-center gap-1.5 px-2 py-1.5 sm:px-3.5 rounded-full text-xs font-medium transition-all ${
                                    isActive
                                        ? 'bg-gray-900 text-white shadow-sm'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`
                            }
                        >
                            {icon}
                            <span className="hidden sm:inline">{label}</span>
                        </NavLink>
                    ))}
                </nav>

                {/* Right */}
                <div className="flex items-center gap-2 shrink-0">
                    <div className="hidden sm:flex items-center gap-1 bg-orange-50 border border-orange-100 text-orange-600 px-3 py-1.5 rounded-full text-xs font-semibold">
                        🔥 <span>{STREAK} days</span>
                    </div>
                    <button
                        onClick={logout}
                        className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm hover:bg-orange-500 transition-colors cursor-pointer"
                        title="Log out"
                    >
                        M
                    </button>
                </div>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    );
}
