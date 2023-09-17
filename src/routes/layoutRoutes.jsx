
import Dashboard from "../modules/dashboard/pages/dashboard.jsx"
import { DashboardRoutes } from "../modules/dashboard/router.jsx"
import Profile from "../pages-copy/Profile.jsx"
import ProdutRoutes from "../modules/products/router.jsx"
import CategoryRoutes from "../modules/category/router.jsx"
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
    ...DashboardRoutes,
    ...ProdutRoutes,
    ...CategoryRoutes,
]