import { useState } from "react";

export function Header() {
    return (
        <header className="bg-linear-to-r from-blue-500 to-purple-600 text-white p-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold">Lingua Station</h1>
            <nav className="space-x-4">
                <a href="#" className="hover:bg-white hover:text-blue-500 px-3 py-2 rounded">Home</a>
                <a href="#" className="hover:bg-white hover:text-blue-500 px-3 py-2 rounded">Features</a>
                <a href="#" className="hover:bg-white hover:text-blue-500 px-3 py-2 rounded">Testimonials</a>
                <a href="#" className="hover:bg-white hover:text-blue-500 px-3 py-2 rounded">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
                <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200">Sign Up</button>
                <button className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-blue-500">Log In</button>
            </div>
        </header>
    );
}