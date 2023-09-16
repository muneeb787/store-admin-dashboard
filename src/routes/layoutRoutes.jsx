
import Dashboard from "../modules/dashboard/pages/dashboard.jsx"
import { DashboardRoutes } from "../modules/dashboard/router.jsx"
import Profile from "../pages-copy/Profile.jsx"
export const LayoutRoutes = [
    {
        title: "demo",
        path: "/demo",
        element: <Profile />
    },
    {
        title: "Dashboard",
        path: "/",
        element: <Dashboard />
    },
    ...DashboardRoutes
]