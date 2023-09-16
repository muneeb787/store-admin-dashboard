
import { DashboardRoutes } from "../modules/dashboard/router.jsx"
import Profile from "../pages-copy/Profile.jsx"
export const LayoutRoutes = [
    {
        title: "demo",
        path: "/demo",
        element: <Profile />
    },
    ...DashboardRoutes
]