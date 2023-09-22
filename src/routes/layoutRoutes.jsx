import Dashboard from '../modules/dashboard/pages/dashboard.jsx';
import UserRoutes from '../modules/users/router.jsx';
import DashboardRoutes from '../modules/dashboard/router.jsx';
import Profile from '../pages-copy/Profile.jsx';
import ProductRoutes from "../modules/products/router.jsx"
import CategoryRoutes from "../modules/category/router.jsx"

export const LayoutRoutes = [
  {
    title: 'demo',
    path: '/demo',
    element: <Profile />,
  },
  {
    title: 'Dashboard',
    path: '/',
    element: <Dashboard />,
  },
  ...DashboardRoutes,
  ...ProductRoutes,
  ...CategoryRoutes,
  ...UserRoutes
]


