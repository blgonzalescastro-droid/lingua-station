import { useState } from 'react';

export function JourneyPage() {
    const [journey, setJourney] = useState([]);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Your Learning Journey</h2>
            <p className="text-gray-700">Track your progress and achievements as you learn a new language.</p>
        </div>
    );
}