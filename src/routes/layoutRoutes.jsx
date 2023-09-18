
import Dashboard from "../modules/dashboard/pages/dashboard.jsx"
import { DashboardRoutes } from "../modules/dashboard/router.jsx"
import Profile from "../pages-copy/Profile.jsx"
import ProdutRoutes from "../modules/products/router.jsx"
import UploadTest from "../modules/testUpload/testUpload.jsx"
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
    {
        title: "Upload",
        path: "/upload",
        element: <UploadTest />
    },
    ...DashboardRoutes,
    ...ProdutRoutes,
    ...CategoryRoutes,
]