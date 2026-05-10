import { createBrowserRouter } from "react-router";

//Layout
import { DashboardPage } from "../common/layouts/DashboardPage";
import { LandingPage } from "../common/layouts/LandingPage";
import { LoginPage } from "../features/auth/pages/login";
import { ProtectedRoute } from "../features/auth/components/protected-route";

//Features

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <LandingPage />,
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
        {
            Component: ProtectedRoute,
            children: [
                {
                    path: "/dashboard",
                    element: <DashboardPage />,
                }
            ]
        }

    ]
)