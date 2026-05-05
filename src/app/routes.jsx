import { createBrowserRouter } from "react-router";

//Layout
import { DashboardLayout } from "../common/layouts/dashboard-layout";
//Features

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <DashboardLayout />,
        }
           
    ]
)