import Create from "./pages/create.jsx";
import ProductList from "./pages/index.jsx";
import ProductView from "./pages/view.jsx";
import ProductUpdate from "./pages/update.jsx";

 const ProdutRoutes=[
  {
    path:"/product/create",
    element:<Create/>
  },
  {
    path:"/product/index",
    element:<ProductList/>
  },
  {
    path:"/product/view/:id",
    element:<ProductView/>
  },
  {
    path:"/product/update/:id",
    element:<ProductUpdate/>
  },
  

]
export default ProdutRoutes;
