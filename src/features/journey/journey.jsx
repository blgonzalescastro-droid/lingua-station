import { useState } from 'react';

export function JourneyPage() {
    const [journey, setJourney] = useState([]);

    return (
        <div className="container border border-yellow-300 rounded-lg bg-gradient-to-r from-yellow-400 to-amber-500 p-10">
            <div className="flex justify-around mb-6">
                <div className="flex flex-col items-center ">
                    <h2 className="text-2xl font-bold mb-4">Your Learning Journey</h2>
                    <p className="text-gray-700">Track your progress and achievements as you learn a new language.</p>
                </div>
                <div className="flex flex-col items-center mb-6">
                    <img src="src/assets/animation.png" alt="Learning Journey" className="w-40 h-40 mb-4" />
                </div>
            </div>
        </div>
    );
}