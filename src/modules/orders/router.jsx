import OrderIndex from "./pages"
import UpdateOrder from "./pages/updateOrder";
import ViewOrder from "./pages/viewOrder";
const orderRouters = [
    {
        title: "All Orders",
        path: "order/index",
        element: < OrderIndex/>
    },
    {
        title: "Update Order",
        path: "order/update",
        element: < UpdateOrder/>
    }, 
    {
        title: "View Order",
        path: "order/view",
        element: < ViewOrder/>
    }
]
export default orderRouters;
