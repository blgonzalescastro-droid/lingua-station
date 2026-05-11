import { Link } from "react-router";
import { useAuth } from "../../features/auth/hooks/use-auth";

export function Header() {
    const { isAuthenticated, logout } = useAuth();

    return (
        <header className="bg-white border-b border-gray-100 px-4 sm:px-8 h-14 flex items-center justify-between sticky top-0 z-10">
            <Link to="/" className="flex items-center gap-2">
                <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-xs">L</span>
                </div>
                <span className="font-bold text-gray-900 text-sm">Lingua Station</span>
            </Link>

            <nav className="hidden md:flex items-center gap-7">
                <a href="#features" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">How it works</a>
                <a href="#testimonials" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Testimonials</a>
                <a href="#contact" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Contact</a>
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
                {isAuthenticated ? (
                    <>
                        <Link to="/dashboard" className="hidden sm:block text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                            Dashboard
                        </Link>
                        <button
                            onClick={logout}
                            className="bg-gray-900 hover:bg-gray-800 text-white px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
                        >
                            Log Out
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="hidden sm:block text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                            Sign in
                        </Link>
                        <Link
                            to="/register"
                            className="bg-gray-900 hover:bg-gray-800 text-white px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap"
                        >
                            Start free →
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
}
