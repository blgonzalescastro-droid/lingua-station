import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../hooks/use-auth';

export function RegisterPage() {
    const { register } = useAuth();
    const navigate = useNavigate();

    const [form, setForm] = useState({ username: '', email: '', password: '', confirm: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (form.password !== form.confirm) {
            setError('Passwords do not match.');
            return;
        }

        setLoading(true);
        try {
            await register({ username: form.username, email: form.email, password: form.password });
            navigate('/dashboard');
        } catch {
            setError('Could not create account. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-600 via-blue-500 to-indigo-600 flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">

                {/* Logo */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                    </div>
                    <span className="font-bold text-gray-800 text-lg">Lingua Station</span>
                </div>

                <h1 className="text-2xl font-bold text-gray-800 mb-1">Create your account</h1>
                <p className="text-gray-400 text-sm mb-6">Start learning English today — it's free.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="reg-username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                        <input
                            id="reg-username"
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            required
                            placeholder="johndoe"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="reg-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            id="reg-email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="you@email.com"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="reg-password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            id="reg-password"
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            placeholder="••••••••"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="reg-confirm" className="block text-sm font-medium text-gray-700 mb-1">Confirm password</label>
                        <input
                            id="reg-confirm"
                            type="password"
                            name="confirm"
                            value={form.confirm}
                            onChange={handleChange}
                            required
                            placeholder="••••••••"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors disabled:opacity-50 cursor-pointer"
                    >
                        {loading ? 'Creating account…' : 'Sign Up'}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-400 mt-6">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-600 font-medium hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
}
