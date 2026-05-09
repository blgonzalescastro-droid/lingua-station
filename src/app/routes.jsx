import { createBrowserRouter } from "react-router";

//Layout
import { DashboardPage } from "../common/layouts/DashboardPage";
import { LandingPage } from "../common/layouts/LandingPage";

//Features

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <LandingPage />,
        },
        {
            path: "/dashboard",
            element: <DashboardPage />,
        }

    ]
)