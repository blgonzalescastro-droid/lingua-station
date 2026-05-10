import { RouterProvider } from "react-router";
import { router } from "./routes";
import { AuthProvider } from "../features/auth/context/AuthContext";

export function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}
