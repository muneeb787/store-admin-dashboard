import ViewIndex from './pages/Index.jsx';
import Create from './pages/Create.jsx';
import Update from './pages/Update.jsx';


export const UserRoutes = [
  {
    title: 'All Users',
    path: '/users',
    element: <ViewIndex />,
  },
  {
    title: 'Create User',
    path: '/user',
    element: <Create />,
  },
  {
    title: 'Update User',
    path: '/user/:id',
    element: <Update />,
  },
];

export default UserRoutes;
