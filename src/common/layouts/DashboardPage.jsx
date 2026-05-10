import { Outlet, Link, NavLink } from "react-router";

export function DashboardPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-gray-900 text-white">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center m-4">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                        </div>
                        <h1 className="font-bebas text-4xl p-4">LINGUA STATION</h1>
                    </div>

                    <nav className="flex space-x-1 p-4 items-center">
                        <NavLink
                            to="/dashboard"
                            end
                            className={({ isActive }) =>
                                `px-3 py-2 rounded text-sm transition-colors ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/dashboard/dictionary"
                            className={({ isActive }) =>
                                `px-3 py-2 rounded text-sm transition-colors ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
                            }
                        >
                            Dictionary
                        </NavLink>
                        <NavLink
                            to="/dashboard/news"
                            className={({ isActive }) =>
                                `px-3 py-2 rounded text-sm transition-colors ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
                            }
                        >
                            News
                        </NavLink>
                        <NavLink
                            to="/dashboard/ted"
                            className={({ isActive }) =>
                                `px-3 py-2 rounded text-sm transition-colors ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
                            }
                        >
                            TED Talks
                        </NavLink>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded text-sm">Profile</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded text-sm">Settings</a>
                    </nav>
                </div>
            </header>

            <Outlet />
        </div>
    );
}
