import Category from "./pages/create.jsx";
import CategoryList from "./pages/index.jsx";

 const CategoryRoutes=[
  {
    title:"Create",
    path:"/category/create",
    element:<Category/>
  },
  {
    title:"Index",
    path:"/category/index",
    element:<CategoryList/>

  }
]
export default CategoryRoutes;