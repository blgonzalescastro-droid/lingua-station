import { Link } from "react-router";
import { useAuth } from "../../features/auth/hooks/use-auth";

export function Hero() {
    const { isAuthenticated } = useAuth();

    return (
        <section className="bg-linear-to-r from-blue-500 to-purple-600 text-white py-20 text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold mb-4">Learn Languages Naturally</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Master new languages through immersive lessons, smart review, and real progress tracking.
                </p>
                <Link
                    to={isAuthenticated ? "/dashboard" : "/login"}
                    className="bg-white text-blue-500 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100"
                >
                    Get Started
                </Link>
            </div>
        </section>
    );
}
