import { useState } from "react";

export function Features() {
    const [features] = useState([
        {
            title: "Feature 1",
            description: "Description for Feature 1"
        },
        {
            title: "Feature 2",
            description: "Description for Feature 2"
        },
        {
            title: "Feature 3",
            description: "Description for Feature 3"
        }
    ]);

    return (
        <section className="py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}