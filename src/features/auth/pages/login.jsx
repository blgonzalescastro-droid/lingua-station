import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import { useAuth } from '../hooks/use-auth';

export function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login({ username: form.username, password: form.password });
            navigate('/');
        } catch (error) {
            alert('Username or password are incorrect');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-md"
        >
            <div className='flex flex-col justify-center items-center gap-3'>
                <h1>Login</h1>

                <input
                    type='text'
                    placeholder='username'
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                    className='w-2xs focus:outline-white/50 focus:outline-none px-4 border border-slate-700 rounded-lg'
                />

                <input
                    type='password'
                    placeholder='password'
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className='w-2xs focus:outline-white/50 focus:outline-none px-4 border border-slate-700 rounded-lg'
                />

                <button
                    className="px-3 py-2 bg-slate-900 text-white rounded-lg cursor-pointer"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    )
}