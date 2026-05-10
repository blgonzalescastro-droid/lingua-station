import { JourneyPage } from "../../journey/journey";

export function DashboardHome() {
    return (
        <>
            <main className="p-4">
                <h2 className="text-2xl font-bold mb-4">Welcome to your dashboard!</h2>
                <p className="text-gray-700">Here you can manage your account, review your progress, and access all the features of Lingua Station.</p>
            </main>
            <JourneyPage />
            <div className="p-4">
                <div className="text-gray-500 text-sm">© 2024 Lingua Station. All rights reserved.</div>
            </div>
        </>
    );
}
