import { createContext, useContext, useState } from 'react';
import { loginService, registerService } from '../services/auth-services';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [token, setTokenState] = useState(
        () => localStorage.getItem('auth-token')
    );

    const login = async ({ username, password }) => {
        const t = await loginService({ username, password });
        setTokenState(t);
        localStorage.setItem('auth-token', t);
    };

    const register = async ({ username, email, password }) => {
        const t = await registerService({ username, email, password });
        setTokenState(t);
        localStorage.setItem('auth-token', t);
    };

    const logout = () => {
        setTokenState(null);
        localStorage.removeItem('auth-token');
        localStorage.removeItem('auth-storage'); // clear old Zustand key if present
    };

    return (
        <AuthContext.Provider value={{ token, login, register, logout, isAuthenticated: !!token }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuthContext must be used within AuthProvider');
    return ctx;
}
