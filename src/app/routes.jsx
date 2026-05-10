import { createBrowserRouter } from "react-router";

import { DashboardPage } from "../common/layouts/DashboardPage";
import { LandingPage } from "../common/layouts/LandingPage";
import { LoginPage } from "../features/auth/pages/login";
import { RegisterPage } from "../features/auth/pages/register";
import { ProtectedRoute } from "../features/auth/components/protected-route";
import { DashboardHome } from "../features/dashboard/pages/DashboardHome";
import { DictionaryPage } from "../features/dictionary/pages/DictionaryPage";
import { NewsPage } from "../features/news/pages/NewsPage";
import { TedPage } from "../features/ted/pages/TedPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        Component: ProtectedRoute,
        children: [
            {
                path: "/dashboard",
                element: <DashboardPage />,
                children: [
                    {
                        index: true,
                        element: <DashboardHome />,
                    },
                    {
                        path: "dictionary",
                        element: <DictionaryPage />,
                    },
                    {
                        path: "news",
                        element: <NewsPage />,
                    },
                    {
                        path: "ted",
                        element: <TedPage />,
                    },
                ],
            },
        ],
    },
]);
