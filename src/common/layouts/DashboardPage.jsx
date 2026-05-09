import { Outlet } from "react-router";
import { JourneyPage } from "../../features/journey/journey";

export function DashboardPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-gray-900 text-white">
                <div className="flex justify-between">
                    <div className="flex justify-around">
                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center m-4">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                        </div>

                        <h1 className="font-bebas text-4xl p-4">LINGUA STATION</h1>
                    </div>


                    <nav className="flex space-x-4 p-4">
                        <a href="#" className="hover:bg-gray-200 p-2">Home</a>
                        <a href="#" className="hover:bg-gray-200 p-2">Review</a>
                        <a href="#" className="hover:bg-gray-200 p-2">Profile</a>
                        <a href="#" className="hover:bg-gray-200 p-2">Settings</a>
                    </nav>
                </div>

            </header>

            <main className="p-4">
                <h2 className="text-2xl font-bold mb-4">Welcome to your dashboard!</h2>
                <p className="text-gray-700">Here you can manage your account, review your progress, and access all the features of Lingua Station.</p>
            </main>
            <JourneyPage />

            <div className="p-4">
                <div className="text-gray-500 text-sm">© 2024 Lingua Station. All rights reserved.</div>
            </div>
            <Outlet />
        </div>


    )
}